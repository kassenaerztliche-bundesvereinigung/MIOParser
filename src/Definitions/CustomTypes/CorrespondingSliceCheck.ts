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
import { sliceByEqual } from "./ReqArray";
import * as t from "io-ts";

export function checkForCorrespondingSlice<D extends t.Any>(
    instance: any,
    codecArrayToCheck: Req<D>[]
): { message: string; value: any } | undefined {
    const slicedBy = codecArrayToCheck[0].sliceBy;

    // check for path Slices
    let hasCorrespondingCheckSlice: boolean;
    let actualValue = "";
    let sliceValue: string | undefined;
    if (slicedBy?.exists) {
        const sliceByExistValues: (string | undefined)[] = codecArrayToCheck.map(
            (codec) => codec.sliceBy?.exists?.join(", ")
        );
        hasCorrespondingCheckSlice = codecArrayToCheck.some((codecToCheck) => {
            const instanceObjectKeys = Object.keys(instance);
            for (const instanceObjectKey of instanceObjectKeys) {
                if (
                    codecToCheck.sliceBy?.exists?.includes(instanceObjectKey) ||
                    (!codecToCheck.sliceBy?.exists?.length &&
                        instanceObjectKey === "extension")
                )
                    return true;
            }
            return false;
        });
        if (!hasCorrespondingCheckSlice)
            return {
                message: ErrorMessage.NoSectionForExistsValue(sliceByExistValues),
                value: Object.keys(instance).join(" ")
            };
    } else if (slicedBy?.path) {
        const sliceValuePath = slicedBy?.path;
        actualValue = resolvePath(instance, sliceValuePath);

        hasCorrespondingCheckSlice = codecArrayToCheck.some((codecToCheck) => {
            const value = codecToCheck.sliceBy?.value;
            if (value && actualValue) {
                if (typeof value === "string") {
                    return value.replace(/\|.*/, "") === actualValue.replace(/\|.*/, "");
                }
                const valueTypes =
                    value._tag === "KeyofType"
                        ? Object.keys(value.keys).map((e) => {
                              return { value: e };
                          })
                        : value.types;
                return valueTypes.map((t: any) => t.value).includes(actualValue);
            } else return !value;
        });
        if (!hasCorrespondingCheckSlice)
            return {
                message: ErrorMessage.NoSectionForValue(actualValue, sliceValuePath),
                value: actualValue
            };
    } else if (slicedBy?.pattern) {
        const hasCorrespondingCheckSlice = codecArrayToCheck.some((codecToCheck) => {
            const callBack = (codecToCheckKey: string, slicedByKey: string): void => {
                if (codecToCheckKey === slicedByKey) {
                    if (
                        !codecToCheck.sliceBy?.pattern[codecToCheckKey] ===
                        slicedBy.pattern[slicedByKey]
                    ) {
                        actualValue = codecToCheck.sliceBy?.pattern[codecToCheckKey];
                        sliceValue = slicedBy.pattern[slicedByKey];
                    }
                }
            };
            const slicesEqual = sliceByEqual(codecToCheck.sliceBy, instance, callBack);
            return slicesEqual;
        });

        if (!hasCorrespondingCheckSlice)
            return {
                message: ErrorMessage.NoSectionForValue(sliceValue),
                value: actualValue
            };
    }
}
