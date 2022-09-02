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
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import AdministrativegenderVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Administrativegender";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";

import DatatypeContactpoint from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypeContactpoint";
import DatatypeMaidenName from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypeMaidenName";
import DatatypePostOfficeBox from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypePostOfficeBox";
import DatatypeStreetAddress from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypeStreetAddress";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GemRSAnlage8";
import Genderamtlichde from "../../../../Definitions/HL7DE/0.9.13/Extension/Genderamtlichde";
import HumanName from "../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import Identifieriknr from "../../../../Definitions/HL7DE/0.9.13/Profile/Identifieriknr";

import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import LinktypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Linktype";
import MaritalstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Maritalstatus";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";

import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import PatientcontactrelationshipVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Patientcontactrelationship";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Patient"

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface PatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const PatientNameFamilyNamenszusatz: t.Type<PatientNameFamilyNamenszusatz> =
    t.recursion("PatientNameFamilyNamenszusatz", () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/humanname-namenszusatz"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface PatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PatientNameFamilyNachname: t.Type<PatientNameFamilyNachname> = t.recursion(
    "PatientNameFamilyNachname",
    () =>
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
);

/**
* Vorsatzwort wie z.B.: von, van, zu
Vgl. auch VSDM-Spezifikation der Gematik (Versichertenstammdatenmanagement, "eGK")
*/
export interface PatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PatientNameFamilyVorsatzwort: t.Type<PatientNameFamilyVorsatzwort> =
    t.recursion("PatientNameFamilyVorsatzwort", () =>
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
    );

/**
 * Spezialisierung der Art des Präfixes, z.B. "AC" für Akademische Titel
 */
export interface PatientNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const PatientNamePrefixPrefixqualifier: t.Type<PatientNamePrefixPrefixqualifier> =
    t.recursion("PatientNamePrefixPrefixqualifier", () =>
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
    );

/**
 * Content in other Language.
 */
