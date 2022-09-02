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
import {
    Literal,
    Excess,
    MinMaxArray,
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Use_Statement_Implant"

/**
 * Optional Extension Element - found in all resources.
 */
export interface NFDDeviceUseStatementImplantTimingPeriodDatum {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Date_Implantation";
    valueString: string;
    id?: string;
}

export const NFDDeviceUseStatementImplantTimingPeriodDatum: t.Type<NFDDeviceUseStatementImplantTimingPeriodDatum> =
    t.recursion("NFDDeviceUseStatementImplantTimingPeriodDatum", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Date_Implantation"
                    ),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * How often the device was used.
 */
export interface NFDDeviceUseStatementImplantTimingPeriod {
    id?: string;
    extension?: (Extension | NFDDeviceUseStatementImplantTimingPeriodDatum)[];
    start?: string;
}

export const NFDDeviceUseStatementImplantTimingPeriod: t.Type<NFDDeviceUseStatementImplantTimingPeriod> =
    t.recursion("NFDDeviceUseStatementImplantTimingPeriod", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDDeviceUseStatementImplantTimingPeriodDatum>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDDeviceUseStatementImplantTimingPeriodDatum]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDDeviceUseStatementImplantTimingPeriodDatum,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Date_Implantation"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                start: SCALARDateTime
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDDeviceUseStatementImplantMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Use_Statement_Implant|1.0.0">;
    id?: string;
}

export const NFDDeviceUseStatementImplantMeta: t.Type<NFDDeviceUseStatementImplantMeta> =
    t.recursion("NFDDeviceUseStatementImplantMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Use_Statement_Implant|1.0.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient who used the device.
 */
export interface NFDDeviceUseStatementImplantSubjectReference {
    reference: string;
    id?: string;
}

export const NFDDeviceUseStatementImplantSubjectReference: t.Type<NFDDeviceUseStatementImplantSubjectReference> =
    t.recursion("NFDDeviceUseStatementImplantSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who reported the device was being used by the patient.
 */
export interface NFDDeviceUseStatementImplantSourceReference {
    reference: string;
    id?: string;
}

export const NFDDeviceUseStatementImplantSourceReference: t.Type<NFDDeviceUseStatementImplantSourceReference> =
    t.recursion("NFDDeviceUseStatementImplantSourceReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The details of the device used.
 */
export interface NFDDeviceUseStatementImplantDeviceReference {
    reference: string;
    id?: string;
}

export const NFDDeviceUseStatementImplantDeviceReference: t.Type<NFDDeviceUseStatementImplantDeviceReference> =
    t.recursion("NFDDeviceUseStatementImplantDeviceReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Implant|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDDeviceUseStatementImplant {
    resourceType: "DeviceUseStatement";
    meta: NFDDeviceUseStatementImplantMeta;
    status: "active";
    subject: NFDDeviceUseStatementImplantSubjectReference;
    device: NFDDeviceUseStatementImplantDeviceReference;
    id?: string;
    text?: Narrative;
    timingPeriod?: NFDDeviceUseStatementImplantTimingPeriod;
    source?: NFDDeviceUseStatementImplantSourceReference;
}

const NFDDeviceUseStatementImplant: t.Type<NFDDeviceUseStatementImplant> = t.recursion(
    "NFDDeviceUseStatementImplant",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DeviceUseStatement"),
                    meta: NFDDeviceUseStatementImplantMeta,
                    status: Literal("active"),
                    subject: NFDDeviceUseStatementImplantSubjectReference,
                    device: NFDDeviceUseStatementImplantDeviceReference
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    timingPeriod: NFDDeviceUseStatementImplantTimingPeriod,
                    source: NFDDeviceUseStatementImplantSourceReference
                })
            ])
        )
);

export default NFDDeviceUseStatementImplant;
