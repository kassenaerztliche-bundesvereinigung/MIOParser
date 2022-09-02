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

import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.1/Extension/TerminologyGerman";
import VaccinationAttester from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationAttester";
import VaccinationEnterer from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationEnterer";
import VaccinationEntryType from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationEntryType";
import VaccinationFollowUp from "../../../../../Definitions/KBV/IM/1.1.0/Extension/VaccinationFollowUp";
import VaccinationTargetDiseaseVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationTargetDisease";
import VaccinationVaccineATCVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationVaccineATC";
import VaccinationVaccineVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationVaccine";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime"

/**
 * Content in other Language.
 */
export interface VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason: t.Type<VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason> =
    t.recursion(
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationRecordPrimeVaccineCodeSnomedCTDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const VaccinationRecordPrimeVaccineCodeSnomedCTDisplay: t.Type<VaccinationRecordPrimeVaccineCodeSnomedCTDisplay> =
    t.recursion("VaccinationRecordPrimeVaccineCodeSnomedCTDisplay", () =>
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay> =
    t.recursion("VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed,
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
 * Dieses Element beschreibt den Impfstoff als SNOMED CT®  Product Code.
 */
export interface VaccinationRecordPrimeVaccineCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationVaccineVS;
    id?: string;
    _display?: VaccinationRecordPrimeVaccineCodeSnomedCTDisplay;
    display?: string;
}

export const VaccinationRecordPrimeVaccineCodeSnomedCT: t.Type<VaccinationRecordPrimeVaccineCodeSnomedCT> =
    t.recursion("VaccinationRecordPrimeVaccineCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationVaccineVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationRecordPrimeVaccineCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Bezeichnung des Impfstoffs oder des Kombinationsimpfstoffes als Anatomisch-Therapeutisch-Chemische Klassifikation samt ATC-Code des Impfstoffs oder Kombinationsimpfstoffes. Grundlage ist die amtliche Fassung des ATC-Index für Deutschland (DIMDI). Es sind alle ATC-Codes aus der amtlichen Fassung des ATC-Index gelistet, unabhängig von deren Marktverfügbarkeit.
 */
export interface VaccinationRecordPrimeVaccineCodeAtc {
    system: "http://fhir.de/CodeSystem/dimdi/atc";
    version: string;
    code: VaccinationVaccineATCVS;
    display: string;
    id?: string;
}

export const VaccinationRecordPrimeVaccineCodeAtc: t.Type<VaccinationRecordPrimeVaccineCodeAtc> =
    t.recursion("VaccinationRecordPrimeVaccineCodeAtc", () =>
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
export interface VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn {
    system: "http://fhir.de/CodeSystem/ifa/pzn";
    code: string;
    display: string;
    id?: string;
    version?: string;
}

export const VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn: t.Type<VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn> =
    t.recursion("VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn", () =>
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
    id?: string;
    _display?: VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding> =
    t.recursion("VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationTargetDiseaseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay,
                    display: SCALARString,
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

export const VaccinationRecordPrimeProtocolAppliedDoseNumberString: t.Type<VaccinationRecordPrimeProtocolAppliedDoseNumberString> =
    t.recursion("VaccinationRecordPrimeProtocolAppliedDoseNumberString", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason>
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
                                value: "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
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
 * Extra information about the immunization that is not conveyed by the other attributes.
 */
export interface VaccinationRecordPrimeNoteHinweis {
    text: "Bei einer ungewöhnlichen Impfreaktion sollte die impfende ärztliche Person benachrichtigt werden. Die ärztlich tätige Person hat, wenn der Verdacht einer gesundheitlichen Schädigung besteht, die über das übliche Ausmaß einer Impfreaktion hinaus geht verpflichtet, den Verdacht dem zuständigen Gesundheitsamt namentlich zu melden (§ 6 Absatz 1 Nr 3 des lnfektionsschutzgesetzes • lfSG) Im Falle eines Impfschadens besteht unter den Voraussetzungen des § 60 Absatz 1 lfSG ein Anspruch auf Entschädigung in entsprechender Anwendung der Vorschriften des Bundesversorgungsgesetzes. Der Antrag ist bei der für die Durchführung des Bundesversorgungsgesetzes zuständigen Behörde (§ 64 Absatz 1 lfSG, i.d.R. 'Versorgungsamt') zu stellen. Weitere Auskünfte erteilt das zuständige Gesundheitsamt.";
    id?: string;
}

export const VaccinationRecordPrimeNoteHinweis: t.Type<VaccinationRecordPrimeNoteHinweis> =
    t.recursion("VaccinationRecordPrimeNoteHinweis", () =>
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
    id?: string;
}

export const VaccinationRecordPrimeProtocolAppliedTargetDisease: t.Type<VaccinationRecordPrimeProtocolAppliedTargetDisease> =
    t.recursion("VaccinationRecordPrimeProtocolAppliedTargetDisease", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding
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
export interface VaccinationRecordPrimeMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.1.0">;
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
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.1.0"
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

export const VaccinationRecordPrimeVaccineCode: t.Type<VaccinationRecordPrimeVaccineCode> =
    t.recursion("VaccinationRecordPrimeVaccineCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationRecordPrimeVaccineCodeSnomedCT>,
                                t.Type<VaccinationRecordPrimeVaccineCodeAtc>,
                                t.Type<VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn>
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
export interface VaccinationRecordPrimePatientReference {
    reference: string;
    id?: string;
}

export const VaccinationRecordPrimePatientReference: t.Type<VaccinationRecordPrimePatientReference> =
    t.recursion("VaccinationRecordPrimePatientReference", () =>
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
 * Name des herstellenden bzw. des anbietenden Unternehmens. Dies bietet eine Zusatzinformation zum Fertigarzneimittel.
 */
export interface VaccinationRecordPrimeManufacturerReference {
    display: string;
    id?: string;
}

export const VaccinationRecordPrimeManufacturerReference: t.Type<VaccinationRecordPrimeManufacturerReference> =
    t.recursion("VaccinationRecordPrimeManufacturerReference", () =>
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

export const VaccinationRecordPrimeProtocolApplied: t.Type<VaccinationRecordPrimeProtocolApplied> =
    t.recursion("VaccinationRecordPrimeProtocolApplied", () =>
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
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    _doseNumberString:
                        VaccinationRecordPrimeProtocolAppliedDoseNumberString,
                    doseNumberString: SCALARString
                })
            ])
        )
    );

interface VaccinationRecordPrime {
    resourceType: "Immunization";
    meta: VaccinationRecordPrimeMeta;
    status: "completed";
    vaccineCode: VaccinationRecordPrimeVaccineCode;
    patient: VaccinationRecordPrimePatientReference;
    occurrenceDateTime: string;
    primarySource: true;
    lotNumber: string;
    note: Array<VaccinationRecordPrimeNote | VaccinationRecordPrimeNoteHinweis>;
    protocolApplied: Array<VaccinationRecordPrimeProtocolApplied>;
    id?: string;
    text?: VaccinationRecordPrimeText;
    extension?: (
        | Extension
        | VaccinationEntryType
        | VaccinationAttester
        | VaccinationEnterer
    )[];
    manufacturer?: VaccinationRecordPrimeManufacturerReference;
}

const VaccinationRecordPrime: t.Type<VaccinationRecordPrime> = t.recursion(
    "VaccinationRecordPrime",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Immunization"),
                    meta: VaccinationRecordPrimeMeta,
                    status: Literal("completed"),
                    vaccineCode: VaccinationRecordPrimeVaccineCode,
                    patient: VaccinationRecordPrimePatientReference,
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
                                    value: "Bei einer ungewöhnlichen Impfreaktion sollte die impfende ärztliche Person benachrichtigt werden. Die ärztlich tätige Person hat, wenn der Verdacht einer gesundheitlichen Schädigung besteht, die über das übliche Ausmaß einer Impfreaktion hinaus geht verpflichtet, den Verdacht dem zuständigen Gesundheitsamt namentlich zu melden (§ 6 Absatz 1 Nr 3 des lnfektionsschutzgesetzes • lfSG) Im Falle eines Impfschadens besteht unter den Voraussetzungen des § 60 Absatz 1 lfSG ein Anspruch auf Entschädigung in entsprechender Anwendung der Vorschriften des Bundesversorgungsgesetzes. Der Antrag ist bei der für die Durchführung des Bundesversorgungsgesetzes zuständigen Behörde (§ 64 Absatz 1 lfSG, i.d.R. 'Versorgungsamt') zu stellen. Weitere Auskünfte erteilt das zuständige Gesundheitsamt."
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
                    id: SCALARString,
                    text: VaccinationRecordPrimeText,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationEntryType>,
                                t.Type<VaccinationAttester>,
                                t.Type<VaccinationEnterer>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationEntryType,
                            VaccinationAttester,
                            VaccinationEnterer
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
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"
                                }
                            },
                            {
                                codec: VaccinationAttester,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester"
                                }
                            },
                            {
                                codec: VaccinationEnterer,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    manufacturer: VaccinationRecordPrimeManufacturerReference
                })
            ])
        )
);

export default VaccinationRecordPrime;
