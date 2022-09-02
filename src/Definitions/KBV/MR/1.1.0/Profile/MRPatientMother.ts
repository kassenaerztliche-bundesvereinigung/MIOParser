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

import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";

import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother"

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType {
    coding: Array<"[object Object]">;
    id?: string;
    text?: string;
}

export const MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType: t.Type<MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType> =
    t.recursion(
        "MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinArray(1, Literal("[object Object]"))
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
export interface MRPatientMotherNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const MRPatientMotherNameFamilyNamenszusatz: t.Type<MRPatientMotherNameFamilyNamenszusatz> =
    t.recursion("MRPatientMotherNameFamilyNamenszusatz", () =>
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
export interface MRPatientMotherNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const MRPatientMotherNameFamilyNachname: t.Type<MRPatientMotherNameFamilyNachname> =
    t.recursion("MRPatientMotherNameFamilyNachname", () =>
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
export interface MRPatientMotherNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const MRPatientMotherNameFamilyVorsatzwort: t.Type<MRPatientMotherNameFamilyVorsatzwort> =
    t.recursion("MRPatientMotherNameFamilyVorsatzwort", () =>
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
export interface MRPatientMotherNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const MRPatientMotherNamePrefixPrefixqualifier: t.Type<MRPatientMotherNamePrefixPrefixqualifier> =
    t.recursion("MRPatientMotherNamePrefixPrefixqualifier", () =>
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
export interface MRPatientMotherGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const MRPatientMotherGeburtsnameFamilyNamenszusatz: t.Type<MRPatientMotherGeburtsnameFamilyNamenszusatz> =
    t.recursion("MRPatientMotherGeburtsnameFamilyNamenszusatz", () =>
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
export interface MRPatientMotherGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const MRPatientMotherGeburtsnameFamilyNachname: t.Type<MRPatientMotherGeburtsnameFamilyNachname> =
    t.recursion("MRPatientMotherGeburtsnameFamilyNachname", () =>
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
export interface MRPatientMotherGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const MRPatientMotherGeburtsnameFamilyVorsatzwort: t.Type<MRPatientMotherGeburtsnameFamilyVorsatzwort> =
    t.recursion("MRPatientMotherGeburtsnameFamilyVorsatzwort", () =>
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface MRPatientMotherStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const MRPatientMotherStrassenanschriftLineStrasse: t.Type<MRPatientMotherStrassenanschriftLineStrasse> =
    t.recursion("MRPatientMotherStrassenanschriftLineStrasse", () =>
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
export interface MRPatientMotherStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const MRPatientMotherStrassenanschriftLineHausnummer: t.Type<MRPatientMotherStrassenanschriftLineHausnummer> =
    t.recursion("MRPatientMotherStrassenanschriftLineHausnummer", () =>
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
export interface MRPatientMotherStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const MRPatientMotherStrassenanschriftLineAdresszusatz: t.Type<MRPatientMotherStrassenanschriftLineAdresszusatz> =
    t.recursion("MRPatientMotherStrassenanschriftLineAdresszusatz", () =>
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
export interface MRPatientMotherPidTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    display: "Medical record number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPatientMotherPidTypeCoding: t.Type<MRPatientMotherPidTypeCoding> =
    t.recursion("MRPatientMotherPidTypeCoding", () =>
        Excess(
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
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPatientMotherVersichertenIdGKVTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    display: "Gesetzliche Krankenversicherung";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPatientMotherVersichertenIdGKVTypeCoding: t.Type<MRPatientMotherVersichertenIdGKVTypeCoding> =
    t.recursion("MRPatientMotherVersichertenIdGKVTypeCoding", () =>
        Excess(
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
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPatientMotherVersichertennummerpkvTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    display: "Private Krankenversicherung";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPatientMotherVersichertennummerpkvTypeCoding: t.Type<MRPatientMotherVersichertennummerpkvTypeCoding> =
    t.recursion("MRPatientMotherVersichertennummerpkvTypeCoding", () =>
        Excess(
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
        )
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType;
    period?: Period;
    assigner?: Reference;
}

export const MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier: t.Type<MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier> =
    t.recursion("MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifierType,
                    period: Period,
                    assigner: Reference
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPatientMotherVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    display: "Krankenversichertenkarte";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MRPatientMotherVersichertennummerkvkTypeCoding: t.Type<MRPatientMotherVersichertennummerkvkTypeCoding> =
    t.recursion("MRPatientMotherVersichertennummerkvkTypeCoding", () =>
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
 * A subsection of a municipality.
 */
export interface MRPatientMotherStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const MRPatientMotherStrassenanschriftStadtteil: t.Type<MRPatientMotherStrassenanschriftStadtteil> =
    t.recursion("MRPatientMotherStrassenanschriftStadtteil", () =>
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPatientMotherPidType {
    coding: Array<MRPatientMotherPidTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPatientMotherPidType: t.Type<MRPatientMotherPidType> = t.recursion(
    "MRPatientMotherPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPatientMotherPidTypeCoding)
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
export interface MRPatientMotherVersichertenIdGKVType {
    coding: Array<MRPatientMotherVersichertenIdGKVTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPatientMotherVersichertenIdGKVType: t.Type<MRPatientMotherVersichertenIdGKVType> =
    t.recursion("MRPatientMotherVersichertenIdGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRPatientMotherVersichertenIdGKVTypeCoding)
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
export interface MRPatientMotherVersichertennummerpkvType {
    coding: Array<MRPatientMotherVersichertennummerpkvTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPatientMotherVersichertennummerpkvType: t.Type<MRPatientMotherVersichertennummerpkvType> =
    t.recursion("MRPatientMotherVersichertennummerpkvType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRPatientMotherVersichertennummerpkvTypeCoding
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
export interface MRPatientMotherVersichertennummerpkvAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier;
}

export const MRPatientMotherVersichertennummerpkvAssignerReference: t.Type<MRPatientMotherVersichertennummerpkvAssignerReference> =
    t.recursion("MRPatientMotherVersichertennummerpkvAssignerReference", () =>
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
                        MRPatientMotherVersichertennummerpkvAssignerReferenceIdentifier
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPatientMotherVersichertennummerkvkType {
    coding: Array<MRPatientMotherVersichertennummerkvkTypeCoding>;
    id?: string;
    text?: string;
}

export const MRPatientMotherVersichertennummerkvkType: t.Type<MRPatientMotherVersichertennummerkvkType> =
    t.recursion("MRPatientMotherVersichertennummerkvkType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRPatientMotherVersichertennummerkvkTypeCoding
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
export interface MRPatientMotherNameFamily {
    id?: string;
    extension?: (
        | MRPatientMotherNameFamilyNamenszusatz
        | MRPatientMotherNameFamilyNachname
        | MRPatientMotherNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const MRPatientMotherNameFamily: t.Type<MRPatientMotherNameFamily> = t.recursion(
    "MRPatientMotherNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPatientMotherNameFamilyNamenszusatz>,
                            t.Type<MRPatientMotherNameFamilyNachname>,
                            t.Type<MRPatientMotherNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPatientMotherNameFamilyNamenszusatz,
                        MRPatientMotherNameFamilyNachname,
                        MRPatientMotherNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: MRPatientMotherNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: MRPatientMotherNameFamilyNachname,
                            occurrence: ["1", "*"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: MRPatientMotherNameFamilyVorsatzwort,
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
export interface MRPatientMotherNamePrefix {
    id?: string;
    extension?: MRPatientMotherNamePrefixPrefixqualifier[];
    value?: string;
}

export const MRPatientMotherNamePrefix: t.Type<MRPatientMotherNamePrefix> = t.recursion(
    "MRPatientMotherNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MRPatientMotherNamePrefixPrefixqualifier),
                value: SCALARString
            })
        )
);

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface MRPatientMotherGeburtsnameFamily {
    id?: string;
    extension?: (
        | MRPatientMotherGeburtsnameFamilyNamenszusatz
        | MRPatientMotherGeburtsnameFamilyNachname
        | MRPatientMotherGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const MRPatientMotherGeburtsnameFamily: t.Type<MRPatientMotherGeburtsnameFamily> =
    t.recursion("MRPatientMotherGeburtsnameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPatientMotherGeburtsnameFamilyNamenszusatz>,
                            t.Type<MRPatientMotherGeburtsnameFamilyNachname>,
                            t.Type<MRPatientMotherGeburtsnameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPatientMotherGeburtsnameFamilyNamenszusatz,
                        MRPatientMotherGeburtsnameFamilyNachname,
                        MRPatientMotherGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: MRPatientMotherGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: MRPatientMotherGeburtsnameFamilyNachname,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: MRPatientMotherGeburtsnameFamilyVorsatzwort,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface MRPatientMotherBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const MRPatientMotherBirthDateDataabsentreason: t.Type<MRPatientMotherBirthDateDataabsentreason> =
    t.recursion("MRPatientMotherBirthDateDataabsentreason", () =>
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface MRPatientMotherStrassenanschriftLine {
    id?: string;
    extension?: (
        | MRPatientMotherStrassenanschriftLineStrasse
        | MRPatientMotherStrassenanschriftLineHausnummer
        | MRPatientMotherStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const MRPatientMotherStrassenanschriftLine: t.Type<MRPatientMotherStrassenanschriftLine> =
    t.recursion("MRPatientMotherStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPatientMotherStrassenanschriftLineStrasse>,
                            t.Type<MRPatientMotherStrassenanschriftLineHausnummer>,
                            t.Type<MRPatientMotherStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPatientMotherStrassenanschriftLineStrasse,
                        MRPatientMotherStrassenanschriftLineHausnummer,
                        MRPatientMotherStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: MRPatientMotherStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: MRPatientMotherStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: MRPatientMotherStrassenanschriftLineAdresszusatz,
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface MRPatientMotherPid {
    type: MRPatientMotherPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
}

export const MRPatientMotherPid: t.Type<MRPatientMotherPid> = t.recursion(
    "MRPatientMotherPid",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPatientMotherPidType,
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
export interface MRPatientMotherVersichertenIdGKV {
    type: MRPatientMotherVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
}

export const MRPatientMotherVersichertenIdGKV: t.Type<MRPatientMotherVersichertenIdGKV> =
    t.recursion("MRPatientMotherVersichertenIdGKV", () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPatientMotherVersichertenIdGKVType,
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
export interface MRPatientMotherVersichertennummerpkv {
    type: MRPatientMotherVersichertennummerpkvType;
    value: string;
    assigner: MRPatientMotherVersichertennummerpkvAssignerReference;
    id?: string;
    use?: "secondary";
    system?: string;
}

export const MRPatientMotherVersichertennummerpkv: t.Type<MRPatientMotherVersichertennummerpkv> =
    t.recursion("MRPatientMotherVersichertennummerpkv", () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPatientMotherVersichertennummerpkvType,
                    value: SCALARString,
                    assigner: MRPatientMotherVersichertennummerpkvAssignerReference
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
 * An identifier for this patient.
 */
export interface MRPatientMotherVersichertennummerkvk {
    type: MRPatientMotherVersichertennummerkvkType;
    system: "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    period?: Period;
    assigner?: Reference;
}

export const MRPatientMotherVersichertennummerkvk: t.Type<MRPatientMotherVersichertennummerkvk> =
    t.recursion("MRPatientMotherVersichertennummerkvk", () =>
        Excess(
            t.intersection([
                t.type({
                    type: MRPatientMotherVersichertennummerkvkType,
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
export interface MRPatientMotherName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: MRPatientMotherNameFamily;
    family?: string;
    _prefix?: Array<MRPatientMotherNamePrefix>;
    prefix?: Array<string>;
}

export const MRPatientMotherName: t.Type<MRPatientMotherName> = t.recursion(
    "MRPatientMotherName",
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
                    _family: MRPatientMotherNameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, MRPatientMotherNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface MRPatientMotherGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: MRPatientMotherGeburtsnameFamily;
    family?: string;
}

export const MRPatientMotherGeburtsname: t.Type<MRPatientMotherGeburtsname> = t.recursion(
    "MRPatientMotherGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: MRPatientMotherGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface MRPatientMotherStrassenanschrift {
    type: "both";
    city: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: MRPatientMotherStrassenanschriftStadtteil[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<MRPatientMotherStrassenanschriftLine>;
    line?: Array<string>;
    postalCode?: string;
}

export const MRPatientMotherStrassenanschrift: t.Type<MRPatientMotherStrassenanschrift> =
    t.recursion("MRPatientMotherStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRPatientMotherStrassenanschriftStadtteil),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, MRPatientMotherStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    postalCode: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRPatientMotherMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0">;
    id?: string;
}

export const MRPatientMotherMeta: t.Type<MRPatientMotherMeta> = t.recursion(
    "MRPatientMotherMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRPatientMotherBirthDate {
    id?: string;
    extension?: MRPatientMotherBirthDateDataabsentreason[];
    value?: string;
}

export const MRPatientMotherBirthDate: t.Type<MRPatientMotherBirthDate> = t.recursion(
    "MRPatientMotherBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MRPatientMotherBirthDateDataabsentreason),
                value: SCALARDate
            })
        )
);

interface MRPatientMother {
    resourceType: "Patient";
    meta: MRPatientMotherMeta;
    identifier: Array<
        | MRPatientMotherPid
        | MRPatientMotherVersichertenIdGKV
        | MRPatientMotherVersichertennummerpkv
        | MRPatientMotherVersichertennummerkvk
    >;
    name: Array<MRPatientMotherName | MRPatientMotherGeburtsname>;
    address: Array<MRPatientMotherStrassenanschrift>;
    id?: string;
    text?: Narrative;
    _birthDate?: MRPatientMotherBirthDate;
    birthDate?: string;
}

const MRPatientMother: t.Type<MRPatientMother> = t.recursion("MRPatientMother", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: MRPatientMotherMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRPatientMotherPid>,
                            t.Type<MRPatientMotherVersichertenIdGKV>,
                            t.Type<MRPatientMotherVersichertennummerpkv>,
                            t.Type<MRPatientMotherVersichertennummerkvk>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRPatientMotherPid,
                        MRPatientMotherVersichertenIdGKV,
                        MRPatientMotherVersichertennummerpkv,
                        MRPatientMotherVersichertennummerkvk
                    ]),
                    [
                        {
                            codec: MRPatientMotherPid,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "type.coding.code", value: "MR" }
                        },
                        {
                            codec: MRPatientMotherVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        },
                        {
                            codec: MRPatientMotherVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "PKV" }
                        },
                        {
                            codec: MRPatientMotherVersichertennummerkvk,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "kvk" }
                        }
                    ],
                    ["1", "*"]
                ),
                name: ReqArray<
                    t.UnionC<
                        [t.Type<MRPatientMotherName>, t.Type<MRPatientMotherGeburtsname>]
                    >,
                    t.Any
                >(
                    t.union([MRPatientMotherName, MRPatientMotherGeburtsname]),
                    [
                        {
                            codec: MRPatientMotherName,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "use", value: "official" }
                        },
                        {
                            codec: MRPatientMotherGeburtsname,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "use", value: "maiden" }
                        }
                    ],
                    ["1", "*"]
                ),
                address: MinMaxArray(1, 1, MRPatientMotherStrassenanschrift)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                _birthDate: MRPatientMotherBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default MRPatientMother;
