import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hearscreening_Method_German
type CMRHearscreeningMethodGerman =
    | "ErstuntersuchungmittelsTEOAEinderRegelindenersten3Lebenstagen"
    | "ErstuntersuchungmittelsAABRinderRegelindenersten3Lebenstagen"
    | "KontrollAABRbeiauffaelligemErstbefundinderRegelbisU2";

const CMRHearscreeningMethodGerman: t.Type<CMRHearscreeningMethodGerman> = t.union([
    t.literal("ErstuntersuchungmittelsTEOAEinderRegelindenersten3Lebenstagen"),
    t.literal("ErstuntersuchungmittelsAABRinderRegelindenersten3Lebenstagen"),
    t.literal("KontrollAABRbeiauffaelligemErstbefundinderRegelbisU2")
]);

export const CMRHearscreeningMethodGermanArray: string[] = [
    "ErstuntersuchungmittelsTEOAEinderRegelindenersten3Lebenstagen",
    "ErstuntersuchungmittelsAABRinderRegelindenersten3Lebenstagen",
    "KontrollAABRbeiauffaelligemErstbefundinderRegelbisU2"
];

export default CMRHearscreeningMethodGerman;
