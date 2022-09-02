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
    MaxArray,
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
import Genderamtlichde from "../../../../../Definitions/HL7DE/0.9.12/Extension/Genderamtlichde";

import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType: t.Type<VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType> =
    t.recursion(
        "VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                        code: Literal("XX")
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
export interface VaccinationPatientPidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPatientPidTypeMRType: t.Type<VaccinationPatientPidTypeMRType> =
    t.recursion("VaccinationPatientPidTypeMRType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("MR")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPatientVersichertenIdGKVTypeGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPatientVersichertenIdGKVTypeGKVType: t.Type<VaccinationPatientVersichertenIdGKVTypeGKVType> =
    t.recursion("VaccinationPatientVersichertenIdGKVTypeGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("GKV")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPatientVersichertennummerpkvTypePKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPatientVersichertennummerpkvTypePKVType: t.Type<VaccinationPatientVersichertennummerpkvTypePKVType> =
    t.recursion("VaccinationPatientVersichertennummerpkvTypePKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("PKV")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType {
    coding: Array<VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType>;
    id?: string;
    text?: string;
}

export const VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType: t.Type<VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType> =
    t.recursion(
        "VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinArray(
                            1,
                            VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierTypeXXType
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
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface VaccinationPatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const VaccinationPatientNameFamilyNamenszusatz: t.Type<VaccinationPatientNameFamilyNamenszusatz> =
    t.recursion("VaccinationPatientNameFamilyNamenszusatz", () =>
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
export interface VaccinationPatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPatientNameFamilyNachname: t.Type<VaccinationPatientNameFamilyNachname> =
    t.recursion("VaccinationPatientNameFamilyNachname", () =>
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
export interface VaccinationPatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPatientNameFamilyVorsatzwort: t.Type<VaccinationPatientNameFamilyVorsatzwort> =
    t.recursion("VaccinationPatientNameFamilyVorsatzwort", () =>
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
 * Spezialisierung der Art des Präfixes, z.B. "AC" für Akademische Titel
 */
export interface VaccinationPatientNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const VaccinationPatientNamePrefixPrefixqualifier: t.Type<VaccinationPatientNamePrefixPrefixqualifier> =
    t.recursion("VaccinationPatientNamePrefixPrefixqualifier", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
                    ),
                    valueCode: Literal("AC")
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
export interface VaccinationPatientGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const VaccinationPatientGeburtsnameFamilyNamenszusatz: t.Type<VaccinationPatientGeburtsnameFamilyNamenszusatz> =
    t.recursion("VaccinationPatientGeburtsnameFamilyNamenszusatz", () =>
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
export interface VaccinationPatientGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPatientGeburtsnameFamilyNachname: t.Type<VaccinationPatientGeburtsnameFamilyNachname> =
    t.recursion("VaccinationPatientGeburtsnameFamilyNachname", () =>
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
export interface VaccinationPatientGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPatientGeburtsnameFamilyVorsatzwort: t.Type<VaccinationPatientGeburtsnameFamilyVorsatzwort> =
    t.recursion("VaccinationPatientGeburtsnameFamilyVorsatzwort", () =>
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType;
    period?: Period;
    assigner?: Reference;
}

export const VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier: t.Type<VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier> =
    t.recursion(
        "VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                        value: SCALARString
                    }),
                    t.partial({
                        id: SCALARString,
                        use: Literal("official"),
                        type: VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifierType,
                        period: Period,
                        assigner: Reference
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPatientReisepassnummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "PPN";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPatientReisepassnummerTypeCoding: t.Type<VaccinationPatientReisepassnummerTypeCoding> =
    t.recursion("VaccinationPatientReisepassnummerTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("PPN")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPatientVersichertennummerkvkTypeCoding: t.Type<VaccinationPatientVersichertennummerkvkTypeCoding> =
    t.recursion("VaccinationPatientVersichertennummerkvkTypeCoding", () =>
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
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientPidType {
    coding: Array<VaccinationPatientPidTypeMRType>;
    id?: string;
}

export const VaccinationPatientPidType: t.Type<VaccinationPatientPidType> = t.recursion(
    "VaccinationPatientPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, VaccinationPatientPidTypeMRType)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientVersichertenIdGKVType {
    coding: Array<VaccinationPatientVersichertenIdGKVTypeGKVType>;
    id?: string;
}

export const VaccinationPatientVersichertenIdGKVType: t.Type<VaccinationPatientVersichertenIdGKVType> =
    t.recursion("VaccinationPatientVersichertenIdGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationPatientVersichertenIdGKVTypeGKVType
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientVersichertennummerpkvType {
    coding: Array<VaccinationPatientVersichertennummerpkvTypePKVType>;
    id?: string;
}

export const VaccinationPatientVersichertennummerpkvType: t.Type<VaccinationPatientVersichertennummerpkvType> =
    t.recursion("VaccinationPatientVersichertennummerpkvType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        VaccinationPatientVersichertennummerpkvTypePKVType
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Organization that issued/manages the identifier.
 */
export interface VaccinationPatientVersichertennummerpkvAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier;
}

export const VaccinationPatientVersichertennummerpkvAssignerReference: t.Type<VaccinationPatientVersichertennummerpkvAssignerReference> =
    t.recursion("VaccinationPatientVersichertennummerpkvAssignerReference", () =>
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
                    identifier:
                        VaccinationPatientVersichertennummerpkvAssignerReferenceIdentifier
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientReisepassnummerType {
    coding: Array<VaccinationPatientReisepassnummerTypeCoding>;
    id?: string;
}

export const VaccinationPatientReisepassnummerType: t.Type<VaccinationPatientReisepassnummerType> =
    t.recursion("VaccinationPatientReisepassnummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationPatientReisepassnummerTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationPatientVersichertennummerkvkType {
    coding: Array<VaccinationPatientVersichertennummerkvkTypeCoding>;
    id?: string;
}

export const VaccinationPatientVersichertennummerkvkType: t.Type<VaccinationPatientVersichertennummerkvkType> =
    t.recursion("VaccinationPatientVersichertennummerkvkType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationPatientVersichertennummerkvkTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface VaccinationPatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPatientNameFamilyNamenszusatz
        | VaccinationPatientNameFamilyNachname
        | VaccinationPatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPatientNameFamily: t.Type<VaccinationPatientNameFamily> =
    t.recursion("VaccinationPatientNameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPatientNameFamilyNamenszusatz>,
                            t.Type<VaccinationPatientNameFamilyNachname>,
                            t.Type<VaccinationPatientNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPatientNameFamilyNamenszusatz,
                        VaccinationPatientNameFamilyNachname,
                        VaccinationPatientNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPatientNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPatientNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPatientNameFamilyVorsatzwort,
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
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface VaccinationPatientNamePrefix {
    id?: string;
    extension?: (Extension | VaccinationPatientNamePrefixPrefixqualifier)[];
    value?: string;
}

export const VaccinationPatientNamePrefix: t.Type<VaccinationPatientNamePrefix> =
    t.recursion("VaccinationPatientNamePrefix", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPatientNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, VaccinationPatientNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPatientNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
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
export interface VaccinationPatientGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPatientGeburtsnameFamilyNamenszusatz
        | VaccinationPatientGeburtsnameFamilyNachname
        | VaccinationPatientGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPatientGeburtsnameFamily: t.Type<VaccinationPatientGeburtsnameFamily> =
    t.recursion("VaccinationPatientGeburtsnameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPatientGeburtsnameFamilyNamenszusatz>,
                            t.Type<VaccinationPatientGeburtsnameFamilyNachname>,
                            t.Type<VaccinationPatientGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPatientGeburtsnameFamilyNamenszusatz,
                        VaccinationPatientGeburtsnameFamilyNachname,
                        VaccinationPatientGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPatientGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPatientGeburtsnameFamilyNachname,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPatientGeburtsnameFamilyVorsatzwort,
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
export interface VaccinationPatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationPatientBirthDateDataabsentreason: t.Type<VaccinationPatientBirthDateDataabsentreason> =
    t.recursion("VaccinationPatientBirthDateDataabsentreason", () =>
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
export interface VaccinationPatientPid {
    type: VaccinationPatientPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
}

export const VaccinationPatientPid: t.Type<VaccinationPatientPid> = t.recursion(
    "VaccinationPatientPid",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPatientPidType,
                    system: SCALARUri,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("usual")
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationPatientVersichertenIdGKV {
    type: VaccinationPatientVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
}

export const VaccinationPatientVersichertenIdGKV: t.Type<VaccinationPatientVersichertenIdGKV> =
    t.recursion("VaccinationPatientVersichertenIdGKV", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPatientVersichertenIdGKVType,
                    system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official")
                })
            ])
        )
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationPatientVersichertennummerpkv {
    type: VaccinationPatientVersichertennummerpkvType;
    value: string;
    assigner: VaccinationPatientVersichertennummerpkvAssignerReference;
    id?: string;
    use?: "secondary";
    system?: string;
    period?: Period;
}

export const VaccinationPatientVersichertennummerpkv: t.Type<VaccinationPatientVersichertennummerpkv> =
    t.recursion("VaccinationPatientVersichertennummerpkv", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPatientVersichertennummerpkvType,
                    value: SCALARString,
                    assigner: VaccinationPatientVersichertennummerpkvAssignerReference
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
export interface VaccinationPatientReisepassnummer {
    type: VaccinationPatientReisepassnummerType;
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    system?: string;
}

export const VaccinationPatientReisepassnummer: t.Type<VaccinationPatientReisepassnummer> =
    t.recursion("VaccinationPatientReisepassnummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPatientReisepassnummerType,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: IdentifieruseVS,
                    system: SCALARUri
                })
            ])
        )
    );

/**
 * An identifier for this patient.
 */
export interface VaccinationPatientVersichertennummerkvk {
    type: VaccinationPatientVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
}

export const VaccinationPatientVersichertennummerkvk: t.Type<VaccinationPatientVersichertennummerkvk> =
    t.recursion("VaccinationPatientVersichertennummerkvk", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPatientVersichertennummerkvkType,
                    system: Literal(
                        "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer"
                    ),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: IdentifieruseVS
                })
            ])
        )
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface VaccinationPatientName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: VaccinationPatientNameFamily;
    family?: string;
    _prefix?: Array<VaccinationPatientNamePrefix>;
    prefix?: Array<string>;
}

export const VaccinationPatientName: t.Type<VaccinationPatientName> = t.recursion(
    "VaccinationPatientName",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("official"),
                    given: MinMaxArray(1, 1, SCALARString)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: VaccinationPatientNameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, VaccinationPatientNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface VaccinationPatientGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: VaccinationPatientGeburtsnameFamily;
    family?: string;
}

export const VaccinationPatientGeburtsname: t.Type<VaccinationPatientGeburtsname> =
    t.recursion("VaccinationPatientGeburtsname", () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: VaccinationPatientGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationPatientMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0">;
    id?: string;
}

export const VaccinationPatientMeta: t.Type<VaccinationPatientMeta> = t.recursion(
    "VaccinationPatientMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0"
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
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
export interface VaccinationPatientGender {
    id?: string;
    extension?: (Extension | Genderamtlichde)[];
    value?: string;
}

export const VaccinationPatientGender: t.Type<VaccinationPatientGender> = t.recursion(
    "VaccinationPatientGender",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<Genderamtlichde>]>,
                    t.Any
                >(
                    t.union([Extension, Genderamtlichde]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Genderamtlichde,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/gender-amtlich-de"
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
 * The date of birth for the individual.
 */
export interface VaccinationPatientBirthDate {
    id?: string;
    extension?: (Extension | VaccinationPatientBirthDateDataabsentreason)[];
    value?: string;
}

export const VaccinationPatientBirthDate: t.Type<VaccinationPatientBirthDate> =
    t.recursion("VaccinationPatientBirthDate", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPatientBirthDateDataabsentreason>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, VaccinationPatientBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPatientBirthDateDataabsentreason,
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

interface VaccinationPatient {
    resourceType: "Patient";
    meta: VaccinationPatientMeta;
    identifier: Array<
        | VaccinationPatientPid
        | VaccinationPatientVersichertenIdGKV
        | VaccinationPatientVersichertennummerpkv
        | VaccinationPatientReisepassnummer
        | VaccinationPatientVersichertennummerkvk
    >;
    name: Array<VaccinationPatientName | VaccinationPatientGeburtsname>;
    id?: string;
    text?: Narrative;
    _gender?: VaccinationPatientGender;
    gender?: string;
    _birthDate?: VaccinationPatientBirthDate;
    birthDate?: string;
}

const VaccinationPatient: t.Type<VaccinationPatient> = t.recursion(
    "VaccinationPatient",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Patient"),
                    meta: VaccinationPatientMeta,
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPatientPid>,
                                t.Type<VaccinationPatientVersichertenIdGKV>,
                                t.Type<VaccinationPatientVersichertennummerpkv>,
                                t.Type<VaccinationPatientReisepassnummer>,
                                t.Type<VaccinationPatientVersichertennummerkvk>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationPatientPid,
                            VaccinationPatientVersichertenIdGKV,
                            VaccinationPatientVersichertennummerpkv,
                            VaccinationPatientReisepassnummer,
                            VaccinationPatientVersichertennummerkvk
                        ]),
                        [
                            {
                                codec: VaccinationPatientPid,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "type.coding.code", value: "MR" }
                            },
                            {
                                codec: VaccinationPatientVersichertenIdGKV,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "GKV" }
                            },
                            {
                                codec: VaccinationPatientVersichertennummerpkv,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "PKV" }
                            },
                            {
                                codec: VaccinationPatientReisepassnummer,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "type.coding.code", value: "PPN" }
                            },
                            {
                                codec: VaccinationPatientVersichertennummerkvk,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "kvk" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    name: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPatientName>,
                                t.Type<VaccinationPatientGeburtsname>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([VaccinationPatientName, VaccinationPatientGeburtsname]),
                        [
                            {
                                codec: VaccinationPatientName,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "use", value: "official" }
                            },
                            {
                                codec: VaccinationPatientGeburtsname,
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
                    _gender: VaccinationPatientGender,
                    gender: SCALARCode,
                    _birthDate: VaccinationPatientBirthDate,
                    birthDate: SCALARDate
                })
            ])
        )
);

export default VaccinationPatient;
