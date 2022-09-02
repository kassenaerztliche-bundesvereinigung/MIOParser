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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Implant"

/**
 * Content in other Language.
 */
export interface NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent: t.Type<NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent> =
    t.recursion("NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDDeviceImplantTypeCodingDisplayAnzeigenameType {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent)[];
}

export const NFDDeviceImplantTypeCodingDisplayAnzeigenameType: t.Type<NFDDeviceImplantTypeCodingDisplayAnzeigenameType> =
    t.recursion("NFDDeviceImplantTypeCodingDisplayAnzeigenameType", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDDeviceImplantTypeCodingDisplayAnzeigenameTypeContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDDeviceImplantTypeCodingDisplay {
    id?: string;
    extension?: (Extension | NFDDeviceImplantTypeCodingDisplayAnzeigenameType)[];
    value?: string;
}

export const NFDDeviceImplantTypeCodingDisplay: t.Type<NFDDeviceImplantTypeCodingDisplay> =
    t.recursion("NFDDeviceImplantTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDDeviceImplantTypeCodingDisplayAnzeigenameType>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDDeviceImplantTypeCodingDisplayAnzeigenameType
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDDeviceImplantTypeCodingDisplayAnzeigenameType,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDDeviceImplantTypeCoding {
    system: string;
    version: string;
    code: string;
    id?: string;
    _display?: NFDDeviceImplantTypeCodingDisplay;
    display?: string;
}

export const NFDDeviceImplantTypeCoding: t.Type<NFDDeviceImplantTypeCoding> = t.recursion(
    "NFDDeviceImplantTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDDeviceImplantTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDDeviceImplantMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Implant|1.0.0">;
    id?: string;
}

export const NFDDeviceImplantMeta: t.Type<NFDDeviceImplantMeta> = t.recursion(
    "NFDDeviceImplantMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Implant|1.0.0"
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
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export interface NFDDeviceImplantDeviceName {
    name: string;
    type: "model-name";
    id?: string;
}

export const NFDDeviceImplantDeviceName: t.Type<NFDDeviceImplantDeviceName> = t.recursion(
    "NFDDeviceImplantDeviceName",
    () =>
        Excess(
            t.intersection([
                t.type({
                    name: SCALARString,
                    type: Literal("model-name")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The kind or type of device.
 */
export interface NFDDeviceImplantType {
    text: string;
    id?: string;
    coding?: Array<NFDDeviceImplantTypeCoding>;
}

export const NFDDeviceImplantType: t.Type<NFDDeviceImplantType> = t.recursion(
    "NFDDeviceImplantType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    coding: MaxArray(1, NFDDeviceImplantTypeCoding)
                })
            ])
        )
);

/**
 * Patient information, If the device is affixed to a person.
 */
export interface NFDDeviceImplantPatientReference {
    reference: string;
    id?: string;
}

export const NFDDeviceImplantPatientReference: t.Type<NFDDeviceImplantPatientReference> =
    t.recursion("NFDDeviceImplantPatientReference", () =>
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

interface NFDDeviceImplant {
    resourceType: "Device";
    meta: NFDDeviceImplantMeta;
    type: NFDDeviceImplantType;
    patient: NFDDeviceImplantPatientReference;
    id?: string;
    text?: Narrative;
    deviceName?: Array<NFDDeviceImplantDeviceName>;
}

const NFDDeviceImplant: t.Type<NFDDeviceImplant> = t.recursion("NFDDeviceImplant", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Device"),
                meta: NFDDeviceImplantMeta,
                type: NFDDeviceImplantType,
                patient: NFDDeviceImplantPatientReference
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                deviceName: MaxArray(1, NFDDeviceImplantDeviceName)
            })
        ])
    )
);

export default NFDDeviceImplant;
