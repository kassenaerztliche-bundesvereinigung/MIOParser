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
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile"

/**
 * Content in other Language.
 */
export interface MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Perzentil";
    id?: string;
}

export const MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Perzentil")
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
export interface MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent[];
}

export const MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                            MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationPercentileCodeCodingDisplay {
    id?: string;
    extension?: MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationPercentileCodeCodingDisplay: t.Type<MRObservationPercentileCodeCodingDisplay> =
    t.recursion("MRObservationPercentileCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPercentileCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationPercentileBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationPercentileBodySiteIdentifikation: t.Type<MRObservationPercentileBodySiteIdentifikation> =
    t.recursion("MRObservationPercentileBodySiteIdentifikation", () =>
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
export interface MRObservationPercentileBodySiteCodingDisplay {
    id?: string;
    extension?: MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed[];
    value?: string;
}

export const MRObservationPercentileBodySiteCodingDisplay: t.Type<MRObservationPercentileBodySiteCodingDisplay> =
    t.recursion("MRObservationPercentileBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPercentileBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationPercentileCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "1157309008";
    id?: string;
    _display?: MRObservationPercentileCodeCodingDisplay;
    display?: string;
}

export const MRObservationPercentileCodeCoding: t.Type<MRObservationPercentileCodeCoding> =
    t.recursion("MRObservationPercentileCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("1157309008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPercentileCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationPercentileValueQuantity {
    value: number;
    unit: "%";
    system: "http://unitsofmeasure.org";
    code: "%";
    id?: string;
}

export const MRObservationPercentileValueQuantity: t.Type<MRObservationPercentileValueQuantity> =
    t.recursion("MRObservationPercentileValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("%"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("%")
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
export interface MRObservationPercentileBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364599001";
    id?: string;
    _display?: MRObservationPercentileBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationPercentileBodySiteCoding: t.Type<MRObservationPercentileBodySiteCoding> =
    t.recursion("MRObservationPercentileBodySiteCoding", () =>
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
                    _display: MRObservationPercentileBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPercentileMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.1.0">;
    id?: string;
}

export const MRObservationPercentileMeta: t.Type<MRObservationPercentileMeta> =
    t.recursion("MRObservationPercentileMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.1.0"
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
export interface MRObservationPercentileCode {
    coding: Array<MRObservationPercentileCodeCoding>;
    id?: string;
}

export const MRObservationPercentileCode: t.Type<MRObservationPercentileCode> =
    t.recursion("MRObservationPercentileCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPercentileCodeCoding)
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
export interface MRObservationPercentileSubject {
    reference: string;
    id?: string;
}

export const MRObservationPercentileSubject: t.Type<MRObservationPercentileSubject> =
    t.recursion("MRObservationPercentileSubject", () =>
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
export interface MRObservationPercentileEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPercentileEncounter: t.Type<MRObservationPercentileEncounter> =
    t.recursion("MRObservationPercentileEncounter", () =>
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
export interface MRObservationPercentilePerformer {
    reference: string;
    id?: string;
}

export const MRObservationPercentilePerformer: t.Type<MRObservationPercentilePerformer> =
    t.recursion("MRObservationPercentilePerformer", () =>
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
export interface MRObservationPercentileBodySite {
    coding: Array<MRObservationPercentileBodySiteCoding>;
    id?: string;
    extension?: MRObservationPercentileBodySiteIdentifikation[];
    text?: string;
}

export const MRObservationPercentileBodySite: t.Type<MRObservationPercentileBodySite> =
    t.recursion("MRObservationPercentileBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPercentileBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRObservationPercentileBodySiteIdentifikation),
                    text: SCALARString
                })
            ])
        )
    );

/**
 * The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
 */
export interface MRObservationPercentileDerivedFrom {
    reference: string;
    id?: string;
}

export const MRObservationPercentileDerivedFrom: t.Type<MRObservationPercentileDerivedFrom> =
    t.recursion("MRObservationPercentileDerivedFrom", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationPercentile {
    resourceType: "Observation";
    meta: MRObservationPercentileMeta;
    status: ObservationstatusVS;
    code: MRObservationPercentileCode;
    subject: MRObservationPercentileSubject;
    encounter: MRObservationPercentileEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationPercentileValueQuantity;
    derivedFrom: Array<MRObservationPercentileDerivedFrom>;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPercentilePerformer>;
    bodySite?: MRObservationPercentileBodySite;
}

const MRObservationPercentile: t.Type<MRObservationPercentile> = t.recursion(
    "MRObservationPercentile",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPercentileMeta,
                    status: ObservationstatusVS,
                    code: MRObservationPercentileCode,
                    subject: MRObservationPercentileSubject,
                    encounter: MRObservationPercentileEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationPercentileValueQuantity,
                    derivedFrom: MinMaxArray(1, 1, MRObservationPercentileDerivedFrom)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPercentilePerformer),
                    bodySite: MRObservationPercentileBodySite
                })
            ])
        )
);

export default MRObservationPercentile;
