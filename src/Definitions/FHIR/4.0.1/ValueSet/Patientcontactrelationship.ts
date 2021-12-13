import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/patient-contactrelationship

type Patientcontactrelationship = string;

const Patientcontactrelationship: t.Type<Patientcontactrelationship> = t.string;

export const PatientcontactrelationshipArray: string[] = [];

export const PatientcontactrelationshipValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v2-0131",
        concept: []
    }
];

export default Patientcontactrelationship;
