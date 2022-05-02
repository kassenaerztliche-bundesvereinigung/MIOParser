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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed"

/**
 * Content in other Language.
 */
export interface MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "HIV-Antikörpertest durchgeführt";
    id?: string;
}

export const MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("HIV-Antikörpertest durchgeführt")
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
export interface MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHIVTestPerformedCodeCodingDisplay {
    id?: string;
    extension?: MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationHIVTestPerformedCodeCodingDisplay: t.Type<MRObservationHIVTestPerformedCodeCodingDisplay> =
    t.recursion("MRObservationHIVTestPerformedCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHIVTestPerformedCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHIVTestPerformedCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "171121004";
    id?: string;
    _display?: MRObservationHIVTestPerformedCodeCodingDisplay;
    display?: string;
}

export const MRObservationHIVTestPerformedCodeCoding: t.Type<MRObservationHIVTestPerformedCodeCoding> =
    t.recursion("MRObservationHIVTestPerformedCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("171121004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHIVTestPerformedCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationHIVTestPerformedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed|1.1.0">;
    id?: string;
}

export const MRObservationHIVTestPerformedMeta: t.Type<MRObservationHIVTestPerformedMeta> =
    t.recursion("MRObservationHIVTestPerformedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed|1.1.0"
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
export interface MRObservationHIVTestPerformedCode {
    coding: Array<MRObservationHIVTestPerformedCodeCoding>;
    id?: string;
}

export const MRObservationHIVTestPerformedCode: t.Type<MRObservationHIVTestPerformedCode> =
    t.recursion("MRObservationHIVTestPerformedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHIVTestPerformedCodeCoding)
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
export interface MRObservationHIVTestPerformedSubject {
    reference: string;
    id?: string;
}

export const MRObservationHIVTestPerformedSubject: t.Type<MRObservationHIVTestPerformedSubject> =
    t.recursion("MRObservationHIVTestPerformedSubject", () =>
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
export interface MRObservationHIVTestPerformedEncounter {
    reference: string;
    id?: string;
}

export const MRObservationHIVTestPerformedEncounter: t.Type<MRObservationHIVTestPerformedEncounter> =
    t.recursion("MRObservationHIVTestPerformedEncounter", () =>
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
export interface MRObservationHIVTestPerformedPerformer {
    reference: string;
    id?: string;
}

export const MRObservationHIVTestPerformedPerformer: t.Type<MRObservationHIVTestPerformedPerformer> =
    t.recursion("MRObservationHIVTestPerformedPerformer", () =>
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

interface MRObservationHIVTestPerformed {
    resourceType: "Observation";
    meta: MRObservationHIVTestPerformedMeta;
    status: "final";
    code: MRObservationHIVTestPerformedCode;
    subject: MRObservationHIVTestPerformedSubject;
    encounter: MRObservationHIVTestPerformedEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHIVTestPerformedPerformer>;
}

const MRObservationHIVTestPerformed: t.Type<MRObservationHIVTestPerformed> = t.recursion(
    "MRObservationHIVTestPerformed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHIVTestPerformedMeta,
                    status: Literal("final"),
                    code: MRObservationHIVTestPerformedCode,
                    subject: MRObservationHIVTestPerformedSubject,
                    encounter: MRObservationHIVTestPerformedEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHIVTestPerformedPerformer)
                })
            ])
        )
);

export default MRObservationHIVTestPerformed;
