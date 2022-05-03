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

import MRBiometricsIIIIIVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRBiometricsIIIII";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III"

/**
 * Content in other Language.
 */
export interface MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent: t.Type<MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent> =
    t.recursion(
        "MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent",
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
export interface MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent[];
}

export const MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed: t.Type<MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed> =
    t.recursion(
        "MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed",
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
                            MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBiometricsIIICodeCodingDisplay {
    id?: string;
    extension?: MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBiometricsIIICodeCodingDisplay: t.Type<MRObservationBiometricsIIICodeCodingDisplay> =
    t.recursion("MRObservationBiometricsIIICodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBiometricsIIICodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationBiometricsIIIBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationBiometricsIIIBodySiteIdentifikation: t.Type<MRObservationBiometricsIIIBodySiteIdentifikation> =
    t.recursion("MRObservationBiometricsIIIBodySiteIdentifikation", () =>
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
export interface MRObservationBiometricsIIIBodySiteCodingDisplay {
    id?: string;
    extension?: MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed[];
    value?: string;
}

export const MRObservationBiometricsIIIBodySiteCodingDisplay: t.Type<MRObservationBiometricsIIIBodySiteCodingDisplay> =
    t.recursion("MRObservationBiometricsIIIBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBiometricsIIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBiometricsIIICodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRBiometricsIIIIIVS;
    id?: string;
    _display?: MRObservationBiometricsIIICodeCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsIIICodeCoding: t.Type<MRObservationBiometricsIIICodeCoding> =
    t.recursion("MRObservationBiometricsIIICodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRBiometricsIIIIIVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBiometricsIIICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBiometricsIIIValueQuantity {
    value: number;
    unit: "mm";
    system: "http://unitsofmeasure.org";
    code: "mm";
    id?: string;
}

export const MRObservationBiometricsIIIValueQuantity: t.Type<MRObservationBiometricsIIIValueQuantity> =
    t.recursion("MRObservationBiometricsIIIValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm")
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
export interface MRObservationBiometricsIIIBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationBiometricsIIIBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsIIIBodySiteCoding: t.Type<MRObservationBiometricsIIIBodySiteCoding> =
    t.recursion("MRObservationBiometricsIIIBodySiteCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364599001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBiometricsIIIBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationBiometricsIIIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III|1.0.0">;
    id?: string;
}

export const MRObservationBiometricsIIIMeta: t.Type<MRObservationBiometricsIIIMeta> =
    t.recursion("MRObservationBiometricsIIIMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III|1.0.0"
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
export interface MRObservationBiometricsIIICode {
    coding: Array<MRObservationBiometricsIIICodeCoding>;
    id?: string;
}

export const MRObservationBiometricsIIICode: t.Type<MRObservationBiometricsIIICode> =
    t.recursion("MRObservationBiometricsIIICode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsIIICodeCoding)
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
export interface MRObservationBiometricsIIISubject {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIIISubject: t.Type<MRObservationBiometricsIIISubject> =
    t.recursion("MRObservationBiometricsIIISubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationBiometricsIIIEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIIIEncounter: t.Type<MRObservationBiometricsIIIEncounter> =
    t.recursion("MRObservationBiometricsIIIEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationBiometricsIIIPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIIIPerformer: t.Type<MRObservationBiometricsIIIPerformer> =
    t.recursion("MRObservationBiometricsIIIPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
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
export interface MRObservationBiometricsIIIBodySite {
    coding: Array<MRObservationBiometricsIIIBodySiteCoding>;
    id?: string;
    extension?: MRObservationBiometricsIIIBodySiteIdentifikation[];
    text?: string;
}

export const MRObservationBiometricsIIIBodySite: t.Type<MRObservationBiometricsIIIBodySite> =
    t.recursion("MRObservationBiometricsIIIBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsIIIBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MRObservationBiometricsIIIBodySiteIdentifikation),
                    text: SCALARString
                })
            ])
        )
    );

interface MRObservationBiometricsIII {
    resourceType: "Observation";
    meta: MRObservationBiometricsIIIMeta;
    status: "final";
    code: MRObservationBiometricsIIICode;
    subject: MRObservationBiometricsIIISubject;
    encounter: MRObservationBiometricsIIIEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationBiometricsIIIValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBiometricsIIIPerformer>;
    bodySite?: MRObservationBiometricsIIIBodySite;
}

const MRObservationBiometricsIII: t.Type<MRObservationBiometricsIII> = t.recursion(
    "MRObservationBiometricsIII",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBiometricsIIIMeta,
                    status: Literal("final"),
                    code: MRObservationBiometricsIIICode,
                    subject: MRObservationBiometricsIIISubject,
                    encounter: MRObservationBiometricsIIIEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBiometricsIIIValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBiometricsIIIPerformer),
                    bodySite: MRObservationBiometricsIIIBodySite
                })
            ])
        )
);

export default MRObservationBiometricsIII;
