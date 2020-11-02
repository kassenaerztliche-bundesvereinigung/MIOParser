/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import {
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    Req,
    ReqArray,
    ExtensibleCheck
} from "../../../../util";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CodeableConcept from "../../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import NamepartqualifierVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Namepartqualifier";
import NameuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Nameuse";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import VaccinationAdditionalComment from "../../../../../Definitions/KBV/IM/1.00.000/Extension/VaccinationAdditionalComment";
import VaccinationPractitionerFunctionVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationPractitionerFunction";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationPractitionerAddendumANRTypeLANRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerAddendumANRTypeLANRType: t.Type<VaccinationPractitionerAddendumANRTypeLANRType> = t.recursion(
    "VaccinationPractitionerAddendumANRTypeLANRType",
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
export interface VaccinationPractitionerAddendumEFNTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerAddendumEFNTypeDNType: t.Type<VaccinationPractitionerAddendumEFNTypeDNType> = t.recursion(
    "VaccinationPractitionerAddendumEFNTypeDNType",
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
export interface VaccinationPractitionerAddendumNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const VaccinationPractitionerAddendumNameFamilyNamenszusatz: t.Type<VaccinationPractitionerAddendumNameFamilyNamenszusatz> = t.recursion(
    "VaccinationPractitionerAddendumNameFamilyNamenszusatz",
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
export interface VaccinationPractitionerAddendumNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerAddendumNameFamilyNachname: t.Type<VaccinationPractitionerAddendumNameFamilyNachname> = t.recursion(
    "VaccinationPractitionerAddendumNameFamilyNachname",
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
export interface VaccinationPractitionerAddendumNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerAddendumNameFamilyVorsatzwort: t.Type<VaccinationPractitionerAddendumNameFamilyVorsatzwort> = t.recursion(
    "VaccinationPractitionerAddendumNameFamilyVorsatzwort",
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
export interface VaccinationPractitionerAddendumNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const VaccinationPractitionerAddendumNamePrefixPrefixqualifier: t.Type<VaccinationPractitionerAddendumNamePrefixPrefixqualifier> = t.recursion(
    "VaccinationPractitionerAddendumNamePrefixPrefixqualifier",
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
export interface VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz|0.9.7";
    id?: string;
    valueString?: string;
}

export const VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz: t.Type<VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz> = t.recursion(
    "VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz",
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
export interface VaccinationPractitionerAddendumGeburtsnameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerAddendumGeburtsnameFamilyNachname: t.Type<VaccinationPractitionerAddendumGeburtsnameFamilyNachname> = t.recursion(
    "VaccinationPractitionerAddendumGeburtsnameFamilyNachname",
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
export interface VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort: t.Type<VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort> = t.recursion(
    "VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort",
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
export interface VaccinationPractitionerAddendumIdTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "ESN";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationPractitionerAddendumIdTypeCoding: t.Type<VaccinationPractitionerAddendumIdTypeCoding> = t.recursion(
    "VaccinationPractitionerAddendumIdTypeCoding",
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
export interface VaccinationPractitionerAddendumPractitionerspecialityCodeCoding {
    system: string;
    code: VaccinationPractitionerFunctionVS;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationPractitionerAddendumPractitionerspecialityCodeCoding: t.Type<VaccinationPractitionerAddendumPractitionerspecialityCodeCoding> = t.recursion(
    "VaccinationPractitionerAddendumPractitionerspecialityCodeCoding",
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
export interface VaccinationPractitionerAddendumANRType {
    coding: Array<VaccinationPractitionerAddendumANRTypeLANRType>;
    id?: string;
    text?: string;
}

export const VaccinationPractitionerAddendumANRType: t.Type<VaccinationPractitionerAddendumANRType> = t.recursion(
    "VaccinationPractitionerAddendumANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, VaccinationPractitionerAddendumANRTypeLANRType)
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
export interface VaccinationPractitionerAddendumEFNType {
    coding: Array<VaccinationPractitionerAddendumEFNTypeDNType>;
    id?: string;
    text?: string;
}

export const VaccinationPractitionerAddendumEFNType: t.Type<VaccinationPractitionerAddendumEFNType> = t.recursion(
    "VaccinationPractitionerAddendumEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, VaccinationPractitionerAddendumEFNTypeDNType)
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
export interface VaccinationPractitionerAddendumIdType {
    coding: Array<VaccinationPractitionerAddendumIdTypeCoding>;
    id?: string;
}

export const VaccinationPractitionerAddendumIdType: t.Type<VaccinationPractitionerAddendumIdType> = t.recursion(
    "VaccinationPractitionerAddendumIdType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationPractitionerAddendumIdTypeCoding)
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
export interface VaccinationPractitionerAddendumNameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPractitionerAddendumNameFamilyNamenszusatz
        | VaccinationPractitionerAddendumNameFamilyNachname
        | VaccinationPractitionerAddendumNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPractitionerAddendumNameFamily: t.Type<VaccinationPractitionerAddendumNameFamily> = t.recursion(
    "VaccinationPractitionerAddendumNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationPractitionerAddendumNameFamilyNamenszusatz>,
                            t.Type<VaccinationPractitionerAddendumNameFamilyNachname>,
                            t.Type<VaccinationPractitionerAddendumNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerAddendumNameFamilyNamenszusatz,
                        VaccinationPractitionerAddendumNameFamilyNachname,
                        VaccinationPractitionerAddendumNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerAddendumNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPractitionerAddendumNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPractitionerAddendumNameFamilyVorsatzwort,
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
export interface VaccinationPractitionerAddendumNamePrefix {
    id?: string;
    extension?: (Extension | VaccinationPractitionerAddendumNamePrefixPrefixqualifier)[];
    value?: string;
}

export const VaccinationPractitionerAddendumNamePrefix: t.Type<VaccinationPractitionerAddendumNamePrefix> = t.recursion(
    "VaccinationPractitionerAddendumNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationPractitionerAddendumNamePrefixPrefixqualifier
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerAddendumNamePrefixPrefixqualifier
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerAddendumNamePrefixPrefixqualifier,
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
export interface VaccinationPractitionerAddendumGeburtsnameFamily {
    id?: string;
    extension?: (
        | Extension
        | VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz
        | VaccinationPractitionerAddendumGeburtsnameFamilyNachname
        | VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort
    )[];
    value?: string;
}

export const VaccinationPractitionerAddendumGeburtsnameFamily: t.Type<VaccinationPractitionerAddendumGeburtsnameFamily> = t.recursion(
    "VaccinationPractitionerAddendumGeburtsnameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz
                            >,
                            t.Type<
                                VaccinationPractitionerAddendumGeburtsnameFamilyNachname
                            >,
                            t.Type<
                                VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz,
                        VaccinationPractitionerAddendumGeburtsnameFamilyNachname,
                        VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: VaccinationPractitionerAddendumGeburtsnameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort,
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
export interface VaccinationPractitionerAddendumPractitionerspecialityCode {
    coding: Array<VaccinationPractitionerAddendumPractitionerspecialityCodeCoding>;
    text: string;
    id?: string;
}

export const VaccinationPractitionerAddendumPractitionerspecialityCode: t.Type<VaccinationPractitionerAddendumPractitionerspecialityCode> = t.recursion(
    "VaccinationPractitionerAddendumPractitionerspecialityCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationPractitionerAddendumPractitionerspecialityCodeCoding
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
export interface VaccinationPractitionerAddendumANR {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationPractitionerAddendumANRType;
}

export const VaccinationPractitionerAddendumANR: t.Type<VaccinationPractitionerAddendumANR> = t.recursion(
    "VaccinationPractitionerAddendumANR",
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
                    type: VaccinationPractitionerAddendumANRType
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationPractitionerAddendumEFN {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationPractitionerAddendumEFNType;
}

export const VaccinationPractitionerAddendumEFN: t.Type<VaccinationPractitionerAddendumEFN> = t.recursion(
    "VaccinationPractitionerAddendumEFN",
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
                    type: VaccinationPractitionerAddendumEFNType
                })
            ])
        )
);

/**
 * Nicht näher spezifizierter Identifikator einer nicht ärztlichen, behandelnden Person.
 */
export interface VaccinationPractitionerAddendumId {
    type: VaccinationPractitionerAddendumIdType;
    value: string;
    id?: string;
    system?: string;
}

export const VaccinationPractitionerAddendumId: t.Type<VaccinationPractitionerAddendumId> = t.recursion(
    "VaccinationPractitionerAddendumId",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationPractitionerAddendumIdType,
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
export interface VaccinationPractitionerAddendumName {
    use: "official";
    id?: string;
    text?: string;
    _family?: VaccinationPractitionerAddendumNameFamily;
    family?: string;
    given?: Array<string>;
    _prefix?: Array<VaccinationPractitionerAddendumNamePrefix>;
    prefix?: Array<string>;
}

export const VaccinationPractitionerAddendumName: t.Type<VaccinationPractitionerAddendumName> = t.recursion(
    "VaccinationPractitionerAddendumName",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("official")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: VaccinationPractitionerAddendumNameFamily,
                    family: SCALARString,
                    given: MaxArray(1, SCALARString),
                    _prefix: MaxArray(1, VaccinationPractitionerAddendumNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface VaccinationPractitionerAddendumGeburtsname {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: VaccinationPractitionerAddendumGeburtsnameFamily;
    family?: string;
}

export const VaccinationPractitionerAddendumGeburtsname: t.Type<VaccinationPractitionerAddendumGeburtsname> = t.recursion(
    "VaccinationPractitionerAddendumGeburtsname",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("maiden")
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: VaccinationPractitionerAddendumGeburtsnameFamily,
                    family: SCALARString
                })
            ])
        )
);

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface VaccinationPractitionerAddendumPractitionerspeciality {
    code: VaccinationPractitionerAddendumPractitionerspecialityCode;
    id?: string;
}

export const VaccinationPractitionerAddendumPractitionerspeciality: t.Type<VaccinationPractitionerAddendumPractitionerspeciality> = t.recursion(
    "VaccinationPractitionerAddendumPractitionerspeciality",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationPractitionerAddendumPractitionerspecialityCode
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
export interface VaccinationPractitionerAddendumMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum|1.00.000"
    >;
    id?: string;
}

export const VaccinationPractitionerAddendumMeta: t.Type<VaccinationPractitionerAddendumMeta> = t.recursion(
    "VaccinationPractitionerAddendumMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum|1.00.000"
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
export interface VaccinationPractitionerAddendumTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const VaccinationPractitionerAddendumTelecom: t.Type<VaccinationPractitionerAddendumTelecom> = t.recursion(
    "VaccinationPractitionerAddendumTelecom",
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

interface VaccinationPractitionerAddendum {
    id: string;
    meta: VaccinationPractitionerAddendumMeta;
    name: Array<
        VaccinationPractitionerAddendumName | VaccinationPractitionerAddendumGeburtsname
    >;
    resourceType?: string;
    text?: Narrative;
    extension?: (Extension | VaccinationAdditionalComment)[];
    identifier?: Array<
        | VaccinationPractitionerAddendumANR
        | VaccinationPractitionerAddendumEFN
        | VaccinationPractitionerAddendumId
    >;
    telecom?: VaccinationPractitionerAddendumTelecom[];
    qualification?: Array<VaccinationPractitionerAddendumPractitionerspeciality>;
}

const VaccinationPractitionerAddendum: t.Type<VaccinationPractitionerAddendum> = t.recursion(
    "VaccinationPractitionerAddendum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    id: SCALARString,
                    meta: VaccinationPractitionerAddendumMeta,
                    name: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPractitionerAddendumName>,
                                t.Type<VaccinationPractitionerAddendumGeburtsname>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationPractitionerAddendumName,
                            VaccinationPractitionerAddendumGeburtsname
                        ]),
                        [
                            {
                                codec: VaccinationPractitionerAddendumName,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "use", value: "official" }
                            },
                            {
                                codec: VaccinationPractitionerAddendumGeburtsname,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "use", value: "maiden" }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    resourceType: t.string,
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
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationPractitionerAddendumANR>,
                                t.Type<VaccinationPractitionerAddendumEFN>,
                                t.Type<VaccinationPractitionerAddendumId>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationPractitionerAddendumANR,
                            VaccinationPractitionerAddendumEFN,
                            VaccinationPractitionerAddendumId
                        ]),
                        [
                            {
                                codec: VaccinationPractitionerAddendumANR,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "LANR" }
                            },
                            {
                                codec: VaccinationPractitionerAddendumEFN,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "DN" }
                            },
                            {
                                codec: VaccinationPractitionerAddendumId,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "ESN" }
                            }
                        ],
                        ["0", "1"]
                    ),
                    telecom: t.array(VaccinationPractitionerAddendumTelecom),
                    qualification: MaxArray(
                        1,
                        VaccinationPractitionerAddendumPractitionerspeciality
                    )
                })
            ])
        )
);

export default VaccinationPractitionerAddendum;
