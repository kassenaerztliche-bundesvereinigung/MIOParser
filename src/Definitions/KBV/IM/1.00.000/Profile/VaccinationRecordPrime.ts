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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";

import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import VaccinationEntryTypeVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationEntryType";
import VaccinationFollowUp from "../../../../../Definitions/KBV/IM/1.00.000/Extension/VaccinationFollowUp";
import VaccinationTargetDiseaseVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationTargetDisease";
import VaccinationVaccineListATCVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationVaccineListATC";
import VaccinationVaccineListVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationVaccineList";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding {
    system: "http://hl7.org/fhir/composition-attestation-mode";
    code: "legal";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding: t.Type<VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://hl7.org/fhir/composition-attestation-mode"),
                    code: Literal("legal")
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
export interface VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    code: "ENT";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding: t.Type<VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
                    ),
                    code: Literal("ENT")
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept {
    coding: Array<
        VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding
    >;
    id?: string;
}

export const VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept: t.Type<VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationRecordPrimeVerantwortlichePersonPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationRecordPrimeVerantwortlichePersonPartyValueReference: t.Type<VaccinationRecordPrimeVerantwortlichePersonPartyValueReference> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePersonPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept {
    coding: Array<VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept: t.Type<VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept> = t.recursion(
    "VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeEintragendePersonModeValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationRecordPrimeEintragendePersonPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationRecordPrimeEintragendePersonPartyValueReference: t.Type<VaccinationRecordPrimeEintragendePersonPartyValueReference> = t.recursion(
    "VaccinationRecordPrimeEintragendePersonPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole|1.00.000"
                    ])
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
export interface VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding {
    system: string;
    code: VaccinationEntryTypeVS;
    display: string;
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding: t.Type<VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding> = t.recursion(
    "VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: VaccinationEntryTypeVS,
                    display: SCALARString
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason: t.Type<VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason> = t.recursion(
    "VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason",
    () =>
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationRecordPrimeTypdesEintragesValueCodeableConcept {
    coding: Array<VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationRecordPrimeTypdesEintragesValueCodeableConcept: t.Type<VaccinationRecordPrimeTypdesEintragesValueCodeableConcept> = t.recursion(
    "VaccinationRecordPrimeTypdesEintragesValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeTypdesEintragesValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationRecordPrimeVerantwortlichePersonMode {
    url: "mode";
    valueCodeableConcept: VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept;
    id?: string;
}

export const VaccinationRecordPrimeVerantwortlichePersonMode: t.Type<VaccinationRecordPrimeVerantwortlichePersonMode> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePersonMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationRecordPrimeVerantwortlichePersonModeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationRecordPrimeVerantwortlichePersonParty {
    url: "party";
    valueReference: VaccinationRecordPrimeVerantwortlichePersonPartyValueReference;
    id?: string;
}

export const VaccinationRecordPrimeVerantwortlichePersonParty: t.Type<VaccinationRecordPrimeVerantwortlichePersonParty> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePersonParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationRecordPrimeVerantwortlichePersonPartyValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationRecordPrimeEintragendePersonMode {
    url: "mode";
    valueCodeableConcept: VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept;
    id?: string;
}

export const VaccinationRecordPrimeEintragendePersonMode: t.Type<VaccinationRecordPrimeEintragendePersonMode> = t.recursion(
    "VaccinationRecordPrimeEintragendePersonMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationRecordPrimeEintragendePersonModeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationRecordPrimeEintragendePersonParty {
    url: "party";
    valueReference: VaccinationRecordPrimeEintragendePersonPartyValueReference;
    id?: string;
}

export const VaccinationRecordPrimeEintragendePersonParty: t.Type<VaccinationRecordPrimeEintragendePersonParty> = t.recursion(
    "VaccinationRecordPrimeEintragendePersonParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationRecordPrimeEintragendePersonPartyValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Dieses Element beschreibt den Impfstoff als SNOMED CT®  Product Code.
 */
export interface VaccinationRecordPrimeVaccineCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationVaccineListVS;
    display: string;
    id?: string;
}

export const VaccinationRecordPrimeVaccineCodeSnomedCT: t.Type<VaccinationRecordPrimeVaccineCodeSnomedCT> = t.recursion(
    "VaccinationRecordPrimeVaccineCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationVaccineListVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Bezeichnung des Impfstoffs oder des Kombinationsimpfstoffes als Anatomisch-Therapeutisch-Chemische Klassifikation samt ATC-Code des Impfstoffs oder Kombinationsimpfstoffes. Grundlage ist die amtliche Fassung des ATC-Index für Deutschland (DIMDI). Es sind alle ATC-Codes aus der amtlichen Fassung des ATC-Index gelistet, unabhängig von deren Marktverfügbarkeit.
 */
export interface VaccinationRecordPrimeVaccineCodeAtc {
    system: "http://fhir.de/CodeSystem/dimdi/atc";
    code: VaccinationVaccineListATCVS;
    display: string;
    id?: string;
    version?: string;
}

export const VaccinationRecordPrimeVaccineCodeAtc: t.Type<VaccinationRecordPrimeVaccineCodeAtc> = t.recursion(
    "VaccinationRecordPrimeVaccineCodeAtc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/atc"),
                    code: VaccinationVaccineListATCVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
);

/**
 * 8-stellige Pharmazentralnummer (PZN) des Fertigarzneimittels (Impfstoffs). Die PZN definiert ein Fertigarzneimittel eindeutig.
 */
export interface VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn {
    system: "http://fhir.de/CodeSystem/ifa/pzn";
    code: string;
    display: string;
    id?: string;
    version?: string;
}

export const VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn: t.Type<VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn> = t.recursion(
    "VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/ifa/pzn"),
                    code: SCALARCode,
                    display: SCALARString
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
export interface VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding {
    system: string;
    version: string;
    code: VaccinationTargetDiseaseVS;
    display: string;
    id?: string;
    userSelected?: boolean;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding> = t.recursion(
    "VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationTargetDiseaseVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Nominal position in a series.
 */
export interface VaccinationRecordPrimeProtocolAppliedDoseNumberString {
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason
    )[];
    value?: string;
}

export const VaccinationRecordPrimeProtocolAppliedDoseNumberString: t.Type<VaccinationRecordPrimeProtocolAppliedDoseNumberString> = t.recursion(
    "VaccinationRecordPrimeProtocolAppliedDoseNumberString",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
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
* In diesem Profil soll der Typ des Impfeintrages in der Abstufung von nur digital bis digital und als Impfausweis definiert werden.

Eintrag nur digital
Eintrag digital und als Impfbescheinigung
Eintrag digital und im Impfausweis
*/
export interface VaccinationRecordPrimeTypdesEintrages {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type";
    valueCodeableConcept: VaccinationRecordPrimeTypdesEintragesValueCodeableConcept;
    id?: string;
}

export const VaccinationRecordPrimeTypdesEintrages: t.Type<VaccinationRecordPrimeTypdesEintrages> = t.recursion(
    "VaccinationRecordPrimeTypdesEintrages",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"
                    ),
                    valueCodeableConcept: VaccinationRecordPrimeTypdesEintragesValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * In diesem Profil soll die Möglichkeit geschaffen werden einen Attestierenden (Verantwortliche Person) an eine Ressource (Immunization) anzuhängen (self-contained).
 */
export interface VaccinationRecordPrimeVerantwortlichePerson {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordPrimeVerantwortlichePersonMode
        | VaccinationRecordPrimeVerantwortlichePersonParty
    )[];
}

export const VaccinationRecordPrimeVerantwortlichePerson: t.Type<VaccinationRecordPrimeVerantwortlichePerson> = t.recursion(
    "VaccinationRecordPrimeVerantwortlichePerson",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationRecordPrimeVerantwortlichePersonMode>,
                                t.Type<VaccinationRecordPrimeVerantwortlichePersonParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordPrimeVerantwortlichePersonMode,
                            VaccinationRecordPrimeVerantwortlichePersonParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordPrimeVerantwortlichePersonMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationRecordPrimeVerantwortlichePersonParty,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "party" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * In diesem Profil soll die Möglichkeit geschaffen werden einen Attestierenden (Verantwortliche Person) an eine Ressource (Immunization) anzuhängen (self-contained).
 */
export interface VaccinationRecordPrimeEintragendePerson {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordPrimeEintragendePersonMode
        | VaccinationRecordPrimeEintragendePersonParty
    )[];
}

export const VaccinationRecordPrimeEintragendePerson: t.Type<VaccinationRecordPrimeEintragendePerson> = t.recursion(
    "VaccinationRecordPrimeEintragendePerson",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationRecordPrimeEintragendePersonMode>,
                                t.Type<VaccinationRecordPrimeEintragendePersonParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordPrimeEintragendePersonMode,
                            VaccinationRecordPrimeEintragendePersonParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordPrimeEintragendePersonMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationRecordPrimeEintragendePersonParty,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "party" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * Extra information about the immunization that is not conveyed by the other attributes.
 */
export interface VaccinationRecordPrimeNoteHinweis {
    text: "Bei einer ungewöhnlichen Impfreaktion sollte die impfende ärztliche Person benachrichtigt werden. Die ärztlich tätige Person hat, wenn der Verdacht einer gesundheitlichen Schädigung besteht, die über das übliche Ausmaß einer Impfreaktion hinaus geht verpflichtet, den Verdacht dem zuständigen Gesundheitsamt namentlich zu melden (§ 6 Absatz 1 Nr 3 des lnfektionsschutzgesetzes • lfSG) Im Falle eines Impfschadens besteht unter den Voraussetzungen des § 60 Absatz 1 lfSG ein Anspruch auf Entschädigung in entsprechender Anwendung der Vorschriften des Bundesversorgungsgesetzes. Der Antrag ist bei der für die Durchführung des Bundesversorgungsgesetzes zuständigen Behörde (§ 64 Absatz 1 lfSG, i.d.R. 'Versorgungsamt') zu stellen. Weitere Auskünfte erteilt das zuständige Gesundheitsamt.";
    id?: string;
}

export const VaccinationRecordPrimeNoteHinweis: t.Type<VaccinationRecordPrimeNoteHinweis> = t.recursion(
    "VaccinationRecordPrimeNoteHinweis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal(
                        "Bei einer ungewöhnlichen Impfreaktion sollte die impfende ärztliche Person benachrichtigt werden. Die ärztlich tätige Person hat, wenn der Verdacht einer gesundheitlichen Schädigung besteht, die über das übliche Ausmaß einer Impfreaktion hinaus geht verpflichtet, den Verdacht dem zuständigen Gesundheitsamt namentlich zu melden (§ 6 Absatz 1 Nr 3 des lnfektionsschutzgesetzes • lfSG) Im Falle eines Impfschadens besteht unter den Voraussetzungen des § 60 Absatz 1 lfSG ein Anspruch auf Entschädigung in entsprechender Anwendung der Vorschriften des Bundesversorgungsgesetzes. Der Antrag ist bei der für die Durchführung des Bundesversorgungsgesetzes zuständigen Behörde (§ 64 Absatz 1 lfSG, i.d.R. 'Versorgungsamt') zu stellen. Weitere Auskünfte erteilt das zuständige Gesundheitsamt."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Dieses Element beschreibt den Namen der Krankheit, gegen die geimpft wird. Es handelt sich um ein mehrfach auswählbares Element, da ein Impfstoff mehrere einzelne Wirkstoffe enthalten kann und somit mehrere Erkrankungen, gegen die geimpft wird, adressiert werden können.
 */
export interface VaccinationRecordPrimeProtocolAppliedTargetDisease {
    coding: Array<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding>;
    text: string;
    id?: string;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDisease: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDisease> = t.recursion(
    "VaccinationRecordPrimeProtocolAppliedTargetDisease",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationRecordPrimeMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.00.000"
    >;
    id?: string;
}

export const VaccinationRecordPrimeMeta: t.Type<VaccinationRecordPrimeMeta> = t.recursion(
    "VaccinationRecordPrimeMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.00.000"
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
 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
 */
export interface VaccinationRecordPrimeText {
    status: "extensions";
    div: string;
    id?: string;
}

export const VaccinationRecordPrimeText: t.Type<VaccinationRecordPrimeText> = t.recursion(
    "VaccinationRecordPrimeText",
    () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("extensions"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Dieses Element beschreibt den verabreichten Impfstoff.
 */
export interface VaccinationRecordPrimeVaccineCode {
    coding: Array<
        | VaccinationRecordPrimeVaccineCodeSnomedCT
        | VaccinationRecordPrimeVaccineCodeAtc
        | VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn
    >;
    text: string;
    id?: string;
}

export const VaccinationRecordPrimeVaccineCode: t.Type<VaccinationRecordPrimeVaccineCode> = t.recursion(
    "VaccinationRecordPrimeVaccineCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationRecordPrimeVaccineCodeSnomedCT>,
                                t.Type<VaccinationRecordPrimeVaccineCodeAtc>,
                                t.Type<
                                    VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationRecordPrimeVaccineCodeSnomedCT,
                            VaccinationRecordPrimeVaccineCodeAtc,
                            VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn
                        ]),
                        [
                            {
                                codec: VaccinationRecordPrimeVaccineCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: VaccinationRecordPrimeVaccineCodeAtc,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/dimdi/atc"
                                }
                            },
                            {
                                codec: VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/ifa/pzn"
                                }
                            }
                        ],
                        ["1", "*"]
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
 * The patient who either received or did not receive the immunization.
 */
export interface VaccinationRecordPrimePatient {
    reference: string;
    id?: string;
}

export const VaccinationRecordPrimePatient: t.Type<VaccinationRecordPrimePatient> = t.recursion(
    "VaccinationRecordPrimePatient",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Name des herstellenden bzw. des anbietenden Unternehmens. Dies bietet eine Zusatzinformation zum Fertigarzneimittel.
 */
export interface VaccinationRecordPrimeManufacturer {
    display: string;
    id?: string;
}

export const VaccinationRecordPrimeManufacturer: t.Type<VaccinationRecordPrimeManufacturer> = t.recursion(
    "VaccinationRecordPrimeManufacturer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * In diesem Element wird der Hinweis und die Anmerkungen zur durchgeführten Impfung eingetragen werden.
 */
export interface VaccinationRecordPrimeNote {
    text: string;
    id?: string;
}

export const VaccinationRecordPrimeNote: t.Type<VaccinationRecordPrimeNote> = t.recursion(
    "VaccinationRecordPrimeNote",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARMarkdown
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export interface VaccinationRecordPrimeProtocolApplied {
    targetDisease: Array<VaccinationRecordPrimeProtocolAppliedTargetDisease>;
    id?: string;
    extension?: (Extension | VaccinationFollowUp)[];
    _doseNumberString?: VaccinationRecordPrimeProtocolAppliedDoseNumberString;
    doseNumberString?: string;
}

export const VaccinationRecordPrimeProtocolApplied: t.Type<VaccinationRecordPrimeProtocolApplied> = t.recursion(
    "VaccinationRecordPrimeProtocolApplied",
    () =>
        Excess(
            t.intersection([
                t.type({
                    targetDisease: MinArray(
                        1,
                        VaccinationRecordPrimeProtocolAppliedTargetDisease
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<[t.Type<Extension>, t.Type<VaccinationFollowUp>]>,
                        t.Any
                    >(
                        t.union([Extension, VaccinationFollowUp]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationFollowUp,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    _doseNumberString: VaccinationRecordPrimeProtocolAppliedDoseNumberString,
                    doseNumberString: SCALARString
                })
            ])
        )
);

interface VaccinationRecordPrime {
    resourceType: "Immunization";
    id: string;
    meta: VaccinationRecordPrimeMeta;
    text: VaccinationRecordPrimeText;
    status: "completed";
    vaccineCode: VaccinationRecordPrimeVaccineCode;
    patient: VaccinationRecordPrimePatient;
    occurrenceDateTime: string;
    primarySource: true;
    lotNumber: string;
    note: Array<VaccinationRecordPrimeNote | VaccinationRecordPrimeNoteHinweis>;
    protocolApplied: Array<VaccinationRecordPrimeProtocolApplied>;
    extension?: (
        | Extension
        | VaccinationRecordPrimeTypdesEintrages
        | VaccinationRecordPrimeVerantwortlichePerson
        | VaccinationRecordPrimeEintragendePerson
    )[];
    manufacturer?: VaccinationRecordPrimeManufacturer;
}

const VaccinationRecordPrime: t.Type<VaccinationRecordPrime> = t.recursion(
    "VaccinationRecordPrime",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Immunization"),
                    id: SCALARString,
                    meta: VaccinationRecordPrimeMeta,
                    text: VaccinationRecordPrimeText,
                    status: Literal("completed"),
                    vaccineCode: VaccinationRecordPrimeVaccineCode,
                    patient: VaccinationRecordPrimePatient,
                    occurrenceDateTime: SCALARDateTime,
                    primarySource: Literal(true),
                    lotNumber: SCALARString,
                    note: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationRecordPrimeNote>,
                                t.Type<VaccinationRecordPrimeNoteHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationRecordPrimeNote,
                            VaccinationRecordPrimeNoteHinweis
                        ]),
                        [
                            {
                                codec: VaccinationRecordPrimeNote,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "text" }
                            },
                            {
                                codec: VaccinationRecordPrimeNoteHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "text",
                                    value:
                                        "Bei einer ungewöhnlichen Impfreaktion sollte die impfende ärztliche Person benachrichtigt werden. Die ärztlich tätige Person hat, wenn der Verdacht einer gesundheitlichen Schädigung besteht, die über das übliche Ausmaß einer Impfreaktion hinaus geht verpflichtet, den Verdacht dem zuständigen Gesundheitsamt namentlich zu melden (§ 6 Absatz 1 Nr 3 des lnfektionsschutzgesetzes • lfSG) Im Falle eines Impfschadens besteht unter den Voraussetzungen des § 60 Absatz 1 lfSG ein Anspruch auf Entschädigung in entsprechender Anwendung der Vorschriften des Bundesversorgungsgesetzes. Der Antrag ist bei der für die Durchführung des Bundesversorgungsgesetzes zuständigen Behörde (§ 64 Absatz 1 lfSG, i.d.R. 'Versorgungsamt') zu stellen. Weitere Auskünfte erteilt das zuständige Gesundheitsamt."
                                }
                            }
                        ],
                        ["1", "2"]
                    ),
                    protocolApplied: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeProtocolApplied
                    )
                }),
                t.partial({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationRecordPrimeTypdesEintrages>,
                                t.Type<VaccinationRecordPrimeVerantwortlichePerson>,
                                t.Type<VaccinationRecordPrimeEintragendePerson>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordPrimeTypdesEintrages,
                            VaccinationRecordPrimeVerantwortlichePerson,
                            VaccinationRecordPrimeEintragendePerson
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordPrimeTypdesEintrages,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"
                                }
                            },
                            {
                                codec: VaccinationRecordPrimeVerantwortlichePerson,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester"
                                }
                            },
                            {
                                codec: VaccinationRecordPrimeEintragendePerson,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    manufacturer: VaccinationRecordPrimeManufacturer
                })
            ])
        )
);

export default VaccinationRecordPrime;
