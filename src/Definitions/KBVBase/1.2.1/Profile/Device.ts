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
    CustomReference,
    ExtensibleCheck,
    ReqArray
} from "../../../CustomTypes";
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";

import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import DevicenametypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Devicenametype";
import DevicestatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Devicestatus";

import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";
import TerminologyGerman from "../../../../Definitions/KBVBase/1.2.1/Extension/TerminologyGerman";
import UdientrytypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Udientrytype";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Device"

/**
 * Content in other Language.
 */
export interface DeviceStatusReasonCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DeviceStatusReasonCodingDisplayAnzeigenameCodeContent: t.Type<DeviceStatusReasonCodingDisplayAnzeigenameCodeContent> =
    t.recursion("DeviceStatusReasonCodingDisplayAnzeigenameCodeContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface DeviceStatusReasonCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | DeviceStatusReasonCodingDisplayAnzeigenameCodeContent)[];
}

export const DeviceStatusReasonCodingDisplayAnzeigenameCode: t.Type<DeviceStatusReasonCodingDisplayAnzeigenameCode> =
    t.recursion("DeviceStatusReasonCodingDisplayAnzeigenameCode", () =>
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
                            t.Type<DeviceStatusReasonCodingDisplayAnzeigenameCodeContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DeviceStatusReasonCodingDisplayAnzeigenameCodeContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DeviceStatusReasonCodingDisplayAnzeigenameCodeContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DeviceTypeCodeSnomedDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const DeviceTypeCodeSnomedDisplay: t.Type<DeviceTypeCodeSnomedDisplay> =
    t.recursion("DeviceTypeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<TerminologyGerman>]>,
                t.Any
            >(
                t.union([Extension, TerminologyGerman]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: TerminologyGerman,
                        occurrence: ["0", "1"],
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
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DeviceStatusReasonCodingDisplay {
    id?: string;
    extension?: (Extension | DeviceStatusReasonCodingDisplayAnzeigenameCode)[];
    value?: string;
}

export const DeviceStatusReasonCodingDisplay: t.Type<DeviceStatusReasonCodingDisplay> =
    t.recursion("DeviceStatusReasonCodingDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DeviceStatusReasonCodingDisplayAnzeigenameCode>
                    ]
                >,
                t.Any
            >(
                t.union([Extension, DeviceStatusReasonCodingDisplayAnzeigenameCode]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DeviceStatusReasonCodingDisplayAnzeigenameCode,
                        occurrence: ["0", "1"],
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DeviceTypeCodeSnomed {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    _display?: DeviceTypeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DeviceTypeCodeSnomed: t.Type<DeviceTypeCodeSnomed> = t.recursion(
    "DeviceTypeCodeSnomed",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: DeviceTypeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DeviceStatusReasonCoding {
    system: string;
    code: string;
    id?: string;
    version?: string;
    _display?: DeviceStatusReasonCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DeviceStatusReasonCoding: t.Type<DeviceStatusReasonCoding> = t.recursion(
    "DeviceStatusReasonCoding",
    () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: DeviceStatusReasonCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * The reference to the definition for the device.
 */
export interface DeviceDefinitionReference {
    reference: string;
    id?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
    display?: string;
}

export const DeviceDefinitionReference: t.Type<DeviceDefinitionReference> = t.recursion(
    "DeviceDefinitionReference",
    () =>
        t.intersection([
            t.type({
                reference: CustomReference(SCALARString, [
                    "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_DeviceDefinition|1.2.1"
                ])
            }),
            t.partial({
                id: SCALARString,
                type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
                identifier: Identifier,
                display: SCALARString
            })
        ])
);

/**
 * Das Akronym UDI steht für Unique Device Identification und beschreibt ein Identifikationssystem mit eigenen Kennzahlen für jedes Medizinprodukt, was die Rückverfolgbarkeit des Produkts weltweit gewährleistet. Mit der Medical Device Regulation (MDR) zum 26. Mai 2020 wurde das System für alle Medizinprodukte inkl. In-vitro-Diagnostika verpflichtend (Ausnahmen Sonderanfertigungen).
 */
export interface DeviceUdiCarrier {
    id?: string;
    deviceIdentifier?: string;
    issuer?: string;
    jurisdiction?: string;
    carrierAIDC?: string;
    carrierHRF?: string;
    entryType?: UdientrytypeVS;
}

export const DeviceUdiCarrier: t.Type<DeviceUdiCarrier> = t.recursion(
    "DeviceUdiCarrier",
    () =>
        t.partial({
            id: SCALARString,
            deviceIdentifier: SCALARString,
            issuer: SCALARUri,
            jurisdiction: SCALARUri,
            carrierAIDC: SCALARBase64Binary,
            carrierHRF: SCALARString,
            entryType: UdientrytypeVS
        })
);

/**
 * Reason for the dtatus of the Device availability.
 */
export interface DeviceStatusReason {
    id?: string;
    coding?: DeviceStatusReasonCoding[];
    text?: string;
}

export const DeviceStatusReason: t.Type<DeviceStatusReason> = t.recursion(
    "DeviceStatusReason",
    () =>
        t.partial({
            id: SCALARString,
            coding: t.array(DeviceStatusReasonCoding),
            text: SCALARString
        })
);

/**
 * Name des Gerätes
 */
export interface DeviceDeviceName {
    name: string;
    type: DevicenametypeVS;
    id?: string;
}

export const DeviceDeviceName: t.Type<DeviceDeviceName> = t.recursion(
    "DeviceDeviceName",
    () =>
        t.intersection([
            t.type({
                name: SCALARString,
                type: DevicenametypeVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

/**
 * The kind or type of device.
 */
export interface DeviceType {
    id?: string;
    coding?: DeviceTypeCodeSnomed[];
    text?: string;
}

export const DeviceType: t.Type<DeviceType> = t.recursion("DeviceType", () =>
    t.partial({
        id: SCALARString,
        coding: t.array(DeviceTypeCodeSnomed),
        text: SCALARString
    })
);

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceSpecialization {
    systemType: CodeableConcept;
    id?: string;
    version?: string;
}

export const DeviceSpecialization: t.Type<DeviceSpecialization> = t.recursion(
    "DeviceSpecialization",
    () =>
        t.intersection([
            t.type({
                systemType: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString
            })
        ])
);

/**
 * The actual design of the device or software version running on the device.
 */
export interface DeviceVersion {
    value: string;
    id?: string;
    type?: CodeableConcept;
    component?: Identifier;
}

export const DeviceVersion: t.Type<DeviceVersion> = t.recursion("DeviceVersion", () =>
    t.intersection([
        t.type({
            value: SCALARString
        }),
        t.partial({
            id: SCALARString,
            type: CodeableConcept,
            component: Identifier
        })
    ])
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface DeviceProperty {
    type: CodeableConcept;
    id?: string;
    valueQuantity?: Quantity[];
    valueCode?: CodeableConcept[];
}

export const DeviceProperty: t.Type<DeviceProperty> = t.recursion("DeviceProperty", () =>
    t.intersection([
        t.type({
            type: CodeableConcept
        }),
        t.partial({
            id: SCALARString,
            valueQuantity: t.array(Quantity),
            valueCode: t.array(CodeableConcept)
        })
    ])
);

interface Device {
    type: DeviceType;
    resourceType?: "Device";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    definition?: DeviceDefinitionReference;
    udiCarrier?: DeviceUdiCarrier[];
    status?: DevicestatusVS;
    statusReason?: DeviceStatusReason[];
    distinctIdentifier?: string;
    manufacturer?: string;
    manufactureDate?: string;
    expirationDate?: string;
    lotNumber?: string;
    serialNumber?: string;
    deviceName?: DeviceDeviceName[];
    modelNumber?: string;
    partNumber?: string;
    specialization?: DeviceSpecialization[];
    version?: DeviceVersion[];
    property?: DeviceProperty[];
    patient?: Reference;
    owner?: Reference;
    contact?: ContactPoint[];
    location?: Reference;
    url?: string;
    note?: Annotation[];
    safety?: CodeableConcept[];
    parent?: Reference;
}

const Device: t.Type<Device> = t.recursion("Device", () =>
    t.intersection([
        t.type({
            type: DeviceType
        }),
        t.partial({
            resourceType: Literal("Device"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: t.array(Identifier),
            definition: DeviceDefinitionReference,
            udiCarrier: t.array(DeviceUdiCarrier),
            status: DevicestatusVS,
            statusReason: t.array(DeviceStatusReason),
            distinctIdentifier: SCALARString,
            manufacturer: SCALARString,
            manufactureDate: SCALARDateTime,
            expirationDate: SCALARDateTime,
            lotNumber: SCALARString,
            serialNumber: SCALARString,
            deviceName: t.array(DeviceDeviceName),
            modelNumber: SCALARString,
            partNumber: SCALARString,
            specialization: t.array(DeviceSpecialization),
            version: t.array(DeviceVersion),
            property: t.array(DeviceProperty),
            patient: Reference,
            owner: Reference,
            contact: t.array(ContactPoint),
            location: Reference,
            url: SCALARUri,
            note: t.array(Annotation),
            safety: t.array(CodeableConcept),
            parent: Reference
        })
    ])
);

export default Device;
