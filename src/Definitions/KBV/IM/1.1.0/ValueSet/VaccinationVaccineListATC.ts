/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_List_ATC

type VaccinationVaccineListATC =
    | "J07AR"
    | "J07AR01"
    | "J07AC"
    | "J07AC01"
    | "J07AD"
    | "J07AD01"
    | "J07AE"
    | "J07AE01"
    | "J07AE02"
    | "J07AE51"
    | "J07AF"
    | "J07AF01"
    | "J07AG"
    | "J07AG01"
    | "J07AG51"
    | "J07AG52"
    | "J07AG53"
    | "J07AH"
    | "J07AH01"
    | "J07AH02"
    | "J07AH03"
    | "J07AH04"
    | "J07AH05"
    | "J07AH06"
    | "J07AH07"
    | "J07AH08"
    | "J07AH09"
    | "J07AH10"
    | "J07AJ"
    | "J07AJ01"
    | "J07AJ02"
    | "J07AJ51"
    | "J07AJ52"
    | "J07AK"
    | "J07AK01"
    | "J07AL"
    | "J07AL01"
    | "J07AL02"
    | "J07AL52"
    | "J07AM"
    | "J07AM01"
    | "J07AM51"
    | "J07AM52"
    | "J07AN"
    | "J07AN01"
    | "J07AP"
    | "J07AP01"
    | "J07AP02"
    | "J07AP03"
    | "J07AP10"
    | "J07BA"
    | "J07BA01"
    | "J07BA02"
    | "J07BA03"
    | "J07BB"
    | "J07BB01"
    | "J07BB02"
    | "J07BB03"
    | "J07BC"
    | "J07BC01"
    | "J07BC02"
    | "J07BC03"
    | "J07BC20"
    | "J07BD"
    | "J07BD01"
    | "J07BD51"
    | "J07BD52"
    | "J07BD53"
    | "J07BD54"
    | "J07BE"
    | "J07BE01"
    | "J07BF"
    | "J07BF01"
    | "J07BF02"
    | "J07BF03"
    | "J07BF04"
    | "J07BG"
    | "J07BG01"
    | "J07BH"
    | "J07BH01"
    | "J07BH02"
    | "J07BJ"
    | "J07BJ01"
    | "J07BJ51"
    | "J07BK"
    | "J07BK01"
    | "J07BK02"
    | "J07BK03"
    | "J07BL"
    | "J07BL01"
    | "J07BM"
    | "J07BM01"
    | "J07BM02"
    | "J07BM03"
    | "J07BX"
    | "J07BX01"
    | "J07BX03"
    | "J07CA"
    | "J07CA01"
    | "J07CA02"
    | "J07CA03"
    | "J07CA04"
    | "J07CA05"
    | "J07CA06"
    | "J07CA07"
    | "J07CA08"
    | "J07CA09"
    | "J07CA10"
    | "J07CA11"
    | "J07CA12"
    | "J07CA13";

