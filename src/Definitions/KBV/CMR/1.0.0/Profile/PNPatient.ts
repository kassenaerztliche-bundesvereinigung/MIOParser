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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Patient"

/**
 * A reference to a code defined by a terminology system.
 */
export interface PNPatientPidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PNPatientPidTypeMRType: t.Type<PNPatientPidTypeMRType> = t.recursion(
    "PNPatientPidTypeMRType",
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
export interface PNPatientVersichertenIdGKVTypeGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PNPatientVersichertenIdGKVTypeGKVType: t.Type<PNPatientVersichertenIdGKVTypeGKVType> = t.recursion(
    "PNPatientVersichertenIdGKVTypeGKVType",
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
export interface PNPatientVersichertennummerpkvTypePKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PNPatientVersichertennummerpkvTypePKVType: t.Type<PNPatientVersichertennummerpkvTypePKVType> = t.recursion(
    "PNPatientVersichertennummerpkvTypePKVType",
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
export interface PNPatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PNPatientNameFamilyNamenszusatz: t.Type<PNPatientNameFamilyNamenszusatz> = t.recursion(
    "PNPatientNameFamilyNamenszusatz",
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
export interface PNPatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PNPatientNameFamilyNachname: t.Type<PNPatientNameFamilyNachname> = t.recursion(
    "PNPatientNameFamilyNachname",
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
export interface PNPatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PNPatientNameFamilyVorsatzwort: t.Type<PNPatientNameFamilyVorsatzwort> = t.recursion(
    "PNPatientNameFamilyVorsatzwort",
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
export interface PNPatientGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PNPatientGeburtsnameFamilyNamenszusatz: t.Type<PNPatientGeburtsnameFamilyNamenszusatz> = t.recursion(
    "PNPatientGeburtsnameFamilyNamenszusatz",
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
export interface PNPatientGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PNPatientGeburtsnameFamilyNachname: t.Type<PNPatientGeburtsnameFamilyNachname> = t.recursion(
    "PNPatientGeburtsnameFamilyNachname",
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
export interface PNPatientGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PNPatientGeburtsnameFamilyVorsatzwort: t.Type<PNPatientGeburtsnameFamilyVorsatzwort> = t.recursion(
    "PNPatientGeburtsnameFamilyVorsatzwort",
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
export interface PNPatientVersichertennummerpkvAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PNPatientVersichertennummerpkvAssignerIdentifier: t.Type<PNPatientVersichertennummerpkvAssignerIdentifier> = t.recursion(
    "PNPatientVersichertennummerpkvAssignerIdentifier",
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
export interface PNPatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PNPatientVersichertennummerkvkTypeCoding: t.Type<PNPatientVersichertennummerkvkTypeCoding> = t.recursion(
    "PNPatientVersichertennummerkvkTypeCoding",
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
export interface PNPatientPidType {
    coding: Array<PNPatientPidTypeMRType>;
    id?: string;
    text?: string;
}

export const PNPatientPidType: t.Type<PNPatientPidType> = t.recursion(
    "PNPatientPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PNPatientPidTypeMRType)
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
export interface PNPatientVersichertenIdGKVType {
    coding: Array<PNPatientVersichertenIdGKVTypeGKVType>;
    id?: string;
    text?: string;
}

export const PNPatientVersichertenIdGKVType: t.Type<PNPatientVersichertenIdGKVType> = t.recursion(
    "PNPatientVersichertenIdGKVType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PNPatientVersichertenIdGKVTypeGKVType)
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
export interface PNPatientVersichertennummerpkvType {
    coding: Array<PNPatientVersichertennummerpkvTypePKVType>;
    id?: string;
    text?: string;
}

export const PNPatientVersichertennummerpkvType: t.Type<PNPatientVersichertennummerpkvType> = t.recursion(
    "PNPatientVersichertennummerpkvType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PNPatientVersichertennummerpkvTypePKVType)
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
export interface PNPatientVersichertennummerpkvAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PNPatientVersichertennummerpkvAssignerIdentifier;
}

export const PNPatientVersichertennummerpkvAssigner: t.Type<PNPatientVersichertennummerpkvAssigner> = t.recursion(
    "PNPatientVersichertennummerpkvAssigner",
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
                    identifier: PNPatientVersichertennummerpkvAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PNPatientVersichertennummerkvkType {
    coding: Array<PNPatientVersichertennummerkvkTypeCoding>;
    id?: string;
    text?: string;
}

export const PNPatientVersichertennummerkvkType: t.Type<PNPatientVersichertennummerkvkType> = t.recursion(
    "PNPatientVersichertennummerkvkType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PNPatientVersichertennummerkvkTypeCoding)
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
export interface PNPatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | PNPatientNameFamilyNamenszusatz
        | PNPatientNameFamilyNachname
        | PNPatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PNPatientNameFamily: t.Type<PNPatientNameFamily> = t.recursion(
    "PNPatientNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PNPatientNameFamilyNamenszusatz>,
                            t.Type<PNPatientNameFamilyNachname>,
                            t.Type<PNPatientNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PNPatientNameFamilyNamenszusatz,
                        PNPatientNameFamilyNachname,
                        PNPatientNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PNPatientNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: PNPatientNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: PNPatientNameFamilyVorsatzwort,
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
export interface PNPatientGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | PNPatientGeburtsnameFamilyNamenszusatz
        | PNPatientGeburtsnameFamilyNachname
        | PNPatientGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PNPatientGeburtsnameFamily: t.Type<PNPatientGeburtsnameFamily> = t.recursion(
    "PNPatientGeburtsnameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PNPatientGeburtsnameFamilyNamenszusatz>,
                            t.Type<PNPatientGeburtsnameFamilyNachname>,
                            t.Type<PNPatientGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PNPatientGeburtsnameFamilyNamenszusatz,
                        PNPatientGeburtsnameFamilyNachname,
                        PNPatientGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PNPatientGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: PNPatientGeburtsnameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: PNPatientGeburtsnameFamilyVorsatzwort,
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
export interface PNPatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const PNPatientBirthDateDataabsentreason: t.Type<PNPatientBirthDateDataabsentreason> = t.recursion(
    "PNPatientBirthDateDataabsentreason",
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
export interface PNPatientPid {
    type: PNPatientPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
    period?: Period;
    assigner?: Reference;
}

export const PNPatientPid: t.Type<PNPatientPid> = t.recursion("PNPatientPid", () =>
    Excess(
        t.intersection([
            t.type({
                type: PNPatientPidType,
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
export interface PNPatientVersichertenIdGKV {
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
    type?: PNPatientVersichertenIdGKVType;
    period?: Period;
    assigner?: Reference;
}

export const PNPatientVersichertenIdGKV: t.Type<PNPatientVersichertenIdGKV> = t.recursion(
    "PNPatientVersichertenIdGKV",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: PNPatientVersichertenIdGKVType,
                    period: Period,
                    assigner: Reference
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PNPatientVersichertennummerpkv {
    type: PNPatientVersichertennummerpkvType;
    value: string;
    assigner: PNPatientVersichertennummerpkvAssigner;
    id?: string;
    use?: "secondary";
    system?: string;
    period?: Period;
}

export const PNPatientVersichertennummerpkv: t.Type<PNPatientVersichertennummerpkv> = t.recursion(
    "PNPatientVersichertennummerpkv",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PNPatientVersichertennummerpkvType,
                    value: SCALARString,
                    assigner: PNPatientVersichertennummerpkvAssigner
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("secondary"),
                    system: SCALARUri,
                    period: Period
                })
            ])
        )
);

/**
 * An identifier for this patient.
 */
export interface PNPatientVersichertennummerkvk {
    type: PNPatientVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    period?: Period;
    assigner?: Reference;
}

export const PNPatientVersichertennummerkvk: t.Type<PNPatientVersichertennummerkvk> = t.recursion(
    "PNPatientVersichertennummerkvk",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PNPatientVersichertennummerkvkType,
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
export interface PNPatientName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: PNPatientNameFamily;
    family?: string;
}

export const PNPatientName: t.Type<PNPatientName> = t.recursion("PNPatientName", () =>
    Excess(
        t.intersection([
            t.type({
                use: Literal("official"),
                given: MinMaxArray(1, 1, SCALARString)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: PNPatientNameFamily,
                family: SCALARString
            })
        ])
    )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PNPatientGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: PNPatientGeburtsnameFamily;
    family?: string;
}

export const PNPatientGeburtsname: t.Type<PNPatientGeburtsname> = t.recursion(
    "PNPatientGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: PNPatientGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PNPatientMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Patient|1.0.0">;
    id?: string;
}

export const PNPatientMeta: t.Type<PNPatientMeta> = t.recursion("PNPatientMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Patient|1.0.0"
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
export interface PNPatientBirthDate {
    id?: string;
    extension?: (Extension | PNPatientBirthDateDataabsentreason)[];
    value?: string;
}

export const PNPatientBirthDate: t.Type<PNPatientBirthDate> = t.recursion(
    "PNPatientBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PNPatientBirthDateDataabsentreason>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PNPatientBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PNPatientBirthDateDataabsentreason,
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

interface PNPatient {
    resourceType: "Patient";
    meta: PNPatientMeta;
    name: Array<PNPatientName | PNPatientGeburtsname>;
    id?: string;
    text?: Narrative;
    identifier?: (
        | PNPatientPid
        | PNPatientVersichertenIdGKV
        | PNPatientVersichertennummerpkv
        | PNPatientVersichertennummerkvk
    )[];
    _birthDate?: PNPatientBirthDate;
    birthDate?: string;
}

const PNPatient: t.Type<PNPatient> = t.recursion("PNPatient", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: PNPatientMeta,
                name: ReqArray<
                    t.UnionC<[t.Type<PNPatientName>, t.Type<PNPatientGeburtsname>]>,
                    t.Any
                >(
                    t.union([PNPatientName, PNPatientGeburtsname]),
                    [
                        {
                            codec: PNPatientName,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "use", value: "official" }
                        },
                        {
                            codec: PNPatientGeburtsname,
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
                            t.Type<PNPatientPid>,
                            t.Type<PNPatientVersichertenIdGKV>,
                            t.Type<PNPatientVersichertennummerpkv>,
                            t.Type<PNPatientVersichertennummerkvk>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        PNPatientPid,
                        PNPatientVersichertenIdGKV,
                        PNPatientVersichertennummerpkv,
                        PNPatientVersichertennummerkvk
                    ]),
                    [
                        {
                            codec: PNPatientPid,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "type.coding.code", value: "MR" }
                        },
                        {
                            codec: PNPatientVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        },
                        {
                            codec: PNPatientVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "PKV" }
                        },
                        {
                            codec: PNPatientVersichertennummerkvk,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "kvk" }
                        }
                    ],
                    ["0", "*"]
                ),
                _birthDate: PNPatientBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default PNPatient;
