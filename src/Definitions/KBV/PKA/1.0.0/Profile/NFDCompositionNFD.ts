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
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARId from "../../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Composition_NFD"

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDCompositionNFDSchwangerschaftCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "90767-5";
    display: "Pregnancy summary Document";
    id?: string;
}

export const NFDCompositionNFDSchwangerschaftCodeCoding: t.Type<NFDCompositionNFDSchwangerschaftCodeCoding> =
    t.recursion("NFDCompositionNFDSchwangerschaftCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("90767-5"),
                    display: Literal("Pregnancy summary Document")
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
export interface NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "722446000";
    display: "Allergy record (record artifact)";
    id?: string;
}

export const NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding: t.Type<NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding> =
    t.recursion("NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("722446000"),
                    display: Literal("Allergy record (record artifact)")
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
export interface NFDCompositionNFDImplantatCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "40388003";
    display: "Implant, device (physical object)";
    id?: string;
}

export const NFDCompositionNFDImplantatCodeCoding: t.Type<NFDCompositionNFDImplantatCodeCoding> =
    t.recursion("NFDCompositionNFDImplantatCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("40388003"),
                    display: Literal("Implant, device (physical object)")
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
export interface NFDCompositionNFDKommunikationsstoerungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "386053000:363702006=278919001";
    display: "Evaluation procedure (procedure) : Has focus (attribute) = Communication disorder (disorder)";
    id?: string;
}

