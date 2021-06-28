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
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.1/Extension/TerminologyGerman";
import VaccinationBasicImmunization from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationBasicImmunization";
import VaccinationEntryType from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationEntryType";
import VaccinationFollowUp from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationFollowUp";
import VaccinationImmunizationOriginCodesVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationImmunizationOriginCodes";
import VaccinationTargetDiseaseVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationTargetDisease";
import VaccinationVaccineATCVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationVaccineATC";
import VaccinationVaccineVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationVaccine";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum"

/**
 * Content in other Language.
 */
export interface VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent",
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
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding {
    system: "http://hl7.org/fhir/composition-attestation-mode";
    code: "legal";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding: t.Type<VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding",
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
export interface VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    code: "ENT";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding: t.Type<VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding",
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
export interface VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept {
    coding: Array<
        VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding
    >;
    id?: string;
}

export const VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept: t.Type<VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding
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
export interface VaccinationRecordAddendumVerantwortlichePersonPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationRecordAddendumVerantwortlichePersonPartyValueReference: t.Type<VaccinationRecordAddendumVerantwortlichePersonPartyValueReference> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePersonPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum"
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
export interface VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept {
    coding: Array<
        VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding
    >;
    id?: string;
}

export const VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept: t.Type<VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept> = t.recursion(
    "VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding
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
export interface VaccinationRecordAddendumEintragendePersonPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationRecordAddendumEintragendePersonPartyValueReference: t.Type<VaccinationRecordAddendumEintragendePersonPartyValueReference> = t.recursion(
    "VaccinationRecordAddendumEintragendePersonPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole"
                    ])
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
export interface VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed",
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
                                    VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason: t.Type<VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason",
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
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationRecordAddendumVerantwortlichePersonMode {
    url: "mode";
    valueCodeableConcept: VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept;
    id?: string;
}

export const VaccinationRecordAddendumVerantwortlichePersonMode: t.Type<VaccinationRecordAddendumVerantwortlichePersonMode> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePersonMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept
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
export interface VaccinationRecordAddendumVerantwortlichePersonParty {
    url: "party";
    valueReference: VaccinationRecordAddendumVerantwortlichePersonPartyValueReference;
    id?: string;
}

export const VaccinationRecordAddendumVerantwortlichePersonParty: t.Type<VaccinationRecordAddendumVerantwortlichePersonParty> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePersonParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationRecordAddendumVerantwortlichePersonPartyValueReference
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
export interface VaccinationRecordAddendumEintragendePersonMode {
    url: "mode";
    valueCodeableConcept: VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept;
    id?: string;
}

export const VaccinationRecordAddendumEintragendePersonMode: t.Type<VaccinationRecordAddendumEintragendePersonMode> = t.recursion(
    "VaccinationRecordAddendumEintragendePersonMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept
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
export interface VaccinationRecordAddendumEintragendePersonParty {
    url: "party";
    valueReference: VaccinationRecordAddendumEintragendePersonPartyValueReference;
    id?: string;
}

export const VaccinationRecordAddendumEintragendePersonParty: t.Type<VaccinationRecordAddendumEintragendePersonParty> = t.recursion(
    "VaccinationRecordAddendumEintragendePersonParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationRecordAddendumEintragendePersonPartyValueReference
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
export interface VaccinationRecordAddendumVaccineCodeSnomedCTDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const VaccinationRecordAddendumVaccineCodeSnomedCTDisplay: t.Type<VaccinationRecordAddendumVaccineCodeSnomedCTDisplay> = t.recursion(
    "VaccinationRecordAddendumVaccineCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<TerminologyGerman>]>,
                    t.Any
                >(
                    t.union([Extension, TerminologyGerman]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: TerminologyGerman,
                            occurrence: ["0", "1"],
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay: t.Type<VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface VaccinationRecordAddendumVaccineCodeDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationRecordAddendumVaccineCodeDataabsentreason: t.Type<VaccinationRecordAddendumVaccineCodeDataabsentreason> = t.recursion(
    "VaccinationRecordAddendumVaccineCodeDataabsentreason",
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
 * Dieses Element beschreibt den Impfstoff als SNOMED CT®  Product Code.
 */
export interface VaccinationRecordAddendumVaccineCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationVaccineVS;
    id?: string;
    _display?: VaccinationRecordAddendumVaccineCodeSnomedCTDisplay;
    display?: string;
}

export const VaccinationRecordAddendumVaccineCodeSnomedCT: t.Type<VaccinationRecordAddendumVaccineCodeSnomedCT> = t.recursion(
    "VaccinationRecordAddendumVaccineCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationVaccineVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationRecordAddendumVaccineCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Bezeichnung des Impfstoffs oder des Kombinationsimpfstoffes als Anatomisch-Therapeutisch-Chemische Klassifikation samt ATC-Code des Impfstoffs oder Kombinationsimpfstoffes. Grundlage ist die amtliche Fassung des ATC-Index für Deutschland (DIMDI). Es sind alle ATC-Codes aus der amtlichen Fassung des ATC-Index gelistet, unabhängig von deren Marktverfügbarkeit.
 */
export interface VaccinationRecordAddendumVaccineCodeAtc {
    system: "http://fhir.de/CodeSystem/dimdi/atc";
    version: string;
    code: VaccinationVaccineATCVS;
    display: string;
    id?: string;
}

export const VaccinationRecordAddendumVaccineCodeAtc: t.Type<VaccinationRecordAddendumVaccineCodeAtc> = t.recursion(
    "VaccinationRecordAddendumVaccineCodeAtc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/atc"),
                    version: SCALARString,
                    code: VaccinationVaccineATCVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * 8-stellige Pharmazentralnummer (PZN) des Fertigarzneimittels (Impfstoffs). Die PZN definiert ein Fertigarzneimittel eindeutig.
 */
export interface VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn {
    system: "http://fhir.de/CodeSystem/ifa/pzn";
    code: string;
    display: string;
    id?: string;
    version?: string;
}

export const VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn: t.Type<VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn> = t.recursion(
    "VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn",
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
export interface VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding {
    system: string;
    version: string;
    code: VaccinationTargetDiseaseVS;
    id?: string;
    _display?: VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding: t.Type<VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationTargetDiseaseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Nominal position in a series.
 */
export interface VaccinationRecordAddendumProtocolAppliedDoseNumberString {
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason
    )[];
    value?: string;
}

export const VaccinationRecordAddendumProtocolAppliedDoseNumberString: t.Type<VaccinationRecordAddendumProtocolAppliedDoseNumberString> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedDoseNumberString",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason,
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
 * In diesem Profil soll im Rahmen des Szenario Daten Nachtragen die Möglichkeit geschaffen werden, eine attestierende (Verantwortliche Person) an eine Ressource (Immunization) anzuhängen.
 */
export interface VaccinationRecordAddendumVerantwortlichePerson {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordAddendumVerantwortlichePersonMode
        | VaccinationRecordAddendumVerantwortlichePersonParty
    )[];
}

export const VaccinationRecordAddendumVerantwortlichePerson: t.Type<VaccinationRecordAddendumVerantwortlichePerson> = t.recursion(
    "VaccinationRecordAddendumVerantwortlichePerson",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    VaccinationRecordAddendumVerantwortlichePersonMode
                                >,
                                t.Type<
                                    VaccinationRecordAddendumVerantwortlichePersonParty
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordAddendumVerantwortlichePersonMode,
                            VaccinationRecordAddendumVerantwortlichePersonParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordAddendumVerantwortlichePersonMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationRecordAddendumVerantwortlichePersonParty,
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
 * In diesem Profil soll die Möglichkeit geschaffen werden, eine eintragende Person an eine Ressource (Immunization) anzuhängen.
 */
export interface VaccinationRecordAddendumEintragendePerson {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordAddendumEintragendePersonMode
        | VaccinationRecordAddendumEintragendePersonParty
    )[];
}

export const VaccinationRecordAddendumEintragendePerson: t.Type<VaccinationRecordAddendumEintragendePerson> = t.recursion(
    "VaccinationRecordAddendumEintragendePerson",
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
                                t.Type<VaccinationRecordAddendumEintragendePersonMode>,
                                t.Type<VaccinationRecordAddendumEintragendePersonParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationRecordAddendumEintragendePersonMode,
                            VaccinationRecordAddendumEintragendePersonParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationRecordAddendumEintragendePersonMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationRecordAddendumEintragendePersonParty,
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
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationRecordAddendumReportOriginCoding {
    system: string;
    code: VaccinationImmunizationOriginCodesVS;
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationRecordAddendumReportOriginCoding: t.Type<VaccinationRecordAddendumReportOriginCoding> = t.recursion(
    "VaccinationRecordAddendumReportOriginCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: VaccinationImmunizationOriginCodesVS
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
 * Dieses Element beschreibt den Namen der Krankheit, gegen die geimpft wird. Es handelt sich um ein mehrfach auswählbares Element, da ein Impfstoff mehrere einzelne Wirkstoffe enthalten kann und somit mehrere Erkrankungen, gegen die geimpft wird, adressiert werden können.
 */
export interface VaccinationRecordAddendumProtocolAppliedTargetDisease {
    coding: Array<VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding>;
    id?: string;
}

export const VaccinationRecordAddendumProtocolAppliedTargetDisease: t.Type<VaccinationRecordAddendumProtocolAppliedTargetDisease> = t.recursion(
    "VaccinationRecordAddendumProtocolAppliedTargetDisease",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding
                    )
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
export interface VaccinationRecordAddendumMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.1.0"
    >;
    id?: string;
}

export const VaccinationRecordAddendumMeta: t.Type<VaccinationRecordAddendumMeta> = t.recursion(
    "VaccinationRecordAddendumMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.1.0"
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
 * Dieses Element beschreibt den verabreichten Impfstoff.
 */
export interface VaccinationRecordAddendumVaccineCode {
    id?: string;
    extension?: (Extension | VaccinationRecordAddendumVaccineCodeDataabsentreason)[];
    coding?: (
        | VaccinationRecordAddendumVaccineCodeSnomedCT
        | VaccinationRecordAddendumVaccineCodeAtc
        | VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn
    )[];
    text?: string;
}

export const VaccinationRecordAddendumVaccineCode: t.Type<VaccinationRecordAddendumVaccineCode> = t.recursion(
    "VaccinationRecordAddendumVaccineCode",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationRecordAddendumVaccineCodeDataabsentreason>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationRecordAddendumVaccineCodeDataabsentreason
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationRecordAddendumVaccineCodeDataabsentreason,
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
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<VaccinationRecordAddendumVaccineCodeSnomedCT>,
                            t.Type<VaccinationRecordAddendumVaccineCodeAtc>,
                            t.Type<
                                VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        VaccinationRecordAddendumVaccineCodeSnomedCT,
                        VaccinationRecordAddendumVaccineCodeAtc,
                        VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn
                    ]),
                    [
                        {
                            codec: VaccinationRecordAddendumVaccineCodeSnomedCT,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: VaccinationRecordAddendumVaccineCodeAtc,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "system",
                                value: "http://fhir.de/CodeSystem/dimdi/atc"
                            }
                        },
                        {
                            codec: VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "system",
                                value: "http://fhir.de/CodeSystem/ifa/pzn"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                text: SCALARString
            })
        )
);

/**
 * The patient who either received or did not receive the immunization.
 */
export interface VaccinationRecordAddendumPatient {
    reference: string;
    id?: string;
}

export const VaccinationRecordAddendumPatient: t.Type<VaccinationRecordAddendumPatient> = t.recursion(
    "VaccinationRecordAddendumPatient",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
 */
export interface VaccinationRecordAddendumReportOrigin {
    coding: Array<VaccinationRecordAddendumReportOriginCoding>;
    text: string;
    id?: string;
}

export const VaccinationRecordAddendumReportOrigin: t.Type<VaccinationRecordAddendumReportOrigin> = t.recursion(
    "VaccinationRecordAddendumReportOrigin",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordAddendumReportOriginCoding
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
 * Name des herstellenden bzw. des anbietenden Unternehmens. Dies bietet eine Zusatzinformation zum Fertigarzneimittel.
 */
export interface VaccinationRecordAddendumManufacturer {
    display: string;
    id?: string;
}

export const VaccinationRecordAddendumManufacturer: t.Type<VaccinationRecordAddendumManufacturer> = t.recursion(
    "VaccinationRecordAddendumManufacturer",
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
 * Anmerkungen zur durchgeführten Impfung
 */
export interface VaccinationRecordAddendumNote {
    text: string;
    id?: string;
}

export const VaccinationRecordAddendumNote: t.Type<VaccinationRecordAddendumNote> = t.recursion(
    "VaccinationRecordAddendumNote",
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
export interface VaccinationRecordAddendumProtocolApplied {
    targetDisease: Array<VaccinationRecordAddendumProtocolAppliedTargetDisease>;
    id?: string;
    extension?: (Extension | VaccinationFollowUp | VaccinationBasicImmunization)[];
    _doseNumberString?: VaccinationRecordAddendumProtocolAppliedDoseNumberString;
    doseNumberString?: string;
}

export const VaccinationRecordAddendumProtocolApplied: t.Type<VaccinationRecordAddendumProtocolApplied> = t.recursion(
    "VaccinationRecordAddendumProtocolApplied",
    () =>
        Excess(
            t.intersection([
                t.type({
                    targetDisease: MinArray(
                        1,
                        VaccinationRecordAddendumProtocolAppliedTargetDisease
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationFollowUp>,
                                t.Type<VaccinationBasicImmunization>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationFollowUp,
                            VaccinationBasicImmunization
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationFollowUp,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up"
                                }
                            },
                            {
                                codec: VaccinationBasicImmunization,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Basic_Immunization"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    _doseNumberString: VaccinationRecordAddendumProtocolAppliedDoseNumberString,
                    doseNumberString: SCALARString
                })
            ])
        )
);

interface VaccinationRecordAddendum {
    resourceType: "Immunization";
    meta: VaccinationRecordAddendumMeta;
    status: "completed";
    vaccineCode: VaccinationRecordAddendumVaccineCode;
    patient: VaccinationRecordAddendumPatient;
    occurrenceDateTime: string;
    primarySource: false;
    reportOrigin: VaccinationRecordAddendumReportOrigin;
    protocolApplied: Array<VaccinationRecordAddendumProtocolApplied>;
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | VaccinationEntryType
        | VaccinationRecordAddendumVerantwortlichePerson
        | VaccinationRecordAddendumEintragendePerson
    )[];
    manufacturer?: VaccinationRecordAddendumManufacturer;
    lotNumber?: string;
    note?: Array<VaccinationRecordAddendumNote>;
}

const VaccinationRecordAddendum: t.Type<VaccinationRecordAddendum> = t.recursion(
    "VaccinationRecordAddendum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Immunization"),
                    meta: VaccinationRecordAddendumMeta,
                    status: Literal("completed"),
                    vaccineCode: VaccinationRecordAddendumVaccineCode,
                    patient: VaccinationRecordAddendumPatient,
                    occurrenceDateTime: SCALARDateTime,
                    primarySource: Literal(false),
                    reportOrigin: VaccinationRecordAddendumReportOrigin,
                    protocolApplied: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordAddendumProtocolApplied
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationEntryType>,
                                t.Type<VaccinationRecordAddendumVerantwortlichePerson>,
                                t.Type<VaccinationRecordAddendumEintragendePerson>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationEntryType,
                            VaccinationRecordAddendumVerantwortlichePerson,
                            VaccinationRecordAddendumEintragendePerson
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationEntryType,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"
                                }
                            },
                            {
                                codec: VaccinationRecordAddendumVerantwortlichePerson,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum"
                                }
                            },
                            {
                                codec: VaccinationRecordAddendumEintragendePerson,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    manufacturer: VaccinationRecordAddendumManufacturer,
                    lotNumber: SCALARString,
                    note: MaxArray(1, VaccinationRecordAddendumNote)
                })
            ])
        )
);

export default VaccinationRecordAddendum;
