// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U7a_Consultation_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U7a - Beratung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU7aConsultationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Consultation_German",
        element: [
            {
                code: "409059003",
                display: "Safety education, guidance, and counseling (procedure)",
                target: [
                    {
                        code: "Unfallverhuetung",
                        display: "Unfallverhütung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)",
                target: [
                    {
                        code: "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
                        display:
                            "Sprachberatung: Förderung von „Muttersprache“ und deutscher Sprache (einschließlich der Laut- und Gebärdensprache)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)",
                target: [
                    {
                        code: "Ernaehrung",
                        display: "Ernährung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304507003",
                display: "Exercise education (procedure)",
                target: [
                    {
                        code: "Bewegung",
                        display: "Bewegung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "709135003",
                display: "Video screen time education (procedure)",
                target: [
                    {
                        code: "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung",
                        display:
                            "Medien (z. B. Medienkonsum, TV, Spielekonsolen, Dauerbeschallung)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "410263001",
                display:
                    "Medical/dental care education, guidance, and counseling (procedure)",
                target: [
                    {
                        code: "InformationueberzahnaerztlicheVorsorgeab30Monaten",
                        display: "Information über zahnärztliche Vorsorge ab 30 Monaten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702971000",
                display: "Counseling for childhood immunization (procedure)",
                target: [
                    {
                        code: "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
                        display:
                            "Aufklärung über Impfungen/Vorschlag eines Impftermins, Impfstatus entsprechend Schutzimpfungs-Richtlinie des G-BA überprüfen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274410002",
                display: "Dental referral - child (procedure)",
                target: [
                    {
                        code: "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung",
                        display:
                            "Verweis zur Zahnärztin oder zum Zahnarzt zur zahnärztlichen Früherkennungsuntersuchung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU7aConsultationGerman;
