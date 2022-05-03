/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import * as t from "io-ts";
import { Either, either, isRight, left, right, Right } from "fp-ts/Either";
import ErrorMessage from "../ErrorMessage";
import { AnyType } from "../Interfaces";

const getIsCodec =
    <T extends t.Any>(tag: string) =>
    (codec: t.Any): codec is T =>
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (codec as any)._tag === tag;
const isInterfaceCodec = getIsCodec<t.InterfaceType<t.Props>>("InterfaceType");
const isPartialCodec = getIsCodec<t.PartialType<t.Props>>("PartialType");

const getProps = (codec: t.HasProps): t.Props => {
    switch (codec._tag) {
        case "RefinementType":
        case "ReadonlyType":
            return getProps(codec.type);
        case "InterfaceType":
        case "StrictType":
        case "PartialType":
            return codec.props;
        case "IntersectionType":
            return codec.types.reduce<t.Props>(
                (props, type) => Object.assign(props, getProps(type)),
                {}
            );
    }
};

const getNameFromProps = (props: t.Props): string =>
    Object.keys(props)
        .map((k) => `${k}: ${props[k].name}`)
        .join(", ");

const getPartialTypeName = (inner: string): string => `Partial<${inner}>`;

const getExcessTypeName = (codec: t.Any): string => {
    if (isInterfaceCodec(codec)) {
        return `{| ${getNameFromProps(codec.props)} |}`;
    }
    if (isPartialCodec(codec)) {
        return getPartialTypeName(`{| ${getNameFromProps(codec.props)} |}`);
    }
    return `Excess<${codec.name}>`;
};

const stripKeys = <T = AnyType>(o: T, props: t.Props): Either<string[], T> => {
    const keys = Object.getOwnPropertyNames(o);
    const propsKeys = Object.getOwnPropertyNames(props);
    // allows extension and text fields to be present
    propsKeys.push("extension");
    propsKeys.push("text");
    propsKeys.push("fhir_comments");

    propsKeys.forEach((pk) => {
        const index = keys.indexOf(pk);
        if (index !== -1) {
            keys.splice(index, 1);
        }
    });
    // allows for fields starting with "_"
    const keysLength = keys.filter((k) => !k.startsWith("_")).length;
    return keysLength ? left(keys) : right(o);
};

export class ExcessType<C extends t.Any, A = C["_A"], O = A, I = unknown> extends t.Type<
    A,
    O,
    I
> {
    public readonly _tag: "ExcessType" = "ExcessType";

    public constructor(
        name: string,
        is: ExcessType<C, A, O, I>["is"],
        validate: ExcessType<C, A, O, I>["validate"],
        encode: ExcessType<C, A, O, I>["encode"],
        readonly type: C
    ) {
        super(name, is, validate, encode);
    }
}

const Excess = <C extends t.HasProps>(
    codec: C,
    name: string = getExcessTypeName(codec)
): ExcessType<C> => {
    const props: t.Props = getProps(codec);
    return new ExcessType<C>(
        name,
        (u): u is C => isRight(stripKeys(u, props)) && codec.is(u),
        (u, c) =>
            either.chain(t.UnknownRecord.validate(u, c), () =>
                either.chain(codec.validate(u, c), (a) =>
                    either.mapLeft(stripKeys<C>(a, props), (keys) =>
                        keys.map((k) => ({
                            value: a[k],
                            context: c,
                            message: ErrorMessage.Excess(k)
                        }))
                    )
                )
            ),
        (a) => codec.encode((stripKeys(a, props) as Right<AnyType>).right),
        codec
    );
};

export default Excess;
