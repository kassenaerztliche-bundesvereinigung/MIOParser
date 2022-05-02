import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3"

/**
 * Content in other Language.
 */
export interface MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kind laut U3 behandlungsbedürftig";
    id?: string;
}

export const MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kind laut U3 behandlungsbedürftig")
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
export interface MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationNeedOfTreatmentU3CodeCodingDisplay {
    id?: string;
    extension?: MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationNeedOfTreatmentU3CodeCodingDisplay: t.Type<MRObservationNeedOfTreatmentU3CodeCodingDisplay> =
    t.recursion("MRObservationNeedOfTreatmentU3CodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationNeedOfTreatmentU3CodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationNeedOfTreatmentU3CodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "395077000";
    id?: string;
    _display?: MRObservationNeedOfTreatmentU3CodeCodingDisplay;
    display?: string;
}

export const MRObservationNeedOfTreatmentU3CodeCoding: t.Type<MRObservationNeedOfTreatmentU3CodeCoding> =
    t.recursion("MRObservationNeedOfTreatmentU3CodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("395077000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationNeedOfTreatmentU3CodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationNeedOfTreatmentU3Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3|1.1.0">;
    id?: string;
}

export const MRObservationNeedOfTreatmentU3Meta: t.Type<MRObservationNeedOfTreatmentU3Meta> =
    t.recursion("MRObservationNeedOfTreatmentU3Meta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3|1.1.0"
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
export interface MRObservationNeedOfTreatmentU3Code {
    coding: Array<MRObservationNeedOfTreatmentU3CodeCoding>;
    id?: string;
}

export const MRObservationNeedOfTreatmentU3Code: t.Type<MRObservationNeedOfTreatmentU3Code> =
    t.recursion("MRObservationNeedOfTreatmentU3Code", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationNeedOfTreatmentU3CodeCoding)
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
export interface MRObservationNeedOfTreatmentU3Subject {
    reference: string;
    id?: string;
}

export const MRObservationNeedOfTreatmentU3Subject: t.Type<MRObservationNeedOfTreatmentU3Subject> =
    t.recursion("MRObservationNeedOfTreatmentU3Subject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationNeedOfTreatmentU3Encounter {
    reference: string;
    id?: string;
}

export const MRObservationNeedOfTreatmentU3Encounter: t.Type<MRObservationNeedOfTreatmentU3Encounter> =
    t.recursion("MRObservationNeedOfTreatmentU3Encounter", () =>
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
export interface MRObservationNeedOfTreatmentU3Performer {
    reference: string;
    id?: string;
}

export const MRObservationNeedOfTreatmentU3Performer: t.Type<MRObservationNeedOfTreatmentU3Performer> =
    t.recursion("MRObservationNeedOfTreatmentU3Performer", () =>
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

interface MRObservationNeedOfTreatmentU3 {
    resourceType: "Observation";
    meta: MRObservationNeedOfTreatmentU3Meta;
    status: "final";
    code: MRObservationNeedOfTreatmentU3Code;
    subject: MRObservationNeedOfTreatmentU3Subject;
    encounter: MRObservationNeedOfTreatmentU3Encounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationNeedOfTreatmentU3Performer>;
}

const MRObservationNeedOfTreatmentU3: t.Type<MRObservationNeedOfTreatmentU3> =
    t.recursion("MRObservationNeedOfTreatmentU3", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationNeedOfTreatmentU3Meta,
                    status: Literal("final"),
                    code: MRObservationNeedOfTreatmentU3Code,
                    subject: MRObservationNeedOfTreatmentU3Subject,
                    encounter: MRObservationNeedOfTreatmentU3Encounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationNeedOfTreatmentU3Performer)
                })
            ])
        )
    );

export default MRObservationNeedOfTreatmentU3;
