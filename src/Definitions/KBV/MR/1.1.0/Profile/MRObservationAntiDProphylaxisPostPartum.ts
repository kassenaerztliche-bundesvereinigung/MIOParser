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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum"

/**
 * Content in other Language.
 */
export interface MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anti-D-Prophylaxe";
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Anti-D-Prophylaxe")
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
export interface MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay {
    id?: string;
    extension?: MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay: t.Type<MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationAntiDProphylaxisPostPartumCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationAntiDProphylaxisPostPartumCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "170459006";
    id?: string;
    _display?: MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay;
    display?: string;
}

export const MRObservationAntiDProphylaxisPostPartumCodeCoding: t.Type<MRObservationAntiDProphylaxisPostPartumCodeCoding> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("170459006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationAntiDProphylaxisPostPartumCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationAntiDProphylaxisPostPartumMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.1.0">;
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumMeta: t.Type<MRObservationAntiDProphylaxisPostPartumMeta> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.1.0"
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
export interface MRObservationAntiDProphylaxisPostPartumCode {
    coding: Array<MRObservationAntiDProphylaxisPostPartumCodeCoding>;
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumCode: t.Type<MRObservationAntiDProphylaxisPostPartumCode> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationAntiDProphylaxisPostPartumCodeCoding
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
export interface MRObservationAntiDProphylaxisPostPartumSubject {
    reference: string;
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumSubject: t.Type<MRObservationAntiDProphylaxisPostPartumSubject> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumSubject", () =>
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
export interface MRObservationAntiDProphylaxisPostPartumEncounter {
    reference: string;
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumEncounter: t.Type<MRObservationAntiDProphylaxisPostPartumEncounter> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumEncounter", () =>
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
export interface MRObservationAntiDProphylaxisPostPartumPerformer {
    reference: string;
    id?: string;
}

export const MRObservationAntiDProphylaxisPostPartumPerformer: t.Type<MRObservationAntiDProphylaxisPostPartumPerformer> =
    t.recursion("MRObservationAntiDProphylaxisPostPartumPerformer", () =>
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

interface MRObservationAntiDProphylaxisPostPartum {
    resourceType: "Observation";
    meta: MRObservationAntiDProphylaxisPostPartumMeta;
    status: "final";
    code: MRObservationAntiDProphylaxisPostPartumCode;
    subject: MRObservationAntiDProphylaxisPostPartumSubject;
    encounter: MRObservationAntiDProphylaxisPostPartumEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationAntiDProphylaxisPostPartumPerformer>;
}

const MRObservationAntiDProphylaxisPostPartum: t.Type<MRObservationAntiDProphylaxisPostPartum> =
    t.recursion("MRObservationAntiDProphylaxisPostPartum", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationAntiDProphylaxisPostPartumMeta,
                    status: Literal("final"),
                    code: MRObservationAntiDProphylaxisPostPartumCode,
                    subject: MRObservationAntiDProphylaxisPostPartumSubject,
                    encounter: MRObservationAntiDProphylaxisPostPartumEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationAntiDProphylaxisPostPartumPerformer
                    )
                })
            ])
        )
    );

export default MRObservationAntiDProphylaxisPostPartum;
