import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Composition_Examination_Participation"

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface PCCompositionExaminationParticipationEinleitungsText {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Liebe Eltern! Schützen Sie die Daten Ihres Kindes! Mit dieser herausnehmbaren Karte können Sie bei Behörden, Kindertragesstätten, Schulen und Jugendämtern den Nachweis erbringen, dass Ihr Kind an den Untersuchungen teilgenommen hat.";
    id?: string;
}

export const PCCompositionExaminationParticipationEinleitungsText: t.Type<PCCompositionExaminationParticipationEinleitungsText> =
    t.recursion("PCCompositionExaminationParticipationEinleitungsText", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "Liebe Eltern! Schützen Sie die Daten Ihres Kindes! Mit dieser herausnehmbaren Karte können Sie bei Behörden, Kindertragesstätten, Schulen und Jugendämtern den Nachweis erbringen, dass Ihr Kind an den Untersuchungen teilgenommen hat."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface PCCompositionExaminationParticipationHinweisText {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "* Die Untersuchung beinhaltet eine ärztliche Beratung in Bezug auf einen vollständigeen altersgemäßen, entsprechend der Schutzimpfungs-Richtlinie des G-BA ausreichenden Impfschutz.";
    id?: string;
}

export const PCCompositionExaminationParticipationHinweisText: t.Type<PCCompositionExaminationParticipationHinweisText> =
    t.recursion("PCCompositionExaminationParticipationHinweisText", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal(
                        "* Die Untersuchung beinhaltet eine ärztliche Beratung in Bezug auf einen vollständigeen altersgemäßen, entsprechend der Schutzimpfungs-Richtlinie des G-BA ausreichenden Impfschutz."
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
export interface PCCompositionExaminationParticipationTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "314845004";
    display: "Patient participation status (finding)";
    id?: string;
}

export const PCCompositionExaminationParticipationTypeCoding: t.Type<PCCompositionExaminationParticipationTypeCoding> =
    t.recursion("PCCompositionExaminationParticipationTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("314845004"),
                    display: Literal("Patient participation status (finding)")
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
export interface PCCompositionExaminationParticipationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Composition_Examination_Participation|1.0.1">;
    id?: string;
}

export const PCCompositionExaminationParticipationMeta: t.Type<PCCompositionExaminationParticipationMeta> =
    t.recursion("PCCompositionExaminationParticipationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Composition_Examination_Participation|1.0.1"
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
export interface PCCompositionExaminationParticipationType {
    coding: Array<PCCompositionExaminationParticipationTypeCoding>;
    id?: string;
}

export const PCCompositionExaminationParticipationType: t.Type<PCCompositionExaminationParticipationType> =
    t.recursion("PCCompositionExaminationParticipationType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        PCCompositionExaminationParticipationTypeCoding
                    )
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
export interface PCCompositionExaminationParticipationSubject {
    reference: string;
    id?: string;
}

export const PCCompositionExaminationParticipationSubject: t.Type<PCCompositionExaminationParticipationSubject> =
    t.recursion("PCCompositionExaminationParticipationSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Describes the clinical encounter or type of care this documentation is associated with.
 */
export interface PCCompositionExaminationParticipationEncounter {
    reference: string;
    id?: string;
}

export const PCCompositionExaminationParticipationEncounter: t.Type<PCCompositionExaminationParticipationEncounter> =
    t.recursion("PCCompositionExaminationParticipationEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Encounter|1.0.1"
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
export interface PCCompositionExaminationParticipationAuthor {
    reference: string;
    id?: string;
}

export const PCCompositionExaminationParticipationAuthor: t.Type<PCCompositionExaminationParticipationAuthor> =
    t.recursion("PCCompositionExaminationParticipationAuthor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface PCCompositionExaminationParticipation {
    resourceType: "Composition";
    meta: PCCompositionExaminationParticipationMeta;
    status: "final";
    type: PCCompositionExaminationParticipationType;
    subject: PCCompositionExaminationParticipationSubject;
    encounter: PCCompositionExaminationParticipationEncounter;
    date: string;
    author: Array<PCCompositionExaminationParticipationAuthor>;
    title: "Teilnahmekarte";
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | PCCompositionExaminationParticipationEinleitungsText
        | PCCompositionExaminationParticipationHinweisText
    )[];
}

const PCCompositionExaminationParticipation: t.Type<PCCompositionExaminationParticipation> =
    t.recursion("PCCompositionExaminationParticipation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: PCCompositionExaminationParticipationMeta,
                    status: Literal("final"),
                    type: PCCompositionExaminationParticipationType,
                    subject: PCCompositionExaminationParticipationSubject,
                    encounter: PCCompositionExaminationParticipationEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(
                        1,
                        2,
                        PCCompositionExaminationParticipationAuthor
                    ),
                    title: Literal("Teilnahmekarte")
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<PCCompositionExaminationParticipationEinleitungsText>,
                                t.Type<PCCompositionExaminationParticipationHinweisText>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            PCCompositionExaminationParticipationEinleitungsText,
                            PCCompositionExaminationParticipationHinweisText
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCCompositionExaminationParticipationEinleitungsText,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            },
                            {
                                codec: PCCompositionExaminationParticipationHinweisText,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

export default PCCompositionExaminationParticipation;
