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
    ReqArray
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Genderamtlichde from "../../../../../Definitions/HL7DE/0.9.13/Extension/Genderamtlichde";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE"

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface DPEPatientDPENameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const DPEPatientDPENameFamilyNamenszusatz: t.Type<DPEPatientDPENameFamilyNamenszusatz> =
    t.recursion("DPEPatientDPENameFamilyNamenszusatz", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz"
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
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface DPEPatientDPENameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const DPEPatientDPENameFamilyNachname: t.Type<DPEPatientDPENameFamilyNachname> =
    t.recursion("DPEPatientDPENameFamilyNachname", () =>
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
export interface DPEPatientDPENameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const DPEPatientDPENameFamilyVorsatzwort: t.Type<DPEPatientDPENameFamilyVorsatzwort> =
    t.recursion("DPEPatientDPENameFamilyVorsatzwort", () =>
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
export interface DPEPatientDPENamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const DPEPatientDPENamePrefixPrefixqualifier: t.Type<DPEPatientDPENamePrefixPrefixqualifier> =
    t.recursion("DPEPatientDPENamePrefixPrefixqualifier", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface DPEPatientDPEVersichertenIdGKVTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    display: "Gesetzliche Krankenversicherung";
    id?: string;
    version?: string;
}

export const DPEPatientDPEVersichertenIdGKVTypeCoding: t.Type<DPEPatientDPEVersichertenIdGKVTypeCoding> =
    t.recursion("DPEPatientDPEVersichertenIdGKVTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("GKV"),
                    display: Literal("Gesetzliche Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DPEPatientDPEVersichertennummerpkvTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    display: "Private Krankenversicherung";
    id?: string;
    version?: string;
}

export const DPEPatientDPEVersichertennummerpkvTypeCoding: t.Type<DPEPatientDPEVersichertennummerpkvTypeCoding> =
    t.recursion("DPEPatientDPEVersichertennummerpkvTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("PKV"),
                    display: Literal("Private Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface DPEPatientDPEVersichertenIdGKVType {
    coding: Array<DPEPatientDPEVersichertenIdGKVTypeCoding>;
    id?: string;
    text?: string;
}

export const DPEPatientDPEVersichertenIdGKVType: t.Type<DPEPatientDPEVersichertenIdGKVType> =
    t.recursion("DPEPatientDPEVersichertenIdGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPEPatientDPEVersichertenIdGKVTypeCoding)
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
export interface DPEPatientDPEVersichertennummerpkvType {
    coding: Array<DPEPatientDPEVersichertennummerpkvTypeCoding>;
    id?: string;
    text?: string;
}

export const DPEPatientDPEVersichertennummerpkvType: t.Type<DPEPatientDPEVersichertennummerpkvType> =
    t.recursion("DPEPatientDPEVersichertennummerpkvType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        DPEPatientDPEVersichertennummerpkvTypeCoding
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
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface DPEPatientDPENameFamily {
    id?: string;
    extension?: (
        | DPEPatientDPENameFamilyNamenszusatz
        | DPEPatientDPENameFamilyNachname
        | DPEPatientDPENameFamilyVorsatzwort
    )[];
    value?: string;
}

export const DPEPatientDPENameFamily: t.Type<DPEPatientDPENameFamily> = t.recursion(
    "DPEPatientDPENameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<DPEPatientDPENameFamilyNamenszusatz>,
                            t.Type<DPEPatientDPENameFamilyNachname>,
                            t.Type<DPEPatientDPENameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        DPEPatientDPENameFamilyNamenszusatz,
                        DPEPatientDPENameFamilyNachname,
                        DPEPatientDPENameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: DPEPatientDPENameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: DPEPatientDPENameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: DPEPatientDPENameFamilyVorsatzwort,
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
export interface DPEPatientDPENamePrefix {
    id?: string;
    extension?: (Extension | DPEPatientDPENamePrefixPrefixqualifier)[];
    value?: string;
}

export const DPEPatientDPENamePrefix: t.Type<DPEPatientDPENamePrefix> = t.recursion(
    "DPEPatientDPENamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPEPatientDPENamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, DPEPatientDPENamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPEPatientDPENamePrefixPrefixqualifier,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface DPEPatientDPEBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const DPEPatientDPEBirthDateDataabsentreason: t.Type<DPEPatientDPEBirthDateDataabsentreason> =
    t.recursion("DPEPatientDPEBirthDateDataabsentreason", () =>
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
export interface DPEPatientDPEVersichertenIdGKV {
    type: DPEPatientDPEVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
}

export const DPEPatientDPEVersichertenIdGKV: t.Type<DPEPatientDPEVersichertenIdGKV> =
    t.recursion("DPEPatientDPEVersichertenIdGKV", () =>
        Excess(
            t.intersection([
                t.type({
                    type: DPEPatientDPEVersichertenIdGKVType,
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
export interface DPEPatientDPEVersichertennummerpkv {
    type: DPEPatientDPEVersichertennummerpkvType;
    value: string;
    id?: string;
    use?: "secondary";
    system?: string;
}

export const DPEPatientDPEVersichertennummerpkv: t.Type<DPEPatientDPEVersichertennummerpkv> =
    t.recursion("DPEPatientDPEVersichertennummerpkv", () =>
        Excess(
            t.intersection([
                t.type({
                    type: DPEPatientDPEVersichertennummerpkvType,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("secondary"),
                    system: SCALARUri
                })
            ])
        )
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface DPEPatientDPEName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: DPEPatientDPENameFamily;
    family?: string;
    _prefix?: Array<DPEPatientDPENamePrefix>;
    prefix?: Array<string>;
}

export const DPEPatientDPEName: t.Type<DPEPatientDPEName> = t.recursion(
    "DPEPatientDPEName",
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
                    _family: DPEPatientDPENameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, DPEPatientDPENamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface DPEPatientDPEMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0">;
    id?: string;
}

export const DPEPatientDPEMeta: t.Type<DPEPatientDPEMeta> = t.recursion(
    "DPEPatientDPEMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0"
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
export interface DPEPatientDPEGender {
    id?: string;
    extension?: (Extension | Genderamtlichde)[];
    value?: string;
}

export const DPEPatientDPEGender: t.Type<DPEPatientDPEGender> = t.recursion(
    "DPEPatientDPEGender",
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
export interface DPEPatientDPEBirthDate {
    id?: string;
    extension?: (Extension | DPEPatientDPEBirthDateDataabsentreason)[];
    value?: string;
}

export const DPEPatientDPEBirthDate: t.Type<DPEPatientDPEBirthDate> = t.recursion(
    "DPEPatientDPEBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPEPatientDPEBirthDateDataabsentreason>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, DPEPatientDPEBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPEPatientDPEBirthDateDataabsentreason,
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

interface DPEPatientDPE {
    resourceType: "Patient";
    meta: DPEPatientDPEMeta;
    identifier: Array<
        DPEPatientDPEVersichertenIdGKV | DPEPatientDPEVersichertennummerpkv
    >;
    name: Array<DPEPatientDPEName>;
    id?: string;
    _gender?: DPEPatientDPEGender;
    gender?: string;
    _birthDate?: DPEPatientDPEBirthDate;
    birthDate?: string;
}

const DPEPatientDPE: t.Type<DPEPatientDPE> = t.recursion("DPEPatientDPE", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: DPEPatientDPEMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<DPEPatientDPEVersichertenIdGKV>,
                            t.Type<DPEPatientDPEVersichertennummerpkv>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        DPEPatientDPEVersichertenIdGKV,
                        DPEPatientDPEVersichertennummerpkv
                    ]),
                    [
                        {
                            codec: DPEPatientDPEVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        },
                        {
                            codec: DPEPatientDPEVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "PKV" }
                        }
                    ],
                    ["1", "1"]
                ),
                name: MinMaxArray(1, 1, DPEPatientDPEName)
            }),
            t.partial({
                id: SCALARString,
                _gender: DPEPatientDPEGender,
                gender: SCALARCode,
                _birthDate: DPEPatientDPEBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default DPEPatientDPE;
