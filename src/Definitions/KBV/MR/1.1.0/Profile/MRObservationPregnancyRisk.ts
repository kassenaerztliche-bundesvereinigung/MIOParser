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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk"

/**
 * Content in other Language.
 */
export interface MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftsrisiko";
    id?: string;
}

export const MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaftsrisiko")
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
export interface MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationPregnancyRiskCodeCodingDisplay {
    id?: string;
    extension?: MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationPregnancyRiskCodeCodingDisplay: t.Type<MRObservationPregnancyRiskCodeCodingDisplay> =
    t.recursion("MRObservationPregnancyRiskCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPregnancyRiskCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationPregnancyRiskCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "47200007";
    id?: string;
    _display?: MRObservationPregnancyRiskCodeCodingDisplay;
    display?: string;
}

export const MRObservationPregnancyRiskCodeCoding: t.Type<MRObservationPregnancyRiskCodeCoding> =
    t.recursion("MRObservationPregnancyRiskCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("47200007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPregnancyRiskCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPregnancyRiskMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk|1.1.0">;
    id?: string;
}

export const MRObservationPregnancyRiskMeta: t.Type<MRObservationPregnancyRiskMeta> =
    t.recursion("MRObservationPregnancyRiskMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk|1.1.0"
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
export interface MRObservationPregnancyRiskCode {
    coding: Array<MRObservationPregnancyRiskCodeCoding>;
    id?: string;
}

export const MRObservationPregnancyRiskCode: t.Type<MRObservationPregnancyRiskCode> =
    t.recursion("MRObservationPregnancyRiskCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPregnancyRiskCodeCoding)
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
export interface MRObservationPregnancyRiskSubject {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyRiskSubject: t.Type<MRObservationPregnancyRiskSubject> =
    t.recursion("MRObservationPregnancyRiskSubject", () =>
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
export interface MRObservationPregnancyRiskEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyRiskEncounter: t.Type<MRObservationPregnancyRiskEncounter> =
    t.recursion("MRObservationPregnancyRiskEncounter", () =>
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
export interface MRObservationPregnancyRiskPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyRiskPerformer: t.Type<MRObservationPregnancyRiskPerformer> =
    t.recursion("MRObservationPregnancyRiskPerformer", () =>
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

interface MRObservationPregnancyRisk {
    resourceType: "Observation";
    meta: MRObservationPregnancyRiskMeta;
    status: "final";
    code: MRObservationPregnancyRiskCode;
    subject: MRObservationPregnancyRiskSubject;
    encounter: MRObservationPregnancyRiskEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPregnancyRiskPerformer>;
}

const MRObservationPregnancyRisk: t.Type<MRObservationPregnancyRisk> = t.recursion(
    "MRObservationPregnancyRisk",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPregnancyRiskMeta,
                    status: Literal("final"),
                    code: MRObservationPregnancyRiskCode,
                    subject: MRObservationPregnancyRiskSubject,
                    encounter: MRObservationPregnancyRiskEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPregnancyRiskPerformer)
                })
            ])
        )
);

export default MRObservationPregnancyRisk;
