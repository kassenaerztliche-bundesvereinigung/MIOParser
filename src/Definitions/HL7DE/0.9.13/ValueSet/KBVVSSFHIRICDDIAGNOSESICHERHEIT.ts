import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_SFHIR_ICD_DIAGNOSESICHERHEIT

type KBVVSSFHIRICDDIAGNOSESICHERHEIT = string;

const KBVVSSFHIRICDDIAGNOSESICHERHEIT: t.Type<KBVVSSFHIRICDDIAGNOSESICHERHEIT> = t.string;

export const KBVVSSFHIRICDDIAGNOSESICHERHEITArray: string[] = [];

export const KBVVSSFHIRICDDIAGNOSESICHERHEITValueSet: ValueSet = [
    {
        system: "",
        concept: []
    }
];

export default KBVVSSFHIRICDDIAGNOSESICHERHEIT;
