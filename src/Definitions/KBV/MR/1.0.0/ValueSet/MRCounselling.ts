import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRCounsellingGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRCounsellingGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Counselling

type MRCounselling =
    | "171054004+440670004+313071005"
    | "313080005+171056002+439816006"
    | "370995009"
    | "409013000"
    | "409066002:363702006=15886004"
    | "409066002:363702006=165813002"
    | "243085009";

const MRCounselling: t.Type<MRCounselling> = t.union(
    [
        t.literal("171054004+440670004+313071005"),
        t.literal("313080005+171056002+439816006"),
        t.literal("370995009"),
        t.literal("409013000"),
        t.literal("409066002:363702006=15886004"),
        t.literal("409066002:363702006=165813002"),
        t.literal("243085009")
    ],
    "MRCounselling"
);

export const MRCounsellingArray: string[] = [
    "171054004+440670004+313071005",
    "313080005+171056002+439816006",
    "370995009",
    "409013000",
    "409066002:363702006=15886004",
    "409066002:363702006=165813002",
    "243085009"
];

export const MRCounsellingValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "171054004+440670004+313071005",
                display:
                    "Pregnancy diet education (procedure) + Education about medication intake during pregnancy (procedure) + Counseling for substance abuse (procedure)"
            },
            {
                code: "313080005+171056002+439816006",
                display:
                    "Work-related counseling (procedure) + Pregnancy exercise education (procedure) + Education about travel during pregnancy (procedure)"
            },
            {
                code: "370995009",
                display: "Health risks education (procedure)"
            },
            {
                code: "409013000",
                display: "Delivery care education (procedure)"
            },
            {
                code: "409066002:363702006=15886004",
                display:
                    "Education, guidance and counseling (procedure): Has focus (attribute) = Screening for cancer (procedure)"
            },
            {
                code: "409066002:363702006=165813002",
                display:
                    "Education, guidance and counseling (procedure): Has focus (attribute) = Human immunodeficiency virus antibody test (procedure)"
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)"
            }
        ]
    }
];

export { MRCounsellingGerman as ConceptMap };

export default MRCounselling;
