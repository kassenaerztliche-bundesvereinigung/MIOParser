import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception"

/**
 * Content in other Language.
 */
export interface MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Konzeptionstermin";
    id?: string;
}

export const MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Konzeptionstermin")
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
export interface MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationDateOfConceptionCodeCodingDisplay {
    id?: string;
    extension?: MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationDateOfConceptionCodeCodingDisplay: t.Type<MRObservationDateOfConceptionCodeCodingDisplay> =
    t.recursion("MRObservationDateOfConceptionCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationDateOfConceptionCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationDateOfConceptionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "248986005";
    id?: string;
    _display?: MRObservationDateOfConceptionCodeCodingDisplay;
    display?: string;
}

export const MRObservationDateOfConceptionCodeCoding: t.Type<MRObservationDateOfConceptionCodeCoding> =
    t.recursion("MRObservationDateOfConceptionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("248986005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDateOfConceptionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationDateOfConceptionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception|1.1.0">;
    id?: string;
}

export const MRObservationDateOfConceptionMeta: t.Type<MRObservationDateOfConceptionMeta> =
    t.recursion("MRObservationDateOfConceptionMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception|1.1.0"
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
export interface MRObservationDateOfConceptionCode {
    coding: Array<MRObservationDateOfConceptionCodeCoding>;
    id?: string;
}

export const MRObservationDateOfConceptionCode: t.Type<MRObservationDateOfConceptionCode> =
    t.recursion("MRObservationDateOfConceptionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationDateOfConceptionCodeCoding)
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
export interface MRObservationDateOfConceptionSubject {
    reference: string;
    id?: string;
}

export const MRObservationDateOfConceptionSubject: t.Type<MRObservationDateOfConceptionSubject> =
    t.recursion("MRObservationDateOfConceptionSubject", () =>
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
export interface MRObservationDateOfConceptionEncounter {
    reference: string;
    id?: string;
}

export const MRObservationDateOfConceptionEncounter: t.Type<MRObservationDateOfConceptionEncounter> =
    t.recursion("MRObservationDateOfConceptionEncounter", () =>
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
export interface MRObservationDateOfConceptionPerformer {
    reference: string;
    id?: string;
}

export const MRObservationDateOfConceptionPerformer: t.Type<MRObservationDateOfConceptionPerformer> =
    t.recursion("MRObservationDateOfConceptionPerformer", () =>
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

interface MRObservationDateOfConception {
    resourceType: "Observation";
    meta: MRObservationDateOfConceptionMeta;
    status: "final";
    code: MRObservationDateOfConceptionCode;
    subject: MRObservationDateOfConceptionSubject;
    encounter: MRObservationDateOfConceptionEncounter;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationDateOfConceptionPerformer>;
}

const MRObservationDateOfConception: t.Type<MRObservationDateOfConception> = t.recursion(
    "MRObservationDateOfConception",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationDateOfConceptionMeta,
                    status: Literal("final"),
                    code: MRObservationDateOfConceptionCode,
                    subject: MRObservationDateOfConceptionSubject,
                    encounter: MRObservationDateOfConceptionEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationDateOfConceptionPerformer)
                })
            ])
        )
);

export default MRObservationDateOfConception;
