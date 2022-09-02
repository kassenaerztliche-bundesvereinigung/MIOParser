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
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Related_Person_Contact_Person"

/**
 * Content in other Language.
 */
export interface DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent {
    url: "content";
    valueString: "Telefonnummer";
    id?: string;
}

export const DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent: t.Type<DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent> =
    t.recursion(
        "DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Telefonnummer")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent: t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent> =
    t.recursion(
        "DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent",
        () =>
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
export interface DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent
    )[];
}

export const DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem: t.Type<DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem> =
    t.recursion("DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem", () =>
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
                                t.Type<DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystemContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
    )[];
}

export const DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem: t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem> =
    t.recursion(
        "DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem",
        () =>
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
                                    t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent,
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DPERelatedPersonContactPersonStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const DPERelatedPersonContactPersonStrassenanschriftLineStrasse: t.Type<DPERelatedPersonContactPersonStrassenanschriftLineStrasse> =
    t.recursion("DPERelatedPersonContactPersonStrassenanschriftLineStrasse", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
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
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DPERelatedPersonContactPersonStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const DPERelatedPersonContactPersonStrassenanschriftLineHausnummer: t.Type<DPERelatedPersonContactPersonStrassenanschriftLineHausnummer> =
    t.recursion("DPERelatedPersonContactPersonStrassenanschriftLineHausnummer", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
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
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz: t.Type<DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz> =
    t.recursion("DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
export interface DPERelatedPersonContactPersonNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const DPERelatedPersonContactPersonNameFamilyNachname: t.Type<DPERelatedPersonContactPersonNameFamilyNachname> =
    t.recursion("DPERelatedPersonContactPersonNameFamilyNachname", () =>
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
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface DPERelatedPersonContactPersonTelefonSystem {
    id?: string;
    extension?: (
        | Extension
        | DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem
    )[];
    value?: string;
}

export const DPERelatedPersonContactPersonTelefonSystem: t.Type<DPERelatedPersonContactPersonTelefonSystem> =
    t.recursion("DPERelatedPersonContactPersonTelefonSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPERelatedPersonContactPersonTelefonSystemAnzeigenameSystem,
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
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem {
    id?: string;
    extension?: (
        | Extension
        | DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
    )[];
    value?: string;
}

export const DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem: t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem> =
    t.recursion("DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface DPERelatedPersonContactPersonStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | DPERelatedPersonContactPersonStrassenanschriftLineStrasse
        | DPERelatedPersonContactPersonStrassenanschriftLineHausnummer
        | DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const DPERelatedPersonContactPersonStrassenanschriftLine: t.Type<DPERelatedPersonContactPersonStrassenanschriftLine> =
    t.recursion("DPERelatedPersonContactPersonStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPERelatedPersonContactPersonStrassenanschriftLineStrasse>,
                            t.Type<DPERelatedPersonContactPersonStrassenanschriftLineHausnummer>,
                            t.Type<DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DPERelatedPersonContactPersonStrassenanschriftLineStrasse,
                        DPERelatedPersonContactPersonStrassenanschriftLineHausnummer,
                        DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPERelatedPersonContactPersonStrassenanschriftLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: DPERelatedPersonContactPersonStrassenanschriftLineHausnummer,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: DPERelatedPersonContactPersonStrassenanschriftLineAdresszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
export interface DPERelatedPersonContactPersonNameFamily {
    id?: string;
    extension?: (Extension | DPERelatedPersonContactPersonNameFamilyNachname)[];
    value?: string;
}

export const DPERelatedPersonContactPersonNameFamily: t.Type<DPERelatedPersonContactPersonNameFamily> =
    t.recursion("DPERelatedPersonContactPersonNameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPERelatedPersonContactPersonNameFamilyNachname>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, DPERelatedPersonContactPersonNameFamilyNachname]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPERelatedPersonContactPersonNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
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
 * A contact detail for the person, e.g. a telephone number or an email address.
 */
export interface DPERelatedPersonContactPersonTelefon {
    system: "phone";
    value: string;
    id?: string;
    _system?: DPERelatedPersonContactPersonTelefonSystem;
}

export const DPERelatedPersonContactPersonTelefon: t.Type<DPERelatedPersonContactPersonTelefon> =
    t.recursion("DPERelatedPersonContactPersonTelefon", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("phone"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: DPERelatedPersonContactPersonTelefonSystem
                })
            ])
        )
    );

/**
 * A contact detail for the person, e.g. a telephone number or an email address.
 */
export interface DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten {
    value: string;
    id?: string;
    _system?: DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem;
    system?: string;
}

export const DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten: t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten> =
    t.recursion("DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system:
                        DPERelatedPersonContactPersonWeitereKontaktMoeglichkeitenSystem,
                    system: SCALARCode
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface DPERelatedPersonContactPersonStrassenanschrift {
    type: "both";
    city: string;
    postalCode: string;
    id?: string;
    text?: string;
    _line?: Array<DPERelatedPersonContactPersonStrassenanschriftLine>;
    line?: Array<string>;
    country?: string;
}

export const DPERelatedPersonContactPersonStrassenanschrift: t.Type<DPERelatedPersonContactPersonStrassenanschrift> =
    t.recursion("DPERelatedPersonContactPersonStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    postalCode: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _line: MinArray(
                        1,
                        DPERelatedPersonContactPersonStrassenanschriftLine
                    ),
                    line: MinArray(1, SCALARString),
                    country: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface DPERelatedPersonContactPersonMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Related_Person_Contact_Person|1.0.0">;
    id?: string;
}

export const DPERelatedPersonContactPersonMeta: t.Type<DPERelatedPersonContactPersonMeta> =
    t.recursion("DPERelatedPersonContactPersonMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Related_Person_Contact_Person|1.0.0"
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
 * The patient this person is related to.
 */
export interface DPERelatedPersonContactPersonPatientReference {
    reference: string;
    id?: string;
}

export const DPERelatedPersonContactPersonPatientReference: t.Type<DPERelatedPersonContactPersonPatientReference> =
    t.recursion("DPERelatedPersonContactPersonPatientReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface DPERelatedPersonContactPersonName {
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: DPERelatedPersonContactPersonNameFamily;
    family?: string;
}

export const DPERelatedPersonContactPersonName: t.Type<DPERelatedPersonContactPersonName> =
    t.recursion("DPERelatedPersonContactPersonName", () =>
        Excess(
            t.intersection([
                t.type({
                    given: MinArray(1, SCALARString)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: DPERelatedPersonContactPersonNameFamily,
                    family: SCALARString
                })
            ])
        )
    );

interface DPERelatedPersonContactPerson {
    resourceType: "RelatedPerson";
    meta: DPERelatedPersonContactPersonMeta;
    patient: DPERelatedPersonContactPersonPatientReference;
    name: Array<DPERelatedPersonContactPersonName>;
    telecom: Array<
        | DPERelatedPersonContactPersonTelefon
        | DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten
    >;
    address: Array<DPERelatedPersonContactPersonStrassenanschrift>;
    id?: string;
    text?: Narrative;
}

const DPERelatedPersonContactPerson: t.Type<DPERelatedPersonContactPerson> = t.recursion(
    "DPERelatedPersonContactPerson",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("RelatedPerson"),
                    meta: DPERelatedPersonContactPersonMeta,
                    patient: DPERelatedPersonContactPersonPatientReference,
                    name: MinMaxArray(1, 1, DPERelatedPersonContactPersonName),
                    telecom: ReqArray<
                        t.UnionC<
                            [
                                t.Type<DPERelatedPersonContactPersonTelefon>,
                                t.Type<DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            DPERelatedPersonContactPersonTelefon,
                            DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten
                        ]),
                        [
                            {
                                codec: DPERelatedPersonContactPersonTelefon,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "phone" }
                            },
                            {
                                codec: DPERelatedPersonContactPersonWeitereKontaktMoeglichkeiten,
                                occurrence: ["0", "2"],
                                sliceBy: { path: "system" }
                            }
                        ],
                        ["1", "3"]
                    ),
                    address: MinMaxArray(
                        1,
                        1,
                        DPERelatedPersonContactPersonStrassenanschrift
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default DPERelatedPersonContactPerson;
