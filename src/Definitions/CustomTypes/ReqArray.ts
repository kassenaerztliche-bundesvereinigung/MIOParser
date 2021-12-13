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
import ErrorMessage from "../ErrorMessage";
import { resolvePath } from "./index";
import { AnyType } from "../Interfaces";
import { ValidationError } from "io-ts";

export interface Req<Q extends t.Any> {
    codec: Q;
    occurrence: [string, string];
    sliceBy?: { path: string; value?: string };
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export class ReqArrayType extends t.Type<any> {
    readonly _tag = "ReqArrayType";

    constructor(
        name: string,
        is: t.Is<t.TypeOf<AnyType>>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        encode: (a: any) => any,
        readonly codec: AnyType,
        readonly reqTypes: Req<AnyType>[],
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
): t.Type<Array<t.TypeOf<C>>, Array<t.OutputOf<C>>> {
    const arr = t.array(codec);
    return new ReqArrayType(
        name,
        (u): u is Array<t.TypeOf<C>> => arr.is(u),
        (instanceToCheck: any, c) => {
            if (!instanceToCheck)
                return t.failure(instanceToCheck, c, ErrorMessage.ObjectNotPresent());
            else {
                // check if total count is correct
                const totalMin = parseInt(totalOccurrence[0]);
                const totalMax =
                    totalOccurrence[1] === "*"
                        ? Number.MAX_SAFE_INTEGER
                        : parseInt(totalOccurrence[1]);
                if (instanceToCheck.length < totalMin)
                    return t.failure(
                        instanceToCheck,
                        c,
                        ErrorMessage.MinArray(totalMin, instanceToCheck.length)
                    );
                if (instanceToCheck.length > totalMax)
                    return t.failure(
                        instanceToCheck,
                        c,
                        ErrorMessage.MaxArray(totalMax, instanceToCheck.length)
                    );

                // check if validates correctly
                let tempInstanceToCheck = instanceToCheck.slice();
                let message = "";

                const firstCheckCodecs = types.filter(
                    (arg) => arg.sliceBy && arg.sliceBy.value
                );
                const secondCheckCodecs = types.filter(
                    (arg) => !firstCheckCodecs.includes(arg)
                );

                const codecArrayToCheck = [...firstCheckCodecs, ...secondCheckCodecs];
                const result: Req<D>[] = [];
                const wrongCodecs: ValidationError[] = [];

                // check for slices that do not have a corresponding checkSlice
                tempInstanceToCheck.forEach((instance: any) => {
                    const slicedBy = codecArrayToCheck[0].sliceBy;
                    const sliceValuePath = slicedBy?.path;
                    const sliceValue =
                        typeof slicedBy?.value === "string"
                            ? `"${slicedBy?.value}"`
                            : slicedBy?.value;
                    const actualValue = resolvePath(instance, sliceValuePath);

                    const hasCorrespondingCheckSlice = codecArrayToCheck.some(
                        (codecToCheck) => {
                            const value = codecToCheck.sliceBy?.value;
                            if (value && actualValue) {
                                return (
                                    value.replace(/\|.*/, "") ===
                                    actualValue.replace(/\|.*/, "")
                                );
                            } else return !value;
                        }
                    );
                    if (!hasCorrespondingCheckSlice)
                        wrongCodecs.push({
                            context: c,
                            message: ErrorMessage.NoSectionForValue(
                                sliceValue,
                                sliceValuePath
                            ),
                            value: actualValue
                        });
                });

                // check each codec if the requirements are fulfilled
                const validCodecs = codecArrayToCheck.filter((codecToCheck) => {
                    const min = parseInt(codecToCheck.occurrence[0]);
                    const max =
                        codecToCheck.occurrence[1] === "*"
                            ? Number.MAX_SAFE_INTEGER
                            : parseInt(codecToCheck.occurrence[1]);

                    const occurrenceEntries = tempInstanceToCheck.filter(
                        (instance: any) => {
                            const value = resolvePath(
                                instance,
                                codecToCheck.sliceBy?.path
                            );
                            if (value === codecToCheck.sliceBy?.value) {
                                const decoderResult = codecToCheck.codec.validate(
                                    instance,
                                    c
                                );
                                if (decoderResult._tag !== "Right") {
                                    decoderResult.left.forEach((left) =>
                                        wrongCodecs.push({
                                            context: c,
                                            message: ErrorMessage.Slice(
                                                codecToCheck.codec.name,
                                                left.message
                                            ),
                                            value: left.value
                                        })
                                    );
                                } else {
                                    return true;
                                }
                            } else {
                                return false;
                            }
                        }
                    );
                    const occurrence = occurrenceEntries.length;
                    tempInstanceToCheck = tempInstanceToCheck.filter(
                        (a: any) => !occurrenceEntries.includes(a)
                    );
                    return min <= occurrence && occurrence <= max;
                });

                result.push(...validCodecs);

                if (wrongCodecs.length) {
                    return t.failures(wrongCodecs);
                }

                if (result.length < types.length) {
                    const errorResults = types.filter((arg) => !result.includes(arg));
                    message = errorResults
                        .map((arg) => {
                            const occurrence = instanceToCheck.filter((a: any) =>
                                arg.codec.is(a)
                            ).length;
                            return ErrorMessage.Codec(
                                arg.codec.name,
                                arg.occurrence[0],
                                arg.occurrence[1],
                                occurrence
                            );
                        })
                        .join("\n");

                    wrongCodecs.push({
                        context: c,
                        message: message,
                        value: instanceToCheck
                    });

                    return t.failure(instanceToCheck, c, message);
                } else {
                    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                    return t.success<any>(instanceToCheck);
                }
            }
        },
        (a) => [...a],
        codec,
        types,
        totalOccurrence
    );
}
