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
    MinArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientPidTypeCodingMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPatientPidTypeCodingMRType: t.Type<CMRPatientPidTypeCodingMRType> =
    t.recursion("CMRPatientPidTypeCodingMRType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("MR")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientVersichertenIdGKVTypeCodingGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPatientVersichertenIdGKVTypeCodingGKVType: t.Type<CMRPatientVersichertenIdGKVTypeCodingGKVType> =
    t.recursion("CMRPatientVersichertenIdGKVTypeCodingGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("GKV")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientVersichertennummerpkvTypeCodingPKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPatientVersichertennummerpkvTypeCodingPKVType: t.Type<CMRPatientVersichertennummerpkvTypeCodingPKVType> =
    t.recursion("CMRPatientVersichertennummerpkvTypeCodingPKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("PKV")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface CMRPatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const CMRPatientNameFamilyNamenszusatz: t.Type<CMRPatientNameFamilyNamenszusatz> =
    t.recursion("CMRPatientNameFamilyNamenszusatz", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    valueString: SCALARString
                })
            ])
        )
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface CMRPatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const CMRPatientNameFamilyNachname: t.Type<CMRPatientNameFamilyNachname> =
    t.recursion("CMRPatientNameFamilyNachname", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
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
* Vorsatzwort wie z.B.: von, van, zu
Vgl. auch VSDM-Spezifikation der Gematik (Versichertenstammdatenmanagement, "eGK")
*/
export interface CMRPatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const CMRPatientNameFamilyVorsatzwort: t.Type<CMRPatientNameFamilyVorsatzwort> =
    t.recursion("CMRPatientNameFamilyVorsatzwort", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface CMRPatientGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const CMRPatientGeburtsnameFamilyNamenszusatz: t.Type<CMRPatientGeburtsnameFamilyNamenszusatz> =
    t.recursion("CMRPatientGeburtsnameFamilyNamenszusatz", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    valueString: SCALARString
                })
            ])
        )
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface CMRPatientGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const CMRPatientGeburtsnameFamilyNachname: t.Type<CMRPatientGeburtsnameFamilyNachname> =
    t.recursion("CMRPatientGeburtsnameFamilyNachname", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
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
* Vorsatzwort wie z.B.: von, van, zu
Vgl. auch VSDM-Spezifikation der Gematik (Versichertenstammdatenmanagement, "eGK")
*/
export interface CMRPatientGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const CMRPatientGeburtsnameFamilyVorsatzwort: t.Type<CMRPatientGeburtsnameFamilyVorsatzwort> =
    t.recursion("CMRPatientGeburtsnameFamilyVorsatzwort", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientPidTypeCoding {
    display: "Medical record number";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMRPatientPidTypeCoding: t.Type<CMRPatientPidTypeCoding> = t.recursion(
    "CMRPatientPidTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Medical record number")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientVersichertenIdGKVTypeCoding {
    display: "Gesetzliche Krankenversicherung";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMRPatientVersichertenIdGKVTypeCoding: t.Type<CMRPatientVersichertenIdGKVTypeCoding> =
    t.recursion("CMRPatientVersichertenIdGKVTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Gesetzliche Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientVersichertennummerpkvTypeCoding {
    display: "Private Krankenversicherung";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMRPatientVersichertennummerpkvTypeCoding: t.Type<CMRPatientVersichertennummerpkvTypeCoding> =
    t.recursion("CMRPatientVersichertennummerpkvTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Private Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface CMRPatientVersichertennummerpkvAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const CMRPatientVersichertennummerpkvAssignerIdentifier: t.Type<CMRPatientVersichertennummerpkvAssignerIdentifier> =
    t.recursion("CMRPatientVersichertennummerpkvAssignerIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: IdentifieruseVS,
                    type: ExtensibleCheck<t.Type<IdentifiertypeVS>>(IdentifiertypeVS),
                    period: Period,
                    assigner: Reference
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    display: "Krankenversichertenkarte";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const CMRPatientVersichertennummerkvkTypeCoding: t.Type<CMRPatientVersichertennummerkvkTypeCoding> =
    t.recursion("CMRPatientVersichertennummerkvkTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type"
                    ),
                    code: Literal("kvk"),
                    display: Literal("Krankenversichertenkarte")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPatientPidType {
    coding: Array<CMRPatientPidTypeCoding | CMRPatientPidTypeCodingMRType>;
    id?: string;
    text?: string;
}

export const CMRPatientPidType: t.Type<CMRPatientPidType> = t.recursion(
    "CMRPatientPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPatientPidTypeCoding>,
                                t.Type<CMRPatientPidTypeCodingMRType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([CMRPatientPidTypeCoding, CMRPatientPidTypeCodingMRType]),
                        [
                            {
                                codec: CMRPatientPidTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPatientPidTypeCodingMRType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPatientVersichertenIdGKVType {
    coding: Array<
        | CMRPatientVersichertenIdGKVTypeCoding
        | CMRPatientVersichertenIdGKVTypeCodingGKVType
    >;
    id?: string;
    text?: string;
}

export const CMRPatientVersichertenIdGKVType: t.Type<CMRPatientVersichertenIdGKVType> =
    t.recursion("CMRPatientVersichertenIdGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPatientVersichertenIdGKVTypeCoding>,
                                t.Type<CMRPatientVersichertenIdGKVTypeCodingGKVType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRPatientVersichertenIdGKVTypeCoding,
                            CMRPatientVersichertenIdGKVTypeCodingGKVType
                        ]),
                        [
                            {
                                codec: CMRPatientVersichertenIdGKVTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPatientVersichertenIdGKVTypeCodingGKVType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/identifier-type-de-basis"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPatientVersichertennummerpkvType {
    coding: Array<
        | CMRPatientVersichertennummerpkvTypeCoding
        | CMRPatientVersichertennummerpkvTypeCodingPKVType
    >;
    id?: string;
    text?: string;
}

export const CMRPatientVersichertennummerpkvType: t.Type<CMRPatientVersichertennummerpkvType> =
    t.recursion("CMRPatientVersichertennummerpkvType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPatientVersichertennummerpkvTypeCoding>,
                                t.Type<CMRPatientVersichertennummerpkvTypeCodingPKVType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRPatientVersichertennummerpkvTypeCoding,
                            CMRPatientVersichertennummerpkvTypeCodingPKVType
                        ]),
                        [
                            {
                                codec: CMRPatientVersichertennummerpkvTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPatientVersichertennummerpkvTypeCodingPKVType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/identifier-type-de-basis"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * Organization that issued/manages the identifier.
 */
export interface CMRPatientVersichertennummerpkvAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: CMRPatientVersichertennummerpkvAssignerIdentifier;
}

export const CMRPatientVersichertennummerpkvAssigner: t.Type<CMRPatientVersichertennummerpkvAssigner> =
    t.recursion("CMRPatientVersichertennummerpkvAssigner", () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    reference: CustomReference(SCALARString, [
                        "http://hl7.org/fhir/StructureDefinition/Organization"
                    ]),
                    type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
                    identifier: CMRPatientVersichertennummerpkvAssignerIdentifier
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPatientVersichertennummerkvkType {
    coding: Array<CMRPatientVersichertennummerkvkTypeCoding>;
    id?: string;
    text?: string;
}

export const CMRPatientVersichertennummerkvkType: t.Type<CMRPatientVersichertennummerkvkType> =
    t.recursion("CMRPatientVersichertennummerkvkType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, CMRPatientVersichertennummerkvkTypeCoding)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface CMRPatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | CMRPatientNameFamilyNamenszusatz
        | CMRPatientNameFamilyNachname
        | CMRPatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const CMRPatientNameFamily: t.Type<CMRPatientNameFamily> = t.recursion(
    "CMRPatientNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPatientNameFamilyNamenszusatz>,
                            t.Type<CMRPatientNameFamilyNachname>,
                            t.Type<CMRPatientNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRPatientNameFamilyNamenszusatz,
                        CMRPatientNameFamilyNachname,
                        CMRPatientNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPatientNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: CMRPatientNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: CMRPatientNameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface CMRPatientGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | CMRPatientGeburtsnameFamilyNamenszusatz
        | CMRPatientGeburtsnameFamilyNachname
        | CMRPatientGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const CMRPatientGeburtsnameFamily: t.Type<CMRPatientGeburtsnameFamily> =
    t.recursion("CMRPatientGeburtsnameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPatientGeburtsnameFamilyNamenszusatz>,
                            t.Type<CMRPatientGeburtsnameFamilyNachname>,
                            t.Type<CMRPatientGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRPatientGeburtsnameFamilyNamenszusatz,
                        CMRPatientGeburtsnameFamilyNachname,
                        CMRPatientGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPatientGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: CMRPatientGeburtsnameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: CMRPatientGeburtsnameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface CMRPatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const CMRPatientBirthDateDataabsentreason: t.Type<CMRPatientBirthDateDataabsentreason> =
    t.recursion("CMRPatientBirthDateDataabsentreason", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMRPatientPid {
    type: CMRPatientPidType;
    system: string;
    value: string;
    id?: string;
    period?: Period;
    assigner?: Reference;
}

export const CMRPatientPid: t.Type<CMRPatientPid> = t.recursion("CMRPatientPid", () =>
    Excess(
        t.intersection([
            t.type({
                type: CMRPatientPidType,
                system: SCALARUri,
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                period: Period,
                assigner: Reference
            })
        ])
    )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMRPatientVersichertenIdGKV {
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    type?: CMRPatientVersichertenIdGKVType;
    period?: Period;
    assigner?: Reference;
}

export const CMRPatientVersichertenIdGKV: t.Type<CMRPatientVersichertenIdGKV> =
    t.recursion("CMRPatientVersichertenIdGKV", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    type: CMRPatientVersichertenIdGKVType,
                    period: Period,
                    assigner: Reference
                })
            ])
        )
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMRPatientVersichertennummerpkv {
    type: CMRPatientVersichertennummerpkvType;
    value: string;
    assigner: CMRPatientVersichertennummerpkvAssigner;
    id?: string;
    system?: string;
    period?: Period;
}

export const CMRPatientVersichertennummerpkv: t.Type<CMRPatientVersichertennummerpkv> =
    t.recursion("CMRPatientVersichertennummerpkv", () =>
        Excess(
            t.intersection([
                t.type({
                    type: CMRPatientVersichertennummerpkvType,
                    value: SCALARString,
                    assigner: CMRPatientVersichertennummerpkvAssigner
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    period: Period
                })
            ])
        )
    );

/**
 * An identifier for this patient.
 */
export interface CMRPatientVersichertennummerkvk {
    type: CMRPatientVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    period?: Period;
    assigner?: Reference;
}

export const CMRPatientVersichertennummerkvk: t.Type<CMRPatientVersichertennummerkvk> =
    t.recursion("CMRPatientVersichertennummerkvk", () =>
        Excess(
            t.intersection([
                t.type({
                    type: CMRPatientVersichertennummerkvkType,
                    system: Literal(
                        "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer"
                    ),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    period: Period,
                    assigner: Reference
                })
            ])
        )
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface CMRPatientName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: CMRPatientNameFamily;
    family?: string;
}

export const CMRPatientName: t.Type<CMRPatientName> = t.recursion("CMRPatientName", () =>
    Excess(
        t.intersection([
            t.type({
                use: Literal("official"),
                given: MinMaxArray(1, 1, SCALARString)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: CMRPatientNameFamily,
                family: SCALARString
            })
        ])
    )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface CMRPatientGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: CMRPatientGeburtsnameFamily;
    family?: string;
}

export const CMRPatientGeburtsname: t.Type<CMRPatientGeburtsname> = t.recursion(
    "CMRPatientGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: CMRPatientGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRPatientMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1">;
    id?: string;
}

export const CMRPatientMeta: t.Type<CMRPatientMeta> = t.recursion("CMRPatientMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
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
 * The date of birth for the individual.
 */
export interface CMRPatientBirthDate {
    id?: string;
    extension?: (Extension | CMRPatientBirthDateDataabsentreason)[];
    value?: string;
}

export const CMRPatientBirthDate: t.Type<CMRPatientBirthDate> = t.recursion(
    "CMRPatientBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<CMRPatientBirthDateDataabsentreason>]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMRPatientBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPatientBirthDateDataabsentreason,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARDate
            })
        )
);

interface CMRPatient {
    resourceType: "Patient";
    meta: CMRPatientMeta;
    name: Array<CMRPatientName | CMRPatientGeburtsname>;
    id?: string;
    text?: Narrative;
    identifier?: (
        | CMRPatientPid
        | CMRPatientVersichertenIdGKV
        | CMRPatientVersichertennummerpkv
        | CMRPatientVersichertennummerkvk
    )[];
    _birthDate?: CMRPatientBirthDate;
    birthDate?: string;
}

const CMRPatient: t.Type<CMRPatient> = t.recursion("CMRPatient", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: CMRPatientMeta,
                name: ReqArray<
                    t.UnionC<[t.Type<CMRPatientName>, t.Type<CMRPatientGeburtsname>]>,
                    t.Any
                >(
                    t.union([CMRPatientName, CMRPatientGeburtsname]),
                    [
                        {
                            codec: CMRPatientName,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "use", value: "official" }
                        },
                        {
                            codec: CMRPatientGeburtsname,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "use", value: "maiden" }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMRPatientPid>,
                            t.Type<CMRPatientVersichertenIdGKV>,
                            t.Type<CMRPatientVersichertennummerpkv>,
                            t.Type<CMRPatientVersichertennummerkvk>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRPatientPid,
                        CMRPatientVersichertenIdGKV,
                        CMRPatientVersichertennummerpkv,
                        CMRPatientVersichertennummerkvk
                    ]),
                    [
                        {
                            codec: CMRPatientPid,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMRPatientVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMRPatientVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMRPatientVersichertennummerkvk,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "kvk" }
                        }
                    ],
                    ["0", "*"]
                ),
                _birthDate: CMRPatientBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default CMRPatient;
