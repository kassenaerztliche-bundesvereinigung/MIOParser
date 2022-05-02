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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal"

/**
 * Content in other Language.
 */
export interface MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gynäkologischer Befund normal";
    id?: string;
}

export const MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Gynäkologischer Befund normal")
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
export interface MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationGynecologicalFindingNormalCodeCodingDisplay {
    id?: string;
    extension?: MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationGynecologicalFindingNormalCodeCodingDisplay: t.Type<MRObservationGynecologicalFindingNormalCodeCodingDisplay> =
    t.recursion("MRObservationGynecologicalFindingNormalCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationGynecologicalFindingNormalCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationGynecologicalFindingNormalCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "1157297002";
    id?: string;
    _display?: MRObservationGynecologicalFindingNormalCodeCodingDisplay;
    display?: string;
}

export const MRObservationGynecologicalFindingNormalCodeCoding: t.Type<MRObservationGynecologicalFindingNormalCodeCoding> =
    t.recursion("MRObservationGynecologicalFindingNormalCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("1157297002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationGynecologicalFindingNormalCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationGynecologicalFindingNormalMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.1.0">;
    id?: string;
}

export const MRObservationGynecologicalFindingNormalMeta: t.Type<MRObservationGynecologicalFindingNormalMeta> =
    t.recursion("MRObservationGynecologicalFindingNormalMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.1.0"
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
export interface MRObservationGynecologicalFindingNormalCode {
    coding: Array<MRObservationGynecologicalFindingNormalCodeCoding>;
    id?: string;
}

export const MRObservationGynecologicalFindingNormalCode: t.Type<MRObservationGynecologicalFindingNormalCode> =
    t.recursion("MRObservationGynecologicalFindingNormalCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationGynecologicalFindingNormalCodeCoding
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
export interface MRObservationGynecologicalFindingNormalSubject {
    reference: string;
    id?: string;
}

export const MRObservationGynecologicalFindingNormalSubject: t.Type<MRObservationGynecologicalFindingNormalSubject> =
    t.recursion("MRObservationGynecologicalFindingNormalSubject", () =>
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
export interface MRObservationGynecologicalFindingNormalEncounter {
    reference: string;
    id?: string;
}

export const MRObservationGynecologicalFindingNormalEncounter: t.Type<MRObservationGynecologicalFindingNormalEncounter> =
    t.recursion("MRObservationGynecologicalFindingNormalEncounter", () =>
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
export interface MRObservationGynecologicalFindingNormalPerformer {
    reference: string;
    id?: string;
}

export const MRObservationGynecologicalFindingNormalPerformer: t.Type<MRObservationGynecologicalFindingNormalPerformer> =
    t.recursion("MRObservationGynecologicalFindingNormalPerformer", () =>
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

interface MRObservationGynecologicalFindingNormal {
    resourceType: "Observation";
    meta: MRObservationGynecologicalFindingNormalMeta;
    status: "final";
    code: MRObservationGynecologicalFindingNormalCode;
    subject: MRObservationGynecologicalFindingNormalSubject;
    encounter: MRObservationGynecologicalFindingNormalEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationGynecologicalFindingNormalPerformer>;
}

const MRObservationGynecologicalFindingNormal: t.Type<MRObservationGynecologicalFindingNormal> =
    t.recursion("MRObservationGynecologicalFindingNormal", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationGynecologicalFindingNormalMeta,
                    status: Literal("final"),
                    code: MRObservationGynecologicalFindingNormalCode,
                    subject: MRObservationGynecologicalFindingNormalSubject,
                    encounter: MRObservationGynecologicalFindingNormalEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationGynecologicalFindingNormalPerformer
                    )
                })
            ])
        )
    );

export default MRObservationGynecologicalFindingNormal;
