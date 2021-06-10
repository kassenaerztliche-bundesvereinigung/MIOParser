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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Patient"

/**
 * A reference to a code defined by a terminology system.
 */
export interface PCPatientPidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPatientPidTypeMRType: t.Type<PCPatientPidTypeMRType> = t.recursion(
    "PCPatientPidTypeMRType",
    () =>
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
export interface PCPatientVersichertenIdGKVTypeGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPatientVersichertenIdGKVTypeGKVType: t.Type<PCPatientVersichertenIdGKVTypeGKVType> = t.recursion(
    "PCPatientVersichertenIdGKVTypeGKVType",
    () =>
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
export interface PCPatientVersichertennummerpkvTypePKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPatientVersichertennummerpkvTypePKVType: t.Type<PCPatientVersichertennummerpkvTypePKVType> = t.recursion(
    "PCPatientVersichertennummerpkvTypePKVType",
    () =>
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
export interface PCPatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PCPatientNameFamilyNamenszusatz: t.Type<PCPatientNameFamilyNamenszusatz> = t.recursion(
    "PCPatientNameFamilyNamenszusatz",
    () =>
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
export interface PCPatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PCPatientNameFamilyNachname: t.Type<PCPatientNameFamilyNachname> = t.recursion(
    "PCPatientNameFamilyNachname",
    () =>
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
export interface PCPatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PCPatientNameFamilyVorsatzwort: t.Type<PCPatientNameFamilyVorsatzwort> = t.recursion(
    "PCPatientNameFamilyVorsatzwort",
    () =>
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
export interface PCPatientGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PCPatientGeburtsnameFamilyNamenszusatz: t.Type<PCPatientGeburtsnameFamilyNamenszusatz> = t.recursion(
    "PCPatientGeburtsnameFamilyNamenszusatz",
    () =>
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
export interface PCPatientGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PCPatientGeburtsnameFamilyNachname: t.Type<PCPatientGeburtsnameFamilyNachname> = t.recursion(
    "PCPatientGeburtsnameFamilyNachname",
    () =>
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
export interface PCPatientGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PCPatientGeburtsnameFamilyVorsatzwort: t.Type<PCPatientGeburtsnameFamilyVorsatzwort> = t.recursion(
    "PCPatientGeburtsnameFamilyVorsatzwort",
    () =>
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
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface PCPatientVersichertennummerpkvAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PCPatientVersichertennummerpkvAssignerIdentifier: t.Type<PCPatientVersichertennummerpkvAssignerIdentifier> = t.recursion(
    "PCPatientVersichertennummerpkvAssignerIdentifier",
    () =>
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
export interface PCPatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPatientVersichertennummerkvkTypeCoding: t.Type<PCPatientVersichertennummerkvkTypeCoding> = t.recursion(
    "PCPatientVersichertennummerkvkTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type"
                    ),
                    code: Literal("kvk")
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PCPatientPidType {
    coding: Array<PCPatientPidTypeMRType>;
    id?: string;
    text?: string;
}

export const PCPatientPidType: t.Type<PCPatientPidType> = t.recursion(
    "PCPatientPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPatientPidTypeMRType)
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
export interface PCPatientVersichertenIdGKVType {
    coding: Array<PCPatientVersichertenIdGKVTypeGKVType>;
    id?: string;
    text?: string;
}

export const PCPatientVersichertenIdGKVType: t.Type<PCPatientVersichertenIdGKVType> = t.recursion(
    "PCPatientVersichertenIdGKVType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPatientVersichertenIdGKVTypeGKVType)
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
export interface PCPatientVersichertennummerpkvType {
    coding: Array<PCPatientVersichertennummerpkvTypePKVType>;
    id?: string;
    text?: string;
}

export const PCPatientVersichertennummerpkvType: t.Type<PCPatientVersichertennummerpkvType> = t.recursion(
    "PCPatientVersichertennummerpkvType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPatientVersichertennummerpkvTypePKVType)
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
export interface PCPatientVersichertennummerpkvAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PCPatientVersichertennummerpkvAssignerIdentifier;
}

export const PCPatientVersichertennummerpkvAssigner: t.Type<PCPatientVersichertennummerpkvAssigner> = t.recursion(
    "PCPatientVersichertennummerpkvAssigner",
    () =>
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
                    identifier: PCPatientVersichertennummerpkvAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PCPatientVersichertennummerkvkType {
    coding: Array<PCPatientVersichertennummerkvkTypeCoding>;
    id?: string;
    text?: string;
}

export const PCPatientVersichertennummerkvkType: t.Type<PCPatientVersichertennummerkvkType> = t.recursion(
    "PCPatientVersichertennummerkvkType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPatientVersichertennummerkvkTypeCoding)
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
export interface PCPatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | PCPatientNameFamilyNamenszusatz
        | PCPatientNameFamilyNachname
        | PCPatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PCPatientNameFamily: t.Type<PCPatientNameFamily> = t.recursion(
    "PCPatientNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCPatientNameFamilyNamenszusatz>,
                            t.Type<PCPatientNameFamilyNachname>,
                            t.Type<PCPatientNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCPatientNameFamilyNamenszusatz,
                        PCPatientNameFamilyNachname,
                        PCPatientNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPatientNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: PCPatientNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: PCPatientNameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
export interface PCPatientGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | PCPatientGeburtsnameFamilyNamenszusatz
        | PCPatientGeburtsnameFamilyNachname
        | PCPatientGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PCPatientGeburtsnameFamily: t.Type<PCPatientGeburtsnameFamily> = t.recursion(
    "PCPatientGeburtsnameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCPatientGeburtsnameFamilyNamenszusatz>,
                            t.Type<PCPatientGeburtsnameFamilyNachname>,
                            t.Type<PCPatientGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCPatientGeburtsnameFamilyNamenszusatz,
                        PCPatientGeburtsnameFamilyNachname,
                        PCPatientGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPatientGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: PCPatientGeburtsnameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: PCPatientGeburtsnameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
export interface PCPatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const PCPatientBirthDateDataabsentreason: t.Type<PCPatientBirthDateDataabsentreason> = t.recursion(
    "PCPatientBirthDateDataabsentreason",
    () =>
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
export interface PCPatientPid {
    type: PCPatientPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
    period?: Period;
    assigner?: Reference;
}

export const PCPatientPid: t.Type<PCPatientPid> = t.recursion("PCPatientPid", () =>
    Excess(
        t.intersection([
            t.type({
                type: PCPatientPidType,
                system: SCALARUri,
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("usual"),
                period: Period,
                assigner: Reference
            })
        ])
    )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCPatientVersichertenIdGKV {
    type: PCPatientVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const PCPatientVersichertenIdGKV: t.Type<PCPatientVersichertenIdGKV> = t.recursion(
    "PCPatientVersichertenIdGKV",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PCPatientVersichertenIdGKVType,
                    system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: Reference
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCPatientVersichertennummerpkv {
    type: PCPatientVersichertennummerpkvType;
    system: string;
    value: string;
    assigner: PCPatientVersichertennummerpkvAssigner;
    id?: string;
    use?: "secondary";
    period?: Period;
}

export const PCPatientVersichertennummerpkv: t.Type<PCPatientVersichertennummerpkv> = t.recursion(
    "PCPatientVersichertennummerpkv",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PCPatientVersichertennummerpkvType,
                    system: SCALARUri,
                    value: SCALARString,
                    assigner: PCPatientVersichertennummerpkvAssigner
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("secondary"),
                    period: Period
                })
            ])
        )
);

/**
 * An identifier for this patient.
 */
export interface PCPatientVersichertennummerkvk {
    type: PCPatientVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    period?: Period;
    assigner?: Reference;
}

export const PCPatientVersichertennummerkvk: t.Type<PCPatientVersichertennummerkvk> = t.recursion(
    "PCPatientVersichertennummerkvk",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PCPatientVersichertennummerkvkType,
                    system: Literal(
                        "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer"
                    ),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: IdentifieruseVS,
                    period: Period,
                    assigner: Reference
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PCPatientName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: PCPatientNameFamily;
    family?: string;
}

export const PCPatientName: t.Type<PCPatientName> = t.recursion("PCPatientName", () =>
    Excess(
        t.intersection([
            t.type({
                use: Literal("official"),
                given: MinMaxArray(1, 1, SCALARString)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: PCPatientNameFamily,
                family: SCALARString
            })
        ])
    )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PCPatientGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: PCPatientGeburtsnameFamily;
    family?: string;
}

export const PCPatientGeburtsname: t.Type<PCPatientGeburtsname> = t.recursion(
    "PCPatientGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: PCPatientGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PCPatientMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Patient|1.0.0">;
    id?: string;
}

export const PCPatientMeta: t.Type<PCPatientMeta> = t.recursion("PCPatientMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Patient|1.0.0"
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
export interface PCPatientBirthDate {
    id?: string;
    extension?: (Extension | PCPatientBirthDateDataabsentreason)[];
    value?: string;
}

export const PCPatientBirthDate: t.Type<PCPatientBirthDate> = t.recursion(
    "PCPatientBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PCPatientBirthDateDataabsentreason>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCPatientBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPatientBirthDateDataabsentreason,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARDate
            })
        )
);

interface PCPatient {
    resourceType: "Patient";
    meta: PCPatientMeta;
    name: Array<PCPatientName | PCPatientGeburtsname>;
    id?: string;
    text?: Narrative;
    identifier?: (
        | PCPatientPid
        | PCPatientVersichertenIdGKV
        | PCPatientVersichertennummerpkv
        | PCPatientVersichertennummerkvk
    )[];
    _birthDate?: PCPatientBirthDate;
    birthDate?: string;
}

const PCPatient: t.Type<PCPatient> = t.recursion("PCPatient", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: PCPatientMeta,
                name: ReqArray<
                    t.UnionC<[t.Type<PCPatientName>, t.Type<PCPatientGeburtsname>]>,
                    t.Any
                >(
                    t.union([PCPatientName, PCPatientGeburtsname]),
                    [
                        {
                            codec: PCPatientName,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "use", value: "official" }
                        },
                        {
                            codec: PCPatientGeburtsname,
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
                            t.Type<PCPatientPid>,
                            t.Type<PCPatientVersichertenIdGKV>,
                            t.Type<PCPatientVersichertennummerpkv>,
                            t.Type<PCPatientVersichertennummerkvk>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        PCPatientPid,
                        PCPatientVersichertenIdGKV,
                        PCPatientVersichertennummerpkv,
                        PCPatientVersichertennummerkvk
                    ]),
                    [
                        {
                            codec: PCPatientPid,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "type.coding.code", value: "MR" }
                        },
                        {
                            codec: PCPatientVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        },
                        {
                            codec: PCPatientVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "PKV" }
                        },
                        {
                            codec: PCPatientVersichertennummerkvk,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "kvk" }
                        }
                    ],
                    ["0", "*"]
                ),
                _birthDate: PCPatientBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default PCPatient;
