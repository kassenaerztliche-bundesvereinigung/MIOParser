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
import { resolvePath } from "./index";

export interface Req<Q extends t.Any> {
    codec: Q;
    occurrence: [string, string];
    sliceBy?: { path: string; value?: string };
}

export class ReqArrayType extends t.Type<any> {
    readonly _tag = "ReqArrayType";
    constructor(
        name: string,
        is: t.Is<any>,
        validate: (i: unknown, context: t.Context) => t.Validation<any>,
        encode: (a: any) => any,
        readonly codec: any,
        readonly reqTypes: Req<any>[],
        readonly totalOccurrence: [string, string]
    ) {
        super(name, is, validate, encode);
    }
}

export default function ReqArray<C extends t.Any, D extends t.Any>(
    codec: C,
    types: Req<D>[],
    totalOccurrence: [string, string],
    name = `ReqArray<${codec.name}>`
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> {
    const arr = t.array(codec);
    return new ReqArrayType(
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
        (a) => [...a],
        codec,
        types,
        totalOccurrence
    );
}
