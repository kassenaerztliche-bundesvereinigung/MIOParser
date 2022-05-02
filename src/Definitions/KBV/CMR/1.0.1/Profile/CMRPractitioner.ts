import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import CMRPractitionerSpecialityVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRPractitionerSpeciality";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";
import Identifier from "../../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner"

/**
 * Content in other Language.
 */
export interface CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent: t.Type<CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent> =
    t.recursion(
        "CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent",
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
export interface CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
    )[];
}

export const CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation: t.Type<CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation> =
    t.recursion(
        "CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation",
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
                                    t.Type<CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent,
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
export interface CMRPractitionerANRTypeCodingLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPractitionerANRTypeCodingLANRType: t.Type<CMRPractitionerANRTypeCodingLANRType> =
    t.recursion("CMRPractitionerANRTypeCodingLANRType", () =>
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
export interface CMRPractitionerEFNTypeCodingDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPractitionerEFNTypeCodingDNType: t.Type<CMRPractitionerEFNTypeCodingDNType> =
    t.recursion("CMRPractitionerEFNTypeCodingDNType", () =>
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
export interface CMRPractitionerHebammenIKTypeCodingXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMRPractitionerHebammenIKTypeCodingXXType: t.Type<CMRPractitionerHebammenIKTypeCodingXXType> =
    t.recursion("CMRPractitionerHebammenIKTypeCodingXXType", () =>
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
export interface CMRPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.11";
    id?: string;
    valueString?: string;
}

export const CMRPractitionerNameFamilyNamenszusatz: t.Type<CMRPractitionerNameFamilyNamenszusatz> =
    t.recursion("CMRPractitionerNameFamilyNamenszusatz", () =>
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
export interface CMRPractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const CMRPractitionerNameFamilyNachname: t.Type<CMRPractitionerNameFamilyNachname> =
    t.recursion("CMRPractitionerNameFamilyNachname", () =>
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
export interface CMRPractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const CMRPractitionerNameFamilyVorsatzwort: t.Type<CMRPractitionerNameFamilyVorsatzwort> =
    t.recursion("CMRPractitionerNameFamilyVorsatzwort", () =>
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
export interface CMRPractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const CMRPractitionerNamePrefixPrefixqualifier: t.Type<CMRPractitionerNamePrefixPrefixqualifier> =
    t.recursion("CMRPractitionerNamePrefixPrefixqualifier", () =>
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
export interface CMRPractitionerStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const CMRPractitionerStrassenanschriftLineStrasse: t.Type<CMRPractitionerStrassenanschriftLineStrasse> =
    t.recursion("CMRPractitionerStrassenanschriftLineStrasse", () =>
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
export interface CMRPractitionerStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const CMRPractitionerStrassenanschriftLineHausnummer: t.Type<CMRPractitionerStrassenanschriftLineHausnummer> =
    t.recursion("CMRPractitionerStrassenanschriftLineHausnummer", () =>
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
export interface CMRPractitionerStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const CMRPractitionerStrassenanschriftLineAdresszusatz: t.Type<CMRPractitionerStrassenanschriftLineAdresszusatz> =
    t.recursion("CMRPractitionerStrassenanschriftLineAdresszusatz", () =>
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
export interface CMRPractitionerPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const CMRPractitionerPostfachLinePostfach: t.Type<CMRPractitionerPostfachLinePostfach> =
    t.recursion("CMRPractitionerPostfachLinePostfach", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRPractitionerANRTypeCoding {
    display: "Lifelong physician number";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMRPractitionerANRTypeCoding: t.Type<CMRPractitionerANRTypeCoding> =
    t.recursion("CMRPractitionerANRTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Lifelong physician number")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface CMRPractitionerANRAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const CMRPractitionerANRAssignerIdentifier: t.Type<CMRPractitionerANRAssignerIdentifier> =
    t.recursion("CMRPractitionerANRAssignerIdentifier", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRPractitionerEFNTypeCoding {
    display: "Medical License number";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMRPractitionerEFNTypeCoding: t.Type<CMRPractitionerEFNTypeCoding> =
    t.recursion("CMRPractitionerEFNTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Medical License number")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface CMRPractitionerEFNAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const CMRPractitionerEFNAssignerIdentifier: t.Type<CMRPractitionerEFNAssignerIdentifier> =
    t.recursion("CMRPractitionerEFNAssignerIdentifier", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRPractitionerHebammenIKTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    display: "Organisations-ID";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const CMRPractitionerHebammenIKTypeCoding: t.Type<CMRPractitionerHebammenIKTypeCoding> =
    t.recursion("CMRPractitionerHebammenIKTypeCoding", () =>
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
export interface CMRPractitionerStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const CMRPractitionerStrassenanschriftStadtteil: t.Type<CMRPractitionerStrassenanschriftStadtteil> =
    t.recursion("CMRPractitionerStrassenanschriftStadtteil", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
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
 * A subsection of a municipality.
 */
export interface CMRPractitionerPostfachStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const CMRPractitionerPostfachStadtteil: t.Type<CMRPractitionerPostfachStadtteil> =
    t.recursion("CMRPractitionerPostfachStadtteil", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRPractitionerQualificationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
    )[];
    value?: string;
}

export const CMRPractitionerQualificationCodeCodingDisplay: t.Type<CMRPractitionerQualificationCodeCodingDisplay> =
    t.recursion("CMRPractitionerQualificationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation,
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPractitionerANRType {
    coding: Array<CMRPractitionerANRTypeCoding | CMRPractitionerANRTypeCodingLANRType>;
    id?: string;
    text?: string;
}

export const CMRPractitionerANRType: t.Type<CMRPractitionerANRType> = t.recursion(
    "CMRPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPractitionerANRTypeCoding>,
                                t.Type<CMRPractitionerANRTypeCodingLANRType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRPractitionerANRTypeCoding,
                            CMRPractitionerANRTypeCodingLANRType
                        ]),
                        [
                            {
                                codec: CMRPractitionerANRTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPractitionerANRTypeCodingLANRType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
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
export interface CMRPractitionerANRAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: CMRPractitionerANRAssignerIdentifier;
}

export const CMRPractitionerANRAssigner: t.Type<CMRPractitionerANRAssigner> = t.recursion(
    "CMRPractitionerANRAssigner",
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
                    identifier: CMRPractitionerANRAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPractitionerEFNType {
    coding: Array<CMRPractitionerEFNTypeCoding | CMRPractitionerEFNTypeCodingDNType>;
    id?: string;
    text?: string;
}

export const CMRPractitionerEFNType: t.Type<CMRPractitionerEFNType> = t.recursion(
    "CMRPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPractitionerEFNTypeCoding>,
                                t.Type<CMRPractitionerEFNTypeCodingDNType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRPractitionerEFNTypeCoding,
                            CMRPractitionerEFNTypeCodingDNType
                        ]),
                        [
                            {
                                codec: CMRPractitionerEFNTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPractitionerEFNTypeCodingDNType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
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
export interface CMRPractitionerEFNAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: CMRPractitionerEFNAssignerIdentifier;
}

export const CMRPractitionerEFNAssigner: t.Type<CMRPractitionerEFNAssigner> = t.recursion(
    "CMRPractitionerEFNAssigner",
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
                    identifier: CMRPractitionerEFNAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface CMRPractitionerHebammenIKType {
    coding: Array<
        CMRPractitionerHebammenIKTypeCoding | CMRPractitionerHebammenIKTypeCodingXXType
    >;
    id?: string;
    text?: string;
}

export const CMRPractitionerHebammenIKType: t.Type<CMRPractitionerHebammenIKType> =
    t.recursion("CMRPractitionerHebammenIKType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRPractitionerHebammenIKTypeCoding>,
                                t.Type<CMRPractitionerHebammenIKTypeCodingXXType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRPractitionerHebammenIKTypeCoding,
                            CMRPractitionerHebammenIKTypeCodingXXType
                        ]),
                        [
                            {
                                codec: CMRPractitionerHebammenIKTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMRPractitionerHebammenIKTypeCodingXXType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
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
export interface CMRPractitionerHebammenIKAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
}

export const CMRPractitionerHebammenIKAssigner: t.Type<CMRPractitionerHebammenIKAssigner> =
    t.recursion("CMRPractitionerHebammenIKAssigner", () =>
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
export interface CMRPractitionerNameFamily {
    id?: string;
    extension?: (
        | Extension
        | CMRPractitionerNameFamilyNamenszusatz
        | CMRPractitionerNameFamilyNachname
        | CMRPractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const CMRPractitionerNameFamily: t.Type<CMRPractitionerNameFamily> = t.recursion(
    "CMRPractitionerNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPractitionerNameFamilyNamenszusatz>,
                            t.Type<CMRPractitionerNameFamilyNachname>,
                            t.Type<CMRPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRPractitionerNameFamilyNamenszusatz,
                        CMRPractitionerNameFamilyNachname,
                        CMRPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: CMRPractitionerNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: CMRPractitionerNameFamilyVorsatzwort,
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
export interface CMRPractitionerNamePrefix {
    id?: string;
    extension?: (Extension | CMRPractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const CMRPractitionerNamePrefix: t.Type<CMRPractitionerNamePrefix> = t.recursion(
    "CMRPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPractitionerNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMRPractitionerNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerNamePrefixPrefixqualifier,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface CMRPractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | CMRPractitionerStrassenanschriftLineStrasse
        | CMRPractitionerStrassenanschriftLineHausnummer
        | CMRPractitionerStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const CMRPractitionerStrassenanschriftLine: t.Type<CMRPractitionerStrassenanschriftLine> =
    t.recursion("CMRPractitionerStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRPractitionerStrassenanschriftLineStrasse>,
                            t.Type<CMRPractitionerStrassenanschriftLineHausnummer>,
                            t.Type<CMRPractitionerStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRPractitionerStrassenanschriftLineStrasse,
                        CMRPractitionerStrassenanschriftLineHausnummer,
                        CMRPractitionerStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: CMRPractitionerStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: CMRPractitionerStrassenanschriftLineAdresszusatz,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface CMRPractitionerPostfachLine {
    id?: string;
    extension?: (Extension | CMRPractitionerPostfachLinePostfach)[];
    value?: string;
}

export const CMRPractitionerPostfachLine: t.Type<CMRPractitionerPostfachLine> =
    t.recursion("CMRPractitionerPostfachLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<CMRPractitionerPostfachLinePostfach>]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMRPractitionerPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerPostfachLinePostfach,
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
        )
    );

/**
 * Time period when address was/is in use.
 */
export interface CMRPractitionerPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const CMRPractitionerPostfachPeriod: t.Type<CMRPractitionerPostfachPeriod> =
    t.recursion("CMRPractitionerPostfachPeriod", () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRPractitionerQualificationCodeCoding {
    system: string;
    version: string;
    code: CMRPractitionerSpecialityVS;
    id?: string;
    _display?: CMRPractitionerQualificationCodeCodingDisplay;
    display?: string;
}

export const CMRPractitionerQualificationCodeCoding: t.Type<CMRPractitionerQualificationCodeCoding> =
    t.recursion("CMRPractitionerQualificationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRPractitionerSpecialityVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRPractitionerQualificationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRPractitionerErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const CMRPractitionerErgaenzendeAngaben: t.Type<CMRPractitionerErgaenzendeAngaben> =
    t.recursion("CMRPractitionerErgaenzendeAngaben", () =>
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
export interface CMRPractitionerANR {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: CMRPractitionerANRType;
    period?: Period;
    assigner?: CMRPractitionerANRAssigner;
}

export const CMRPractitionerANR: t.Type<CMRPractitionerANR> = t.recursion(
    "CMRPractitionerANR",
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
                    type: CMRPractitionerANRType,
                    period: Period,
                    assigner: CMRPractitionerANRAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMRPractitionerEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: CMRPractitionerEFNType;
    period?: Period;
    assigner?: CMRPractitionerEFNAssigner;
}

export const CMRPractitionerEFN: t.Type<CMRPractitionerEFN> = t.recursion(
    "CMRPractitionerEFN",
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
                    type: CMRPractitionerEFNType,
                    period: Period,
                    assigner: CMRPractitionerEFNAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMRPractitionerHebammenIK {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: CMRPractitionerHebammenIKType;
    period?: Period;
    assigner?: CMRPractitionerHebammenIKAssigner;
}

export const CMRPractitionerHebammenIK: t.Type<CMRPractitionerHebammenIK> = t.recursion(
    "CMRPractitionerHebammenIK",
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
                    type: CMRPractitionerHebammenIKType,
                    period: Period,
                    assigner: CMRPractitionerHebammenIKAssigner
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface CMRPractitionerName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: CMRPractitionerNameFamily;
    family?: string;
    _prefix?: CMRPractitionerNamePrefix[];
    prefix?: string[];
}

export const CMRPractitionerName: t.Type<CMRPractitionerName> = t.recursion(
    "CMRPractitionerName",
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
                    _family: CMRPractitionerNameFamily,
                    family: SCALARString,
                    _prefix: t.array(CMRPractitionerNamePrefix),
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
export interface CMRPractitionerStrassenanschrift {
    type: "both";
    city: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | CMRPractitionerStrassenanschriftStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<CMRPractitionerStrassenanschriftLine>;
    line?: Array<string>;
    state?: string;
    postalCode?: string;
}

export const CMRPractitionerStrassenanschrift: t.Type<CMRPractitionerStrassenanschrift> =
    t.recursion("CMRPractitionerStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRPractitionerStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, CMRPractitionerStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRPractitionerStrassenanschriftStadtteil,
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
                    _line: MaxArray(2, CMRPractitionerStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    state: SCALARString,
                    postalCode: SCALARString
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischenOrt Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface CMRPractitionerPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | CMRPractitionerPostfachStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<CMRPractitionerPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: CMRPractitionerPostfachPeriod;
}

export const CMRPractitionerPostfach: t.Type<CMRPractitionerPostfach> = t.recursion(
    "CMRPractitionerPostfach",
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
                            [t.Type<Extension>, t.Type<CMRPractitionerPostfachStadtteil>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, CMRPractitionerPostfachStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRPractitionerPostfachStadtteil,
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
                    _line: MaxArray(2, CMRPractitionerPostfachLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                    period: CMRPractitionerPostfachPeriod
                })
            ])
        )
);

/**
 * Coded representation of the qualification.
 */
export interface CMRPractitionerQualificationCode {
    coding: Array<CMRPractitionerQualificationCodeCoding>;
    id?: string;
}

export const CMRPractitionerQualificationCode: t.Type<CMRPractitionerQualificationCode> =
    t.recursion("CMRPractitionerQualificationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRPractitionerQualificationCodeCoding)
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
export interface CMRPractitionerMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1">;
    id?: string;
}

export const CMRPractitionerMeta: t.Type<CMRPractitionerMeta> = t.recursion(
    "CMRPractitionerMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
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
export interface CMRPractitionerTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
}

export const CMRPractitionerTelecom: t.Type<CMRPractitionerTelecom> = t.recursion(
    "CMRPractitionerTelecom",
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
export interface CMRPractitionerQualification {
    code: CMRPractitionerQualificationCode;
    id?: string;
    period?: Period;
    issuer?: Reference;
}

export const CMRPractitionerQualification: t.Type<CMRPractitionerQualification> =
    t.recursion("CMRPractitionerQualification", () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRPractitionerQualificationCode
                }),
                t.partial({
                    id: SCALARString,
                    period: Period,
                    issuer: Reference
                })
            ])
        )
    );

interface CMRPractitioner {
    resourceType: "Practitioner";
    meta: CMRPractitionerMeta;
    identifier: Array<
        CMRPractitionerANR | CMRPractitionerEFN | CMRPractitionerHebammenIK
    >;
    name: Array<CMRPractitionerName>;
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRPractitionerErgaenzendeAngaben)[];
    telecom?: CMRPractitionerTelecom[];
    address?: Array<CMRPractitionerStrassenanschrift | CMRPractitionerPostfach>;
    qualification?: CMRPractitionerQualification[];
}

const CMRPractitioner: t.Type<CMRPractitioner> = t.recursion("CMRPractitioner", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Practitioner"),
                meta: CMRPractitionerMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMRPractitionerANR>,
                            t.Type<CMRPractitionerEFN>,
                            t.Type<CMRPractitionerHebammenIK>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRPractitionerANR,
                        CMRPractitionerEFN,
                        CMRPractitionerHebammenIK
                    ]),
                    [
                        {
                            codec: CMRPractitionerANR,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMRPractitionerEFN,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMRPractitionerHebammenIK,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        }
                    ],
                    ["1", "*"]
                ),
                name: MinMaxArray(1, 1, CMRPractitionerName)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<CMRPractitionerErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMRPractitionerErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRPractitionerErgaenzendeAngaben,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                telecom: t.array(CMRPractitionerTelecom),
                address: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMRPractitionerStrassenanschrift>,
                            t.Type<CMRPractitionerPostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([CMRPractitionerStrassenanschrift, CMRPractitionerPostfach]),
                    [
                        {
                            codec: CMRPractitionerStrassenanschrift,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "both" }
                        },
                        {
                            codec: CMRPractitionerPostfach,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "postal" }
                        }
                    ],
                    ["0", "1"]
                ),
                qualification: t.array(CMRPractitionerQualification)
            })
        ])
    )
);

export default CMRPractitioner;