const VaccinationVaccineListATC: t.Type<VaccinationVaccineListATC> = t.union(
    [
        t.literal("J07AR"),
        t.literal("J07AR01"),
        t.literal("J07AC"),
        t.literal("J07AC01"),
        t.literal("J07AD"),
        t.literal("J07AD01"),
        t.literal("J07AE"),
        t.literal("J07AE01"),
        t.literal("J07AE02"),
        t.literal("J07AE51"),
        t.literal("J07AF"),
        t.literal("J07AF01"),
        t.literal("J07AG"),
        t.literal("J07AG01"),
        t.literal("J07AG51"),
        t.literal("J07AG52"),
        t.literal("J07AG53"),
        t.literal("J07AH"),
        t.literal("J07AH01"),
        t.literal("J07AH02"),
        t.literal("J07AH03"),
        t.literal("J07AH04"),
        t.literal("J07AH05"),
        t.literal("J07AH06"),
        t.literal("J07AH07"),
        t.literal("J07AH08"),
        t.literal("J07AH09"),
        t.literal("J07AH10"),
        t.literal("J07AJ"),
        t.literal("J07AJ01"),
        t.literal("J07AJ02"),
        t.literal("J07AJ51"),
        t.literal("J07AJ52"),
        t.literal("J07AK"),
        t.literal("J07AK01"),
        t.literal("J07AL"),
        t.literal("J07AL01"),
        t.literal("J07AL02"),
        t.literal("J07AL52"),
        t.literal("J07AM"),
        t.literal("J07AM01"),
        t.literal("J07AM51"),
        t.literal("J07AM52"),
        t.literal("J07AN"),
        t.literal("J07AN01"),
        t.literal("J07AP"),
        t.literal("J07AP01"),
        t.literal("J07AP02"),
        t.literal("J07AP03"),
        t.literal("J07AP10"),
        t.literal("J07BA"),
        t.literal("J07BA01"),
        t.literal("J07BA02"),
        t.literal("J07BA03"),
        t.literal("J07BB"),
        t.literal("J07BB01"),
        t.literal("J07BB02"),
        t.literal("J07BB03"),
        t.literal("J07BC"),
        t.literal("J07BC01"),
        t.literal("J07BC02"),
        t.literal("J07BC03"),
        t.literal("J07BC20"),
        t.literal("J07BD"),
        t.literal("J07BD01"),
        t.literal("J07BD51"),
        t.literal("J07BD52"),
        t.literal("J07BD53"),
        t.literal("J07BD54"),
        t.literal("J07BE"),
        t.literal("J07BE01"),
        t.literal("J07BF"),
        t.literal("J07BF01"),
        t.literal("J07BF02"),
        t.literal("J07BF03"),
        t.literal("J07BF04"),
        t.literal("J07BG"),
        t.literal("J07BG01"),
        t.literal("J07BH"),
        t.literal("J07BH01"),
        t.literal("J07BH02"),
        t.literal("J07BJ"),
        t.literal("J07BJ01"),
        t.literal("J07BJ51"),
        t.literal("J07BK"),
        t.literal("J07BK01"),
        t.literal("J07BK02"),
        t.literal("J07BK03"),
        t.literal("J07BL"),
        t.literal("J07BL01"),
        t.literal("J07BM"),
        t.literal("J07BM01"),
        t.literal("J07BM02"),
        t.literal("J07BM03"),
        t.literal("J07BX"),
        t.literal("J07BX01"),
        t.literal("J07BX03"),
        t.literal("J07CA"),
        t.literal("J07CA01"),
        t.literal("J07CA02"),
        t.literal("J07CA03"),
        t.literal("J07CA04"),
        t.literal("J07CA05"),
        t.literal("J07CA06"),
        t.literal("J07CA07"),
        t.literal("J07CA08"),
        t.literal("J07CA09"),
        t.literal("J07CA10"),
        t.literal("J07CA11"),
        t.literal("J07CA12"),
        t.literal("J07CA13")
    ],
    "VaccinationVaccineListATC"
);

export const VaccinationVaccineListATCArray: string[] = [
    "J07AR",
    "J07AR01",
    "J07AC",
    "J07AC01",
    "J07AD",
    "J07AD01",
    "J07AE",
    "J07AE01",
    "J07AE02",
    "J07AE51",
    "J07AF",
    "J07AF01",
    "J07AG",
    "J07AG01",
    "J07AG51",
    "J07AG52",
    "J07AG53",
    "J07AH",
    "J07AH01",
    "J07AH02",
    "J07AH03",
    "J07AH04",
    "J07AH05",
    "J07AH06",
    "J07AH07",
    "J07AH08",
    "J07AH09",
    "J07AH10",
    "J07AJ",
    "J07AJ01",
    "J07AJ02",
    "J07AJ51",
    "J07AJ52",
    "J07AK",
    "J07AK01",
    "J07AL",
    "J07AL01",
    "J07AL02",
    "J07AL52",
    "J07AM",
    "J07AM01",
    "J07AM51",
    "J07AM52",
    "J07AN",
    "J07AN01",
    "J07AP",
    "J07AP01",
    "J07AP02",
    "J07AP03",
    "J07AP10",
    "J07BA",
    "J07BA01",
    "J07BA02",
    "J07BA03",
    "J07BB",
    "J07BB01",
    "J07BB02",
    "J07BB03",
    "J07BC",
    "J07BC01",
    "J07BC02",
    "J07BC03",
    "J07BC20",
    "J07BD",
    "J07BD01",
    "J07BD51",
    "J07BD52",
    "J07BD53",
    "J07BD54",
    "J07BE",
    "J07BE01",
    "J07BF",
    "J07BF01",
    "J07BF02",
    "J07BF03",
    "J07BF04",
    "J07BG",
    "J07BG01",
    "J07BH",
    "J07BH01",
    "J07BH02",
    "J07BJ",
    "J07BJ01",
    "J07BJ51",
    "J07BK",
    "J07BK01",
    "J07BK02",
    "J07BK03",
    "J07BL",
    "J07BL01",
    "J07BM",
    "J07BM01",
    "J07BM02",
    "J07BM03",
    "J07BX",
    "J07BX01",
    "J07BX03",
    "J07CA",
    "J07CA01",
    "J07CA02",
    "J07CA03",
    "J07CA04",
    "J07CA05",
    "J07CA06",
    "J07CA07",
    "J07CA08",
    "J07CA09",
    "J07CA10",
    "J07CA11",
    "J07CA12",
    "J07CA13"
];

export const VaccinationVaccineListATCValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/atc",
        concept: [
            {
                code: "J07AR",
                display: "Typhus (exanthematicus)-Impfstoff"
            },
            {
                code: "J07AR01",
                display: "Typhus exanthematicus, inaktiviert, ganze Zelle"
            },
            {
                code: "J07AC",
                display: "Milzbrand-Impfstoffe"
            },
            {
                code: "J07AC01",
                display: "Anthrax-Antigen"
            },
            {
                code: "J07AD",
                display: "Brucellose-Impfstoffe"
            },
            {
                code: "J07AD01",
                display: "Brucella-Antigen"
            },
            {
                code: "J07AE",
                display: "Cholera-Impfstoffe"
            },
            {
                code: "J07AE01",
                display: "Cholera, inaktiviert, ganze Zelle"
            },
            {
                code: "J07AE02",
                display: "Cholera, lebend abgeschwächt"
            },
            {
                code: "J07AE51",
                display:
                    "Cholera, Kombinationen mit Typhus-Impfstoff,  inaktiviert, ganze Zelle"
            },
            {
                code: "J07AF",
                display: "Diphtherie-Impfstoffe"
            },
            {
                code: "J07AF01",
                display: "Diphtherie-Toxoid"
            },
            {
                code: "J07AG",
                display: "Haemophilus influenzae B-Impfstoffe"
            },
            {
                code: "J07AG01",
                display: "Haemophilus influenzae B, gereinigtes Antigen konjugiert"
            },
            {
                code: "J07AG51",
                display: "Haemophilus influenzae B, Kombinationen mit Toxoiden"
            },
            {
                code: "J07AG52",
                display:
                    "Haemophilus influenzae B, Kombinationen mit Pertussis und Toxoiden"
            },
            {
                code: "J07AG53",
                display:
                    "Haemophilus influenzae B, Kombinationen mit  Meningokokken C, konjugiert"
            },
            {
                code: "J07AH",
                display: "Meningokokken-Impfstoffe"
            },
            {
                code: "J07AH01",
                display: "Meningokokken A, gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AH02",
                display:
                    "Andere Meningokokken monovalent,  gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AH03",
                display:
                    "Meningokokken bivalent (A, C),  gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AH04",
                display:
                    "Meningokokken tetravalent (A, C, Y, W-135),  gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AH05",
                display:
                    "Andere Meningokokken polyvalent,  gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AH06",
                display: "Meningokokken B, äußere Vesikelmembran-Impfstoff"
            },
            {
                code: "J07AH07",
                display: "Meningokokken C, gereinigtes Polysaccharid-Antigen,  konjugiert"
            },
            {
                code: "J07AH08",
                display:
                    "Meningokokken tetravalent (A, C, Y, W-135),  gereinigtes Polysaccharid-Antigen, konjugiert"
            },
            {
                code: "J07AH09",
                display: "Meningokokken B, Multikomponenten-Impfstoff"
            },
            {
                code: "J07AH10",
                display: "Meningokokken A, gereinigtes Polysaccharid-Antigen,  konjugiert"
            },
            {
                code: "J07AJ",
                display: "Pertussis-Impfstoffe"
            },
            {
                code: "J07AJ01",
                display: "Pertussis, inaktiviert, ganze Zelle"
            },
            {
                code: "J07AJ02",
                display: "Pertussis, gereinigtes Antigen"
            },
            {
                code: "J07AJ51",
                display: "Pertussis, inaktiviert, ganze Zelle, Kombinationen mit Toxoiden"
            },
            {
                code: "J07AJ52",
                display: "Pertussis, gereinigtes Antigen, Kombinationen mit Toxoiden"
            },
            {
                code: "J07AK",
                display: "Pest-Impfstoffe"
            },
            {
                code: "J07AK01",
                display: "Pest, inaktiviert, ganze Zelle"
            },
            {
                code: "J07AL",
                display: "Pneumokokken-Impfstoffe"
            },
            {
                code: "J07AL01",
                display: "Pneumokokken, gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AL02",
                display: "Pneumokokken, gereinigtes Polysaccharid-Antigen, konjugiert"
            },
            {
                code: "J07AL52",
                display:
                    "Pneumokokken, gereinigtes Polysaccharid-Antigen  und Haemophilus influenzae B, konjugiert"
            },
            {
                code: "J07AM",
                display: "Tetanus-Impfstoffe"
            },
            {
                code: "J07AM01",
                display: "Tetanus-Toxoid"
            },
            {
                code: "J07AM51",
                display: "Tetanus-Toxoid, Kombinationen mit Diphtherie-Toxoid"
            },
            {
                code: "J07AM52",
                display: "Tetanus-Toxoid, Kombinationen mit Tetanus-Immunglobulin"
            },
            {
                code: "J07AN",
                display: "Tuberkulose-Impfstoffe"
            },
            {
                code: "J07AN01",
                display: "Tuberkulose, lebend abgeschwächt"
            },
            {
                code: "J07AP",
                display: "Typhus-Impfstoffe"
            },
            {
                code: "J07AP01",
                display: "Typhus, oral, lebend abgeschwächt"
            },
            {
                code: "J07AP02",
                display: "Typhus, inaktiviert, ganze Zelle"
            },
            {
                code: "J07AP03",
                display: "Typhus, gereinigtes Polysaccharid-Antigen"
            },
            {
                code: "J07AP10",
                display: "Typhus, Kombinationen mit Paratyphustypen"
            },
            {
                code: "J07BA",
                display: "Encephalitis-Impfstoffe"
            },
            {
                code: "J07BA01",
                display: "FSME, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BA02",
                display: "Encephalitis, japanische, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BA03",
                display: "Encephalitis, japanische, lebend abgeschwächt"
            },
            {
                code: "J07BB",
                display: "Influenza-Impfstoffe"
            },
            {
                code: "J07BB01",
                display: "Influenza, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BB02",
                display: "Influenza, inaktiviert, Spaltvirus oder Oberflächenantigen"
            },
            {
                code: "J07BB03",
                display: "Influenza, lebend abgeschwächt"
            },
            {
                code: "J07BC",
                display: "Hepatitis-Impfstoffe"
            },
            {
                code: "J07BC01",
                display: "Hepatitis B, gereinigtes Antigen"
            },
            {
                code: "J07BC02",
                display: "Hepatitis A, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BC03",
                display: "Hepatitis A, gereinigtes Antigen"
            },
            {
                code: "J07BC20",
                display: "Kombinationen"
            },
            {
                code: "J07BD",
                display: "Masern-Impfstoffe"
            },
            {
                code: "J07BD01",
                display: "Masern, lebend abgeschwächt"
            },
            {
                code: "J07BD51",
                display: "Masern, Kombinationen mit Mumps, lebend abgeschwächt"
            },
            {
                code: "J07BD52",
                display:
                    "Masern, Kombinationen mit Mumps und Röteln,  lebend abgeschwächt"
            },
            {
                code: "J07BD53",
                display: "Masern, Kombinationen mit Röteln, lebend abgeschwächt"
            },
            {
                code: "J07BD54",
                display:
                    "Masern, Kombinationen mit Mumps, Röteln und Varicella,  lebend abgeschwächt"
            },
            {
                code: "J07BE",
                display: "Mumps-Impfstoffe"
            },
            {
                code: "J07BE01",
                display: "Mumps, lebend abgeschwächt"
            },
            {
                code: "J07BF",
                display: "Poliomyelitis-Impfstoffe"
            },
            {
                code: "J07BF01",
                display: "Poliomyelitis, oral, monovalent, lebend abgeschwächt"
            },
            {
                code: "J07BF02",
                display: "Poliomyelitis, oral, trivalent, lebend abgeschwächt"
            },
            {
                code: "J07BF03",
                display: "Poliomyelitis, trivalent, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BF04",
                display: "Poliomyelitis, oral, bivalent, lebend abgeschwächt"
            },
            {
                code: "J07BG",
                display: "Tollwut-Impfstoffe"
            },
            {
                code: "J07BG01",
                display: "Tollwut, inaktiviert, ganzes Virus"
            },
            {
                code: "J07BH",
                display: "Rotavirus-Diarrhoe-Impfstoffe"
            },
            {
                code: "J07BH01",
                display: "Rotavirus, lebend abgeschwächt"
            },
            {
                code: "J07BH02",
                display: "Rotavirus, pentavalent, lebend, Reassortanten"
            },
            {
                code: "J07BJ",
                display: "Röteln-Impfstoffe"
            },
            {
                code: "J07BJ01",
                display: "Röteln, lebend abgeschwächt"
            },
            {
                code: "J07BJ51",
                display: "Röteln, Kombinationen mit Mumps, lebend abgeschwächt"
            },
            {
                code: "J07BK",
                display: "Varicella Zoster Impfstoffe"
            },
            {
                code: "J07BK01",
                display: "Varicella, lebend abgeschwächt"
            },
            {
                code: "J07BK02",
                display: "Zoster Virus, lebend abgeschwächt"
            },
            {
                code: "J07BK03",
                display: "Zoster Virus, gereinigtes Antigen"
            },
            {
                code: "J07BL",
                display: "Gelbfieber-Impfstoffe"
            },
            {
                code: "J07BL01",
                display: "Gelbfieber, lebend abgeschwächt"
            },
            {
                code: "J07BM",
                display: "Papillomvirus-Impfstoffe"
            },
            {
                code: "J07BM01",
                display: "Humaner-Papillomvirus-Impfstoff (Typen 6,11,16,18)"
            },
            {
                code: "J07BM02",
                display: "Humaner-Papillomvirus-Impfstoff (Typen 16,18)"
            },
            {
                code: "J07BM03",
                display:
                    "Humaner-Papillomvirus-Impfstoff  (Typen 6,11,16,18,31,33,45,52,58)"
            },
            {
                code: "J07BX",
                display: "Andere virale Impfstoffe"
            },
            {
                code: "J07BX01",
                display: "Pocken-Impfstoff, lebend, modifiziert"
            },
            {
                code: "J07BX03",
                display: "Covid-19-Impfstoffe"
            },
            {
                code: "J07CA",
                display: "Bakterielle und virale Impfstoffe, kombiniert"
            },
            {
                code: "J07CA01",
                display: "Diphtherie-Poliomyelitis-Tetanus"
            },
            {
                code: "J07CA02",
                display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus"
            },
            {
                code: "J07CA03",
                display: "Diphtherie-Röteln-Tetanus"
            },
            {
                code: "J07CA04",
                display: "Haemophilus influenzae B und Poliomyelitis"
            },
            {
                code: "J07CA05",
                display: "Diphtherie-Hepatitis B-Pertussis-Tetanus"
            },
            {
                code: "J07CA06",
                display:
                    "Diphtherie-Haemophilus influenzae  B-Pertussis-Poliomyelitis-Tetanus"
            },
            {
                code: "J07CA07",
                display: "Diphtherie-Hepatitis B-Tetanus"
            },
            {
                code: "J07CA08",
                display: "Haemophilus influenzae B und Hepatitis B"
            },
            {
                code: "J07CA09",
                display:
                    "Diphtherie-Haemophilus influenzae  B-Pertussis-Poliomyelitis-Tetanus-Hepatitis B"
            },
            {
                code: "J07CA10",
                display: "Typhus-Hepatitis A"
            },
            {
                code: "J07CA11",
                display:
                    "Diphtherie-Haemophilus influenzae  B-Pertussis-Tetanus-Hepatitis B"
            },
            {
                code: "J07CA12",
                display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis B"
            },
            {
                code: "J07CA13",
                display:
                    "Diphtherie-Haemophilus influenzae  B-Pertussis-Tetanus-Hepatitis B-Meningokokken  A + C"
            }
        ]
    }
];

export default VaccinationVaccineListATC;
