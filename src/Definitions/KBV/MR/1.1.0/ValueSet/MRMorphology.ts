import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRMorphologyGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRMorphologyGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Morphology

type MRMorphology =
    | "62991000119101"
    | "1157188005"
    | "1157173000"
    | "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}"
    | "445368001"
    | "289444003:371881003=243788004"
    | "1157164008"
    | "459053006"
    | "144181000119106"
    | "79114003"
    | "1157174006";

const MRMorphology: t.Type<MRMorphology> = t.union(
    [
        t.literal("62991000119101"),
        t.literal("1157188005"),
        t.literal("1157173000"),
        t.literal(
            "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}"
        ),
        t.literal("445368001"),
        t.literal("289444003:371881003=243788004"),
        t.literal("1157164008"),
        t.literal("459053006"),
        t.literal("144181000119106"),
        t.literal("79114003"),
        t.literal("1157174006")
    ],
    "MRMorphology"
);

export const MRMorphologyArray: string[] = [
    "62991000119101",
    "1157188005",
    "1157173000",
    "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}",
    "445368001",
    "289444003:371881003=243788004",
    "1157164008",
    "459053006",
    "144181000119106",
    "79114003",
    "1157174006"
];

export const MRMorphologyValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "62991000119101",
                display: "Fetal abdominal wall defect (disorder)"
            },
            {
                code: "1157188005",
                display: "Stomach present in left upper quadrant of abdomen (finding)"
            },
            {
                code: "1157173000",
                display: "Bladder present (finding)"
            },
            {
                code: "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}",
                display:
                    "Ultrasound scan finding (finding) : { Has interpretation (attribute) = Potentially abnormal (qualifier value) } { Interprets (attribute) = ( Imaging interpretation (observable entity) : Direct site (attribute) = Heart structure (body structure) + Thoracic structure (body structure) ) } { Property (attribute) = Relative ratio (property) (qualifier value) }"
            },
            {
                code: "445368001",
                display: "Normal position and orientation of heart (finding)"
            },
            {
                code: "289444003:371881003=243788004",
                display:
                    "Irregular fetal heart rhythm (finding) : During (attribute) = Child examination (procedure)"
            },
            {
                code: "1157164008",
                display: "All chambers of heart present (finding)"
            },
            {
                code: "459053006",
                display: "Increased fetal nuchal thickness (finding)"
            },
            {
                code: "144181000119106",
                display: "Fetal ultrasound ventriculomegaly (finding)"
            },
            {
                code: "79114003",
                display: "Fetal head molding (finding)"
            },
            {
                code: "1157174006",
                display: "Cerebellum present (finding)"
            }
        ]
    }
];

export { MRMorphologyGerman as ConceptMap };

export default MRMorphology;
