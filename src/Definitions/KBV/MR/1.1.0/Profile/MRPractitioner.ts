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
    ExtensibleCheck
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";

import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";
import Identifier from "../../../../../Definitions/FHIR/4.0.1/Profile/Identifier";

import MRPractitionerFunctionVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRPractitionerFunction";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner"

/**
 * Content in other Language.
 */
export interface MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent: t.Type<MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent> =
    t.recursion(
        "MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent",
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
export interface MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent[];
}

export const MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation: t.Type<MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation> =
    t.recursion(
        "MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation",
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
                        extension: t.array(
                            MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
                        )
                    })
                ])
            )
    );

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface MRPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const MRPractitionerNameFamilyNamenszusatz: t.Type<MRPractitionerNameFamilyNamenszusatz> =
    t.recursion("MRPractitionerNameFamilyNamenszusatz", () =>
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
export interface MRPractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const MRPractitionerNameFamilyNachname: t.Type<MRPractitionerNameFamilyNachname> =
    t.recursion("MRPractitionerNameFamilyNachname", () =>
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
export interface MRPractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const MRPractitionerNameFamilyVorsatzwort: t.Type<MRPractitionerNameFamilyVorsatzwort> =
    t.recursion("MRPractitionerNameFamilyVorsatzwort", () =>
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
export interface MRPractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const MRPractitionerNamePrefixPrefixqualifier: t.Type<MRPractitionerNamePrefixPrefixqualifier> =
    t.recursion("MRPractitionerNamePrefixPrefixqualifier", () =>
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface MRPractitionerStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const MRPractitionerStrassenanschriftLineStrasse: t.Type<MRPractitionerStrassenanschriftLineStrasse> =
    t.recursion("MRPractitionerStrassenanschriftLineStrasse", () =>
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
export interface MRPractitionerStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const MRPractitionerStrassenanschriftLineHausnummer: t.Type<MRPractitionerStrassenanschriftLineHausnummer> =
    t.recursion("MRPractitionerStrassenanschriftLineHausnummer", () =>
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
export interface MRPractitionerStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const MRPractitionerStrassenanschriftLineAdresszusatz: t.Type<MRPractitionerStrassenanschriftLineAdresszusatz> =
    t.recursion("MRPractitionerStrassenanschriftLineAdresszusatz", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface MRPractitionerANRTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    display: "Lifelong physician number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPractitionerANRTypeCoding: t.Type<MRPractitionerANRTypeCoding> =
    t.recursion("MRPractitionerANRTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("LANR"),
                    display: Literal("Lifelong physician number")
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
 * A reference to a code defined by a terminology system.
 */
export interface MRPractitionerEFNTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    display: "Medical License number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPractitionerEFNTypeCoding: t.Type<MRPractitionerEFNTypeCoding> =
    t.recursion("MRPractitionerEFNTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("DN"),
                    display: Literal("Medical License number")
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
 * A reference to a code defined by a terminology system.
 */
export interface MRPractitionerHebammenIKTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    display: "Organisations-ID";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPractitionerHebammenIKTypeCoding: t.Type<MRPractitionerHebammenIKTypeCoding> =
    t.recursion("MRPractitionerHebammenIKTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("XX"),
                    display: Literal("Organisations-ID")
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
 * A subsection of a municipality.
 */
export interface MRPractitionerStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const MRPractitionerStrassenanschriftStadtteil: t.Type<MRPractitionerStrassenanschriftStadtteil> =
    t.recursion("MRPractitionerStrassenanschriftStadtteil", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRPractitionerQualificationCodeCodingDisplay {
    id?: string;
    extension?: MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation[];
    value?: string;
}

export const MRPractitionerQualificationCodeCodingDisplay: t.Type<MRPractitionerQualificationCodeCodingDisplay> =
    t.recursion("MRPractitionerQualificationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
                ),
                value: SCALARString
            })
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPractitionerANRType {
    coding: Array<MRPractitionerANRTypeCoding>;
    id?: string;
}

export const MRPractitionerANRType: t.Type<MRPractitionerANRType> = t.recursion(
    "MRPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPractitionerANRTypeCoding)
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
export interface MRPractitionerEFNType {
    coding: Array<MRPractitionerEFNTypeCoding>;
    id?: string;
}

export const MRPractitionerEFNType: t.Type<MRPractitionerEFNType> = t.recursion(
    "MRPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPractitionerEFNTypeCoding)
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
export interface MRPractitionerHebammenIKType {
    coding: Array<MRPractitionerHebammenIKTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPractitionerHebammenIKType: t.Type<MRPractitionerHebammenIKType> =
    t.recursion("MRPractitionerHebammenIKType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPractitionerHebammenIKTypeCoding)
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
export interface MRPractitionerNameFamily {
    id?: string;
    extension?: (
        | MRPractitionerNameFamilyNamenszusatz
        | MRPractitionerNameFamilyNachname
        | MRPractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const MRPractitionerNameFamily: t.Type<MRPractitionerNameFamily> = t.recursion(
    "MRPractitionerNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPractitionerNameFamilyNamenszusatz>,
                            t.Type<MRPractitionerNameFamilyNachname>,
                            t.Type<MRPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPractitionerNameFamilyNamenszusatz,
                        MRPractitionerNameFamilyNachname,
                        MRPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: MRPractitionerNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: MRPractitionerNameFamilyNachname,
                            occurrence: ["1", "*"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: MRPractitionerNameFamilyVorsatzwort,
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
        )
);

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface MRPractitionerNamePrefix {
    id?: string;
    extension?: MRPractitionerNamePrefixPrefixqualifier[];
    value?: string;
}

export const MRPractitionerNamePrefix: t.Type<MRPractitionerNamePrefix> = t.recursion(
    "MRPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MRPractitionerNamePrefixPrefixqualifier),
                value: SCALARString
            })
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface MRPractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | MRPractitionerStrassenanschriftLineStrasse
        | MRPractitionerStrassenanschriftLineHausnummer
        | MRPractitionerStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const MRPractitionerStrassenanschriftLine: t.Type<MRPractitionerStrassenanschriftLine> =
    t.recursion("MRPractitionerStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPractitionerStrassenanschriftLineStrasse>,
                            t.Type<MRPractitionerStrassenanschriftLineHausnummer>,
                            t.Type<MRPractitionerStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPractitionerStrassenanschriftLineStrasse,
                        MRPractitionerStrassenanschriftLineHausnummer,
                        MRPractitionerStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: MRPractitionerStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: MRPractitionerStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: MRPractitionerStrassenanschriftLineAdresszusatz,
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
 * A reference to a code defined by a terminology system.
 */
export interface MRPractitionerQualificationCodeCoding {
    id?: string;
    system?: string;
    version?: string;
    code?: MRPractitionerFunctionVS;
    _display?: MRPractitionerQualificationCodeCodingDisplay;
    display?: string;
}

export const MRPractitionerQualificationCodeCoding: t.Type<MRPractitionerQualificationCodeCoding> =
    t.recursion("MRPractitionerQualificationCodeCoding", () =>
        Excess(
            t.partial({
                id: SCALARString,
                system: SCALARUri,
                version: SCALARString,
                code: MRPractitionerFunctionVS,
                _display: MRPractitionerQualificationCodeCodingDisplay,
                display: SCALARString
            })
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRPractitionerErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRPractitionerErgaenzendeAngaben: t.Type<MRPractitionerErgaenzendeAngaben> =
    t.recursion("MRPractitionerErgaenzendeAngaben", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
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
export interface MRPractitionerANR {
    type: MRPractitionerANRType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
}

export const MRPractitionerANR: t.Type<MRPractitionerANR> = t.recursion(
    "MRPractitionerANR",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPractitionerANRType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR"),
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
export interface MRPractitionerEFN {
    type: MRPractitionerEFNType;
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
}

export const MRPractitionerEFN: t.Type<MRPractitionerEFN> = t.recursion(
    "MRPractitionerEFN",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPractitionerEFNType,
                    system: Literal("http://fhir.de/NamingSystem/bundesaerztekammer/efn"),
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
export interface MRPractitionerHebammenIK {
    type: MRPractitionerHebammenIKType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
}

export const MRPractitionerHebammenIK: t.Type<MRPractitionerHebammenIK> = t.recursion(
    "MRPractitionerHebammenIK",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPractitionerHebammenIKType,
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
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
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface MRPractitionerName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: MRPractitionerNameFamily;
    family?: string;
    _prefix?: MRPractitionerNamePrefix[];
    prefix?: string[];
}

export const MRPractitionerName: t.Type<MRPractitionerName> = t.recursion(
    "MRPractitionerName",
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
                    _family: MRPractitionerNameFamily,
                    family: SCALARString,
                    _prefix: t.array(MRPractitionerNamePrefix),
                    prefix: t.array(SCALARString)
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface MRPractitionerStrassenanschrift {
    type: "both";
    id?: string;
    extension?: MRPractitionerStrassenanschriftStadtteil[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<MRPractitionerStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
}

export const MRPractitionerStrassenanschrift: t.Type<MRPractitionerStrassenanschrift> =
    t.recursion("MRPractitionerStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both")
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRPractitionerStrassenanschriftStadtteil),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, MRPractitionerStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                })
            ])
        )
    );

/**
 * Coded representation of the qualification.
 */
export interface MRPractitionerQualificationCode {
    coding: Array<MRPractitionerQualificationCodeCoding>;
    id?: string;
}

export const MRPractitionerQualificationCode: t.Type<MRPractitionerQualificationCode> =
    t.recursion("MRPractitionerQualificationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPractitionerQualificationCodeCoding)
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
export interface MRPractitionerMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0">;
    id?: string;
}

export const MRPractitionerMeta: t.Type<MRPractitionerMeta> = t.recursion(
    "MRPractitionerMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
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
 * A contact detail for the practitioner, e.g. a telephone number or an email address.
 */
export interface MRPractitionerTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
}

export const MRPractitionerTelecom: t.Type<MRPractitionerTelecom> = t.recursion(
    "MRPractitionerTelecom",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: ContactpointsystemVS,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: ContactpointuseVS
                })
            ])
        )
);

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface MRPractitionerQualification {
    code: MRPractitionerQualificationCode;
    id?: string;
    identifier?: Identifier[];
}

export const MRPractitionerQualification: t.Type<MRPractitionerQualification> =
    t.recursion("MRPractitionerQualification", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRPractitionerQualificationCode
                }),
                t.partial({
                    id: SCALARString,
                    identifier: t.array(Identifier)
                })
            ])
        )
    );

interface MRPractitioner {
    resourceType: "Practitioner";
    meta: MRPractitionerMeta;
    identifier: Array<MRPractitionerANR | MRPractitionerEFN | MRPractitionerHebammenIK>;
    name: Array<MRPractitionerName>;
    id?: string;
    text?: Narrative;
    extension?: MRPractitionerErgaenzendeAngaben[];
    telecom?: MRPractitionerTelecom[];
    address?: Array<MRPractitionerStrassenanschrift>;
    qualification?: MRPractitionerQualification[];
}

const MRPractitioner: t.Type<MRPractitioner> = t.recursion("MRPractitioner", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Practitioner"),
                meta: MRPractitionerMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPractitionerANR>,
                            t.Type<MRPractitionerEFN>,
                            t.Type<MRPractitionerHebammenIK>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPractitionerANR,
                        MRPractitionerEFN,
                        MRPractitionerHebammenIK
                    ]),
                    [
                        {
                            codec: MRPractitionerANR,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "LANR" }
                        },
                        {
                            codec: MRPractitionerEFN,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "DN" }
                        },
                        {
                            codec: MRPractitionerHebammenIK,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        }
                    ],
                    ["1", "*"]
                ),
                name: MinMaxArray(1, 1, MRPractitionerName)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: t.array(MRPractitionerErgaenzendeAngaben),
                telecom: t.array(MRPractitionerTelecom),
                address: MaxArray(1, MRPractitionerStrassenanschrift),
                qualification: t.array(MRPractitionerQualification)
            })
        ])
    )
);

export default MRPractitioner;
