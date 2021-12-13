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

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/GemRSAnlage8";
import Identifier from "../../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import MRPractitionerFunctionVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRPractitionerFunction";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner"

/**
 * Content in other Language.
 */
export interface MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent: t.Type<MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent> =
    t.recursion(
        "MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent",
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
export interface MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent
    )[];
}

export const MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation: t.Type<MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation> =
    t.recursion(
        "MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation",
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
                                    t.Type<MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent,
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
export interface MRPractitionerANRTypeLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MRPractitionerANRTypeLANRType: t.Type<MRPractitionerANRTypeLANRType> =
    t.recursion("MRPractitionerANRTypeLANRType", () =>
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
export interface MRPractitionerEFNTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MRPractitionerEFNTypeDNType: t.Type<MRPractitionerEFNTypeDNType> =
    t.recursion("MRPractitionerEFNTypeDNType", () =>
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
export interface MRPractitionerHebammenIKTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MRPractitionerHebammenIKTypeXXType: t.Type<MRPractitionerHebammenIKTypeXXType> =
    t.recursion("MRPractitionerHebammenIKTypeXXType", () =>
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
export interface MRPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.11";
    id?: string;
    valueString?: string;
}

export const MRPractitionerNameFamilyNamenszusatz: t.Type<MRPractitionerNameFamilyNamenszusatz> =
    t.recursion("MRPractitionerNameFamilyNamenszusatz", () =>
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRPractitionerPractitionerspecialityCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation
    )[];
    value?: string;
}

export const MRPractitionerPractitionerspecialityCodeCodingDisplay: t.Type<MRPractitionerPractitionerspecialityCodeCodingDisplay> =
    t.recursion("MRPractitionerPractitionerspecialityCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRPractitionerPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation,
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
        )
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface MRPractitionerANRAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const MRPractitionerANRAssignerIdentifier: t.Type<MRPractitionerANRAssignerIdentifier> =
    t.recursion("MRPractitionerANRAssignerIdentifier", () =>
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
export interface MRPractitionerEFNAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const MRPractitionerEFNAssignerIdentifier: t.Type<MRPractitionerEFNAssignerIdentifier> =
    t.recursion("MRPractitionerEFNAssignerIdentifier", () =>
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
export interface MRPractitionerStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const MRPractitionerStrassenanschriftStadtteil: t.Type<MRPractitionerStrassenanschriftStadtteil> =
    t.recursion("MRPractitionerStrassenanschriftStadtteil", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface MRPractitionerPractitionerspecialityCodeCoding {
    id?: string;
    system?: string;
    version?: string;
    code?: MRPractitionerFunctionVS;
    _display?: MRPractitionerPractitionerspecialityCodeCodingDisplay;
    display?: string;
}

export const MRPractitionerPractitionerspecialityCodeCoding: t.Type<MRPractitionerPractitionerspecialityCodeCoding> =
    t.recursion("MRPractitionerPractitionerspecialityCodeCoding", () =>
        Excess(
            t.partial({
                id: SCALARString,
                system: SCALARUri,
                version: SCALARString,
                code: MRPractitionerFunctionVS,
                _display: MRPractitionerPractitionerspecialityCodeCodingDisplay,
                display: SCALARString
            })
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPractitionerANRType {
    coding: Array<MRPractitionerANRTypeLANRType>;
    id?: string;
    text?: string;
}

export const MRPractitionerANRType: t.Type<MRPractitionerANRType> = t.recursion(
    "MRPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, MRPractitionerANRTypeLANRType)
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
export interface MRPractitionerANRAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: MRPractitionerANRAssignerIdentifier;
}

export const MRPractitionerANRAssigner: t.Type<MRPractitionerANRAssigner> = t.recursion(
    "MRPractitionerANRAssigner",
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
                    identifier: MRPractitionerANRAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPractitionerEFNType {
    coding: Array<MRPractitionerEFNTypeDNType>;
    id?: string;
    text?: string;
}

export const MRPractitionerEFNType: t.Type<MRPractitionerEFNType> = t.recursion(
    "MRPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, MRPractitionerEFNTypeDNType)
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
export interface MRPractitionerEFNAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: MRPractitionerEFNAssignerIdentifier;
}

export const MRPractitionerEFNAssigner: t.Type<MRPractitionerEFNAssigner> = t.recursion(
    "MRPractitionerEFNAssigner",
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
                    identifier: MRPractitionerEFNAssignerIdentifier
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface MRPractitionerHebammenIKType {
    coding: Array<MRPractitionerHebammenIKTypeXXType>;
    id?: string;
    text?: string;
}

export const MRPractitionerHebammenIKType: t.Type<MRPractitionerHebammenIKType> =
    t.recursion("MRPractitionerHebammenIKType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, MRPractitionerHebammenIKTypeXXType)
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
        | Extension
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
                            t.Type<Extension>,
                            t.Type<MRPractitionerNameFamilyNamenszusatz>,
                            t.Type<MRPractitionerNameFamilyNachname>,
                            t.Type<MRPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRPractitionerNameFamilyNamenszusatz,
                        MRPractitionerNameFamilyNachname,
                        MRPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
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
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: MRPractitionerNameFamilyVorsatzwort,
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
export interface MRPractitionerNamePrefix {
    id?: string;
    extension?: (Extension | MRPractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const MRPractitionerNamePrefix: t.Type<MRPractitionerNamePrefix> = t.recursion(
    "MRPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRPractitionerNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, MRPractitionerNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRPractitionerNamePrefixPrefixqualifier,
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
export interface MRPractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
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
                            t.Type<Extension>,
                            t.Type<MRPractitionerStrassenanschriftLineStrasse>,
                            t.Type<MRPractitionerStrassenanschriftLineHausnummer>,
                            t.Type<MRPractitionerStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRPractitionerStrassenanschriftLineStrasse,
                        MRPractitionerStrassenanschriftLineHausnummer,
                        MRPractitionerStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
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
 * Coded representation of the qualification.
 */
export interface MRPractitionerPractitionerspecialityCode {
    coding: Array<MRPractitionerPractitionerspecialityCodeCoding>;
    id?: string;
}

export const MRPractitionerPractitionerspecialityCode: t.Type<MRPractitionerPractitionerspecialityCode> =
    t.recursion("MRPractitionerPractitionerspecialityCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRPractitionerPractitionerspecialityCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
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
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: {
        coding: {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203";
            code: "LANR";
        }[];
    };
    period?: Period;
    assigner?: MRPractitionerANRAssigner;
}

export const MRPractitionerANR: t.Type<MRPractitionerANR> = t.recursion(
    "MRPractitionerANR",
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
                    type: t.type({
                        coding: t.array(
                            t.type({
                                system: Literal(
                                    "http://terminology.hl7.org/CodeSystem/v2-0203"
                                ),
                                code: Literal("LANR")
                            })
                        )
                    }),
                    period: Period,
                    assigner: MRPractitionerANRAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface MRPractitionerEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: {
        coding: {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203";
            code: "DN";
        }[];
    };
    period?: Period;
    assigner?: MRPractitionerEFNAssigner;
}

export const MRPractitionerEFN: t.Type<MRPractitionerEFN> = t.recursion(
    "MRPractitionerEFN",
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
                    type: t.type({
                        coding: t.array(
                            t.type({
                                system: Literal(
                                    "http://terminology.hl7.org/CodeSystem/v2-0203"
                                ),
                                code: Literal("DN")
                            })
                        )
                    }),
                    period: Period,
                    assigner: MRPractitionerEFNAssigner
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface MRPractitionerHebammenIK {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: MRPractitionerHebammenIKType;
    period?: Period;
    assigner?: Reference;
}

export const MRPractitionerHebammenIK: t.Type<MRPractitionerHebammenIK> = t.recursion(
    "MRPractitionerHebammenIK",
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
                    type: MRPractitionerHebammenIKType,
                    period: Period,
                    assigner: Reference
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
    extension?: (Extension | MRPractitionerStrassenanschriftStadtteil)[];
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
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRPractitionerStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, MRPractitionerStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRPractitionerStrassenanschriftStadtteil,
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
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface MRPractitionerPractitionerspeciality {
    code: MRPractitionerPractitionerspecialityCode;
    id?: string;
    identifier?: Identifier[];
}

export const MRPractitionerPractitionerspeciality: t.Type<MRPractitionerPractitionerspeciality> =
    t.recursion("MRPractitionerPractitionerspeciality", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRPractitionerPractitionerspecialityCode
                }),
                t.partial({
                    id: SCALARString,
                    identifier: t.array(Identifier)
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRPractitionerMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0">;
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
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
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

interface MRPractitioner {
    resourceType: "Practitioner";
    meta: MRPractitionerMeta;
    identifier: Array<MRPractitionerANR | MRPractitionerEFN | MRPractitionerHebammenIK>;
    name: Array<MRPractitionerName>;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRPractitionerErgaenzendeAngaben)[];
    telecom?: MRPractitionerTelecom[];
    address?: Array<MRPractitionerStrassenanschrift>;
    qualification?: MRPractitionerPractitionerspeciality[];
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
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<MRPractitionerErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, MRPractitionerErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRPractitionerErgaenzendeAngaben,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                telecom: t.array(MRPractitionerTelecom),
                address: MaxArray(1, MRPractitionerStrassenanschrift),
                qualification: t.array(MRPractitionerPractitionerspeciality)
            })
        ])
    )
);

export default MRPractitioner;
