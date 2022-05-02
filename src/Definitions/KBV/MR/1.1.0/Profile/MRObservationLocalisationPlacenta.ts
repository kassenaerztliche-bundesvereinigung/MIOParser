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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import MRLocalisationPlacentaVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRLocalisationPlacenta";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta"

/**
 * Content in other Language.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
 * Content in other Language.
 */
export interface MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Lokalisation/Struktur der Plazenta";
    id?: string;
}

export const MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Lokalisation/Struktur der Plazenta")
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
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Angaben zum Fötus/Kind")
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
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                            MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent[];
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                            MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationLocalisationPlacentaCodeCodingDisplay {
    id?: string;
    extension?: MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationLocalisationPlacentaCodeCodingDisplay: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplay> =
    t.recursion("MRObservationLocalisationPlacentaCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRLocalisationPlacentaVS;
    id?: string;
    _display?: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCoding: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCoding> =
    t.recursion("MRObservationLocalisationPlacentaValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRLocalisationPlacentaVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationLocalisationPlacentaBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaBodySiteIdentifikation: t.Type<MRObservationLocalisationPlacentaBodySiteIdentifikation> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteIdentifikation", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplay {
    id?: string;
    extension?: MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed[];
    value?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplay: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplay> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationLocalisationPlacentaCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "169952004";
    id?: string;
    _display?: MRObservationLocalisationPlacentaCodeCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaCodeCoding: t.Type<MRObservationLocalisationPlacentaCodeCoding> =
    t.recursion("MRObservationLocalisationPlacentaCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("169952004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationLocalisationPlacentaCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConcept {
    coding: Array<MRObservationLocalisationPlacentaValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConcept: t.Type<MRObservationLocalisationPlacentaValueCodeableConcept> =
    t.recursion("MRObservationLocalisationPlacentaValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationLocalisationPlacentaValueCodeableConceptCoding
                    )
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
export interface MRObservationLocalisationPlacentaBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364599001";
    id?: string;
    _display?: MRObservationLocalisationPlacentaBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCoding: t.Type<MRObservationLocalisationPlacentaBodySiteCoding> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("364599001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationLocalisationPlacentaBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationLocalisationPlacentaMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.1.0">;
    id?: string;
}

export const MRObservationLocalisationPlacentaMeta: t.Type<MRObservationLocalisationPlacentaMeta> =
    t.recursion("MRObservationLocalisationPlacentaMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.1.0"
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
export interface MRObservationLocalisationPlacentaCode {
    coding: Array<MRObservationLocalisationPlacentaCodeCoding>;
    id?: string;
}

export const MRObservationLocalisationPlacentaCode: t.Type<MRObservationLocalisationPlacentaCode> =
    t.recursion("MRObservationLocalisationPlacentaCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationLocalisationPlacentaCodeCoding)
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
export interface MRObservationLocalisationPlacentaSubject {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaSubject: t.Type<MRObservationLocalisationPlacentaSubject> =
    t.recursion("MRObservationLocalisationPlacentaSubject", () =>
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
export interface MRObservationLocalisationPlacentaEncounter {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaEncounter: t.Type<MRObservationLocalisationPlacentaEncounter> =
    t.recursion("MRObservationLocalisationPlacentaEncounter", () =>
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
export interface MRObservationLocalisationPlacentaPerformer {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaPerformer: t.Type<MRObservationLocalisationPlacentaPerformer> =
    t.recursion("MRObservationLocalisationPlacentaPerformer", () =>
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

/**
 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
 */
export interface MRObservationLocalisationPlacentaBodySite {
    coding: Array<MRObservationLocalisationPlacentaBodySiteCoding>;
    id?: string;
    extension?: MRObservationLocalisationPlacentaBodySiteIdentifikation[];
    text?: string;
}

export const MRObservationLocalisationPlacentaBodySite: t.Type<MRObservationLocalisationPlacentaBodySite> =
    t.recursion("MRObservationLocalisationPlacentaBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationLocalisationPlacentaBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationLocalisationPlacentaBodySiteIdentifikation
                    ),
                    text: SCALARString
                })
            ])
        )
    );

interface MRObservationLocalisationPlacenta {
    resourceType: "Observation";
    meta: MRObservationLocalisationPlacentaMeta;
    status: "final";
    code: MRObservationLocalisationPlacentaCode;
    subject: MRObservationLocalisationPlacentaSubject;
    encounter: MRObservationLocalisationPlacentaEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationLocalisationPlacentaValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationLocalisationPlacentaPerformer>;
    note?: Array<Annotation>;
    bodySite?: MRObservationLocalisationPlacentaBodySite;
}

const MRObservationLocalisationPlacenta: t.Type<MRObservationLocalisationPlacenta> =
    t.recursion("MRObservationLocalisationPlacenta", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationLocalisationPlacentaMeta,
                    status: Literal("final"),
                    code: MRObservationLocalisationPlacentaCode,
                    subject: MRObservationLocalisationPlacentaSubject,
                    encounter: MRObservationLocalisationPlacentaEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        MRObservationLocalisationPlacentaValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationLocalisationPlacentaPerformer),
                    note: MaxArray(1, Annotation),
                    bodySite: MRObservationLocalisationPlacentaBodySite
                })
            ])
        )
    );

export default MRObservationLocalisationPlacenta;
