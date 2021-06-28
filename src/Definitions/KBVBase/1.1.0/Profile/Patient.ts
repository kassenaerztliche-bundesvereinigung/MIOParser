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
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import AdministrativegenderVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Administrativegender";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import ContactpointsystemVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";

import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/GemRSAnlage8";
import Genderamtlichde from "../../../../Definitions/HL7DE/0.9.11/Extension/Genderamtlichde";
import HumanName from "../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
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
 * A reference to a code defined by a terminology system.
 */
export interface PatientPidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PatientPidTypeMRType: t.Type<PatientPidTypeMRType> = t.recursion(
    "PatientPidTypeMRType",
    () =>
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
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientVersichertenIdGKVTypeGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PatientVersichertenIdGKVTypeGKVType: t.Type<PatientVersichertenIdGKVTypeGKVType> = t.recursion(
    "PatientVersichertenIdGKVTypeGKVType",
    () =>
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
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface PatientVersichertennummerpkvTypePKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PatientVersichertennummerpkvTypePKVType: t.Type<PatientVersichertennummerpkvTypePKVType> = t.recursion(
    "PatientVersichertennummerpkvTypePKVType",
    () =>
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
);

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface PatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PatientNameFamilyNamenszusatz: t.Type<PatientNameFamilyNamenszusatz> = t.recursion(
    "PatientNameFamilyNamenszusatz",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/humanname-namenszusatz")
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

export const PatientNameFamilyVorsatzwort: t.Type<PatientNameFamilyVorsatzwort> = t.recursion(
    "PatientNameFamilyVorsatzwort",
    () =>
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

export const PatientNamePrefixPrefixqualifier: t.Type<PatientNamePrefixPrefixqualifier> = t.recursion(
    "PatientNamePrefixPrefixqualifier",
    () =>
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
export interface PatientGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const PatientGeburtsnameFamilyNamenszusatz: t.Type<PatientGeburtsnameFamilyNamenszusatz> = t.recursion(
    "PatientGeburtsnameFamilyNamenszusatz",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/humanname-namenszusatz")
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
export interface PatientGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const PatientGeburtsnameFamilyNachname: t.Type<PatientGeburtsnameFamilyNachname> = t.recursion(
    "PatientGeburtsnameFamilyNachname",
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
export interface PatientGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const PatientGeburtsnameFamilyVorsatzwort: t.Type<PatientGeburtsnameFamilyVorsatzwort> = t.recursion(
    "PatientGeburtsnameFamilyVorsatzwort",
    () =>
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
export interface PatientStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const PatientStrassenanschriftLineStrasse: t.Type<PatientStrassenanschriftLineStrasse> = t.recursion(
    "PatientStrassenanschriftLineStrasse",
    () =>
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
export interface PatientStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const PatientStrassenanschriftLineHausnummer: t.Type<PatientStrassenanschriftLineHausnummer> = t.recursion(
    "PatientStrassenanschriftLineHausnummer",
    () =>
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
export interface PatientStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const PatientStrassenanschriftLineAdresszusatz: t.Type<PatientStrassenanschriftLineAdresszusatz> = t.recursion(
    "PatientStrassenanschriftLineAdresszusatz",
    () =>
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
export interface PatientPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const PatientPostfachLinePostfach: t.Type<PatientPostfachLinePostfach> = t.recursion(
    "PatientPostfachLinePostfach",
    () =>
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
export interface PatientVersichertennummerpkvAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PatientVersichertennummerpkvAssignerIdentifier: t.Type<PatientVersichertennummerpkvAssignerIdentifier> = t.recursion(
    "PatientVersichertennummerpkvAssignerIdentifier",
    () =>
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
export interface PatientReisepassnummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "PPN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PatientReisepassnummerTypeCoding: t.Type<PatientReisepassnummerTypeCoding> = t.recursion(
    "PatientReisepassnummerTypeCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("PPN")
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
export interface PatientVersichertennummerkvkTypeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type";
    code: "kvk";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PatientVersichertennummerkvkTypeCoding: t.Type<PatientVersichertennummerkvkTypeCoding> = t.recursion(
    "PatientVersichertennummerkvkTypeCoding",
    () =>
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
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface PatientPidType {
    coding: Array<PatientPidTypeMRType>;
    id?: string;
    text?: string;
}

export const PatientPidType: t.Type<PatientPidType> = t.recursion("PatientPidType", () =>
    t.intersection([
        t.type({
            coding: MinArray(1, PatientPidTypeMRType)
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
    coding: Array<PatientVersichertenIdGKVTypeGKVType>;
    id?: string;
    text?: string;
}

export const PatientVersichertenIdGKVType: t.Type<PatientVersichertenIdGKVType> = t.recursion(
    "PatientVersichertenIdGKVType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, PatientVersichertenIdGKVTypeGKVType)
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
    coding: Array<PatientVersichertennummerpkvTypePKVType>;
    id?: string;
    text?: string;
}

export const PatientVersichertennummerpkvType: t.Type<PatientVersichertennummerpkvType> = t.recursion(
    "PatientVersichertennummerpkvType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, PatientVersichertennummerpkvTypePKVType)
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
export interface PatientVersichertennummerpkvAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PatientVersichertennummerpkvAssignerIdentifier;
}

export const PatientVersichertennummerpkvAssigner: t.Type<PatientVersichertennummerpkvAssigner> = t.recursion(
    "PatientVersichertennummerpkvAssigner",
    () =>
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
                identifier: PatientVersichertennummerpkvAssignerIdentifier
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
                coding: MinArray(1, PatientReisepassnummerTypeCoding)
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

export const PatientVersichertennummerkvkType: t.Type<PatientVersichertennummerkvkType> = t.recursion(
    "PatientVersichertennummerkvkType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, PatientVersichertennummerkvkTypeCoding)
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
                            value:
                                "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: PatientNameFamilyNachname,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: PatientNameFamilyVorsatzwort,
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
);

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface PatientNamePrefix {
    id?: string;
    extension?: (Extension | PatientNamePrefixPrefixqualifier)[];
    value?: string;
}

export const PatientNamePrefix: t.Type<PatientNamePrefix> = t.recursion(
    "PatientNamePrefix",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<PatientNamePrefixPrefixqualifier>]>,
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
                            value:
                                "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
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
export interface PatientGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | PatientGeburtsnameFamilyNamenszusatz
        | PatientGeburtsnameFamilyNachname
        | PatientGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const PatientGeburtsnameFamily: t.Type<PatientGeburtsnameFamily> = t.recursion(
    "PatientGeburtsnameFamily",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PatientGeburtsnameFamilyNamenszusatz>,
                        t.Type<PatientGeburtsnameFamilyNachname>,
                        t.Type<PatientGeburtsnameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PatientGeburtsnameFamilyNamenszusatz,
                    PatientGeburtsnameFamilyNachname,
                    PatientGeburtsnameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PatientGeburtsnameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: PatientGeburtsnameFamilyNachname,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: PatientGeburtsnameFamilyVorsatzwort,
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
);

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface PatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const PatientBirthDateDataabsentreason: t.Type<PatientBirthDateDataabsentreason> = t.recursion(
    "PatientBirthDateDataabsentreason",
    () =>
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PatientStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | PatientStrassenanschriftLineStrasse
        | PatientStrassenanschriftLineHausnummer
        | PatientStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const PatientStrassenanschriftLine: t.Type<PatientStrassenanschriftLine> = t.recursion(
    "PatientStrassenanschriftLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<PatientStrassenanschriftLineStrasse>,
                        t.Type<PatientStrassenanschriftLineHausnummer>,
                        t.Type<PatientStrassenanschriftLineAdresszusatz>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    PatientStrassenanschriftLineStrasse,
                    PatientStrassenanschriftLineHausnummer,
                    PatientStrassenanschriftLineAdresszusatz
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PatientStrassenanschriftLineStrasse,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                        }
                    },
                    {
                        codec: PatientStrassenanschriftLineHausnummer,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                        }
                    },
                    {
                        codec: PatientStrassenanschriftLineAdresszusatz,
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
);

/**
 * Time period when address was/is in use.
 */
export interface PatientStrassenanschriftPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PatientStrassenanschriftPeriod: t.Type<PatientStrassenanschriftPeriod> = t.recursion(
    "PatientStrassenanschriftPeriod",
    () => t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PatientPostfachLine {
    id?: string;
    extension?: (Extension | PatientPostfachLinePostfach)[];
    value?: string;
}

export const PatientPostfachLine: t.Type<PatientPostfachLine> = t.recursion(
    "PatientPostfachLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<PatientPostfachLinePostfach>]>,
                t.Any
            >(
                t.union([Extension, PatientPostfachLinePostfach]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: PatientPostfachLinePostfach,
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
);

/**
 * Time period when address was/is in use.
 */
export interface PatientPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const PatientPostfachPeriod: t.Type<PatientPostfachPeriod> = t.recursion(
    "PatientPostfachPeriod",
    () => t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
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
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
    type?: PatientVersichertenIdGKVType;
    period?: Period;
    assigner?: Reference;
}

export const PatientVersichertenIdGKV: t.Type<PatientVersichertenIdGKV> = t.recursion(
    "PatientVersichertenIdGKV",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                type: PatientVersichertenIdGKVType,
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
    assigner: PatientVersichertennummerpkvAssigner;
    id?: string;
    use?: "secondary";
    system?: string;
    period?: Period;
}

export const PatientVersichertennummerpkv: t.Type<PatientVersichertennummerpkv> = t.recursion(
    "PatientVersichertennummerpkv",
    () =>
        t.intersection([
            t.type({
                type: PatientVersichertennummerpkvType,
                value: SCALARString,
                assigner: PatientVersichertennummerpkvAssigner
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

export const PatientVersichertennummerkvk: t.Type<PatientVersichertennummerkvk> = t.recursion(
    "PatientVersichertennummerkvk",
    () =>
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
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: PatientNameFamily;
    family?: string;
    _prefix?: Array<PatientNamePrefix>;
    prefix?: Array<string>;
    suffix?: Array<string>;
    period?: Period;
}

export const PatientName: t.Type<PatientName> = t.recursion("PatientName", () =>
    t.intersection([
        t.type({
            use: Literal("official"),
            given: MinMaxArray(1, 1, SCALARString)
        }),
        t.partial({
            id: SCALARString,
            text: SCALARString,
            _family: PatientNameFamily,
            family: SCALARString,
            _prefix: MaxArray(1, PatientNamePrefix),
            prefix: MaxArray(1, SCALARString),
            suffix: MaxArray(1, SCALARString),
            period: Period
        })
    ])
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface PatientGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: PatientGeburtsnameFamily;
    family?: string;
    suffix?: Array<string>;
    period?: Period;
}

export const PatientGeburtsname: t.Type<PatientGeburtsname> = t.recursion(
    "PatientGeburtsname",
    () =>
        t.intersection([
            t.type({
                use: Literal("maiden")
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: PatientGeburtsnameFamily,
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
export interface PatientStrassenanschrift {
    type: "both";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PatientStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: PatientStrassenanschriftPeriod;
}

export const PatientStrassenanschrift: t.Type<PatientStrassenanschrift> = t.recursion(
    "PatientStrassenanschrift",
    () =>
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
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, PatientStrassenanschriftLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: PatientStrassenanschriftPeriod
            })
        ])
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PatientPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PatientPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: PatientPostfachPeriod;
}

export const PatientPostfach: t.Type<PatientPostfach> = t.recursion(
    "PatientPostfach",
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
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, PatientPostfachLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: PatientPostfachPeriod
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
 * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
 */
export interface PatientTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

export const PatientTelecom: t.Type<PatientTelecom> = t.recursion("PatientTelecom", () =>
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
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
export interface PatientGender {
    id?: string;
    extension?: (Extension | Genderamtlichde)[];
    value?: string;
}

export const PatientGender: t.Type<PatientGender> = t.recursion("PatientGender", () =>
    t.partial({
        id: SCALARString,
        extension: ReqArray<
            t.UnionC<[t.Type<Extension>, t.Type<Genderamtlichde>]>,
            t.Any
        >(
            t.union([Extension, Genderamtlichde]),
            [
                { codec: Extension, occurrence: ["0", "*"], sliceBy: { path: "url" } },
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
                            value:
                                "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
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
 * A language which may be used to communicate with the patient about his or her health.
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
    name: Array<PatientName | PatientGeburtsname>;
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
    telecom?: PatientTelecom[];
    _gender?: PatientGender;
    gender?: string;
    _birthDate?: PatientBirthDate;
    birthDate?: string;
    deceasedBoolean?: boolean;
    deceasedDateTime?: string;
    address?: (PatientStrassenanschrift | PatientPostfach)[];
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
                t.UnionC<[t.Type<PatientName>, t.Type<PatientGeburtsname>]>,
                t.Any
            >(
                t.union([PatientName, PatientGeburtsname]),
                [
                    {
                        codec: PatientName,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "use", value: "official" }
                    },
                    {
                        codec: PatientGeburtsname,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "use", value: "maiden" }
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
            telecom: t.array(PatientTelecom),
            _gender: PatientGender,
            gender: SCALARCode,
            _birthDate: PatientBirthDate,
            birthDate: SCALARDate,
            deceasedBoolean: SCALARBoolean,
            deceasedDateTime: SCALARDateTime,
            address: ReqArray<
                t.UnionC<[t.Type<PatientStrassenanschrift>, t.Type<PatientPostfach>]>,
                t.Any
            >(
                t.union([PatientStrassenanschrift, PatientPostfach]),
                [
                    {
                        codec: PatientStrassenanschrift,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type", value: "both" }
                    },
                    {
                        codec: PatientPostfach,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "type", value: "postal" }
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
