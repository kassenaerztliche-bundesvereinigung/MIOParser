import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/subject-type

type Subjecttype = "Patient" | "Practitioner" | "Organization" | "Location" | "Device";

const Subjecttype: t.Type<Subjecttype> = t.union(
    [
        t.literal("Patient"),
        t.literal("Practitioner"),
        t.literal("Organization"),
        t.literal("Location"),
        t.literal("Device")
    ],
    "Subjecttype"
);

export const SubjecttypeArray: string[] = [
    "Patient",
    "Practitioner",
    "Organization",
    "Location",
    "Device"
];

export const SubjecttypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Patient",
                display: ""
            },
            {
                code: "Practitioner",
                display: ""
            },
            {
                code: "Organization",
                display: ""
            },
            {
                code: "Location",
                display: ""
            },
            {
                code: "Device",
                display: ""
            }
        ]
    }
];

export default Subjecttype;
