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

import ErrorMessage from "../ErrorMessage";
import { AnyType } from "../Interfaces";
import { ValidationError } from "io-ts";
import { checkForCorrespondingSlice } from "./CorrespondingSliceCheck";
import { checkIfCodecIsValid } from "./CheckCodecWithInstance";

export interface Req<Q extends t.Any> {
    codec: Q;
    occurrence: [string, string];
    sliceBy?: { path?: string; value?: string | any; pattern?: any; exists?: string[] };
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

function equalObject(obj1: any, obj2: any): boolean {
    return Object.keys(obj1).every((codecKey) => {
        if (typeof obj1[codecKey] === "object" && typeof obj2[codecKey] === "object") {
            return equalObject(obj1[codecKey], obj2[codecKey]);
        }
        return obj1[codecKey] === obj2[codecKey];
    });
}

export function sliceByEqual(
    codecSliceBy: any,
    instanceSliceBy: any,
    callback?: (x: string, y: string) => void
) {
    const slicedByKey = codecSliceBy.pattern === "$this" ? "" : codecSliceBy.pattern;
    const instanceValue =
        slicedByKey === "" ? instanceSliceBy : instanceSliceBy[slicedByKey];
    if (instanceValue && codecSliceBy.value) {
        const equalObjectVar = equalObject(codecSliceBy.value, instanceValue);
        return equalObjectVar;
    }
    return Object.keys(instanceSliceBy.pattern).some((instanceSliceByKey: string) => {
        if (callback) callback(slicedByKey, instanceSliceByKey);
        if (codecSliceBy.value && typeof codecSliceBy.value === "object") {
            return codecSliceBy.value === instanceSliceBy.value;
        }
        return (
            codecSliceBy.pattern[slicedByKey] ===
            instanceSliceBy.pattern[instanceSliceByKey]
        );
    });
}

function getTotalMinMax(totalOccurrence: [string, string]) {
    const totalMin = parseInt(totalOccurrence[0]);
    const totalMax =
        totalOccurrence[1] === "*"
            ? Number.MAX_SAFE_INTEGER
            : parseInt(totalOccurrence[1]);
    return { totalMin, totalMax };
}

function checkTotalCount(
    totalOccurrence: [string, string],
    instanceCount: number
): string | undefined {
    const { totalMin, totalMax } = getTotalMinMax(totalOccurrence);
    if (instanceCount < totalMin) return ErrorMessage.MinArray(totalMin, instanceCount);
    if (instanceCount > totalMax) return ErrorMessage.MaxArray(totalMin, instanceCount);

    return undefined;
}

/**
 * Checks whether the field hosts the required Codecs and also checks their cardinality
 * @param codec
 * @param types
 * @param totalOccurrence
 * @param name
 * @constructor
 */
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
        (instancesToCheck: any, c) => {
            // return failure if there is no instance to check for that codec
            if (!instancesToCheck)
                return t.failure(instancesToCheck, c, ErrorMessage.ObjectNotPresent());
            else {
                // 1. check if total count is correct
                const totalCountCheckMessage = checkTotalCount(
                    totalOccurrence,
                    instancesToCheck.length
                );
                if (totalCountCheckMessage)
                    return t.failure(instancesToCheck, c, totalCountCheckMessage);

                // Copy of the instanceToCheck
                const instancesToCheckCopy = instancesToCheck.slice();
                let message = "";

                // prioritize Codecs that contain arguments
                const firstCheckCodecs = types.filter(
                    (arg) => arg.sliceBy && (arg.sliceBy.value || arg.sliceBy.exists)
                );
                const secondCheckCodecs = types.filter(
                    (arg) => !firstCheckCodecs.includes(arg)
                );

                const codecArrayToCheck = [...firstCheckCodecs, ...secondCheckCodecs];
                const result: Req<D>[] = [];
                const wrongCodecs: ValidationError[] = [];

                // 2. checks all instances if for each codec there is a corresponding instance
                // If an instance cannot be linked to a codec it is invalid
                instancesToCheckCopy.forEach((instanceToCheck: any) => {
                    const checkMessageObject = checkForCorrespondingSlice<D>(
                        instanceToCheck,
                        codecArrayToCheck
                    );

                    if (checkMessageObject) {
                        wrongCodecs.push({
                            context: c,
                            message: checkMessageObject.message,
                            value: checkMessageObject.value
                        });
                    }
                });

                // 3. iterate through every codec and see if it occurs as required
                const validCodecs = codecArrayToCheck.filter((codecToCheck) => {
                    const codecWrongCodecs: { message: string; value: any }[] | number =
                        checkIfCodecIsValid<D>(
                            codecToCheck,
                            instancesToCheckCopy,
                            codecArrayToCheck
                        );

                    if (typeof codecWrongCodecs === "number") return codecWrongCodecs > 0;

                    if (codecWrongCodecs.length) {
                        codecWrongCodecs.forEach((wrongCodec) => {
                            wrongCodecs.push({
                                context: c,
                                message: wrongCodec.message,
                                value: wrongCodec.value
                            });
                        });
                        return false;
                    }
                    return true;
                });

                result.push(...validCodecs);

                if (wrongCodecs.length) {
                    return t.failures(wrongCodecs);
                }

                const { totalMin, totalMax } = getTotalMinMax(totalOccurrence);
                if (!(totalMin <= result.length && result.length <= totalMax)) {
                    const errorResults = types.filter((arg) => !result.includes(arg));
                    message = errorResults
                        .map((arg) => {
                            const occurrence = instancesToCheck.filter((a: any) =>
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
                        value: instancesToCheck
                    });

                    return t.failure(instancesToCheck, c, message);
                } else {
                    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                    return t.success<any>(instancesToCheck);
                }
            }
        },
        (a) => [...a],
        codec,
        types,
        totalOccurrence
    );
}
