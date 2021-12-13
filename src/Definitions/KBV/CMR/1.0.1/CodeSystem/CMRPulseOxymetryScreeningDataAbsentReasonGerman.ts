import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Pulse_Oxymetry_Screening_Data_Absent_Reason_German
type CMRPulseOxymetryScreeningDataAbsentReasonGerman =
    | "elternWuenschenKeineUntersuchung"
    | "keinPulsoxymetriescreeningBeiPraenatalDiagnostiziertemKritischemHerzfehler";

const CMRPulseOxymetryScreeningDataAbsentReasonGerman: t.Type<CMRPulseOxymetryScreeningDataAbsentReasonGerman> =
    t.union([
        t.literal("elternWuenschenKeineUntersuchung"),
        t.literal(
            "keinPulsoxymetriescreeningBeiPraenatalDiagnostiziertemKritischemHerzfehler"
        )
    ]);

export const CMRPulseOxymetryScreeningDataAbsentReasonGermanArray: string[] = [
    "elternWuenschenKeineUntersuchung",
    "keinPulsoxymetriescreeningBeiPraenatalDiagnostiziertemKritischemHerzfehler"
];

export default CMRPulseOxymetryScreeningDataAbsentReasonGerman;
