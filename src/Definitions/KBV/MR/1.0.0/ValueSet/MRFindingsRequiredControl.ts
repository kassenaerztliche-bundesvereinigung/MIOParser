import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRFindingsRequiredControlGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRFindingsRequiredControlGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Findings_Required_Control

type MRFindingsRequiredControl = "107651007:47429007=168083008" | "714656007";

const MRFindingsRequiredControl: t.Type<MRFindingsRequiredControl> = t.union(
    [t.literal("107651007:47429007=168083008"), t.literal("714656007")],
    "MRFindingsRequiredControl"
);

export const MRFindingsRequiredControlArray: string[] = [
    "107651007:47429007=168083008",
    "714656007"
];

export const MRFindingsRequiredControlValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "107651007:47429007=168083008",
                display:
                    "Quantity finding (finding) : Associated with (attribute) = Amniotic fluid examination (procedure)"
            },
            {
                code: "714656007",
                display: "Impaired fetal development (finding)"
            }
        ]
    }
];

export { MRFindingsRequiredControlGerman as ConceptMap };

export default MRFindingsRequiredControl;
