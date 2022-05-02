import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRPregnancyHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRPregnancyHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Pregnancy_History

type CMRPregnancyHistory =
    | "721151003"
    | "704144000"
    | "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}"
    | "160427003:246090004=40609001"
    | "160427003:246090004=165775009"
    | "160427003:246090004=120001000119107"
    | "160427003:246090004=16356006"
    | "413350009:{246090004=199646006,408732007=444301002}"
    | "413350009:{246090004=59566000,408732007=444301002}"
    | "288256007"
    | "413350009:{246090004=284465006,408732007=444301002}"
    | "442080007";

const CMRPregnancyHistory: t.Type<CMRPregnancyHistory> = t.union(
    [
        t.literal("721151003"),
        t.literal("704144000"),
        t.literal(
            "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}"
        ),
        t.literal("160427003:246090004=40609001"),
        t.literal("160427003:246090004=165775009"),
        t.literal("160427003:246090004=120001000119107"),
        t.literal("160427003:246090004=16356006"),
        t.literal("413350009:{246090004=199646006,408732007=444301002}"),
        t.literal("413350009:{246090004=59566000,408732007=444301002}"),
        t.literal("288256007"),
        t.literal("413350009:{246090004=284465006,408732007=444301002}"),
        t.literal("442080007")
    ],
    "CMRPregnancyHistory"
);

export const CMRPregnancyHistoryArray: string[] = [
    "721151003",
    "704144000",
    "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
    "160427003:246090004=40609001",
    "160427003:246090004=165775009",
    "160427003:246090004=120001000119107",
    "160427003:246090004=16356006",
    "413350009:{246090004=199646006,408732007=444301002}",
    "413350009:{246090004=59566000,408732007=444301002}",
    "288256007",
    "413350009:{246090004=284465006,408732007=444301002}",
    "442080007"
];

export const CMRPregnancyHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "721151003",
                display: "Maternal history of gestational diabetes (situation)"
            },
            {
                code: "704144000",
                display: "Maternal history of diabetes mellitus (situation)"
            },
            {
                code: "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
                display:
                    "Procedure needed (situation) + Drug therapy status (situation) : { Temporal context (attribute) = Current or specified time (qualifier value) , Associated procedure (attribute) = Drug therapy (procedure) , Procedure context (attribute) = Needed (qualifier value) , Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "160427003:246090004=40609001",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Infectious disease in mother complicating pregnancy, childbirth AND/OR puerperium (disorder)"
            },
            {
                code: "160427003:246090004=165775009",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Indirect Coombs test positive (finding)"
            },
            {
                code: "160427003:246090004=120001000119107",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Group B streptococcus infection in mother complicating childbirth (disorder)"
            },
            {
                code: "160427003:246090004=16356006",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Multiple pregnancy (disorder)"
            },
            {
                code: "413350009:{246090004=199646006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Polyhydramnios - delivered (disorder), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "413350009:{246090004=59566000,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Oligohydramnios (disorder), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "288256007",
                display: "History of maternal psychiatric problem (situation)"
            },
            {
                code: "413350009:{246090004=284465006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Finding relating to psychosocial functioning (finding), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "442080007",
                display: "Drug misuse by mother (situation)"
            }
        ]
    }
];

export { CMRPregnancyHistoryGerman as ConceptMap };

export default CMRPregnancyHistory;
