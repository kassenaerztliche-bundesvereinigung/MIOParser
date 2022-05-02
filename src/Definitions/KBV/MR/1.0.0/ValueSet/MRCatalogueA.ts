import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRCatalogueAGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRCatalogueAGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Catalogue_A

type MRCatalogueA =
    | "416471007"
    | "312850006"
    | "161460007"
    | "609328004"
    | "161664006"
    | "271596009"
    | "161152002"
    | "312850006:246090004=44795003"
    | "73211009"
    | "414916001"
    | "237837007"
    | "8447006"
    | "237240001"
    | "416413003"
    | "18656007"
    | "134521000119104"
    | "161765003"
    | "726565008"
    | "713651007"
    | "161743003"
    | "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}"
    | "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}"
    | "161805006"
    | "416940007:363589002=79876008"
    | "60001007:263502005=424572001"
    | "418138009";

const MRCatalogueA: t.Type<MRCatalogueA> = t.union(
    [
        t.literal("416471007"),
        t.literal("312850006"),
        t.literal("161460007"),
        t.literal("609328004"),
        t.literal("161664006"),
        t.literal("271596009"),
        t.literal("161152002"),
        t.literal("312850006:246090004=44795003"),
        t.literal("73211009"),
        t.literal("414916001"),
        t.literal("237837007"),
        t.literal("8447006"),
        t.literal("237240001"),
        t.literal("416413003"),
        t.literal("18656007"),
        t.literal("134521000119104"),
        t.literal("161765003"),
        t.literal("726565008"),
        t.literal("713651007"),
        t.literal("161743003"),
        t.literal(
            "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}"
        ),
        t.literal(
            "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}"
        ),
        t.literal("161805006"),
        t.literal("416940007:363589002=79876008"),
        t.literal("60001007:263502005=424572001"),
        t.literal("418138009")
    ],
    "MRCatalogueA"
);

export const MRCatalogueAArray: string[] = [
    "416471007",
    "312850006",
    "161460007",
    "609328004",
    "161664006",
    "271596009",
    "161152002",
    "312850006:246090004=44795003",
    "73211009",
    "414916001",
    "237837007",
    "8447006",
    "237240001",
    "416413003",
    "18656007",
    "134521000119104",
    "161765003",
    "726565008",
    "713651007",
    "161743003",
    "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}",
    "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}",
    "161805006",
    "416940007:363589002=79876008",
    "60001007:263502005=424572001",
    "418138009"
];

export const MRCatalogueAValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "416471007",
                display: "Family history of clinical finding (situation)"
            },
            {
                code: "312850006",
                display: "History of disorder (situation)"
            },
            {
                code: "161460007",
                display: "History of coagulation defect (situation)"
            },
            {
                code: "609328004",
                display: "Allergic disposition (finding)"
            },
            {
                code: "161664006",
                display: "History of blood transfusion (situation)"
            },
            {
                code: "271596009",
                display: "Mental distress (finding)"
            },
            {
                code: "161152002",
                display: "Social problem (finding)"
            },
            {
                code: "312850006:246090004=44795003",
                display:
                    "History of disorder (situation):Associated finding (attribute)=Rhesus isoimmunization affecting pregnancy (disorder)"
            },
            {
                code: "73211009",
                display: "Diabetes mellitus (disorder)"
            },
            {
                code: "414916001",
                display: "Obesity (disorder)"
            },
            {
                code: "237837007",
                display: "Primordial dwarfism (disorder)"
            },
            {
                code: "8447006",
                display: "Congenital anomaly of skeletal bone (disorder)"
            },
            {
                code: "237240001",
                display: "Teenage pregnancy (finding)"
            },
            {
                code: "416413003",
                display: "Advanced maternal age gravida (finding)"
            },
            {
                code: "18656007",
                display: "Grand multipara (finding)"
            },
            {
                code: "134521000119104",
                display: "Fertility preservation procedure done (situation)"
            },
            {
                code: "161765003",
                display: "History of premature delivery (situation)"
            },
            {
                code: "726565008",
                display: "Past history of small for gestational age baby (situation)"
            },
            {
                code: "713651007",
                display: "History of pregnancy with abortive outcome (situation)"
            },
            {
                code: "161743003",
                display: "History of stillbirth (situation)"
            },
            {
                code: "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}",
                display:
                    "History of clinical finding in subject (situation) : { Temporal context (attribute) = In the past (qualifier value), Finding context (attribute) = Known present (qualifier value),Associated finding (attribute) = Complication occurring during labor and delivery (disorder), Subject relationship context (attribute) = Subject of record (person)}"
            },
            {
                code: "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}",
                display:
                    "History of clinical finding in subject (situation) : { Temporal context (attribute) = In the past (qualifier value), Finding context (attribute) = Known present (qualifier value), Associated finding (attribute) = Complication of the puerperium (disorder), Subject relationship context (attribute) = Subject of record (person)}"
            },
            {
                code: "161805006",
                display: "History of cesarean section (situation)"
            },
            {
                code: "416940007:363589002=79876008",
                display:
                    "Past history of procedure : Associated procedure = Operation on uterus"
            },
            {
                code: "60001007:263502005=424572001",
                display:
                    "Not pregnant (finding) : Clinical course (attribute) = Clinical course with short duration (qualifier value)"
            },
            {
                code: "418138009",
                display: "Patient condition finding (finding)"
            }
        ]
    }
];

export { MRCatalogueAGerman as ConceptMap };

export default MRCatalogueA;
