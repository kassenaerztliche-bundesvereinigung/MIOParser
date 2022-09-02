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
    MinArray,
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
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AdditionalComment from "../../../../Definitions/KBVBase/1.0.2/Extension/AdditionalComment";

import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactpointsystemVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import DataabsentreasonVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.0.2/ValueSet/GemRSAnlage8";
import Genderamtlichde from "../../../../Definitions/HL7DE/0.9.7/Extension/Genderamtlichde";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";

import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import PractitionerSpecialityVS from "../../../../Definitions/KBVBase/1.0.2/ValueSet/PractitionerSpeciality";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Practitioner"

/**
 * A reference to a code defined by a terminology system.
 */
export interface PractitionerANRTypeLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PractitionerANRTypeLANRType: t.Type<PractitionerANRTypeLANRType> =
    t.recursion("PractitionerANRTypeLANRType", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PractitionerEFNTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PractitionerEFNTypeDNType: t.Type<PractitionerEFNTypeDNType> = t.recursion(
    "PractitionerEFNTypeDNType",
    () =>
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
);

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface PractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const PractitionerNameFamilyNamenszusatz: t.Type<PractitionerNameFamilyNamenszusatz> =
    t.recursion("PractitionerNameFamilyNamenszusatz", () =>
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
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface PractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PractitionerNameFamilyNachname: t.Type<PractitionerNameFamilyNachname> =
    t.recursion("PractitionerNameFamilyNachname", () =>
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
export interface PractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PractitionerNameFamilyVorsatzwort: t.Type<PractitionerNameFamilyVorsatzwort> =
    t.recursion("PractitionerNameFamilyVorsatzwort", () =>
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
export interface PractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const PractitionerNamePrefixPrefixqualifier: t.Type<PractitionerNamePrefixPrefixqualifier> =
    t.recursion("PractitionerNamePrefixPrefixqualifier", () =>
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
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface PractitionerGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const PractitionerGeburtsnameFamilyNamenszusatz: t.Type<PractitionerGeburtsnameFamilyNamenszusatz> =
    t.recursion("PractitionerGeburtsnameFamilyNamenszusatz", () =>
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
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface PractitionerGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PractitionerGeburtsnameFamilyNachname: t.Type<PractitionerGeburtsnameFamilyNachname> =
    t.recursion("PractitionerGeburtsnameFamilyNachname", () =>
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
export interface PractitionerGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PractitionerGeburtsnameFamilyVorsatzwort: t.Type<PractitionerGeburtsnameFamilyVorsatzwort> =
    t.recursion("PractitionerGeburtsnameFamilyVorsatzwort", () =>
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface PractitionerStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const PractitionerStrassenanschriftLineStrasse: t.Type<PractitionerStrassenanschriftLineStrasse> =
    t.recursion("PractitionerStrassenanschriftLineStrasse", () =>
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
    );

/**
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface PractitionerStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const PractitionerStrassenanschriftLineHausnummer: t.Type<PractitionerStrassenanschriftLineHausnummer> =
    t.recursion("PractitionerStrassenanschriftLineHausnummer", () =>
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
    );

/**
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface PractitionerStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const PractitionerStrassenanschriftLineAdresszusatz: t.Type<PractitionerStrassenanschriftLineAdresszusatz> =
    t.recursion("PractitionerStrassenanschriftLineAdresszusatz", () =>
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
    );

/**
* Postfach-Adresse.
Bei Angabe eines Postfaches in dieser Extension muss das Postfach auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
Eine Postfach-Adresse darf nicht in Verbindung mit Address.type "physical" oder "both" verwendet werden.
*/
export interface PractitionerPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const PractitionerPostfachLinePostfach: t.Type<PractitionerPostfachLinePostfach> =
    t.recursion("PractitionerPostfachLinePostfach", () =>
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
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface PractitionerANRAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PractitionerANRAssignerReferenceIdentifier: t.Type<PractitionerANRAssignerReferenceIdentifier> =
    t.recursion("PractitionerANRAssignerReferenceIdentifier", () =>
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
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface PractitionerEFNAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PractitionerEFNAssignerReferenceIdentifier: t.Type<PractitionerEFNAssignerReferenceIdentifier> =
    t.recursion("PractitionerEFNAssignerReferenceIdentifier", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PractitionerQualificationPractitionerspecialityCodeCoding {
    system: string;
    code: PractitionerSpecialityVS;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PractitionerQualificationPractitionerspecialityCodeCoding: t.Type<PractitionerQualificationPractitionerspecialityCodeCoding> =
    t.recursion("PractitionerQualificationPractitionerspecialityCodeCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                code: PractitionerSpecialityVS
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PractitionerANRType {
    coding: Array<PractitionerANRTypeLANRType>;
    id?: string;
    text?: string;
}

export const PractitionerANRType: t.Type<PractitionerANRType> = t.recursion(
    "PractitionerANRType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, PractitionerANRTypeLANRType)
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
export interface PractitionerANRAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PractitionerANRAssignerReferenceIdentifier;
}

export const PractitionerANRAssignerReference: t.Type<PractitionerANRAssignerReference> =
    t.recursion("PractitionerANRAssignerReference", () =>
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
                identifier: PractitionerANRAssignerReferenceIdentifier
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PractitionerEFNType {
    coding: Array<PractitionerEFNTypeDNType>;
    id?: string;
    text?: string;
}

export const PractitionerEFNType: t.Type<PractitionerEFNType> = t.recursion(
    "PractitionerEFNType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, PractitionerEFNTypeDNType)
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
export interface PractitionerEFNAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PractitionerEFNAssignerReferenceIdentifier;
}

export const PractitionerEFNAssignerReference: t.Type<PractitionerEFNAssignerReference> =
    t.recursion("PractitionerEFNAssignerReference", () =>
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
                identifier: PractitionerEFNAssignerReferenceIdentifier
            })
        ])
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface PractitionerNameFamily {
    id?: string;
    extension?: (
        | Extension
        | PractitionerNameFamilyNamenszusatz
        | PractitionerNameFamilyNachname
        | PractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PractitionerNameFamily: t.Type<PractitionerNameFamily> = t.recursion(
    "PractitionerNameFamily",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PractitionerNameFamilyNamenszusatz>,
                        t.Type<PractitionerNameFamilyNachname>,
                        t.Type<PractitionerNameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PractitionerNameFamilyNamenszusatz,
                    PractitionerNameFamilyNachname,
                    PractitionerNameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerNameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: PractitionerNameFamilyNachname,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: PractitionerNameFamilyVorsatzwort,
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
);

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface PractitionerNamePrefix {
    id?: string;
    extension?: (Extension | PractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const PractitionerNamePrefix: t.Type<PractitionerNamePrefix> = t.recursion(
    "PractitionerNamePrefix",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [t.Type<Extension>, t.Type<PractitionerNamePrefixPrefixqualifier>]
                >,
                t.Any
            >(
                t.union([Extension, PractitionerNamePrefixPrefixqualifier]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerNamePrefixPrefixqualifier,
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
);

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface PractitionerGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | PractitionerGeburtsnameFamilyNamenszusatz
        | PractitionerGeburtsnameFamilyNachname
        | PractitionerGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PractitionerGeburtsnameFamily: t.Type<PractitionerGeburtsnameFamily> =
    t.recursion("PractitionerGeburtsnameFamily", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PractitionerGeburtsnameFamilyNamenszusatz>,
                        t.Type<PractitionerGeburtsnameFamilyNachname>,
                        t.Type<PractitionerGeburtsnameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PractitionerGeburtsnameFamilyNamenszusatz,
                    PractitionerGeburtsnameFamilyNachname,
                    PractitionerGeburtsnameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerGeburtsnameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: PractitionerGeburtsnameFamilyNachname,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: PractitionerGeburtsnameFamilyVorsatzwort,
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
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | PractitionerStrassenanschriftLineStrasse
        | PractitionerStrassenanschriftLineHausnummer
        | PractitionerStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const PractitionerStrassenanschriftLine: t.Type<PractitionerStrassenanschriftLine> =
    t.recursion("PractitionerStrassenanschriftLine", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PractitionerStrassenanschriftLineStrasse>,
                        t.Type<PractitionerStrassenanschriftLineHausnummer>,
                        t.Type<PractitionerStrassenanschriftLineAdresszusatz>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PractitionerStrassenanschriftLineStrasse,
                    PractitionerStrassenanschriftLineHausnummer,
                    PractitionerStrassenanschriftLineAdresszusatz
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerStrassenanschriftLineStrasse,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                        }
                    },
                    {
                        codec: PractitionerStrassenanschriftLineHausnummer,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                        }
                    },
                    {
                        codec: PractitionerStrassenanschriftLineAdresszusatz,
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
    );

/**
 * Time period when address was/is in use.
 */
export interface PractitionerStrassenanschriftPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PractitionerStrassenanschriftPeriod: t.Type<PractitionerStrassenanschriftPeriod> =
    t.recursion("PractitionerStrassenanschriftPeriod", () =>
        t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PractitionerPostfachLine {
    id?: string;
    extension?: (Extension | PractitionerPostfachLinePostfach)[];
    value?: string;
}

export const PractitionerPostfachLine: t.Type<PractitionerPostfachLine> = t.recursion(
    "PractitionerPostfachLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<PractitionerPostfachLinePostfach>]>,
                t.Any
            >(
                t.union([Extension, PractitionerPostfachLinePostfach]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerPostfachLinePostfach,
                        occurrence: ["1", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
);

/**
 * Time period when address was/is in use.
 */
export interface PractitionerPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PractitionerPostfachPeriod: t.Type<PractitionerPostfachPeriod> = t.recursion(
    "PractitionerPostfachPeriod",
    () => t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
);

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface PractitionerBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: DataabsentreasonVS;
    id?: string;
}

export const PractitionerBirthDateDataabsentreason: t.Type<PractitionerBirthDateDataabsentreason> =
    t.recursion("PractitionerBirthDateDataabsentreason", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                ),
                valueCode: DataabsentreasonVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Coded representation of the qualification.
 */
export interface PractitionerQualificationPractitionerspecialityCode {
    coding: Array<PractitionerQualificationPractitionerspecialityCodeCoding>;
    id?: string;
    text?: string;
}

export const PractitionerQualificationPractitionerspecialityCode: t.Type<PractitionerQualificationPractitionerspecialityCode> =
    t.recursion("PractitionerQualificationPractitionerspecialityCode", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(
                    1,
                    1,
                    PractitionerQualificationPractitionerspecialityCodeCoding
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PractitionerANR {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: PractitionerANRType;
    period?: Period;
    assigner?: PractitionerANRAssignerReference;
}

export const PractitionerANR: t.Type<PractitionerANR> = t.recursion(
    "PractitionerANR",
    () =>
        t.intersection([
            t.type({
                system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                type: PractitionerANRType,
                period: Period,
                assigner: PractitionerANRAssignerReference
            })
        ])
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PractitionerEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: PractitionerEFNType;
    period?: Period;
    assigner?: PractitionerEFNAssignerReference;
}

export const PractitionerEFN: t.Type<PractitionerEFN> = t.recursion(
    "PractitionerEFN",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/NamingSystem/bundesaerztekammer/efn"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                type: PractitionerEFNType,
                period: Period,
                assigner: PractitionerEFNAssignerReference
            })
        ])
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PractitionerName {
    use: "official";
    id?: string;
    text?: string;
    _family?: PractitionerNameFamily;
    family?: string;
    given?: Array<string>;
    _prefix?: PractitionerNamePrefix[];
    prefix?: string[];
    suffix?: Array<string>;
    period?: Period;
}

export const PractitionerName: t.Type<PractitionerName> = t.recursion(
    "PractitionerName",
    () =>
        t.intersection([
            t.type({
                use: Literal("official")
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: PractitionerNameFamily,
                family: SCALARString,
                given: MaxArray(1, SCALARString),
                _prefix: t.array(PractitionerNamePrefix),
                prefix: t.array(SCALARString),
                suffix: MaxArray(1, SCALARString),
                period: Period
            })
        ])
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PractitionerGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: PractitionerGeburtsnameFamily;
    family?: string;
    suffix?: Array<string>;
    period?: Period;
}

export const PractitionerGeburtsname: t.Type<PractitionerGeburtsname> = t.recursion(
    "PractitionerGeburtsname",
    () =>
        t.intersection([
            t.type({
                use: Literal("maiden")
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: PractitionerGeburtsnameFamily,
                family: SCALARString,
                suffix: MaxArray(1, SCALARString),
                period: Period
            })
        ])
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PractitionerStrassenanschrift {
    type: "both";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PractitionerStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: PractitionerStrassenanschriftPeriod;
}

export const PractitionerStrassenanschrift: t.Type<PractitionerStrassenanschrift> =
    t.recursion("PractitionerStrassenanschrift", () =>
        t.intersection([
            t.type({
                type: Literal("both")
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<Iso21090ADXPprecinct>]>,
                    t.Any
                >(
                    t.union([Extension, Iso21090ADXPprecinct]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Iso21090ADXPprecinct,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, PractitionerStrassenanschriftLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: PractitionerStrassenanschriftPeriod
            })
        ])
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischenOrt Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PractitionerPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PractitionerPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: PractitionerPostfachPeriod;
}

export const PractitionerPostfach: t.Type<PractitionerPostfach> = t.recursion(
    "PractitionerPostfach",
    () =>
        t.intersection([
            t.type({
                type: Literal("postal")
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<Iso21090ADXPprecinct>]>,
                    t.Any
                >(
                    t.union([Extension, Iso21090ADXPprecinct]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Iso21090ADXPprecinct,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, PractitionerPostfachLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: PractitionerPostfachPeriod
            })
        ])
);

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface PractitionerQualificationPractitionerspeciality {
    code: PractitionerQualificationPractitionerspecialityCode;
    id?: string;
    identifier?: Identifier[];
    period?: Period;
    issuer?: Reference;
}

export const PractitionerQualificationPractitionerspeciality: t.Type<PractitionerQualificationPractitionerspeciality> =
    t.recursion("PractitionerQualificationPractitionerspeciality", () =>
        t.intersection([
            t.type({
                code: PractitionerQualificationPractitionerspecialityCode
            }),
            t.partial({
                id: SCALARString,
                identifier: t.array(Identifier),
                period: Period,
                issuer: Reference
            })
        ])
    );

/**
 * A contact detail for the practitioner, e.g. a telephone number or an email address.
 */
export interface PractitionerTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

export const PractitionerTelecom: t.Type<PractitionerTelecom> = t.recursion(
    "PractitionerTelecom",
    () =>
        t.intersection([
            t.type({
                system: ContactpointsystemVS,
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: ContactpointuseVS,
                rank: SCALARPositiveInt,
                period: Period
            })
        ])
);

/**
 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
 */
export interface PractitionerGender {
    id?: string;
    extension?: (Extension | Genderamtlichde)[];
    value?: string;
}

export const PractitionerGender: t.Type<PractitionerGender> = t.recursion(
    "PractitionerGender",
    () =>
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
);

/**
 * The date of birth for the practitioner.
 */
export interface PractitionerBirthDate {
    id?: string;
    extension?: (Extension | PractitionerBirthDateDataabsentreason)[];
    value?: string;
}

export const PractitionerBirthDate: t.Type<PractitionerBirthDate> = t.recursion(
    "PractitionerBirthDate",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [t.Type<Extension>, t.Type<PractitionerBirthDateDataabsentreason>]
                >,
                t.Any
            >(
                t.union([Extension, PractitionerBirthDateDataabsentreason]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PractitionerBirthDateDataabsentreason,
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
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface PractitionerQualification {
    code: CodeableConcept;
    id?: string;
    identifier?: Identifier[];
    period?: Period;
    issuer?: Reference;
}

export const PractitionerQualification: t.Type<PractitionerQualification> = t.recursion(
    "PractitionerQualification",
    () =>
        t.intersection([
            t.type({
                code: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                identifier: t.array(Identifier),
                period: Period,
                issuer: Reference
            })
        ])
);

interface Practitioner {
    name: Array<PractitionerName | PractitionerGeburtsname>;
    resourceType?: "Practitioner";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    extension?: (Extension | AdditionalComment)[];
    identifier?: (PractitionerANR | PractitionerEFN)[];
    active?: boolean;
    telecom?: PractitionerTelecom[];
    address?: (PractitionerStrassenanschrift | PractitionerPostfach)[];
    _gender?: PractitionerGender;
    gender?: string;
    _birthDate?: PractitionerBirthDate;
    birthDate?: string;
    photo?: Attachment[];
    qualification?: (
        | PractitionerQualification
        | PractitionerQualificationPractitionerspeciality
    )[];
    communication?: CodeableConcept[];
}

const Practitioner: t.Type<Practitioner> = t.recursion("Practitioner", () =>
    t.intersection([
        t.type({
            name: ReqArray<
                t.UnionC<[t.Type<PractitionerName>, t.Type<PractitionerGeburtsname>]>,
                t.Any
            >(
                t.union([PractitionerName, PractitionerGeburtsname]),
                [
                    {
                        codec: PractitionerName,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "use", value: "official" }
                    },
                    {
                        codec: PractitionerGeburtsname,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "use", value: "maiden" }
                    }
                ],
                ["1", "*"]
            )
        }),
        t.partial({
            resourceType: Literal("Practitioner"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<AdditionalComment>]>,
                t.Any
            >(
                t.union([Extension, AdditionalComment]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: AdditionalComment,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                        }
                    }
                ],
                ["0", "*"]
            ),
            identifier: ReqArray<
                t.UnionC<[t.Type<PractitionerANR>, t.Type<PractitionerEFN>]>,
                t.Any
            >(
                t.union([PractitionerANR, PractitionerEFN]),
                [
                    {
                        codec: PractitionerANR,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "type.coding.code", value: "LANR" }
                    },
                    {
                        codec: PractitionerEFN,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type.coding.code", value: "DN" }
                    }
                ],
                ["0", "*"]
            ),
            active: SCALARBoolean,
            telecom: t.array(PractitionerTelecom),
            address: ReqArray<
                t.UnionC<
                    [t.Type<PractitionerStrassenanschrift>, t.Type<PractitionerPostfach>]
                >,
                t.Any
            >(
                t.union([PractitionerStrassenanschrift, PractitionerPostfach]),
                [
                    {
                        codec: PractitionerStrassenanschrift,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type", value: "both" }
                    },
                    {
                        codec: PractitionerPostfach,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type", value: "postal" }
                    }
                ],
                ["0", "*"]
            ),
            _gender: PractitionerGender,
            gender: SCALARCode,
            _birthDate: PractitionerBirthDate,
            birthDate: SCALARDate,
            photo: t.array(Attachment),
            qualification: ReqArray<
                t.UnionC<
                    [
                        t.Type<PractitionerQualification>,
                        t.Type<PractitionerQualificationPractitionerspeciality>
                    ]
                >,
                t.Any
            >(
                t.union([
                    PractitionerQualification,
                    PractitionerQualificationPractitionerspeciality
                ]),
                [
                    { codec: PractitionerQualification, occurrence: ["0", "*"] },
                    {
                        codec: PractitionerQualificationPractitionerspeciality,
                        occurrence: ["0", "*"]
                    }
                ],
                ["0", "*"]
            ),
            communication: t.array(CodeableConcept)
        })
    ])
);

export default Practitioner;
