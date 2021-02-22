/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type*/

import * as t from "io-ts";
import { either, Either, isRight, left, right, Right } from "fp-ts/lib/Either";
import ErrorMessage from "./ErrorMessage";
import { EventEmitter } from "events";

class WarningEmitter extends EventEmitter {}

export const warningEmitter = new WarningEmitter();
export const EXTENSIBLE_WARNING = "ExtensibleWarning";

export const resolvePath = (object: any, path: string, defaultValue?: any) => {
    return path.split(".").reduce((o, p) => {
        if (o) {
            if (Object.keys(o).includes("0")) return o[0][p];
            else return o[p];
        } else return defaultValue;
    }, object);
};

export interface Req<Q extends t.Any> {
    codec: Q;
    occurrence: [string, string];
    sliceBy?: { path: string; value?: string };
}

export function Literal<V extends string | number | boolean>(
    literal: V,
    name = "LiteralCheck"
): t.Type<t.TypeOf<any>> {
    return new t.Type(
        name,
        (i): i is V => {
            return t.literal(literal).is(i);
        },
        (i, c) => {
            if (i === literal) {
                return t.success(i);
            } else {
                return t.failure(i, c, ErrorMessage.Literal(i, literal));
            }
        },
        t.identity
    );
}

export function ExtensibleCheck<C extends t.Any>(
    valueSet: C,
    name = `ReqArray<${valueSet.name}>`
): t.Type<t.TypeOf<C>> {
    return new t.Type(
        name,
        (i): i is string => typeof i === "string",
        (i, c) => {
            const valueSetResult = valueSet.decode(i);
            if (valueSetResult._tag === "Right" || !i) {
                return t.success(i);
            } else {
                // signify warning
                const warningPath: string[] = [];
                const resourcePath: string[] = [];
                Array.from(c.entries()).forEach((e) => {
                    if (!(e[1].key === "0" || e[1].key === "1")) {
                        if (e[1].key) warningPath.push(e[1].key);
                        if (!e[1].type.name.includes("<"))
                            resourcePath.push(e[1].type.name);
                    }
                });
                const resource = resourcePath.pop();
                warningEmitter.emit(
                    EXTENSIBLE_WARNING,
                    ErrorMessage.Extensible(valueSet.name, i),
                    warningPath.join("."),
                    resource,
                    i
                );
                return t.success(i);
            }
        },
        (a) => t.identity(a)
    );
}

export function ReqArray<C extends t.Any, D extends t.Any>(
    codec: C,
    types: Req<D>[],
    totalOccurrence: [string, string],
    name = `ReqArray<${codec.name}>`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
    const arr = t.array(codec);
    return new t.Type(
        name,
        (u): u is Array<t.TypeOf<C>> => arr.is(u),
        (u, c) =>
            either.chain(arr.validate(u, c), (s) => {
                // check if total count is correct
                const totalMin = parseInt(totalOccurrence[0]);
                const totalMax =
                    totalOccurrence[1] === "*"
                        ? Number.MAX_SAFE_INTEGER
                        : parseInt(totalOccurrence[1]);
                if (s.length < totalMin)
                    return t.failure(u, c, ErrorMessage.MinArray(totalMin, s.length));
                if (s.length > totalMax)
                    return t.failure(u, c, ErrorMessage.MaxArray(totalMax, s.length));

                let tempArr = s;
                const checkArr = s.slice();
                let message = "";
                const wrongCodec: string[] = [];

                const firstCheckCodecs = types.filter(
                    (arg) => arg.sliceBy && arg.sliceBy.value
                );
                const secondCheckCodecs = types.filter(
                    (arg) => !firstCheckCodecs.includes(arg)
                );

                const codecArray = [firstCheckCodecs, secondCheckCodecs];
                const result: Req<D>[] = [];
                codecArray.forEach((codecTypes) => {
                    result.push(
                        ...codecTypes.filter((arg) => {
                            const min = parseInt(arg.occurrence[0]);
                            const tempMax = arg.occurrence[1];
                            const max =
                                tempMax === "*"
                                    ? Number.MAX_SAFE_INTEGER
                                    : parseInt(tempMax);

                            const occurenceEntries = tempArr.filter((a) => {
                                const decodeResult =
                                    arg.codec.validate(a, c)._tag === "Right";
                                if (arg.sliceBy) {
                                    const value = resolvePath(a, arg.sliceBy.path);
                                    if (value === arg.sliceBy.value) {
                                        if (!decodeResult) {
                                            wrongCodec.push(
                                                ErrorMessage.Slice(arg.codec.name)
                                            );
                                        }
                                        return decodeResult;
                                    } else return false;
                                } else return decodeResult;
                            });
                            const occurence = occurenceEntries.length;
                            tempArr = tempArr.filter(
                                (a) => !occurenceEntries.includes(a)
                            );
                            return min <= occurence && occurence <= max;
                        })
                    );
                });

                if (wrongCodec.length) {
                    return t.failure(u, c, wrongCodec.join("\n"));
                }

                if (result.length < types.length) {
                    const errorResults = types.filter((arg) => !result.includes(arg));
                    message = errorResults
                        .map((arg) => {
                            const occurrence = checkArr.filter((a) => arg.codec.is(a))
                                .length;
                            return ErrorMessage.Codec(
                                arg.codec.name,
                                arg.occurrence[0],
                                arg.occurrence[1],
                                occurrence
                            );
                        })
                        .join("\n");

                    return t.failure(u, c, message);
                } else {
                    return t.success(checkArr);
                }
            }),
        (a) => [...a]
    );
}

export function MinArray<C extends t.Mixed>(
    minLength: number,
    codec: C,
    name = `MinArray<${codec.name}>(${minLength})`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
    const arr = t.array(codec);
    return new t.Type(
        name,
        (u): u is Array<t.TypeOf<C>> => {
            return arr.is(u) && u.length >= minLength;
        },
        (u, c) =>
            either.chain(arr.validate(u, c), (s) => {
                const tempArr = s;
                const min = minLength;
                const len = tempArr.length;
                const message = ErrorMessage.MinArray(min, len);
                return len < min ? t.failure(u, c, message) : t.success(tempArr);
            }),
        (a) => [...a]
    );
}

export function MaxArray<C extends t.Mixed>(
    maxLength: number,
    codec: C,
    name = `MaxArray<${codec.name}>(${maxLength})`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
    const arr = t.array(codec);
    return new t.Type(
        name,
        (u): u is Array<t.TypeOf<C>> => {
            return arr.is(u) && u.length <= maxLength;
        },
        (u, c) =>
            either.chain(arr.validate(u, c), (s) => {
                const tempArr = s;
                const max = maxLength;
                const len = tempArr.length;
                const message = ErrorMessage.MaxArray(max, len);
                return len > max ? t.failure(u, c, message) : t.success(tempArr);
            }),
        (a) => [...a]
    );
}

export const MinMaxArray = <C extends t.Mixed>(min: number, max: number, a: C) =>
    t.intersection([MinArray(min, a), MaxArray(max, a)]);

const getIsCodec = <T extends t.Any>(tag: string) => (codec: t.Any): codec is T =>
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

const stripKeys = <T = any>(o: T, props: t.Props): Either<Array<string>, T> => {
    const keys = Object.getOwnPropertyNames(o);
    const propsKeys = Object.getOwnPropertyNames(props);
    // allows extension fields to be present
    propsKeys.push("extension");

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
        public readonly type: C
    ) {
        super(name, is, validate, encode);
    }
}

export const Excess = <C extends t.HasProps>(
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
        (a) => codec.encode((stripKeys(a, props) as Right<any>).right),
        codec
    );
};
