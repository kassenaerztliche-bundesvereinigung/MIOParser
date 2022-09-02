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
    MaxArray,
    MinMaxArray,
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import KBVVSSFHIRBMPDOSIEREINHEITVS from "../../../../../Definitions/ST/1.0.0/ValueSet/KBVVSSFHIRBMPDOSIEREINHEIT";

import NFDDosagePointOfTimeVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDDosagePointOfTime";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Statement_Administration_Instruction"

/**
 * Content in other Language.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent",
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
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent[];
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode",
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
                        extension: t.array(
                            NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCodeContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay {
    id?: string;
    extension?: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode[];
    value?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplayAnzeigenameCode
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding {
    system: string;
    version: string;
    code: NFDDosagePointOfTimeVS;
    id?: string;
    _display?: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay;
    display?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: SCALARUri,
                        version: SCALARString,
                        code: NFDDosagePointOfTimeVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Amount of medication per dose.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity {
    value: number;
    unit: KBVVSSFHIRBMPDOSIEREINHEITVS;
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BMP_DOSIEREINHEIT";
    code: KBVVSSFHIRBMPDOSIEREINHEITVS;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: KBVVSSFHIRBMPDOSIEREINHEITVS,
                        system: Literal(
                            "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BMP_DOSIEREINHEIT"
                        ),
                        code: KBVVSSFHIRBMPDOSIEREINHEITVS
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode {
    coding: Array<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding>;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCodeCoding
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason: t.Type<NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason",
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
 * When medication should be administered.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming {
    code: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        code: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTimingCode
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * The amount of medication administered.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate {
    doseQuantity: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        doseQuantity:
                            NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRateDoseQuantity
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
 */
export interface NFDMedicationStatementAdministrationInstructionMedicationReference {
    reference: string;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionMedicationReference: t.Type<NFDMedicationStatementAdministrationInstructionMedicationReference> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionMedicationReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication|1.0.0"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No).
 */
export interface NFDMedicationStatementAdministrationInstructionEffectivePeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const NFDMedicationStatementAdministrationInstructionEffectivePeriod: t.Type<NFDMedicationStatementAdministrationInstructionEffectivePeriod> =
    t.recursion("NFDMedicationStatementAdministrationInstructionEffectivePeriod", () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
    );

/**
 * Indicates how the medication is/was or should be taken by the patient.
 */
export interface NFDMedicationStatementAdministrationInstructionVierTeiligesSchema {
    timing: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming;
    id?: string;
    patientInstruction?: string;
    doseAndRate?: Array<NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate>;
}

export const NFDMedicationStatementAdministrationInstructionVierTeiligesSchema: t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchema> =
    t.recursion("NFDMedicationStatementAdministrationInstructionVierTeiligesSchema", () =>
        Excess(
            t.intersection([
                t.type({
                    timing: NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaTiming
                }),
                t.partial({
                    id: SCALARString,
                    patientInstruction: SCALARString,
                    doseAndRate: MaxArray(
                        1,
                        NFDMedicationStatementAdministrationInstructionVierTeiligesSchemaDoseAndRate
                    )
                })
            ])
        )
    );

/**
 * Indicates how the medication is/was or should be taken by the patient.
 */
export interface NFDMedicationStatementAdministrationInstructionFreitextDosierung {
    text: string;
    id?: string;
    patientInstruction?: string;
}

export const NFDMedicationStatementAdministrationInstructionFreitextDosierung: t.Type<NFDMedicationStatementAdministrationInstructionFreitextDosierung> =
    t.recursion("NFDMedicationStatementAdministrationInstructionFreitextDosierung", () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    patientInstruction: SCALARString
                })
            ])
        )
    );

/**
 * Indicates how the medication is/was or should be taken by the patient.
 */
export interface NFDMedicationStatementAdministrationInstructionFehlendeAngabe {
    id?: string;
    extension?: NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason[];
}

