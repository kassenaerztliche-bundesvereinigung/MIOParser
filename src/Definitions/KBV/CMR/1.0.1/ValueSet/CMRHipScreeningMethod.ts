import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRHipScreeningMethodGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHipScreeningMethodGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hip_Screening_Method

type CMRHipScreeningMethod =
    | "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}";

const CMRHipScreeningMethod: t.Type<CMRHipScreeningMethod> = t.union(
    [
        t.literal(
            "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}"
        )
    ],
    "CMRHipScreeningMethod"
);

export const CMRHipScreeningMethodArray: string[] = [
    "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}"
];

export const CMRHipScreeningMethodValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Performed (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Not done (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Action status unknown (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) =  Performed (qualifier value) , Temporal context (situation) = Current - time specified (qualifier value) }"
            }
        ]
    }
];

export { CMRHipScreeningMethodGerman as ConceptMap };

export default CMRHipScreeningMethod;