export interface PatientGenderAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const PatientGenderAnzeigenameCodeContent: t.Type<PatientGenderAnzeigenameCodeContent> =
    t.recursion("PatientGenderAnzeigenameCodeContent", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface PatientPidTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    display: "Medical record number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const PatientPidTypeCoding: t.Type<PatientPidTypeCoding> = t.recursion(
    "PatientPidTypeCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("MR"),
                display: Literal("Medical record number")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientVersichertenIdGKVTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    display: "Gesetzliche Krankenversicherung";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const PatientVersichertenIdGKVTypeCoding: t.Type<PatientVersichertenIdGKVTypeCoding> =
    t.recursion("PatientVersichertenIdGKVTypeCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                code: Literal("GKV"),
                display: Literal("Gesetzliche Krankenversicherung")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientVersichertennummerpkvTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    display: "Private Krankenversicherung";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const PatientVersichertennummerpkvTypeCoding: t.Type<PatientVersichertennummerpkvTypeCoding> =
    t.recursion("PatientVersichertennummerpkvTypeCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                code: Literal("PKV"),
                display: Literal("Private Krankenversicherung")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientReisepassnummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "PPN";
    display: "Passport number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const PatientReisepassnummerTypeCoding: t.Type<PatientReisepassnummerTypeCoding> =
    t.recursion("PatientReisepassnummerTypeCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("PPN"),
                display: Literal("Passport number")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    display: "Krankenversichertenkarte";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const PatientVersichertennummerkvkTypeCoding: t.Type<PatientVersichertennummerkvkTypeCoding> =
    t.recursion("PatientVersichertennummerkvkTypeCoding", () =>
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
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientPidType {
    coding: Array<PatientPidTypeCoding>;
    id?: string;
    text?: string;
}

export const PatientPidType: t.Type<PatientPidType> = t.recursion("PatientPidType", () =>
    t.intersection([
        t.type({
            coding: MinMaxArray(1, 1, PatientPidTypeCoding)
        }),
        t.partial({
            id: SCALARString,
            text: SCALARString
        })
    ])
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientVersichertenIdGKVType {
    coding: Array<PatientVersichertenIdGKVTypeCoding>;
    id?: string;
    text?: string;
}

export const PatientVersichertenIdGKVType: t.Type<PatientVersichertenIdGKVType> =
    t.recursion("PatientVersichertenIdGKVType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, PatientVersichertenIdGKVTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientVersichertennummerpkvType {
    coding: Array<PatientVersichertennummerpkvTypeCoding>;
    id?: string;
    text?: string;
}

export const PatientVersichertennummerpkvType: t.Type<PatientVersichertennummerpkvType> =
    t.recursion("PatientVersichertennummerpkvType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, PatientVersichertennummerpkvTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Organization that issued/manages the identifier.
 */
export interface PatientVersichertennummerpkvAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: Identifieriknr;
}

export const PatientVersichertennummerpkvAssignerReference: t.Type<PatientVersichertennummerpkvAssignerReference> =
    t.recursion("PatientVersichertennummerpkvAssignerReference", () =>
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
                identifier: Identifieriknr
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientReisepassnummerType {
    coding: Array<PatientReisepassnummerTypeCoding>;
    id?: string;
    text?: string;
}

export const PatientReisepassnummerType: t.Type<PatientReisepassnummerType> = t.recursion(
    "PatientReisepassnummerType",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, PatientReisepassnummerTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientVersichertennummerkvkType {
    coding: Array<PatientVersichertennummerkvkTypeCoding>;
    id?: string;
    text?: string;
}

export const PatientVersichertennummerkvkType: t.Type<PatientVersichertennummerkvkType> =
    t.recursion("PatientVersichertennummerkvkType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, PatientVersichertennummerkvkTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface PatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | PatientNameFamilyNamenszusatz
        | PatientNameFamilyNachname
        | PatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PatientNameFamily: t.Type<PatientNameFamily> = t.recursion(
    "PatientNameFamily",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PatientNameFamilyNamenszusatz>,
                        t.Type<PatientNameFamilyNachname>,
                        t.Type<PatientNameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PatientNameFamilyNamenszusatz,
                    PatientNameFamilyNachname,
                    PatientNameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PatientNameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: PatientNameFamilyNachname,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: PatientNameFamilyVorsatzwort,
                        occurrence: ["0", "*"],
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
);

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface PatientNamePrefix {
    extension: Array<Extension | PatientNamePrefixPrefixqualifier>;
    id?: string;
    value?: string;
}

export const PatientNamePrefix: t.Type<PatientNamePrefix> = t.recursion(
    "PatientNamePrefix",
    () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PatientNamePrefixPrefixqualifier>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PatientNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PatientNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
);

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface PatientGenderAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | PatientGenderAnzeigenameCodeContent)[];
}

export const PatientGenderAnzeigenameCode: t.Type<PatientGenderAnzeigenameCode> =
    t.recursion("PatientGenderAnzeigenameCode", () =>
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
                        [t.Type<Extension>, t.Type<PatientGenderAnzeigenameCodeContent>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PatientGenderAnzeigenameCodeContent]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PatientGenderAnzeigenameCodeContent,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface PatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const PatientBirthDateDataabsentreason: t.Type<PatientBirthDateDataabsentreason> =
    t.recursion("PatientBirthDateDataabsentreason", () =>
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
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PatientPid {
    type: PatientPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
    period?: Period;
    assigner?: Reference;
}

export const PatientPid: t.Type<PatientPid> = t.recursion("PatientPid", () =>
    t.intersection([
        t.type({
            type: PatientPidType,
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
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PatientVersichertenIdGKV {
    type: PatientVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const PatientVersichertenIdGKV: t.Type<PatientVersichertenIdGKV> = t.recursion(
    "PatientVersichertenIdGKV",
    () =>
        t.intersection([
            t.type({
                type: PatientVersichertenIdGKVType,
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
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PatientVersichertennummerpkv {
    type: PatientVersichertennummerpkvType;
    value: string;
    assigner: PatientVersichertennummerpkvAssignerReference;
    id?: string;
    use?: "secondary";
    system?: string;
    period?: Period;
}

export const PatientVersichertennummerpkv: t.Type<PatientVersichertennummerpkv> =
    t.recursion("PatientVersichertennummerpkv", () =>
        t.intersection([
            t.type({
                type: PatientVersichertennummerpkvType,
                value: SCALARString,
                assigner: PatientVersichertennummerpkvAssignerReference
            }),
            t.partial({
                id: SCALARString,
                use: Literal("secondary"),
                system: SCALARUri,
                period: Period
            })
        ])
    );

/**
 * An identifier for this patient.
 */
export interface PatientReisepassnummer {
    type: PatientReisepassnummerType;
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    system?: string;
    period?: Period;
    assigner?: Reference;
}

export const PatientReisepassnummer: t.Type<PatientReisepassnummer> = t.recursion(
    "PatientReisepassnummer",
    () =>
        t.intersection([
            t.type({
                type: PatientReisepassnummerType,
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: IdentifieruseVS,
                system: SCALARUri,
                period: Period,
                assigner: Reference
            })
        ])
);

/**
 * An identifier for this patient.
 */
export interface PatientVersichertennummerkvk {
    type: PatientVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    period?: Period;
    assigner?: Reference;
}

export const PatientVersichertennummerkvk: t.Type<PatientVersichertennummerkvk> =
    t.recursion("PatientVersichertennummerkvk", () =>
        t.intersection([
            t.type({
                type: PatientVersichertennummerkvkType,
                system: Literal("http://fhir.de/NamingSystem/gkv/kvk-versichertennummer"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: IdentifieruseVS,
                period: Period,
                assigner: Reference
            })
        ])
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PatientName {
    use: "official";
    id?: string;
    text?: string;
    _family?: PatientNameFamily;
    family?: string;
    given?: Array<string>;
    _prefix?: Array<PatientNamePrefix>;
    prefix?: Array<string>;
    suffix?: Array<string>;
    period?: Period;
}

export const PatientName: t.Type<PatientName> = t.recursion("PatientName", () =>
    t.intersection([
        t.type({
            use: Literal("official")
        }),
        t.partial({
            id: SCALARString,
            text: SCALARString,
            _family: PatientNameFamily,
            family: SCALARString,
            given: MaxArray(1, SCALARString),
            _prefix: MaxArray(1, PatientNamePrefix),
            prefix: MaxArray(1, SCALARString),
            suffix: MaxArray(1, SCALARString),
            period: Period
        })
    ])
);

/**
 * Address for the contact person.
 */
export interface PatientContactAddress {
    id?: string;
    use?: AddressuseVS;
    type?: AddresstypeVS;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: Period;
}

export const PatientContactAddress: t.Type<PatientContactAddress> = t.recursion(
    "PatientContactAddress",
    () =>
        t.partial({
            id: SCALARString,
            use: AddressuseVS,
            type: AddresstypeVS,
            text: SCALARString,
            line: t.array(SCALARString),
            city: SCALARString,
            district: SCALARString,
            state: SCALARString,
            postalCode: SCALARString,
            country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
            period: Period
        })
);

/**
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
export interface PatientGender {
    id?: string;
    extension?: (Extension | Genderamtlichde | PatientGenderAnzeigenameCode)[];
    value?: string;
}

export const PatientGender: t.Type<PatientGender> = t.recursion("PatientGender", () =>
    t.partial({
        id: SCALARString,
        extension: ReqArray<
            t.UnionC<
                [
                    t.Type<Extension>,
                    t.Type<Genderamtlichde>,
                    t.Type<PatientGenderAnzeigenameCode>
                ]
            >,
            t.Any
        >(
            t.union([Extension, Genderamtlichde, PatientGenderAnzeigenameCode]),
            [
                { codec: Extension, occurrence: ["0", "*"], sliceBy: { path: "url" } },
                {
                    codec: Genderamtlichde,
                    occurrence: ["0", "1"],
                    sliceBy: {
                        path: "url",
                        value: "http://fhir.de/StructureDefinition/gender-amtlich-de"
                    }
                },
                {
                    codec: PatientGenderAnzeigenameCode,
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
 * The date of birth for the individual.
 */
export interface PatientBirthDate {
    id?: string;
    extension?: (Extension | PatientBirthDateDataabsentreason)[];
    value?: string;
}

export const PatientBirthDate: t.Type<PatientBirthDate> = t.recursion(
    "PatientBirthDate",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<PatientBirthDateDataabsentreason>]>,
                t.Any
            >(
                t.union([Extension, PatientBirthDateDataabsentreason]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PatientBirthDateDataabsentreason,
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
);

/**
 * A contact party (e.g. guardian, partner, friend) for the patient.
 */
export interface PatientContact {
    id?: string;
    relationship?: PatientcontactrelationshipVS[];
    name?: HumanName;
    telecom?: ContactPoint[];
    address?: PatientContactAddress;
    gender?: AdministrativegenderVS;
    organization?: Reference;
    period?: Period;
}

export const PatientContact: t.Type<PatientContact> = t.recursion("PatientContact", () =>
    t.partial({
        id: SCALARString,
        relationship: t.array(
            ExtensibleCheck<t.Type<PatientcontactrelationshipVS>>(
                PatientcontactrelationshipVS
            )
        ),
        name: HumanName,
        telecom: t.array(ContactPoint),
        address: PatientContactAddress,
        gender: AdministrativegenderVS,
        organization: Reference,
        period: Period
    })
);

/**
 * Die Sprache, die zur Kommunikation mit dem Patienten über medizinische Themen verwendet werden kann.
 */
export interface PatientCommunication {
    language: CodeableConcept;
    id?: string;
    preferred?: boolean;
}

export const PatientCommunication: t.Type<PatientCommunication> = t.recursion(
    "PatientCommunication",
    () =>
        t.intersection([
            t.type({
                language: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                preferred: SCALARBoolean
            })
        ])
);

/**
 * Link to another patient resource that concerns the same actual patient.
 */
export interface PatientLink {
    other: Reference;
    type: LinktypeVS;
    id?: string;
}

export const PatientLink: t.Type<PatientLink> = t.recursion("PatientLink", () =>
    t.intersection([
        t.type({
            other: Reference,
            type: LinktypeVS
        }),
        t.partial({
            id: SCALARString
        })
    ])
);

interface Patient {
    name: Array<PatientName | DatatypeMaidenName>;
    resourceType?: "Patient";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: (
        | PatientPid
        | PatientVersichertenIdGKV
        | PatientVersichertennummerpkv
        | PatientReisepassnummer
        | PatientVersichertennummerkvk
    )[];
    active?: boolean;
    telecom?: DatatypeContactpoint[];
    _gender?: PatientGender;
    gender?: string;
    _birthDate?: PatientBirthDate;
    birthDate?: string;
    deceasedBoolean?: boolean;
    deceasedDateTime?: string;
    address?: (DatatypeStreetAddress | DatatypePostOfficeBox)[];
    maritalStatus?: MaritalstatusVS;
    multipleBirthBoolean?: boolean;
    multipleBirthInteger?: number;
    photo?: Attachment[];
    contact?: PatientContact[];
    communication?: PatientCommunication[];
    generalPractitioner?: Reference[];
    managingOrganization?: Reference;
    link?: PatientLink[];
}

const Patient: t.Type<Patient> = t.recursion("Patient", () =>
    t.intersection([
        t.type({
            name: ReqArray<
                t.UnionC<[t.Type<PatientName>, t.Type<DatatypeMaidenName>]>,
                t.Any
            >(
                t.union([PatientName, DatatypeMaidenName]),
                [
                    {
                        codec: PatientName,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "use", value: "official" }
                    },
                    {
                        codec: DatatypeMaidenName,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "use",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Maiden_Name"
                        }
                    }
                ],
                ["1", "*"]
            )
        }),
        t.partial({
            resourceType: Literal("Patient"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: ReqArray<
                t.UnionC<
                    [
                        t.Type<PatientPid>,
                        t.Type<PatientVersichertenIdGKV>,
                        t.Type<PatientVersichertennummerpkv>,
                        t.Type<PatientReisepassnummer>,
                        t.Type<PatientVersichertennummerkvk>
                    ]
                >,
                t.Any
            >(
                t.union([
                    PatientPid,
                    PatientVersichertenIdGKV,
                    PatientVersichertennummerpkv,
                    PatientReisepassnummer,
                    PatientVersichertennummerkvk
                ]),
                [
                    {
                        codec: PatientPid,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "type.coding.code", value: "MR" }
                    },
                    {
                        codec: PatientVersichertenIdGKV,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type.coding.code", value: "GKV" }
                    },
                    {
                        codec: PatientVersichertennummerpkv,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type.coding.code", value: "PKV" }
                    },
                    {
                        codec: PatientReisepassnummer,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "type.coding.code", value: "PPN" }
                    },
                    {
                        codec: PatientVersichertennummerkvk,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type.coding.code", value: "kvk" }
                    }
                ],
                ["0", "*"]
            ),
            active: SCALARBoolean,
            telecom: t.array(DatatypeContactpoint),
            _gender: PatientGender,
            gender: SCALARCode,
            _birthDate: PatientBirthDate,
            birthDate: SCALARDate,
            deceasedBoolean: SCALARBoolean,
            deceasedDateTime: SCALARDateTime,
            address: ReqArray<
                t.UnionC<[t.Type<DatatypeStreetAddress>, t.Type<DatatypePostOfficeBox>]>,
                t.Any
            >(
                t.union([DatatypeStreetAddress, DatatypePostOfficeBox]),
                [
                    {
                        codec: DatatypeStreetAddress,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "type",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Street_Address"
                        }
                    },
                    {
                        codec: DatatypePostOfficeBox,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "type",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Post_Office_Box"
                        }
                    }
                ],
                ["0", "*"]
            ),
            maritalStatus: ExtensibleCheck<t.Type<MaritalstatusVS>>(MaritalstatusVS),
            multipleBirthBoolean: SCALARBoolean,
            multipleBirthInteger: SCALARInteger,
            photo: t.array(Attachment),
            contact: t.array(PatientContact),
            communication: t.array(PatientCommunication),
            generalPractitioner: t.array(Reference),
            managingOrganization: Reference,
            link: t.array(PatientLink)
        })
    ])
);

export default Patient;
