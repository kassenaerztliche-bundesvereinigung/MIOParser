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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI"

/**
 * Content in other Language.
 */
export interface CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "BMI in kg/m2";
    id?: string;
}

export const CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("BMI in kg/m2")
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
export interface CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "BMI in kg/m2";
    id?: string;
}

export const CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("BMI in kg/m2")
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
export interface CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                                t.Type<CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU7U9BMICodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7U9BMICodeCodeSnomedDisplay: t.Type<CMRObservationU7U9BMICodeCodeSnomedDisplay> =
    t.recursion("CMRObservationU7U9BMICodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7U9BMICodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7U9BMICodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU7U9BMICodeCodeLoincDisplay: t.Type<CMRObservationU7U9BMICodeCodeLoincDisplay> =
    t.recursion("CMRObservationU7U9BMICodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7U9BMICodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU7U9BMICodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "60621009";
    id?: string;
    _display?: CMRObservationU7U9BMICodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU7U9BMICodeCodeSnomed: t.Type<CMRObservationU7U9BMICodeCodeSnomed> =
    t.recursion("CMRObservationU7U9BMICodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("60621009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7U9BMICodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU7U9BMICodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "39156-5";
    id?: string;
    _display?: CMRObservationU7U9BMICodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU7U9BMICodeCodeLoinc: t.Type<CMRObservationU7U9BMICodeCodeLoinc> =
    t.recursion("CMRObservationU7U9BMICodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("39156-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7U9BMICodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU7U9BMIValueQuantity {
    value: number;
    unit: "kg/m2";
    system: "http://unitsofmeasure.org";
    code: "kg/m2";
    id?: string;
}

export const CMRObservationU7U9BMIValueQuantity: t.Type<CMRObservationU7U9BMIValueQuantity> =
    t.recursion("CMRObservationU7U9BMIValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("kg/m2"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("kg/m2")
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
export interface CMRObservationU7U9BMIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI|1.0.1">;
    id?: string;
}

export const CMRObservationU7U9BMIMeta: t.Type<CMRObservationU7U9BMIMeta> = t.recursion(
    "CMRObservationU7U9BMIMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI|1.0.1"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface CMRObservationU7U9BMICode {
    coding: Array<
        CMRObservationU7U9BMICodeCodeSnomed | CMRObservationU7U9BMICodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU7U9BMICode: t.Type<CMRObservationU7U9BMICode> = t.recursion(
    "CMRObservationU7U9BMICode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU7U9BMICodeCodeSnomed>,
                                t.Type<CMRObservationU7U9BMICodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU7U9BMICodeCodeSnomed,
                            CMRObservationU7U9BMICodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU7U9BMICodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU7U9BMICodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface CMRObservationU7U9BMISubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BMISubject: t.Type<CMRObservationU7U9BMISubject> =
    t.recursion("CMRObservationU7U9BMISubject", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU7U9BMIEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BMIEncounter: t.Type<CMRObservationU7U9BMIEncounter> =
    t.recursion("CMRObservationU7U9BMIEncounter", () =>
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU7U9BMIPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BMIPerformer: t.Type<CMRObservationU7U9BMIPerformer> =
    t.recursion("CMRObservationU7U9BMIPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU7U9BMI {
    resourceType: "Observation";
    meta: CMRObservationU7U9BMIMeta;
    status: "final";
    code: CMRObservationU7U9BMICode;
    subject: CMRObservationU7U9BMISubject;
    encounter: CMRObservationU7U9BMIEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU7U9BMIValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7U9BMIPerformer>;
}

const CMRObservationU7U9BMI: t.Type<CMRObservationU7U9BMI> = t.recursion(
    "CMRObservationU7U9BMI",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7U9BMIMeta,
                    status: Literal("final"),
                    code: CMRObservationU7U9BMICode,
                    subject: CMRObservationU7U9BMISubject,
                    encounter: CMRObservationU7U9BMIEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU7U9BMIValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7U9BMIPerformer)
                })
            ])
        )
);

export default CMRObservationU7U9BMI;
