// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Examination_Loinc_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Laboruntersuchungen mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRExaminationLoincGerman: ConceptMap = [
    {
        source: "http://loinc.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Loinc_German",
        element: [
            {
                code: "30954-2",
                display: "Relevant diagnostic tests/laboratory data Narrative",
                target: [
                    {
                        code: "Laboruntersuchungunspezifisch",
                        display: "Laboruntersuchung (unspezifisch)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "890-4",
                display: "Blood group antibody screen [Presence] in Serum or Plasma",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
                        display:
                            "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15343-7",
                display: "Blood group antibody screen [Titer] in Serum or Plasma",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
                        display: "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumNachweis",
                        display: "Röteln Virus Antikörper im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8013-5",
                display: "Rubella virus Ab [Units/volume] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
                        display:
                            "Röteln Virus Antikörper im Serum, Konzentration IE pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22497-2",
                display: "Rubella virus Ab [Titer] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumTiter",
                        display: "Röteln Virus Antikörper im Serum, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweis",
                        display: "HBs-Antigen im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718-7",
                display: "Hemoglobin [Mass/volume] in Blood",
                target: [
                    {
                        code: "HaemoglobinimBlutMasseproVolumen",
                        display: "Hämoglobin im Blut, Masse pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26453-1",
                display: "Erythrocytes [#/volume] in Blood",
                target: [
                    {
                        code: "ErythrozytenimBlutAnzahlproVolumen",
                        display: "Erythrozyten im Blut, Anzahl pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6357-8",
                display:
                    "Chlamydia trachomatis DNA [Presence] in Urine by NAA with probe detection",
                target: [
                    {
                        code: "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
                        display:
                            "Chlamydia trachomatis DNA aus einer Urinprobe mittels Nukleinsäure-amplifizierendem Test (NAT), Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationLoincGerman;
