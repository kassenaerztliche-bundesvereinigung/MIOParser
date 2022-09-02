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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action"

/**
 * Content in other Language.
 */
export interface MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Herzaktion";
    id?: string;
}

export const MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Herzaktion")
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
export interface MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent[];
}

export const MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                            MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHeartActionCodeCodingDisplay {
    id?: string;
    extension?: MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationHeartActionCodeCodingDisplay: t.Type<MRObservationHeartActionCodeCodingDisplay> =
    t.recursion("MRObservationHeartActionCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationHeartActionBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationHeartActionBodySiteIdentifikation: t.Type<MRObservationHeartActionBodySiteIdentifikation> =
    t.recursion("MRObservationHeartActionBodySiteIdentifikation", () =>
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
export interface MRObservationHeartActionBodySiteCodingDisplay {
    id?: string;
    extension?: MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed[];
    value?: string;
}

export const MRObservationHeartActionBodySiteCodingDisplay: t.Type<MRObservationHeartActionBodySiteCodingDisplay> =
    t.recursion("MRObservationHeartActionBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeartActionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "249045009";
    id?: string;
    _display?: MRObservationHeartActionCodeCodingDisplay;
    display?: string;
}

export const MRObservationHeartActionCodeCoding: t.Type<MRObservationHeartActionCodeCoding> =
    t.recursion("MRObservationHeartActionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("249045009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeartActionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeartActionBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364599001";
    id?: string;
    _display?: MRObservationHeartActionBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationHeartActionBodySiteCoding: t.Type<MRObservationHeartActionBodySiteCoding> =
    t.recursion("MRObservationHeartActionBodySiteCoding", () =>
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
                    _display: MRObservationHeartActionBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationHeartActionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.1.0">;
    id?: string;
}

export const MRObservationHeartActionMeta: t.Type<MRObservationHeartActionMeta> =
    t.recursion("MRObservationHeartActionMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.1.0"
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
export interface MRObservationHeartActionCode {
    coding: Array<MRObservationHeartActionCodeCoding>;
    id?: string;
}

export const MRObservationHeartActionCode: t.Type<MRObservationHeartActionCode> =
    t.recursion("MRObservationHeartActionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartActionCodeCoding)
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
export interface MRObservationHeartActionSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionSubjectReference: t.Type<MRObservationHeartActionSubjectReference> =
    t.recursion("MRObservationHeartActionSubjectReference", () =>
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
export interface MRObservationHeartActionEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionEncounterReference: t.Type<MRObservationHeartActionEncounterReference> =
    t.recursion("MRObservationHeartActionEncounterReference", () =>
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
export interface MRObservationHeartActionPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionPerformerReference: t.Type<MRObservationHeartActionPerformerReference> =
    t.recursion("MRObservationHeartActionPerformerReference", () =>
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
export interface MRObservationHeartActionBodySite {
    coding: Array<MRObservationHeartActionBodySiteCoding>;
    id?: string;
    extension?: MRObservationHeartActionBodySiteIdentifikation[];
    text?: string;
}

export const MRObservationHeartActionBodySite: t.Type<MRObservationHeartActionBodySite> =
    t.recursion("MRObservationHeartActionBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartActionBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRObservationHeartActionBodySiteIdentifikation),
                    text: SCALARString
                })
            ])
        )
    );

interface MRObservationHeartAction {
    resourceType: "Observation";
    meta: MRObservationHeartActionMeta;
    status: "final";
    code: MRObservationHeartActionCode;
    subject: MRObservationHeartActionSubjectReference;
    encounter: MRObservationHeartActionEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeartActionPerformerReference>;
    bodySite?: MRObservationHeartActionBodySite;
}

const MRObservationHeartAction: t.Type<MRObservationHeartAction> = t.recursion(
    "MRObservationHeartAction",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeartActionMeta,
                    status: Literal("final"),
                    code: MRObservationHeartActionCode,
                    subject: MRObservationHeartActionSubjectReference,
                    encounter: MRObservationHeartActionEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHeartActionPerformerReference),
                    bodySite: MRObservationHeartActionBodySite
                })
            ])
        )
);

export default MRObservationHeartAction;
