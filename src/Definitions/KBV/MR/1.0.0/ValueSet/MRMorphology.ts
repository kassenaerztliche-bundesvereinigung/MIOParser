import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRMorphologyGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRMorphologyGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Morphology

type MRMorphology =
    | "62991000119101"
    | "302292003:363714003=(364146002:704327008=86367003)"
    | "441687008:{363713009=17621005,363714003=169251004}"
    | "441920005"
    | "445368001"
    | "249042007:246090004=(698247007:371881003=243788004)"
    | "169221005:363698007=43487005"
    | "459053006"
    | "144181000119106"
    | "79114003"
    | "406122000+106112009+106111002:{363698007=113305005}";

const MRMorphology: t.Type<MRMorphology> = t.union(
    [
        t.literal("62991000119101"),
        t.literal("302292003:363714003=(364146002:704327008=86367003)"),
        t.literal("441687008:{363713009=17621005,363714003=169251004}"),
        t.literal("441920005"),
        t.literal("445368001"),
        t.literal("249042007:246090004=(698247007:371881003=243788004)"),
        t.literal("169221005:363698007=43487005"),
        t.literal("459053006"),
        t.literal("144181000119106"),
        t.literal("79114003"),
        t.literal("406122000+106112009+106111002:{363698007=113305005}")
    ],
    "MRMorphology"
);

export const MRMorphologyArray: string[] = [
    "62991000119101",
    "302292003:363714003=(364146002:704327008=86367003)",
    "441687008:{363713009=17621005,363714003=169251004}",
    "441920005",
    "445368001",
    "249042007:246090004=(698247007:371881003=243788004)",
    "169221005:363698007=43487005",
    "459053006",
    "144181000119106",
    "79114003",
    "406122000+106112009+106111002:{363698007=113305005}"
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
                code: "302292003:363714003=(364146002:704327008=86367003)",
                display:
                    "Finding of trunk structure (finding) : Interprets (attribute) = ( Stomach observable (observable entity) : Direct site (attribute) = Structure of left upper quadrant of abdomen (body structure) )"
            },
            {
                code: "441687008:{363713009=17621005,363714003=169251004}",
                display:
                    "Imaging of genitourinary system abnormal (finding):{Has interpretation (attribute)=Normal (qualifier value),Interprets (attribute)=Ultrasound scan of bladder (procedure)}"
            },
            {
                code: "441920005",
                display: "Radiographic shadow of heart abnormal (finding)"
            },
            {
                code: "445368001",
                display: "Normal position and orientation of heart (finding)"
            },
            {
                code: "249042007:246090004=(698247007:371881003=243788004)",
                display:
                    "Fetal heart finding (finding) : Associated finding (attribute) = (Cardiac arrhythmia (disorder) : During (attribute) = Child examination (procedure) )"
            },
            {
                code: "169221005:363698007=43487005",
                display:
                    "Ultrasound obstetric scan normal (finding):Finding site (attribute)=All chambers of the heart (body structure)"
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
                code: "406122000+106112009+106111002:{363698007=113305005}",
                display:
                    "Head finding (finding) + Fetal finding (finding) + Clinical sign related to pregnancy (finding) : { Finding site (attribute) = Cerebellar structure (body structure) }"
            }
        ]
    }
];

export { MRMorphologyGerman as ConceptMap };

export default MRMorphology;
