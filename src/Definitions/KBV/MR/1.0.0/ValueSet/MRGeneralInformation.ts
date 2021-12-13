import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRGeneralInformationGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRGeneralInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_General_Information

type MRGeneralInformation =
    | "404684003:{418775008=446522006,363698007=609524001,363713009=52101004}"
    | "277766008";

const MRGeneralInformation: t.Type<MRGeneralInformation> = t.union(
    [
        t.literal(
            "404684003:{418775008=446522006,363698007=609524001,363713009=52101004}"
        ),
        t.literal("277766008")
    ],
    "MRGeneralInformation"
);

export const MRGeneralInformationArray: string[] = [
    "404684003:{418775008=446522006,363698007=609524001,363713009=52101004}",
    "277766008"
];

export const MRGeneralInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "404684003:{418775008=446522006,363698007=609524001,363713009=52101004}",
                display:
                    "Clinical finding (finding):{Finding method (attribute)=Ultrasonography in first trimester (procedure)|,Finding site (attribute)=Entire embryo proper (body structure),Has interpretation (attribute)=Present (qualifier value)}"
            },
            {
                code: "277766008",
                display: "Awareness of heart beat (finding)"
            }
        ]
    }
];

export { MRGeneralInformationGerman as ConceptMap };

export default MRGeneralInformation;
