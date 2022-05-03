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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import CMRMedicationStatementStatusVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRMedicationStatementStatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis"

/**
 * Content in other Language.
 */
export interface CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent {
    url: "content";
    valueString: "Vitamin-K";
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent: t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Vitamin-K")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent {
    url: "content";
    valueString: "oral";
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("oral")
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
export interface CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent
    )[];
}

export const CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed: t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed",
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
                                    t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent
    )[];
}

export const CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed",
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
                                    t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomedContent,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed
    )[];
    value?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay: t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplayAnzeigenameMedicationSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed
    )[];
    value?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplayAnzeigenameRouteSnomed,
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
 * Amount of medication per dose.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity {
    value: 2;
    unit: "mg";
    system: "http://unitsofmeasure.org";
    code: "mg";
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: Literal(2),
                        unit: Literal("mg"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("mg")
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
export interface CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "66656000";
    id?: string;
    _display?: CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding: t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("66656000")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "26643006";
    id?: string;
    _display?: CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay;
    display?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("26643006")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRMedicationStatementVitamineKProphylaxisDosageRouteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Vitamin-K-Prophylaxe gegeben:";
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung: t.Type<CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal("Vitamin-K-Prophylaxe gegeben:")
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
export interface CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept {
    coding: Array<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding>;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept: t.Type<CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept> =
    t.recursion(
        "CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConceptCoding
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * How drug should enter body.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosageRoute {
    coding: Array<CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding>;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageRoute: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageRoute> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisDosageRoute", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRMedicationStatementVitamineKProphylaxisDosageRouteCoding
                    )
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
export interface CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate {
    doseQuantity: CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate: t.Type<CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate", () =>
        Excess(
            t.intersection([
                t.type({
                    doseQuantity:
                        CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRateDoseQuantity
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
export interface CMRMedicationStatementVitamineKProphylaxisMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.1">;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisMeta: t.Type<CMRMedicationStatementVitamineKProphylaxisMeta> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.1"
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
export interface CMRMedicationStatementVitamineKProphylaxisSubject {
    reference: string;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisSubject: t.Type<CMRMedicationStatementVitamineKProphylaxisSubject> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The encounter or episode of care that establishes the context for this MedicationStatement.
 */
export interface CMRMedicationStatementVitamineKProphylaxisContext {
    reference: string;
    id?: string;
}

export const CMRMedicationStatementVitamineKProphylaxisContext: t.Type<CMRMedicationStatementVitamineKProphylaxisContext> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisContext", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Indicates how the medication is/was or should be taken by the patient.
 */
export interface CMRMedicationStatementVitamineKProphylaxisDosage {
    id?: string;
    text?: string;
    route?: CMRMedicationStatementVitamineKProphylaxisDosageRoute;
    doseAndRate?: Array<CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate>;
}

export const CMRMedicationStatementVitamineKProphylaxisDosage: t.Type<CMRMedicationStatementVitamineKProphylaxisDosage> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxisDosage", () =>
        Excess(
            t.partial({
                id: SCALARString,
                text: SCALARString,
                route: CMRMedicationStatementVitamineKProphylaxisDosageRoute,
                doseAndRate: MaxArray(
                    1,
                    CMRMedicationStatementVitamineKProphylaxisDosageDoseAndRate
                )
            })
        )
    );

interface CMRMedicationStatementVitamineKProphylaxis {
    resourceType: "MedicationStatement";
    meta: CMRMedicationStatementVitamineKProphylaxisMeta;
    status: CMRMedicationStatementStatusVS;
    medicationCodeableConcept: CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept;
    subject: CMRMedicationStatementVitamineKProphylaxisSubject;
    context: CMRMedicationStatementVitamineKProphylaxisContext;
    effectiveDateTime: string;
    dosage: Array<CMRMedicationStatementVitamineKProphylaxisDosage>;
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung
    )[];
}

const CMRMedicationStatementVitamineKProphylaxis: t.Type<CMRMedicationStatementVitamineKProphylaxis> =
    t.recursion("CMRMedicationStatementVitamineKProphylaxis", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("MedicationStatement"),
                    meta: CMRMedicationStatementVitamineKProphylaxisMeta,
                    status: CMRMedicationStatementStatusVS,
                    medicationCodeableConcept:
                        CMRMedicationStatementVitamineKProphylaxisMedicationCodeableConcept,
                    subject: CMRMedicationStatementVitamineKProphylaxisSubject,
                    context: CMRMedicationStatementVitamineKProphylaxisContext,
                    effectiveDateTime: SCALARDateTime,
                    dosage: MinMaxArray(
                        1,
                        1,
                        CMRMedicationStatementVitamineKProphylaxisDosage
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRMedicationStatementVitamineKProphylaxisVitaminKEinleitung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

export default CMRMedicationStatementVitamineKProphylaxis;
