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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery"

/**
 * Content in other Language.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
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
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
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
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoincDisplay {
    id?: string;
    extension?: MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoincDisplay: t.Type<MRObservationpHValueUmbilicalArteryCodeLoincDisplay> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationpHValueUmbilicalArteryCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,370130000=702700007,370132008=30766002,704327008=703430008";
    id?: string;
    _display?: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeSnomedCT: t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCT> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,246093002=89177007,370130000=702700007,370132008=30766002,704327008=703430008"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationpHValueUmbilicalArteryCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationpHValueUmbilicalArteryCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "28646-8";
    id?: string;
    _display?: MRObservationpHValueUmbilicalArteryCodeLoincDisplay;
    display?: string;
}

export const MRObservationpHValueUmbilicalArteryCodeLoinc: t.Type<MRObservationpHValueUmbilicalArteryCodeLoinc> =
    t.recursion("MRObservationpHValueUmbilicalArteryCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("28646-8")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationpHValueUmbilicalArteryCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationpHValueUmbilicalArteryValueQuantity {
    value: number;
    unit: "(pH)";
    system: "http://unitsofmeasure.org";
    code: "[pH]";
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryValueQuantity: t.Type<MRObservationpHValueUmbilicalArteryValueQuantity> =
    t.recursion("MRObservationpHValueUmbilicalArteryValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("(pH)"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("[pH]")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationpHValueUmbilicalArteryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.1.0">;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryMeta: t.Type<MRObservationpHValueUmbilicalArteryMeta> =
    t.recursion("MRObservationpHValueUmbilicalArteryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.1.0"
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
export interface MRObservationpHValueUmbilicalArteryCode {
    coding: Array<
        | MRObservationpHValueUmbilicalArteryCodeSnomedCT
        | MRObservationpHValueUmbilicalArteryCodeLoinc
    >;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryCode: t.Type<MRObservationpHValueUmbilicalArteryCode> =
    t.recursion("MRObservationpHValueUmbilicalArteryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationpHValueUmbilicalArteryCodeSnomedCT>,
                                t.Type<MRObservationpHValueUmbilicalArteryCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationpHValueUmbilicalArteryCodeSnomedCT,
                            MRObservationpHValueUmbilicalArteryCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationpHValueUmbilicalArteryCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationpHValueUmbilicalArteryCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
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
export interface MRObservationpHValueUmbilicalArterySubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArterySubjectReference: t.Type<MRObservationpHValueUmbilicalArterySubjectReference> =
    t.recursion("MRObservationpHValueUmbilicalArterySubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationpHValueUmbilicalArteryEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryEncounterReference: t.Type<MRObservationpHValueUmbilicalArteryEncounterReference> =
    t.recursion("MRObservationpHValueUmbilicalArteryEncounterReference", () =>
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
export interface MRObservationpHValueUmbilicalArteryPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationpHValueUmbilicalArteryPerformerReference: t.Type<MRObservationpHValueUmbilicalArteryPerformerReference> =
    t.recursion("MRObservationpHValueUmbilicalArteryPerformerReference", () =>
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

interface MRObservationpHValueUmbilicalArtery {
    resourceType: "Observation";
    meta: MRObservationpHValueUmbilicalArteryMeta;
    status: "final";
    code: MRObservationpHValueUmbilicalArteryCode;
    subject: MRObservationpHValueUmbilicalArterySubjectReference;
    encounter: MRObservationpHValueUmbilicalArteryEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationpHValueUmbilicalArteryValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationpHValueUmbilicalArteryPerformerReference>;
}

const MRObservationpHValueUmbilicalArtery: t.Type<MRObservationpHValueUmbilicalArtery> =
    t.recursion("MRObservationpHValueUmbilicalArtery", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationpHValueUmbilicalArteryMeta,
                    status: Literal("final"),
                    code: MRObservationpHValueUmbilicalArteryCode,
                    subject: MRObservationpHValueUmbilicalArterySubjectReference,
                    encounter: MRObservationpHValueUmbilicalArteryEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationpHValueUmbilicalArteryValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationpHValueUmbilicalArteryPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationpHValueUmbilicalArtery;
