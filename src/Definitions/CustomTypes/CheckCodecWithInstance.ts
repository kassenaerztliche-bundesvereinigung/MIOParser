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

import ErrorMessage from "../ErrorMessage";
import { Req, resolvePath } from "./index";
import * as t from "io-ts";
import { sliceByEqual } from "./ReqArray";
import { Context } from "io-ts";

/**
 * Returns a number if it is valid, stating how often it occurred
 * Returns a wrongCodec Array if it does not validate
 * @param codecToCheck
 * @param instanceToCheckCopy
 */
export function checkIfCodecIsValid<D extends t.Any>(
    codecToCheck: Req<D>,
    instanceToCheckCopy: any[],
    codecArrayToCheck: Req<D>[]
): { message: string; value: any }[] | number {
    const wrongCodecs: { message: string; value: any }[] = [];

    const min = parseInt(codecToCheck.occurrence[0]);
    const max =
        codecToCheck.occurrence[1] === "*"
            ? Number.MAX_SAFE_INTEGER
            : parseInt(codecToCheck.occurrence[1]);
    const occurrenceEntries = instanceToCheckCopy.filter((instance: any) => {
        const instanceCheckResult = checkCodecWithInstance<D>(
            codecToCheck,
            instance,
            codecArrayToCheck
        );

        if (typeof instanceCheckResult === "boolean") return instanceCheckResult;
        else if (instanceCheckResult.length) {
            wrongCodecs.concat(instanceCheckResult);
            return false;
        }
        return false;
    });

    const occurrence = occurrenceEntries.length;

    // Codec should be present but is not
    if (!(min <= occurrence && occurrence <= max)) {
        wrongCodecs.push({
            message: ErrorMessage.Codec(
                codecToCheck.codec.name,
                min.toString(),
                max.toString(),
                occurrence
            ),
            value: undefined
        });
    }
    if (wrongCodecs.length) return wrongCodecs;
    return occurrence;
}

export function checkCodecWithInstance<D extends t.Any>(
    codecToCheck: Req<D>,
    instance: any,
    codecArrayToCheck: Req<D>[]
): { message: string; value: any }[] | boolean {
    const wrongCodecs: { message: string; value: any }[] = [];
    const c: Context = [];
    const sliceByExistValues: (string | undefined)[] = codecArrayToCheck.map((codec) =>
        codec.sliceBy?.exists?.join(", ")
    );

    if (codecToCheck.sliceBy?.exists) {
        for (const existKey of codecToCheck.sliceBy.exists) {
            if (instance[existKey] !== undefined) {
                const decoderResult = codecToCheck.codec.validate(instance, c);
                if (decoderResult._tag === "Left") {
                    decoderResult.left.forEach((left) =>
                        wrongCodecs.push({
                            message: ErrorMessage.Slice(
                                codecToCheck.codec.name,
                                left.message
                            ),
                            value: left.value
                        })
                    );
                } else return true;
            }
        }
        const instanceHasExistingSliceByKey = Object.keys(instance).some(
            (instanceKey) => {
                return sliceByExistValues.some((sliceByExistValue) => {
                    return instanceKey === sliceByExistValue;
                });
            }
        );
        // No exits key -> extension
        if (!codecToCheck.sliceBy.exists.length && !instanceHasExistingSliceByKey) {
            const decoderResult = codecToCheck.codec.validate(instance, c);
            if (decoderResult._tag === "Left") {
                decoderResult.left.forEach((left) =>
                    wrongCodecs.push({
                        message: ErrorMessage.Slice(
                            codecToCheck.codec.name,
                            left.message
                        ),
                        value: left.value
                    })
                );
            } else return true;
        }
    } else if (codecToCheck.sliceBy?.path) {
        const value = resolvePath(instance, codecToCheck.sliceBy?.path);
        if (
            value === codecToCheck.sliceBy?.value ||
            (codecToCheck.sliceBy?.value?.types?.length &&
                codecToCheck.sliceBy?.value.types
                    .map((t: any) => t.value)
                    .includes(value)) ||
            (codecToCheck.sliceBy?.value?._tag === "KeyofType" &&
                Object.keys(codecToCheck.sliceBy?.value?.keys).includes(value))
        ) {
            const decoderResult = codecToCheck.codec.validate(instance, c);
            if (decoderResult._tag === "Left") {
                decoderResult.left.forEach((left) =>
                    wrongCodecs.push({
                        message: ErrorMessage.Slice(
                            codecToCheck.codec.name,
                            left.message
                        ),
                        value: left.value
                    })
                );
            } else return true;
        }
    } else if (codecToCheck.sliceBy?.pattern) {
        if (sliceByEqual(codecToCheck.sliceBy, instance)) {
            const decoderResult = codecToCheck.codec.validate(instance, c);
            if (decoderResult._tag === "Left") {
                decoderResult.left.forEach((left) =>
                    wrongCodecs.push({
                        message: ErrorMessage.Slice(
                            codecToCheck.codec.name,
                            left.message
                        ),
                        value: left.value
                    })
                );
            } else return true;
        }
    }

    return wrongCodecs;
}