export const NFDMedicationStatementAdministrationInstructionFehlendeAngabe: t.Type<NFDMedicationStatementAdministrationInstructionFehlendeAngabe> =
    t.recursion("NFDMedicationStatementAdministrationInstructionFehlendeAngabe", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    NFDMedicationStatementAdministrationInstructionFehlendeAngabeDataabsentreason
                )
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDMedicationStatementAdministrationInstructionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Statement_Administration_Instruction|1.0.0">;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionMeta: t.Type<NFDMedicationStatementAdministrationInstructionMeta> =
    t.recursion("NFDMedicationStatementAdministrationInstructionMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Statement_Administration_Instruction|1.0.0"
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
 * The person, animal or group who is/was taking the medication.
 */
export interface NFDMedicationStatementAdministrationInstructionSubjectReference {
    reference: string;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionSubjectReference: t.Type<NFDMedicationStatementAdministrationInstructionSubjectReference> =
    t.recursion("NFDMedicationStatementAdministrationInstructionSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
 */
export interface NFDMedicationStatementAdministrationInstructionInformationSourceReference {
    reference: string;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionInformationSourceReference: t.Type<NFDMedicationStatementAdministrationInstructionInformationSourceReference> =
    t.recursion(
        "NFDMedicationStatementAdministrationInstructionInformationSourceReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Provides extra information about the medication statement that is not conveyed by the other attributes.
 */
export interface NFDMedicationStatementAdministrationInstructionNote {
    text: string;
    id?: string;
}

export const NFDMedicationStatementAdministrationInstructionNote: t.Type<NFDMedicationStatementAdministrationInstructionNote> =
    t.recursion("NFDMedicationStatementAdministrationInstructionNote", () =>
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

interface NFDMedicationStatementAdministrationInstruction {
    resourceType: "MedicationStatement";
    meta: NFDMedicationStatementAdministrationInstructionMeta;
    status: "active";
    medicationReference: NFDMedicationStatementAdministrationInstructionMedicationReference;
    subject: NFDMedicationStatementAdministrationInstructionSubjectReference;
    dosage: Array<
        | NFDMedicationStatementAdministrationInstructionVierTeiligesSchema
        | NFDMedicationStatementAdministrationInstructionFreitextDosierung
        | NFDMedicationStatementAdministrationInstructionFehlendeAngabe
    >;
    id?: string;
    text?: Narrative;
    effectivePeriod?: NFDMedicationStatementAdministrationInstructionEffectivePeriod;
    informationSource?: NFDMedicationStatementAdministrationInstructionInformationSourceReference;
    note?: Array<NFDMedicationStatementAdministrationInstructionNote>;
}

const NFDMedicationStatementAdministrationInstruction: t.Type<NFDMedicationStatementAdministrationInstruction> =
    t.recursion("NFDMedicationStatementAdministrationInstruction", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("MedicationStatement"),
                    meta: NFDMedicationStatementAdministrationInstructionMeta,
                    status: Literal("active"),
                    medicationReference:
                        NFDMedicationStatementAdministrationInstructionMedicationReference,
                    subject:
                        NFDMedicationStatementAdministrationInstructionSubjectReference,
                    dosage: ReqArray<
                        t.UnionC<
                            [
                                t.Type<NFDMedicationStatementAdministrationInstructionVierTeiligesSchema>,
                                t.Type<NFDMedicationStatementAdministrationInstructionFreitextDosierung>,
                                t.Type<NFDMedicationStatementAdministrationInstructionFehlendeAngabe>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            NFDMedicationStatementAdministrationInstructionVierTeiligesSchema,
                            NFDMedicationStatementAdministrationInstructionFreitextDosierung,
                            NFDMedicationStatementAdministrationInstructionFehlendeAngabe
                        ]),
                        [
                            {
                                codec: NFDMedicationStatementAdministrationInstructionVierTeiligesSchema,
                                occurrence: ["0", "4"],
                                sliceBy: { exists: ["timing"] }
                            },
                            {
                                codec: NFDMedicationStatementAdministrationInstructionFreitextDosierung,
                                occurrence: ["0", "1"],
                                sliceBy: { exists: ["text"] }
                            },
                            {
                                codec: NFDMedicationStatementAdministrationInstructionFehlendeAngabe,
                                occurrence: ["0", "1"],
                                sliceBy: { exists: [] }
                            }
                        ],
                        ["1", "4"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    effectivePeriod:
                        NFDMedicationStatementAdministrationInstructionEffectivePeriod,
                    informationSource:
                        NFDMedicationStatementAdministrationInstructionInformationSourceReference,
                    note: MaxArray(1, NFDMedicationStatementAdministrationInstructionNote)
                })
            ])
        )
    );

export default NFDMedicationStatementAdministrationInstruction;
