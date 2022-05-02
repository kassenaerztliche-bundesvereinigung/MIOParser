import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment"

/**
 * Content in other Language.
 */
export interface CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent {
    url: "content";
    valueString: "Nächste U-Untersuchung am:";
    id?: string;
}

export const CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent: t.Type<CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent> =
    t.recursion(
        "CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Nächste U-Untersuchung am:")
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
export interface CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
    )[];
}

export const CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed: t.Type<CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed> =
    t.recursion(
        "CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed",
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
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRAppointmentNextAppointmentServiceTypeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
    )[];
    value?: string;
}

export const CMRAppointmentNextAppointmentServiceTypeCodingDisplay: t.Type<CMRAppointmentNextAppointmentServiceTypeCodingDisplay> =
    t.recursion("CMRAppointmentNextAppointmentServiceTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRAppointmentNextAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRAppointmentNextAppointmentServiceTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "390840006:42752001=243788004";
    id?: string;
    _display?: CMRAppointmentNextAppointmentServiceTypeCodingDisplay;
    display?: string;
}

export const CMRAppointmentNextAppointmentServiceTypeCoding: t.Type<CMRAppointmentNextAppointmentServiceTypeCoding> =
    t.recursion("CMRAppointmentNextAppointmentServiceTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("390840006:42752001=243788004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRAppointmentNextAppointmentServiceTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A Person, Location/HealthcareService or Device that is participating in the appointment.
 */
export interface CMRAppointmentNextAppointmentParticipantActor {
    reference: string;
    id?: string;
}

export const CMRAppointmentNextAppointmentParticipantActor: t.Type<CMRAppointmentNextAppointmentParticipantActor> =
    t.recursion("CMRAppointmentNextAppointmentParticipantActor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
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
export interface CMRAppointmentNextAppointmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.1">;
    id?: string;
}

export const CMRAppointmentNextAppointmentMeta: t.Type<CMRAppointmentNextAppointmentMeta> =
    t.recursion("CMRAppointmentNextAppointmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.1"
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
 * The specific service that is to be performed during this appointment.
 */
export interface CMRAppointmentNextAppointmentServiceType {
    coding: Array<CMRAppointmentNextAppointmentServiceTypeCoding>;
    id?: string;
}

export const CMRAppointmentNextAppointmentServiceType: t.Type<CMRAppointmentNextAppointmentServiceType> =
    t.recursion("CMRAppointmentNextAppointmentServiceType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextAppointmentServiceTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * List of participants involved in the appointment.
 */
export interface CMRAppointmentNextAppointmentParticipant {
    actor: CMRAppointmentNextAppointmentParticipantActor;
    status: "accepted";
    id?: string;
}

export const CMRAppointmentNextAppointmentParticipant: t.Type<CMRAppointmentNextAppointmentParticipant> =
    t.recursion("CMRAppointmentNextAppointmentParticipant", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: CMRAppointmentNextAppointmentParticipantActor,
                    status: Literal("accepted")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
* A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.

The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
*/
export interface CMRAppointmentNextAppointmentRequestedPeriod {
    start: string;
    id?: string;
}

export const CMRAppointmentNextAppointmentRequestedPeriod: t.Type<CMRAppointmentNextAppointmentRequestedPeriod> =
    t.recursion("CMRAppointmentNextAppointmentRequestedPeriod", () =>
        Excess(
            t.intersection([
                t.type({
                    start: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRAppointmentNextAppointment {
    resourceType: "Appointment";
    meta: CMRAppointmentNextAppointmentMeta;
    status: "proposed";
    serviceType: Array<CMRAppointmentNextAppointmentServiceType>;
    participant: Array<CMRAppointmentNextAppointmentParticipant>;
    requestedPeriod: Array<CMRAppointmentNextAppointmentRequestedPeriod>;
    id?: string;
    text?: Narrative;
    reasonReference?: Reference[];
}

const CMRAppointmentNextAppointment: t.Type<CMRAppointmentNextAppointment> = t.recursion(
    "CMRAppointmentNextAppointment",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Appointment"),
                    meta: CMRAppointmentNextAppointmentMeta,
                    status: Literal("proposed"),
                    serviceType: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextAppointmentServiceType
                    ),
                    participant: MinArray(1, CMRAppointmentNextAppointmentParticipant),
                    requestedPeriod: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextAppointmentRequestedPeriod
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    reasonReference: t.array(Reference)
                })
            ])
        )
);

export default CMRAppointmentNextAppointment;
