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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height"

/**
 * Content in other Language.
 */
export interface MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergröße";
    id?: string;
}

export const MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergröße")
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
export interface MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergröße";
    id?: string;
}

export const MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergröße")
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
export interface MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                        MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationHeightCodeCodeSnomedDisplay: t.Type<MRObservationHeightCodeCodeSnomedDisplay> =
    t.recursion("MRObservationHeightCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHeightCodeCodeLoincDisplay {
    id?: string;
    extension?: MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationHeightCodeCodeLoincDisplay: t.Type<MRObservationHeightCodeCodeLoincDisplay> =
    t.recursion("MRObservationHeightCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "248334005";
    id?: string;
    _display?: MRObservationHeightCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationHeightCodeCodeSnomed: t.Type<MRObservationHeightCodeCodeSnomed> =
    t.recursion("MRObservationHeightCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("248334005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "8302-2";
    id?: string;
    _display?: MRObservationHeightCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationHeightCodeCodeLoinc: t.Type<MRObservationHeightCodeCodeLoinc> =
    t.recursion("MRObservationHeightCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("8302-2")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationHeightValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const MRObservationHeightValueQuantity: t.Type<MRObservationHeightValueQuantity> =
    t.recursion("MRObservationHeightValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("cm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("cm")
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
export interface MRObservationHeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.1.0">;
    id?: string;
}

export const MRObservationHeightMeta: t.Type<MRObservationHeightMeta> = t.recursion(
    "MRObservationHeightMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.1.0"
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
export interface MRObservationHeightCode {
    coding: Array<MRObservationHeightCodeCodeSnomed | MRObservationHeightCodeCodeLoinc>;
    id?: string;
}

export const MRObservationHeightCode: t.Type<MRObservationHeightCode> = t.recursion(
    "MRObservationHeightCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationHeightCodeCodeSnomed>,
                                t.Type<MRObservationHeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationHeightCodeCodeSnomed,
                            MRObservationHeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationHeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationHeightCodeCodeLoinc,
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
export interface MRObservationHeightSubject {
    reference: string;
    id?: string;
}

export const MRObservationHeightSubject: t.Type<MRObservationHeightSubject> = t.recursion(
    "MRObservationHeightSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRObservationHeightEncounter {
    reference: string;
    id?: string;
}

export const MRObservationHeightEncounter: t.Type<MRObservationHeightEncounter> =
    t.recursion("MRObservationHeightEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationHeightPerformer {
    reference: string;
    id?: string;
}

export const MRObservationHeightPerformer: t.Type<MRObservationHeightPerformer> =
    t.recursion("MRObservationHeightPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationHeight {
    resourceType: "Observation";
    meta: MRObservationHeightMeta;
    status: "final";
    code: MRObservationHeightCode;
    subject: MRObservationHeightSubject;
    encounter: MRObservationHeightEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationHeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeightPerformer>;
}

const MRObservationHeight: t.Type<MRObservationHeight> = t.recursion(
    "MRObservationHeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeightMeta,
                    status: Literal("final"),
                    code: MRObservationHeightCode,
                    subject: MRObservationHeightSubject,
                    encounter: MRObservationHeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationHeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHeightPerformer)
                })
            ])
        )
);

export default MRObservationHeight;
