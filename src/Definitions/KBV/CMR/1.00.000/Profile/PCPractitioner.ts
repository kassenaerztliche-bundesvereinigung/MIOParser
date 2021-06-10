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
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import CMRPractitionerSpecialityVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRPractitionerSpeciality";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.01.000/ValueSet/GemRSAnlage8";
import Identifier from "../../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Practitioner"

/**
 * Content in other Language.
 */
export interface PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent: t.Type<PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent> = t.recursion(
    "PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent",
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
export interface PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
    )[];
}

export const PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation: t.Type<PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation> = t.recursion(
    "PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation",
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
                                t.Type<
                                    PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface PCPractitionerANRTypeLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPractitionerANRTypeLANRType: t.Type<PCPractitionerANRTypeLANRType> = t.recursion(
    "PCPractitionerANRTypeLANRType",
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
export interface PCPractitionerEFNTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPractitionerEFNTypeDNType: t.Type<PCPractitionerEFNTypeDNType> = t.recursion(
    "PCPractitionerEFNTypeDNType",
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
 * A reference to a code defined by a terminology system.
 */
export interface PCPractitionerHebammenIKTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCPractitionerHebammenIKTypeXXType: t.Type<PCPractitionerHebammenIKTypeXXType> = t.recursion(
    "PCPractitionerHebammenIKTypeXXType",
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
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface PCPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.11";
    id?: string;
    valueString?: string;
}

export const PCPractitionerNameFamilyNamenszusatz: t.Type<PCPractitionerNameFamilyNamenszusatz> = t.recursion(
    "PCPractitionerNameFamilyNamenszusatz",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.11"
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
export interface PCPractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PCPractitionerNameFamilyNachname: t.Type<PCPractitionerNameFamilyNachname> = t.recursion(
    "PCPractitionerNameFamilyNachname",
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
export interface PCPractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PCPractitionerNameFamilyVorsatzwort: t.Type<PCPractitionerNameFamilyVorsatzwort> = t.recursion(
    "PCPractitionerNameFamilyVorsatzwort",
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
export interface PCPractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const PCPractitionerNamePrefixPrefixqualifier: t.Type<PCPractitionerNamePrefixPrefixqualifier> = t.recursion(
    "PCPractitionerNamePrefixPrefixqualifier",
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface PCPractitionerStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const PCPractitionerStrassenanschriftLineStrasse: t.Type<PCPractitionerStrassenanschriftLineStrasse> = t.recursion(
    "PCPractitionerStrassenanschriftLineStrasse",
    () =>
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
export interface PCPractitionerStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const PCPractitionerStrassenanschriftLineHausnummer: t.Type<PCPractitionerStrassenanschriftLineHausnummer> = t.recursion(
    "PCPractitionerStrassenanschriftLineHausnummer",
    () =>
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
export interface PCPractitionerStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const PCPractitionerStrassenanschriftLineAdresszusatz: t.Type<PCPractitionerStrassenanschriftLineAdresszusatz> = t.recursion(
    "PCPractitionerStrassenanschriftLineAdresszusatz",
    () =>
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
* Postfach-Adresse.
Bei Angabe eines Postfaches in dieser Extension muss das Postfach auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
Eine Postfach-Adresse darf nicht in Verbindung mit Address.type "physical" oder "both" verwendet werden.
*/
export interface PCPractitionerPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const PCPractitionerPostfachLinePostfach: t.Type<PCPractitionerPostfachLinePostfach> = t.recursion(
    "PCPractitionerPostfachLinePostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
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
export interface PCPractitionerANRAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PCPractitionerANRAssignerIdentifier: t.Type<PCPractitionerANRAssignerIdentifier> = t.recursion(
    "PCPractitionerANRAssignerIdentifier",
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
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface PCPractitionerEFNAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PCPractitionerEFNAssignerIdentifier: t.Type<PCPractitionerEFNAssignerIdentifier> = t.recursion(
    "PCPractitionerEFNAssignerIdentifier",
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
 * A subsection of a municipality.
 */
export interface PCPractitionerStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const PCPractitionerStrassenanschriftStadtteil: t.Type<PCPractitionerStrassenanschriftStadtteil> = t.recursion(
    "PCPractitionerStrassenanschriftStadtteil",
    () =>
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
 * A subsection of a municipality.
 */
export interface PCPractitionerPostfachStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const PCPractitionerPostfachStadtteil: t.Type<PCPractitionerPostfachStadtteil> = t.recursion(
    "PCPractitionerPostfachStadtteil",
    () =>
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
export interface PCPractitionerQualificationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
    )[];
    value?: string;
}

export const PCPractitionerQualificationCodeCodingDisplay: t.Type<PCPractitionerQualificationCodeCodingDisplay> = t.recursion(
    "PCPractitionerQualificationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PCPractitionerANRType {
    coding: Array<PCPractitionerANRTypeLANRType>;
    id?: string;
    text?: string;
}

export const PCPractitionerANRType: t.Type<PCPractitionerANRType> = t.recursion(
    "PCPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPractitionerANRTypeLANRType)
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
export interface PCPractitionerANRAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PCPractitionerANRAssignerIdentifier;
}

export const PCPractitionerANRAssigner: t.Type<PCPractitionerANRAssigner> = t.recursion(
    "PCPractitionerANRAssigner",
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
                    identifier: PCPractitionerANRAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PCPractitionerEFNType {
    coding: Array<PCPractitionerEFNTypeDNType>;
    id?: string;
    text?: string;
}

export const PCPractitionerEFNType: t.Type<PCPractitionerEFNType> = t.recursion(
    "PCPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPractitionerEFNTypeDNType)
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
export interface PCPractitionerEFNAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PCPractitionerEFNAssignerIdentifier;
}

export const PCPractitionerEFNAssigner: t.Type<PCPractitionerEFNAssigner> = t.recursion(
    "PCPractitionerEFNAssigner",
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
                    identifier: PCPractitionerEFNAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PCPractitionerHebammenIKType {
    coding: Array<PCPractitionerHebammenIKTypeXXType>;
    id?: string;
    text?: string;
}

export const PCPractitionerHebammenIKType: t.Type<PCPractitionerHebammenIKType> = t.recursion(
    "PCPractitionerHebammenIKType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCPractitionerHebammenIKTypeXXType)
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
export interface PCPractitionerHebammenIKAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
}

export const PCPractitionerHebammenIKAssigner: t.Type<PCPractitionerHebammenIKAssigner> = t.recursion(
    "PCPractitionerHebammenIKAssigner",
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
                    identifier: Identifier
                })
            ])
        )
);

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface PCPractitionerNameFamily {
    id?: string;
    extension?: (
        | Extension
        | PCPractitionerNameFamilyNamenszusatz
        | PCPractitionerNameFamilyNachname
        | PCPractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PCPractitionerNameFamily: t.Type<PCPractitionerNameFamily> = t.recursion(
    "PCPractitionerNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCPractitionerNameFamilyNamenszusatz>,
                            t.Type<PCPractitionerNameFamilyNachname>,
                            t.Type<PCPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCPractitionerNameFamilyNamenszusatz,
                        PCPractitionerNameFamilyNachname,
                        PCPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: PCPractitionerNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: PCPractitionerNameFamilyVorsatzwort,
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
export interface PCPractitionerNamePrefix {
    id?: string;
    extension?: (Extension | PCPractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const PCPractitionerNamePrefix: t.Type<PCPractitionerNamePrefix> = t.recursion(
    "PCPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCPractitionerNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCPractitionerNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerNamePrefixPrefixqualifier,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PCPractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | PCPractitionerStrassenanschriftLineStrasse
        | PCPractitionerStrassenanschriftLineHausnummer
        | PCPractitionerStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const PCPractitionerStrassenanschriftLine: t.Type<PCPractitionerStrassenanschriftLine> = t.recursion(
    "PCPractitionerStrassenanschriftLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCPractitionerStrassenanschriftLineStrasse>,
                            t.Type<PCPractitionerStrassenanschriftLineHausnummer>,
                            t.Type<PCPractitionerStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCPractitionerStrassenanschriftLineStrasse,
                        PCPractitionerStrassenanschriftLineHausnummer,
                        PCPractitionerStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: PCPractitionerStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: PCPractitionerStrassenanschriftLineAdresszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
 * Time period when address was/is in use.
 */
export interface PCPractitionerStrassenanschriftPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PCPractitionerStrassenanschriftPeriod: t.Type<PCPractitionerStrassenanschriftPeriod> = t.recursion(
    "PCPractitionerStrassenanschriftPeriod",
    () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PCPractitionerPostfachLine {
    id?: string;
    extension?: (Extension | PCPractitionerPostfachLinePostfach)[];
    value?: string;
}

export const PCPractitionerPostfachLine: t.Type<PCPractitionerPostfachLine> = t.recursion(
    "PCPractitionerPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PCPractitionerPostfachLinePostfach>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCPractitionerPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerPostfachLinePostfach,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
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
 * Time period when address was/is in use.
 */
export interface PCPractitionerPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PCPractitionerPostfachPeriod: t.Type<PCPractitionerPostfachPeriod> = t.recursion(
    "PCPractitionerPostfachPeriod",
    () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface PCPractitionerQualificationCodeCoding {
    system: string;
    version: string;
    code: CMRPractitionerSpecialityVS;
    id?: string;
    _display?: PCPractitionerQualificationCodeCodingDisplay;
    display?: string;
}

export const PCPractitionerQualificationCodeCoding: t.Type<PCPractitionerQualificationCodeCoding> = t.recursion(
    "PCPractitionerQualificationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRPractitionerSpecialityVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: PCPractitionerQualificationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface PCPractitionerErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const PCPractitionerErgaenzendeAngaben: t.Type<PCPractitionerErgaenzendeAngaben> = t.recursion(
    "PCPractitionerErgaenzendeAngaben",
    () =>
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
export interface PCPractitionerANR {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: PCPractitionerANRType;
    period?: Period;
    assigner?: PCPractitionerANRAssigner;
}

export const PCPractitionerANR: t.Type<PCPractitionerANR> = t.recursion(
    "PCPractitionerANR",
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
                    type: PCPractitionerANRType,
                    period: Period,
                    assigner: PCPractitionerANRAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCPractitionerEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: PCPractitionerEFNType;
    period?: Period;
    assigner?: PCPractitionerEFNAssigner;
}

export const PCPractitionerEFN: t.Type<PCPractitionerEFN> = t.recursion(
    "PCPractitionerEFN",
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
                    type: PCPractitionerEFNType,
                    period: Period,
                    assigner: PCPractitionerEFNAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCPractitionerHebammenIK {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: PCPractitionerHebammenIKType;
    period?: Period;
    assigner?: PCPractitionerHebammenIKAssigner;
}

export const PCPractitionerHebammenIK: t.Type<PCPractitionerHebammenIK> = t.recursion(
    "PCPractitionerHebammenIK",
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
                    type: PCPractitionerHebammenIKType,
                    period: Period,
                    assigner: PCPractitionerHebammenIKAssigner
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PCPractitionerName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: PCPractitionerNameFamily;
    family?: string;
    _prefix?: PCPractitionerNamePrefix[];
    prefix?: string[];
}

export const PCPractitionerName: t.Type<PCPractitionerName> = t.recursion(
    "PCPractitionerName",
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
                    _family: PCPractitionerNameFamily,
                    family: SCALARString,
                    _prefix: t.array(PCPractitionerNamePrefix),
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
export interface PCPractitionerStrassenanschrift {
    type: "both";
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | PCPractitionerStrassenanschriftStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PCPractitionerStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    period?: PCPractitionerStrassenanschriftPeriod;
}

export const PCPractitionerStrassenanschrift: t.Type<PCPractitionerStrassenanschrift> = t.recursion(
    "PCPractitionerStrassenanschrift",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<PCPractitionerStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, PCPractitionerStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCPractitionerStrassenanschriftStadtteil,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, PCPractitionerStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString,
                    period: PCPractitionerStrassenanschriftPeriod
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischenOrt Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PCPractitionerPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | PCPractitionerPostfachStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PCPractitionerPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: PCPractitionerPostfachPeriod;
}

export const PCPractitionerPostfach: t.Type<PCPractitionerPostfach> = t.recursion(
    "PCPractitionerPostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<PCPractitionerPostfachStadtteil>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, PCPractitionerPostfachStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCPractitionerPostfachStadtteil,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, PCPractitionerPostfachLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                    period: PCPractitionerPostfachPeriod
                })
            ])
        )
);

/**
 * Coded representation of the qualification.
 */
export interface PCPractitionerQualificationCode {
    coding: Array<PCPractitionerQualificationCodeCoding>;
    id?: string;
}

export const PCPractitionerQualificationCode: t.Type<PCPractitionerQualificationCode> = t.recursion(
    "PCPractitionerQualificationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PCPractitionerQualificationCodeCoding)
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
export interface PCPractitionerMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Practitioner|1.0.0"
    >;
    id?: string;
}

export const PCPractitionerMeta: t.Type<PCPractitionerMeta> = t.recursion(
    "PCPractitionerMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Practitioner|1.0.0"
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
export interface PCPractitionerTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
}

export const PCPractitionerTelecom: t.Type<PCPractitionerTelecom> = t.recursion(
    "PCPractitionerTelecom",
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
export interface PCPractitionerQualification {
    code: PCPractitionerQualificationCode;
    id?: string;
    period?: Period;
    issuer?: Reference;
}

export const PCPractitionerQualification: t.Type<PCPractitionerQualification> = t.recursion(
    "PCPractitionerQualification",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: PCPractitionerQualificationCode
                }),
                t.partial({
                    id: SCALARString,
                    period: Period,
                    issuer: Reference
                })
            ])
        )
);

interface PCPractitioner {
    resourceType: "Practitioner";
    meta: PCPractitionerMeta;
    identifier: Array<PCPractitionerANR | PCPractitionerEFN | PCPractitionerHebammenIK>;
    name: Array<PCPractitionerName>;
    id?: string;
    text?: Narrative;
    extension?: (Extension | PCPractitionerErgaenzendeAngaben)[];
    telecom?: PCPractitionerTelecom[];
    address?: Array<PCPractitionerStrassenanschrift | PCPractitionerPostfach>;
    qualification?: PCPractitionerQualification[];
}

const PCPractitioner: t.Type<PCPractitioner> = t.recursion("PCPractitioner", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Practitioner"),
                meta: PCPractitionerMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<PCPractitionerANR>,
                            t.Type<PCPractitionerEFN>,
                            t.Type<PCPractitionerHebammenIK>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        PCPractitionerANR,
                        PCPractitionerEFN,
                        PCPractitionerHebammenIK
                    ]),
                    [
                        {
                            codec: PCPractitionerANR,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "LANR" }
                        },
                        {
                            codec: PCPractitionerEFN,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "DN" }
                        },
                        {
                            codec: PCPractitionerHebammenIK,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        }
                    ],
                    ["1", "*"]
                ),
                name: MinMaxArray(1, 1, PCPractitionerName)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PCPractitionerErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCPractitionerErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCPractitionerErgaenzendeAngaben,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                telecom: t.array(PCPractitionerTelecom),
                address: ReqArray<
                    t.UnionC<
                        [
                            t.Type<PCPractitionerStrassenanschrift>,
                            t.Type<PCPractitionerPostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([PCPractitionerStrassenanschrift, PCPractitionerPostfach]),
                    [
                        {
                            codec: PCPractitionerStrassenanschrift,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "both" }
                        },
                        {
                            codec: PCPractitionerPostfach,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "postal" }
                        }
                    ],
                    ["0", "1"]
                ),
                qualification: t.array(PCPractitionerQualification)
            })
        ])
    )
);

export default PCPractitioner;
