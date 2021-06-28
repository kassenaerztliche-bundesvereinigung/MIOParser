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

import * as t from "io-ts";
import { either } from "fp-ts/Either";
import ErrorMessage from "../ErrorMessage";
import { AnyType } from "../Interfaces";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export class MinArrayType extends t.Type<any> {
    readonly _tag = "MinArrayType";
    constructor(
        name: string,
        is: t.Is<t.TypeOf<AnyType>>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        encode: (a: any) => any,
        readonly codec: AnyType,
        readonly minLength: number
    ) {
        super(name, is, validate, encode);
    }
}

export function MinArray<C extends t.Mixed>(
    minLength: number,
    codec: C,
    name = `MinArray<${codec.name}>(${minLength})`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>> {
    const arr = t.array(codec);
    return new MinArrayType(
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
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                return len < min ? t.failure(u, c, message) : t.success<any>(tempArr);
            }),
        (a) => [...a],
        codec,
        minLength
    );
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export class MaxArrayType extends t.Type<any> {
    readonly _tag = "MaxArrayType";
    constructor(
        name: string,
        is: t.Is<t.TypeOf<AnyType>>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        encode: (a: any) => any,
        readonly codec: AnyType,
        readonly maxLength: number
    ) {
        super(name, is, validate, encode);
    }
}
export function MaxArray<C extends t.Mixed>(
    maxLength: number,
    codec: C,
    name = `MaxArray<${codec.name}>(${maxLength})`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>> {
    const arr = t.array(codec);
    return new MaxArrayType(
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
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                return len > max ? t.failure(u, c, message) : t.success<any>(tempArr);
            }),
        (a) => [...a],
        codec,
        maxLength
    );
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export class MinMaxArrayType extends t.Type<any> {
    readonly _tag = "MinMaxArrayType";
    constructor(
        name: string,
        is: t.Is<t.TypeOf<AnyType>>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        encode: (a: any) => any,
        readonly codec: AnyType,
        readonly minLength: number,
        readonly maxLength: number
    ) {
        super(name, is, validate, encode);
    }
}
export function MinMaxArray<C extends t.Mixed>(
    minLength: number,
    maxLength: number,
    codec: C,
    name = `MinMaxArray<${codec.name}>(${minLength}, ${maxLength})`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>> {
    const arr = t.array(codec);
    return new MinMaxArrayType(
        name,
        (u): u is Array<t.TypeOf<C>> => {
            return arr.is(u) && u.length <= maxLength && u.length >= minLength;
        },
        (u, c) =>
            either.chain(arr.validate(u, c), (s) => {
                const tempArr = s;
                const max = maxLength;
                const min = minLength;
                const len = tempArr.length;
                const maxError = ErrorMessage.MaxArray(max, len);
                const minError = ErrorMessage.MinArray(min, len);
                if (len > max && len < min)
                    return t.failure(u, c, `${maxError}, ${minError}`);
                else if (len > max) return t.failure(u, c, `${maxError}`);
                else if (len < min) return t.failure(u, c, `${minError}`);
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                else return t.success<any>(tempArr);
            }),
        (a) => [...a],
        codec,
        minLength,
        maxLength
    );
}

export default MinMaxArray;
