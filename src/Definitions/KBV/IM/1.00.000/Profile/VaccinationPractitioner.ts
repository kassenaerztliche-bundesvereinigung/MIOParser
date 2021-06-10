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
    MaxArray,
    MinMaxArray,
    ReqArray
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import VaccinationAdditionalComment from "../../../../../Definitions/KBV/IM/1.00.000/Extension/VaccinationAdditionalComment";
import VaccinationPractitionerFunctionVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationPractitionerFunction";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPractitionerANRTypeLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerANRTypeLANRType: t.Type<VaccinationPractitionerANRTypeLANRType> = t.recursion(
    "VaccinationPractitionerANRTypeLANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("LANR")
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
export interface VaccinationPractitionerEFNTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerEFNTypeDNType: t.Type<VaccinationPractitionerEFNTypeDNType> = t.recursion(
    "VaccinationPractitionerEFNTypeDNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("DN")
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
export interface VaccinationPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const VaccinationPractitionerNameFamilyNamenszusatz: t.Type<VaccinationPractitionerNameFamilyNamenszusatz> = t.recursion(
    "VaccinationPractitionerNameFamilyNamenszusatz",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7"
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
export interface VaccinationPractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerNameFamilyNachname: t.Type<VaccinationPractitionerNameFamilyNachname> = t.recursion(
    "VaccinationPractitionerNameFamilyNachname",
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
export interface VaccinationPractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerNameFamilyVorsatzwort: t.Type<VaccinationPractitionerNameFamilyVorsatzwort> = t.recursion(
    "VaccinationPractitionerNameFamilyVorsatzwort",
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
 * Spezialisierung der Art des Präfixes, z.B. "AC" für Akademische Titel
 */
export interface VaccinationPractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const VaccinationPractitionerNamePrefixPrefixqualifier: t.Type<VaccinationPractitionerNamePrefixPrefixqualifier> = t.recursion(
    "VaccinationPractitionerNamePrefixPrefixqualifier",
    () =>
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
export interface VaccinationPractitionerGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const VaccinationPractitionerGeburtsnameFamilyNamenszusatz: t.Type<VaccinationPractitionerGeburtsnameFamilyNamenszusatz> = t.recursion(
    "VaccinationPractitionerGeburtsnameFamilyNamenszusatz",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7"
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
export interface VaccinationPractitionerGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerGeburtsnameFamilyNachname: t.Type<VaccinationPractitionerGeburtsnameFamilyNachname> = t.recursion(
    "VaccinationPractitionerGeburtsnameFamilyNachname",
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
export interface VaccinationPractitionerGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerGeburtsnameFamilyVorsatzwort: t.Type<VaccinationPractitionerGeburtsnameFamilyVorsatzwort> = t.recursion(
    "VaccinationPractitionerGeburtsnameFamilyVorsatzwort",
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
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPractitionerIdTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "ESN";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPractitionerIdTypeCoding: t.Type<VaccinationPractitionerIdTypeCoding> = t.recursion(
    "VaccinationPractitionerIdTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("ESN")
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
export interface VaccinationPractitionerPractitionerspecialityCodeCoding {
    system: string;
    code: VaccinationPractitionerFunctionVS;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerPractitionerspecialityCodeCoding: t.Type<VaccinationPractitionerPractitionerspecialityCodeCoding> = t.recursion(
    "VaccinationPractitionerPractitionerspecialityCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: VaccinationPractitionerFunctionVS
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
export interface VaccinationPractitionerANRType {
    coding: Array<VaccinationPractitionerANRTypeLANRType>;
    id?: string;
    text?: string;
}

export const VaccinationPractitionerANRType: t.Type<VaccinationPractitionerANRType> = t.recursion(
    "VaccinationPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, VaccinationPractitionerANRTypeLANRType)
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
export interface VaccinationPractitionerEFNType {
    coding: Array<VaccinationPractitionerEFNTypeDNType>;
    id?: string;
    text?: string;
}

export const VaccinationPractitionerEFNType: t.Type<VaccinationPractitionerEFNType> = t.recursion(
    "VaccinationPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, VaccinationPractitionerEFNTypeDNType)
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
export interface VaccinationPractitionerIdType {
    coding: Array<VaccinationPractitionerIdTypeCoding>;
    id?: string;
}

export const VaccinationPractitionerIdType: t.Type<VaccinationPractitionerIdType> = t.recursion(
    "VaccinationPractitionerIdType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationPractitionerIdTypeCoding)
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
export interface VaccinationPractitionerNameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPractitionerNameFamilyNamenszusatz
        | VaccinationPractitionerNameFamilyNachname
        | VaccinationPractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPractitionerNameFamily: t.Type<VaccinationPractitionerNameFamily> = t.recursion(
    "VaccinationPractitionerNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPractitionerNameFamilyNamenszusatz>,
                            t.Type<VaccinationPractitionerNameFamilyNachname>,
                            t.Type<VaccinationPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerNameFamilyNamenszusatz,
                        VaccinationPractitionerNameFamilyNachname,
                        VaccinationPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPractitionerNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPractitionerNameFamilyVorsatzwort,
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
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface VaccinationPractitionerNamePrefix {
    id?: string;
    extension?: (Extension | VaccinationPractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const VaccinationPractitionerNamePrefix: t.Type<VaccinationPractitionerNamePrefix> = t.recursion(
    "VaccinationPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPractitionerNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerNamePrefixPrefixqualifier
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
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
export interface VaccinationPractitionerGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPractitionerGeburtsnameFamilyNamenszusatz
        | VaccinationPractitionerGeburtsnameFamilyNachname
        | VaccinationPractitionerGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPractitionerGeburtsnameFamily: t.Type<VaccinationPractitionerGeburtsnameFamily> = t.recursion(
    "VaccinationPractitionerGeburtsnameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPractitionerGeburtsnameFamilyNamenszusatz>,
                            t.Type<VaccinationPractitionerGeburtsnameFamilyNachname>,
                            t.Type<VaccinationPractitionerGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerGeburtsnameFamilyNamenszusatz,
                        VaccinationPractitionerGeburtsnameFamilyNachname,
                        VaccinationPractitionerGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPractitionerGeburtsnameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPractitionerGeburtsnameFamilyVorsatzwort,
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
 * Coded representation of the qualification.
 */
export interface VaccinationPractitionerPractitionerspecialityCode {
    coding: Array<VaccinationPractitionerPractitionerspecialityCodeCoding>;
    text: string;
    id?: string;
}

export const VaccinationPractitionerPractitionerspecialityCode: t.Type<VaccinationPractitionerPractitionerspecialityCode> = t.recursion(
    "VaccinationPractitionerPractitionerspecialityCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationPractitionerPractitionerspecialityCodeCoding
                    ),
                    text: SCALARString
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
export interface VaccinationPractitionerANR {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationPractitionerANRType;
}

export const VaccinationPractitionerANR: t.Type<VaccinationPractitionerANR> = t.recursion(
    "VaccinationPractitionerANR",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: VaccinationPractitionerANRType
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationPractitionerEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationPractitionerEFNType;
}

export const VaccinationPractitionerEFN: t.Type<VaccinationPractitionerEFN> = t.recursion(
    "VaccinationPractitionerEFN",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/bundesaerztekammer/efn"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: VaccinationPractitionerEFNType
                })
            ])
        )
);

/**
 * Nicht näher spezifizierter Identifikator einer nicht ärztlichen, behandelnden Person.
 */
export interface VaccinationPractitionerId {
    type: VaccinationPractitionerIdType;
    value: string;
    id?: string;
    system?: string;
}

export const VaccinationPractitionerId: t.Type<VaccinationPractitionerId> = t.recursion(
    "VaccinationPractitionerId",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPractitionerIdType,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface VaccinationPractitionerName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: VaccinationPractitionerNameFamily;
    family?: string;
    _prefix?: Array<VaccinationPractitionerNamePrefix>;
    prefix?: Array<string>;
}

export const VaccinationPractitionerName: t.Type<VaccinationPractitionerName> = t.recursion(
    "VaccinationPractitionerName",
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
                    _family: VaccinationPractitionerNameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, VaccinationPractitionerNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface VaccinationPractitionerGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: VaccinationPractitionerGeburtsnameFamily;
    family?: string;
}

export const VaccinationPractitionerGeburtsname: t.Type<VaccinationPractitionerGeburtsname> = t.recursion(
    "VaccinationPractitionerGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: VaccinationPractitionerGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface VaccinationPractitionerPractitionerspeciality {
    code: VaccinationPractitionerPractitionerspecialityCode;
    id?: string;
}

export const VaccinationPractitionerPractitionerspeciality: t.Type<VaccinationPractitionerPractitionerspeciality> = t.recursion(
    "VaccinationPractitionerPractitionerspeciality",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationPractitionerPractitionerspecialityCode
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationPractitionerMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner|1.00.000"
    >;
    id?: string;
}

export const VaccinationPractitionerMeta: t.Type<VaccinationPractitionerMeta> = t.recursion(
    "VaccinationPractitionerMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner|1.00.000"
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
 * Dieses Element beschreibt die Kontaktinformationen einer Person.
 */
export interface VaccinationPractitionerTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const VaccinationPractitionerTelecom: t.Type<VaccinationPractitionerTelecom> = t.recursion(
    "VaccinationPractitionerTelecom",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: ContactpointsystemVS,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationPractitioner {
    resourceType: "Practitioner";
    id: string;
    meta: VaccinationPractitionerMeta;
    identifier: Array<
        | VaccinationPractitionerANR
        | VaccinationPractitionerEFN
        | VaccinationPractitionerId
    >;
    name: Array<VaccinationPractitionerName | VaccinationPractitionerGeburtsname>;
    qualification: Array<VaccinationPractitionerPractitionerspeciality>;
    text?: Narrative;
    extension?: (Extension | VaccinationAdditionalComment)[];
    telecom?: VaccinationPractitionerTelecom[];
}

const VaccinationPractitioner: t.Type<VaccinationPractitioner> = t.recursion(
    "VaccinationPractitioner",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Practitioner"),
                    id: SCALARString,
                    meta: VaccinationPractitionerMeta,
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPractitionerANR>,
                                t.Type<VaccinationPractitionerEFN>,
                                t.Type<VaccinationPractitionerId>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationPractitionerANR,
                            VaccinationPractitionerEFN,
                            VaccinationPractitionerId
                        ]),
                        [
                            {
                                codec: VaccinationPractitionerANR,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "LANR" }
                            },
                            {
                                codec: VaccinationPractitionerEFN,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "DN" }
                            },
                            {
                                codec: VaccinationPractitionerId,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "ESN" }
                            }
                        ],
                        ["1", "1"]
                    ),
                    name: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPractitionerName>,
                                t.Type<VaccinationPractitionerGeburtsname>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationPractitionerName,
                            VaccinationPractitionerGeburtsname
                        ]),
                        [
                            {
                                codec: VaccinationPractitionerName,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "use", value: "official" }
                            },
                            {
                                codec: VaccinationPractitionerGeburtsname,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "use", value: "maiden" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    qualification: MinMaxArray(
                        1,
                        1,
                        VaccinationPractitionerPractitionerspeciality
                    )
                }),
                t.partial({
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<VaccinationAdditionalComment>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, VaccinationAdditionalComment]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationAdditionalComment,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    telecom: t.array(VaccinationPractitionerTelecom)
                })
            ])
        )
);

export default VaccinationPractitioner;
