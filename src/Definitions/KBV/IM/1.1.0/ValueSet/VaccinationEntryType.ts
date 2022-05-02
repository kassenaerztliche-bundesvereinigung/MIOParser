import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Entry_Type

type VaccinationEntryType = "End" | "Eduai" | "Eduii";

const VaccinationEntryType: t.Type<VaccinationEntryType> = t.union(
    [t.literal("End"), t.literal("Eduai"), t.literal("Eduii")],
    "VaccinationEntryType"
);

export const VaccinationEntryTypeArray: string[] = ["End", "Eduai", "Eduii"];

export const VaccinationEntryTypeValueSet: ValueSet = [
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Technical_Entry_Type",
        concept: [
            {
                code: "End",
                display: "Eintrag nur digital"
            },
            {
                code: "Eduai",
                display: "Eintrag digital und als Impfbescheinigung"
            },
            {
                code: "Eduii",
                display: "Eintrag digital und im Impfausweis"
            }
        ]
    }
];

export default VaccinationEntryType;
