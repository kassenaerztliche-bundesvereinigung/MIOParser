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

import MRFindingsRequiredControlVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRFindingsRequiredControl";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control"

/**
 * Content in other Language.
 */
export interface MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent[];
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                            MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationFindingsRequiredControlCodeCodingDisplay {
    id?: string;
    extension?: MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationFindingsRequiredControlCodeCodingDisplay: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplay> =
    t.recursion("MRObservationFindingsRequiredControlCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationFindingsRequiredControlBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlBodySiteIdentifikation: t.Type<MRObservationFindingsRequiredControlBodySiteIdentifikation> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteIdentifikation", () =>
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
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplay {
    id?: string;
    extension?: MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed[];
    value?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplay: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplay> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationFindingsRequiredControlCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRFindingsRequiredControlVS;
    id?: string;
    _display?: MRObservationFindingsRequiredControlCodeCodingDisplay;
    display?: string;
}

export const MRObservationFindingsRequiredControlCodeCoding: t.Type<MRObservationFindingsRequiredControlCodeCoding> =
    t.recursion("MRObservationFindingsRequiredControlCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRFindingsRequiredControlVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationFindingsRequiredControlCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationFindingsRequiredControlBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364599001";
    id?: string;
    _display?: MRObservationFindingsRequiredControlBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCoding: t.Type<MRObservationFindingsRequiredControlBodySiteCoding> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteCoding", () =>
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
                    _display: MRObservationFindingsRequiredControlBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationFindingsRequiredControlMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.1.0">;
    id?: string;
}

export const MRObservationFindingsRequiredControlMeta: t.Type<MRObservationFindingsRequiredControlMeta> =
    t.recursion("MRObservationFindingsRequiredControlMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.1.0"
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
export interface MRObservationFindingsRequiredControlCode {
    coding: Array<MRObservationFindingsRequiredControlCodeCoding>;
    id?: string;
}

export const MRObservationFindingsRequiredControlCode: t.Type<MRObservationFindingsRequiredControlCode> =
    t.recursion("MRObservationFindingsRequiredControlCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationFindingsRequiredControlCodeCoding
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
export interface MRObservationFindingsRequiredControlSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlSubjectReference: t.Type<MRObservationFindingsRequiredControlSubjectReference> =
    t.recursion("MRObservationFindingsRequiredControlSubjectReference", () =>
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
export interface MRObservationFindingsRequiredControlEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlEncounterReference: t.Type<MRObservationFindingsRequiredControlEncounterReference> =
    t.recursion("MRObservationFindingsRequiredControlEncounterReference", () =>
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
export interface MRObservationFindingsRequiredControlPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlPerformerReference: t.Type<MRObservationFindingsRequiredControlPerformerReference> =
    t.recursion("MRObservationFindingsRequiredControlPerformerReference", () =>
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
export interface MRObservationFindingsRequiredControlBodySite {
    coding: Array<MRObservationFindingsRequiredControlBodySiteCoding>;
    id?: string;
    extension?: MRObservationFindingsRequiredControlBodySiteIdentifikation[];
    text?: string;
}

export const MRObservationFindingsRequiredControlBodySite: t.Type<MRObservationFindingsRequiredControlBodySite> =
    t.recursion("MRObservationFindingsRequiredControlBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationFindingsRequiredControlBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationFindingsRequiredControlBodySiteIdentifikation
                    ),
                    text: SCALARString
                })
            ])
        )
    );

interface MRObservationFindingsRequiredControl {
    resourceType: "Observation";
    meta: MRObservationFindingsRequiredControlMeta;
    status: "final";
    code: MRObservationFindingsRequiredControlCode;
    subject: MRObservationFindingsRequiredControlSubjectReference;
    encounter: MRObservationFindingsRequiredControlEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationFindingsRequiredControlPerformerReference>;
    bodySite?: MRObservationFindingsRequiredControlBodySite;
}

const MRObservationFindingsRequiredControl: t.Type<MRObservationFindingsRequiredControl> =
    t.recursion("MRObservationFindingsRequiredControl", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationFindingsRequiredControlMeta,
                    status: Literal("final"),
                    code: MRObservationFindingsRequiredControlCode,
                    subject: MRObservationFindingsRequiredControlSubjectReference,
                    encounter: MRObservationFindingsRequiredControlEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationFindingsRequiredControlPerformerReference
                    ),
                    bodySite: MRObservationFindingsRequiredControlBodySite
                })
            ])
        )
    );

export default MRObservationFindingsRequiredControl;