export const NFDCompositionNFDKommunikationsstoerungCodeCoding: t.Type<NFDCompositionNFDKommunikationsstoerungCodeCoding> =
    t.recursion("NFDCompositionNFDKommunikationsstoerungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("386053000:363702006=278919001"),
                    display: Literal(
                        "Evaluation procedure (procedure) : Has focus (attribute) = Communication disorder (disorder)"
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
export interface NFDCompositionNFDWeglaufgefaehrdungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "225338004:363702006=248046000";
    display: "Risk assessment (procedure) : Has focus (attribute) = Running away (finding)";
    id?: string;
}

export const NFDCompositionNFDWeglaufgefaehrdungCodeCoding: t.Type<NFDCompositionNFDWeglaufgefaehrdungCodeCoding> =
    t.recursion("NFDCompositionNFDWeglaufgefaehrdungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("225338004:363702006=248046000"),
                    display: Literal(
                        "Risk assessment (procedure) : Has focus (attribute) = Running away (finding)"
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
export interface NFDCompositionNFDSonstigerHinweisCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "866144008";
    display: "Encounter note (record artifact)";
    id?: string;
}

export const NFDCompositionNFDSonstigerHinweisCodeCoding: t.Type<NFDCompositionNFDSonstigerHinweisCodeCoding> =
    t.recursion("NFDCompositionNFDSonstigerHinweisCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("866144008"),
                    display: Literal("Encounter note (record artifact)")
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
export interface NFDCompositionNFDDiagnoseCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "29548-5";
    display: "Diagnosis Narrative";
    id?: string;
}

export const NFDCompositionNFDDiagnoseCodeCoding: t.Type<NFDCompositionNFDDiagnoseCodeCoding> =
    t.recursion("NFDCompositionNFDDiagnoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("29548-5"),
                    display: Literal("Diagnosis Narrative")
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
export interface NFDCompositionNFDProzedurCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "1003640003";
    display: "History of past procedure section (record artifact)";
    id?: string;
}

export const NFDCompositionNFDProzedurCodeCoding: t.Type<NFDCompositionNFDProzedurCodeCoding> =
    t.recursion("NFDCompositionNFDProzedurCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("1003640003"),
                    display: Literal(
                        "History of past procedure section (record artifact)"
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
export interface NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "866145009";
    display: "General patient record note (record artifact)";
    id?: string;
}

export const NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding: t.Type<NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding> =
    t.recursion("NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("866145009"),
                    display: Literal("General patient record note (record artifact)")
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
export interface NFDCompositionNFDMedikationseintraegeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "736378000";
    display: "Medication management plan (record artifact)";
    id?: string;
}

export const NFDCompositionNFDMedikationseintraegeCodeCoding: t.Type<NFDCompositionNFDMedikationseintraegeCodeCoding> =
    t.recursion("NFDCompositionNFDMedikationseintraegeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("736378000"),
                    display: Literal("Medication management plan (record artifact)")
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
export interface NFDCompositionNFDVersicherterEinwilligungCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "57016-8";
    display: "Patient Consent";
    id?: string;
}

export const NFDCompositionNFDVersicherterEinwilligungCodeCoding: t.Type<NFDCompositionNFDVersicherterEinwilligungCodeCoding> =
    t.recursion("NFDCompositionNFDVersicherterEinwilligungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("57016-8"),
                    display: Literal("Patient Consent")
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
export interface NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding {
    code: "behandelnde_person_einrichtung";
    display: "Behandelnde Person / Einrichtung";
    id?: string;
}

export const NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding: t.Type<NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding> =
    t.recursion("NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    code: Literal("behandelnde_person_einrichtung"),
                    display: Literal("Behandelnde Person / Einrichtung")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDSchwangerschaftCode {
    coding: Array<NFDCompositionNFDSchwangerschaftCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDSchwangerschaftCode: t.Type<NFDCompositionNFDSchwangerschaftCode> =
    t.recursion("NFDCompositionNFDSchwangerschaftCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDSchwangerschaftCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDSchwangerschaftEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDSchwangerschaftEntryReference: t.Type<NFDCompositionNFDSchwangerschaftEntryReference> =
    t.recursion("NFDCompositionNFDSchwangerschaftEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Status|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Calculated_Delivery_Date|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDAllergieUnvertraeglichkeitCode {
    coding: Array<NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDAllergieUnvertraeglichkeitCode: t.Type<NFDCompositionNFDAllergieUnvertraeglichkeitCode> =
    t.recursion("NFDCompositionNFDAllergieUnvertraeglichkeitCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDAllergieUnvertraeglichkeitCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference: t.Type<NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference> =
    t.recursion("NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Allergy_Intolerance|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDImplantatCode {
    coding: Array<NFDCompositionNFDImplantatCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDImplantatCode: t.Type<NFDCompositionNFDImplantatCode> =
    t.recursion("NFDCompositionNFDImplantatCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDImplantatCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDImplantatEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDImplantatEntryReference: t.Type<NFDCompositionNFDImplantatEntryReference> =
    t.recursion("NFDCompositionNFDImplantatEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Use_Statement_Implant|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Device_Implant|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDKommunikationsstoerungCode {
    coding: Array<NFDCompositionNFDKommunikationsstoerungCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDKommunikationsstoerungCode: t.Type<NFDCompositionNFDKommunikationsstoerungCode> =
    t.recursion("NFDCompositionNFDKommunikationsstoerungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDKommunikationsstoerungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDKommunikationsstoerungEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDKommunikationsstoerungEntryReference: t.Type<NFDCompositionNFDKommunikationsstoerungEntryReference> =
    t.recursion("NFDCompositionNFDKommunikationsstoerungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Communication_Disorder|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDWeglaufgefaehrdungCode {
    coding: Array<NFDCompositionNFDWeglaufgefaehrdungCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDWeglaufgefaehrdungCode: t.Type<NFDCompositionNFDWeglaufgefaehrdungCode> =
    t.recursion("NFDCompositionNFDWeglaufgefaehrdungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDWeglaufgefaehrdungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDWeglaufgefaehrdungEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDWeglaufgefaehrdungEntryReference: t.Type<NFDCompositionNFDWeglaufgefaehrdungEntryReference> =
    t.recursion("NFDCompositionNFDWeglaufgefaehrdungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Runaway_Risk|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDSonstigerHinweisCode {
    coding: Array<NFDCompositionNFDSonstigerHinweisCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDSonstigerHinweisCode: t.Type<NFDCompositionNFDSonstigerHinweisCode> =
    t.recursion("NFDCompositionNFDSonstigerHinweisCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDSonstigerHinweisCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDSonstigerHinweisEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDSonstigerHinweisEntryReference: t.Type<NFDCompositionNFDSonstigerHinweisEntryReference> =
    t.recursion("NFDCompositionNFDSonstigerHinweisEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Note|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDDiagnoseCode {
    coding: Array<NFDCompositionNFDDiagnoseCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDDiagnoseCode: t.Type<NFDCompositionNFDDiagnoseCode> =
    t.recursion("NFDCompositionNFDDiagnoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDDiagnoseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDDiagnoseEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDDiagnoseEntryReference: t.Type<NFDCompositionNFDDiagnoseEntryReference> =
    t.recursion("NFDCompositionNFDDiagnoseEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDProzedurCode {
    coding: Array<NFDCompositionNFDProzedurCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDProzedurCode: t.Type<NFDCompositionNFDProzedurCode> =
    t.recursion("NFDCompositionNFDProzedurCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDProzedurCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDProzedurEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDProzedurEntryReference: t.Type<NFDCompositionNFDProzedurEntryReference> =
    t.recursion("NFDCompositionNFDProzedurEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Procedure|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDFreiwilligeZusatzinformationCode {
    coding: Array<NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDFreiwilligeZusatzinformationCode: t.Type<NFDCompositionNFDFreiwilligeZusatzinformationCode> =
    t.recursion("NFDCompositionNFDFreiwilligeZusatzinformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDFreiwilligeZusatzinformationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDFreiwilligeZusatzinformationEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDFreiwilligeZusatzinformationEntryReference: t.Type<NFDCompositionNFDFreiwilligeZusatzinformationEntryReference> =
    t.recursion("NFDCompositionNFDFreiwilligeZusatzinformationEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Voluntary_Additional_Information|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDMedikationseintraegeCode {
    coding: Array<NFDCompositionNFDMedikationseintraegeCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDMedikationseintraegeCode: t.Type<NFDCompositionNFDMedikationseintraegeCode> =
    t.recursion("NFDCompositionNFDMedikationseintraegeCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDMedikationseintraegeCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDMedikationseintraegeEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDMedikationseintraegeEntryReference: t.Type<NFDCompositionNFDMedikationseintraegeEntryReference> =
    t.recursion("NFDCompositionNFDMedikationseintraegeEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Statement_Administration_Instruction|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Recipe|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDVersicherterEinwilligungCode {
    coding: Array<NFDCompositionNFDVersicherterEinwilligungCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDVersicherterEinwilligungCode: t.Type<NFDCompositionNFDVersicherterEinwilligungCode> =
    t.recursion("NFDCompositionNFDVersicherterEinwilligungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDVersicherterEinwilligungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDVersicherterEinwilligungEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDVersicherterEinwilligungEntryReference: t.Type<NFDCompositionNFDVersicherterEinwilligungEntryReference> =
    t.recursion("NFDCompositionNFDVersicherterEinwilligungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Consent_Active_Advance_Directive|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface NFDCompositionNFDBehandelndePersonEinrichtungCode {
    coding: Array<NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding>;
    id?: string;
}

export const NFDCompositionNFDBehandelndePersonEinrichtungCode: t.Type<NFDCompositionNFDBehandelndePersonEinrichtungCode> =
    t.recursion("NFDCompositionNFDBehandelndePersonEinrichtungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDBehandelndePersonEinrichtungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface NFDCompositionNFDBehandelndePersonEinrichtungEntryReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDBehandelndePersonEinrichtungEntryReference: t.Type<NFDCompositionNFDBehandelndePersonEinrichtungEntryReference> =
    t.recursion("NFDCompositionNFDBehandelndePersonEinrichtungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role|1.0.0"
                    ])
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
export interface NFDCompositionNFDTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "5491000179105";
    display: "Medical record summary (record artifact)";
    id?: string;
}

export const NFDCompositionNFDTypeCoding: t.Type<NFDCompositionNFDTypeCoding> =
    t.recursion("NFDCompositionNFDTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("5491000179105"),
                    display: Literal("Medical record summary (record artifact)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDSchwangerschaft {
    title: "Schwangerschaft";
    code: NFDCompositionNFDSchwangerschaftCode;
    entry: Array<NFDCompositionNFDSchwangerschaftEntryReference>;
    id?: string;
}

export const NFDCompositionNFDSchwangerschaft: t.Type<NFDCompositionNFDSchwangerschaft> =
    t.recursion("NFDCompositionNFDSchwangerschaft", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Schwangerschaft"),
                    code: NFDCompositionNFDSchwangerschaftCode,
                    entry: MinMaxArray(
                        1,
                        2,
                        NFDCompositionNFDSchwangerschaftEntryReference
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDAllergieUnvertraeglichkeit {
    title: "Allergie/Unverträglichkeit";
    code: NFDCompositionNFDAllergieUnvertraeglichkeitCode;
    id?: string;
    entry?: Array<NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference>;
}

export const NFDCompositionNFDAllergieUnvertraeglichkeit: t.Type<NFDCompositionNFDAllergieUnvertraeglichkeit> =
    t.recursion("NFDCompositionNFDAllergieUnvertraeglichkeit", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Allergie/Unverträglichkeit"),
                    code: NFDCompositionNFDAllergieUnvertraeglichkeitCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        10,
                        NFDCompositionNFDAllergieUnvertraeglichkeitEntryReference
                    )
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDImplantat {
    title: "Implantat";
    code: NFDCompositionNFDImplantatCode;
    id?: string;
    entry?: Array<NFDCompositionNFDImplantatEntryReference>;
}

export const NFDCompositionNFDImplantat: t.Type<NFDCompositionNFDImplantat> = t.recursion(
    "NFDCompositionNFDImplantat",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Implantat"),
                    code: NFDCompositionNFDImplantatCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(10, NFDCompositionNFDImplantatEntryReference)
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDKommunikationsstoerung {
    title: "Kommunikationsstörung";
    code: NFDCompositionNFDKommunikationsstoerungCode;
    id?: string;
    entry?: Array<NFDCompositionNFDKommunikationsstoerungEntryReference>;
}

export const NFDCompositionNFDKommunikationsstoerung: t.Type<NFDCompositionNFDKommunikationsstoerung> =
    t.recursion("NFDCompositionNFDKommunikationsstoerung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Kommunikationsstörung"),
                    code: NFDCompositionNFDKommunikationsstoerungCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        3,
                        NFDCompositionNFDKommunikationsstoerungEntryReference
                    )
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDWeglaufgefaehrdung {
    title: "Weglaufgefährdung/Hinlaufgefährdung";
    code: NFDCompositionNFDWeglaufgefaehrdungCode;
    entry: Array<NFDCompositionNFDWeglaufgefaehrdungEntryReference>;
    id?: string;
}

export const NFDCompositionNFDWeglaufgefaehrdung: t.Type<NFDCompositionNFDWeglaufgefaehrdung> =
    t.recursion("NFDCompositionNFDWeglaufgefaehrdung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Weglaufgefährdung/Hinlaufgefährdung"),
                    code: NFDCompositionNFDWeglaufgefaehrdungCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDWeglaufgefaehrdungEntryReference
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDSonstigerHinweis {
    title: "Sonstiger Hinweis";
    code: NFDCompositionNFDSonstigerHinweisCode;
    id?: string;
    entry?: Array<NFDCompositionNFDSonstigerHinweisEntryReference>;
}

export const NFDCompositionNFDSonstigerHinweis: t.Type<NFDCompositionNFDSonstigerHinweis> =
    t.recursion("NFDCompositionNFDSonstigerHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sonstiger Hinweis"),
                    code: NFDCompositionNFDSonstigerHinweisCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(3, NFDCompositionNFDSonstigerHinweisEntryReference)
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDDiagnose {
    title: "Diagnose";
    code: NFDCompositionNFDDiagnoseCode;
    id?: string;
    entry?: Array<NFDCompositionNFDDiagnoseEntryReference>;
}

export const NFDCompositionNFDDiagnose: t.Type<NFDCompositionNFDDiagnose> = t.recursion(
    "NFDCompositionNFDDiagnose",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Diagnose"),
                    code: NFDCompositionNFDDiagnoseCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(20, NFDCompositionNFDDiagnoseEntryReference)
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDProzedur {
    title: "Prozedur";
    code: NFDCompositionNFDProzedurCode;
    id?: string;
    entry?: Array<NFDCompositionNFDProzedurEntryReference>;
}

export const NFDCompositionNFDProzedur: t.Type<NFDCompositionNFDProzedur> = t.recursion(
    "NFDCompositionNFDProzedur",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Prozedur"),
                    code: NFDCompositionNFDProzedurCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(20, NFDCompositionNFDProzedurEntryReference)
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDFreiwilligeZusatzinformation {
    title: "Freiwillige Zusatzinformationen";
    code: NFDCompositionNFDFreiwilligeZusatzinformationCode;
    id?: string;
    entry?: Array<NFDCompositionNFDFreiwilligeZusatzinformationEntryReference>;
}

export const NFDCompositionNFDFreiwilligeZusatzinformation: t.Type<NFDCompositionNFDFreiwilligeZusatzinformation> =
    t.recursion("NFDCompositionNFDFreiwilligeZusatzinformation", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Freiwillige Zusatzinformationen"),
                    code: NFDCompositionNFDFreiwilligeZusatzinformationCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        NFDCompositionNFDFreiwilligeZusatzinformationEntryReference
                    )
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDMedikationseintraege {
    title: "Medikationseinträge";
    code: NFDCompositionNFDMedikationseintraegeCode;
    id?: string;
    entry?: Array<NFDCompositionNFDMedikationseintraegeEntryReference>;
}

export const NFDCompositionNFDMedikationseintraege: t.Type<NFDCompositionNFDMedikationseintraege> =
    t.recursion("NFDCompositionNFDMedikationseintraege", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Medikationseinträge"),
                    code: NFDCompositionNFDMedikationseintraegeCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        20,
                        NFDCompositionNFDMedikationseintraegeEntryReference
                    )
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDVersicherterEinwilligung {
    title: "NFD_Versicherter_Einwilligung";
    code: NFDCompositionNFDVersicherterEinwilligungCode;
    entry: Array<NFDCompositionNFDVersicherterEinwilligungEntryReference>;
    id?: string;
}

export const NFDCompositionNFDVersicherterEinwilligung: t.Type<NFDCompositionNFDVersicherterEinwilligung> =
    t.recursion("NFDCompositionNFDVersicherterEinwilligung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("NFD_Versicherter_Einwilligung"),
                    code: NFDCompositionNFDVersicherterEinwilligungCode,
                    entry: MinMaxArray(
                        1,
                        1,
                        NFDCompositionNFDVersicherterEinwilligungEntryReference
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface NFDCompositionNFDBehandelndePersonEinrichtung {
    title: "Behandelnde Person / Einrichtung";
    code: NFDCompositionNFDBehandelndePersonEinrichtungCode;
    id?: string;
    entry?: Array<NFDCompositionNFDBehandelndePersonEinrichtungEntryReference>;
}

export const NFDCompositionNFDBehandelndePersonEinrichtung: t.Type<NFDCompositionNFDBehandelndePersonEinrichtung> =
    t.recursion("NFDCompositionNFDBehandelndePersonEinrichtung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Behandelnde Person / Einrichtung"),
                    code: NFDCompositionNFDBehandelndePersonEinrichtungCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        3,
                        NFDCompositionNFDBehandelndePersonEinrichtungEntryReference
                    )
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDCompositionNFDMeta {
    versionId: string;
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Composition_NFD|1.0.0">;
    id?: string;
}

export const NFDCompositionNFDMeta: t.Type<NFDCompositionNFDMeta> = t.recursion(
    "NFDCompositionNFDMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    versionId: SCALARId,
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Composition_NFD|1.0.0"
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
 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
 */
export interface NFDCompositionNFDType {
    coding: Array<NFDCompositionNFDTypeCoding>;
    id?: string;
}

export const NFDCompositionNFDType: t.Type<NFDCompositionNFDType> = t.recursion(
    "NFDCompositionNFDType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDCompositionNFDTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
 */
export interface NFDCompositionNFDSubjectReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDSubjectReference: t.Type<NFDCompositionNFDSubjectReference> =
    t.recursion("NFDCompositionNFDSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface NFDCompositionNFDAuthorReference {
    reference: string;
    id?: string;
}

export const NFDCompositionNFDAuthorReference: t.Type<NFDCompositionNFDAuthorReference> =
    t.recursion("NFDCompositionNFDAuthorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDCompositionNFD {
    resourceType: "Composition";
    meta: NFDCompositionNFDMeta;
    status: "final";
    type: NFDCompositionNFDType;
    subject: NFDCompositionNFDSubjectReference;
    date: string;
    author: Array<NFDCompositionNFDAuthorReference>;
    title: "Notfalldatensatz";
    id?: string;
    section?: (
        | NFDCompositionNFDSchwangerschaft
        | NFDCompositionNFDAllergieUnvertraeglichkeit
        | NFDCompositionNFDImplantat
        | NFDCompositionNFDKommunikationsstoerung
        | NFDCompositionNFDWeglaufgefaehrdung
        | NFDCompositionNFDSonstigerHinweis
        | NFDCompositionNFDDiagnose
        | NFDCompositionNFDProzedur
        | NFDCompositionNFDFreiwilligeZusatzinformation
        | NFDCompositionNFDMedikationseintraege
        | NFDCompositionNFDVersicherterEinwilligung
        | NFDCompositionNFDBehandelndePersonEinrichtung
    )[];
}

const NFDCompositionNFD: t.Type<NFDCompositionNFD> = t.recursion(
    "NFDCompositionNFD",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: NFDCompositionNFDMeta,
                    status: Literal("final"),
                    type: NFDCompositionNFDType,
                    subject: NFDCompositionNFDSubjectReference,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 1, NFDCompositionNFDAuthorReference),
                    title: Literal("Notfalldatensatz")
                }),
                t.partial({
                    id: SCALARString,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<NFDCompositionNFDSchwangerschaft>,
                                t.Type<NFDCompositionNFDAllergieUnvertraeglichkeit>,
                                t.Type<NFDCompositionNFDImplantat>,
                                t.Type<NFDCompositionNFDKommunikationsstoerung>,
                                t.Type<NFDCompositionNFDWeglaufgefaehrdung>,
                                t.Type<NFDCompositionNFDSonstigerHinweis>,
                                t.Type<NFDCompositionNFDDiagnose>,
                                t.Type<NFDCompositionNFDProzedur>,
                                t.Type<NFDCompositionNFDFreiwilligeZusatzinformation>,
                                t.Type<NFDCompositionNFDMedikationseintraege>,
                                t.Type<NFDCompositionNFDVersicherterEinwilligung>,
                                t.Type<NFDCompositionNFDBehandelndePersonEinrichtung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            NFDCompositionNFDSchwangerschaft,
                            NFDCompositionNFDAllergieUnvertraeglichkeit,
                            NFDCompositionNFDImplantat,
                            NFDCompositionNFDKommunikationsstoerung,
                            NFDCompositionNFDWeglaufgefaehrdung,
                            NFDCompositionNFDSonstigerHinweis,
                            NFDCompositionNFDDiagnose,
                            NFDCompositionNFDProzedur,
                            NFDCompositionNFDFreiwilligeZusatzinformation,
                            NFDCompositionNFDMedikationseintraege,
                            NFDCompositionNFDVersicherterEinwilligung,
                            NFDCompositionNFDBehandelndePersonEinrichtung
                        ]),
                        [
                            {
                                codec: NFDCompositionNFDSchwangerschaft,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "90767-5" }
                            },
                            {
                                codec: NFDCompositionNFDAllergieUnvertraeglichkeit,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "722446000" }
                            },
                            {
                                codec: NFDCompositionNFDImplantat,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "40388003" }
                            },
                            {
                                codec: NFDCompositionNFDKommunikationsstoerung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "code.coding.code",
                                    value: "386053000:363702006=278919001"
                                }
                            },
                            {
                                codec: NFDCompositionNFDWeglaufgefaehrdung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "code.coding.code",
                                    value: "225338004:363702006=248046000"
                                }
                            },
                            {
                                codec: NFDCompositionNFDSonstigerHinweis,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "866144008" }
                            },
                            {
                                codec: NFDCompositionNFDDiagnose,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "29548-5" }
                            },
                            {
                                codec: NFDCompositionNFDProzedur,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "1003640003" }
                            },
                            {
                                codec: NFDCompositionNFDFreiwilligeZusatzinformation,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "866145009" }
                            },
                            {
                                codec: NFDCompositionNFDMedikationseintraege,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "736378000" }
                            },
                            {
                                codec: NFDCompositionNFDVersicherterEinwilligung,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "57016-8" }
                            },
                            {
                                codec: NFDCompositionNFDBehandelndePersonEinrichtung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "code.coding.code",
                                    value: "behandelnde_person_einrichtung"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default NFDCompositionNFD;
