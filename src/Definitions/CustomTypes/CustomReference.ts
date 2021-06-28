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
import { AnyType } from "../Interfaces";

function getUuid(value: string, separator: string | RegExp = /[.:/ ]/): string {
    return value.split(separator).pop() ?? value;
}

export class CustomReferenceType extends t.Type<AnyType> {
    readonly _tag = "CustomReferenceType";
    constructor(
        name: string,
        is: t.Is<AnyType>,
        validate: (i: unknown, context: t.Context) => t.Validation<AnyType>,
        encode: (a: AnyType) => AnyType,
        readonly dataType: AnyType,
        readonly targetProfile: string[]
    ) {
        super(name, is, validate, encode);
    }
}

export default function CustomReference<C extends t.Any>(
    dataType: C,
    targetProfile: string[],
    name = "ReferenceType"
): t.Type<t.TypeOf<C>> {
    return new CustomReferenceType(
        name,
        (i): i is C => dataType.is(i),
        (i, c) => {
            const decodeResult = dataType.decode(i);

            if (
                !targetProfile.find((tp) => tp.includes("http://hl7.org/fhir/")) &&
                targetProfile.length
            ) {
                const bundle = c.filter(
                    (cEntry) => cEntry.key === "bundleForReferenceValidation"
                );

                if (bundle.length && bundle[0]) {
                    const id: string = getUuid(i as string);
                    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                    const bundleEntry: any = bundle[0];

                    /**
                     * TODO: Only temporary a fix. Version should be used later on.
                     *       But there a lot of bugs like the example or missing versions.
                     *       e.g.: https://fhir.kbv.de/Structuredefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.00.000
                     *             https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.00.000
                     */
                    const removeVersion = (val: string): string => {
                        return (val.includes("|")
                            ? val.split("|")[0]
                            : val
                        ).toLowerCase();
                    };

                    const targetingResource = bundleEntry.actual.entry.filter(
                        (actualBundleEntry: { fullUrl: string }) => {
                            const bundleEntryFullUrl = removeVersion(
                                actualBundleEntry.fullUrl
                            );
                            const cleanedId = removeVersion(id);
                            return getUuid(bundleEntryFullUrl) === getUuid(cleanedId);
                        }
                    );

                    if (!targetingResource.length)
                        return t.failure(
                            i,
                            c,
                            ErrorMessage.NoTargetWithinBundle(i as string)
                        );
                    else {
                        const targetEntryProfile = removeVersion(
                            targetingResource[0].resource.meta.profile[0]
                        );
                        if (
                            !targetProfile
                                .map((x) => removeVersion(x))
                                .includes(targetEntryProfile)
                        )
                            return t.failure(
                                i,
                                c,
                                ErrorMessage.WrongTarget(
                                    i as string,
                                    targetProfile,
                                    targetingResource[0].resource.meta.profile[0]
                                )
                            );
                    }
                }
            }

            if (decodeResult._tag === "Right") {
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                return t.success<any>(i);
            } else {
                return t.failure(i, c, "Decoding von " + dataType + " nicht richtig.");
            }
        },
        t.identity,
        dataType,
        targetProfile
    );
}
