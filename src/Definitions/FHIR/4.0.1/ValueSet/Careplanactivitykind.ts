import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-kind

type Careplanactivitykind =
    | "Appointment"
    | "CommunicationRequest"
    | "DeviceRequest"
    | "MedicationRequest"
    | "NutritionOrder"
    | "Task"
    | "ServiceRequest"
    | "VisionPrescription";

const Careplanactivitykind: t.Type<Careplanactivitykind> = t.union(
    [
        t.literal("Appointment"),
        t.literal("CommunicationRequest"),
        t.literal("DeviceRequest"),
        t.literal("MedicationRequest"),
        t.literal("NutritionOrder"),
        t.literal("Task"),
        t.literal("ServiceRequest"),
        t.literal("VisionPrescription")
    ],
    "Careplanactivitykind"
);

export const CareplanactivitykindArray: string[] = [
    "Appointment",
    "CommunicationRequest",
    "DeviceRequest",
    "MedicationRequest",
    "NutritionOrder",
    "Task",
    "ServiceRequest",
    "VisionPrescription"
];

export const CareplanactivitykindValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Appointment",
                display: ""
            },
            {
                code: "CommunicationRequest",
                display: ""
            },
            {
                code: "DeviceRequest",
                display: ""
            },
            {
                code: "MedicationRequest",
                display: ""
            },
            {
                code: "NutritionOrder",
                display: ""
            },
            {
                code: "Task",
                display: ""
            },
            {
                code: "ServiceRequest",
                display: ""
            },
            {
                code: "VisionPrescription",
                display: ""
            }
        ]
    }
];

export default Careplanactivitykind;
