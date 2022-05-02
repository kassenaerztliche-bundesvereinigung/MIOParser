import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_ZAEB_Preventive_Check_Up_Type

type ZAEBPreventiveCheckUpType = "2115003" | "63963009";

const ZAEBPreventiveCheckUpType: t.Type<ZAEBPreventiveCheckUpType> = t.union(
    [t.literal("2115003"), t.literal("63963009")],
    "ZAEBPreventiveCheckUpType"
);

export const ZAEBPreventiveCheckUpTypeArray: string[] = ["2115003", "63963009"];

export const ZAEBPreventiveCheckUpTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "2115003",
                display: "Dental prophylaxis, children (procedure)"
            },
            {
                code: "63963009",
                display: "Dental prophylaxis, adult (procedure)"
            }
        ]
    }
];

export default ZAEBPreventiveCheckUpType;
