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

// Diese Conceptmap verknüpft die null-Codes für null mit denen von null

import { ConceptMap } from "../../../../Interfaces";

const PSSubstanceTopATCSnomedGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://www.whocc.no/atc",
        element: [
            {
                code: "724024003",
                display: "Radium (223-Ra) dichloride (substance)",
                target: [
                    {
                        code: "V10XX03",
                        display: "[223Ra]Radiumdichlorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385548008",
                display: "Ibritumomab tiuxetan (substance)",
                target: [
                    {
                        code: "V10XX02",
                        display: "[90Y]Ibritumomab tiuxetan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421777009",
                display: "Abatacept (substance)",
                target: [
                    {
                        code: "L04AA24",
                        display: "Abatacept",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "699678007",
                display: "Abiraterone (substance)",
                target: [
                    {
                        code: "L02BX03",
                        display: "Abirateron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "5691000",
                display: "Absorbable gelatin sponge (substance)",
                target: [
                    {
                        code: "B02BC01",
                        display: "Absorbierbarer Gelatineschwamm",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "391704009",
                display: "Acemetacin (substance)",
                target: [
                    {
                        code: "M01AB11",
                        display: "Acemetacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372709008",
                display: "Acetazolamide (substance)",
                target: [
                    {
                        code: "S01EC01",
                        display: "Acetazolamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387440002",
                display: "Acetylcysteine (substance)",
                target: [
                    {
                        code: "R05CB01",
                        display: "Acetylcystein",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387458008",
                display: "Aspirin (substance)",
                target: [
                    {
                        code: "B01AC06",
                        display: "Acetylsalicylsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372729009",
                display: "Aciclovir (substance)",
                target: [
                    {
                        code: "S01AD03",
                        display: "Aciclovir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372729009",
                display: "Aciclovir (substance)",
                target: [
                    {
                        code: "J05AB01",
                        display: "Aciclovir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703922001",
                display: "Aclidinium bromide (substance)",
                target: [
                    {
                        code: "R03BB05",
                        display: "Aclidiniumbromid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407317001",
                display: "Adalimumab (substance)",
                target: [
                    {
                        code: "L04AB04",
                        display: "Adalimumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386934008",
                display: "Adapalene (substance)",
                target: [
                    {
                        code: "D10AD03",
                        display: "Adapalen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409114008",
                display: "Adefovir dipivoxil (substance)",
                target: [
                    {
                        code: "J05AF08",
                        display: "Adefovir dipivoxil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703579002",
                display: "Afatinib (substance)",
                target: [
                    {
                        code: "L01XE13",
                        display: "Afatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703840003",
                display: "Aflibercept (substance)",
                target: [
                    {
                        code: "S01LA05",
                        display: "Aflibercept",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424905009",
                display: "Agalsidase alfa (substance)",
                target: [
                    {
                        code: "A16AB03",
                        display: "Agalsidase alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424725004",
                display: "Agalsidase beta (substance)",
                target: [
                    {
                        code: "A16AB04",
                        display: "Agalsidase beta",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698012009",
                display: "Agomelatine (substance)",
                target: [
                    {
                        code: "N06AX22",
                        display: "Agomelatin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129472003",
                display: "Alemtuzumab (substance)",
                target: [
                    {
                        code: "L04AA34",
                        display: "Alemtuzumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "391730008",
                display: "Alendronic acid (substance)",
                target: [
                    {
                        code: "M05BA04",
                        display: "Alendronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11984007",
                display: "Alfacalcidol (substance)",
                target: [
                    {
                        code: "A11CC03",
                        display: "Alfacalcidol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387560008",
                display: "Alfentanil (substance)",
                target: [
                    {
                        code: "N01AH02",
                        display: "Alfentanil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395954002",
                display: "Alfuzosin (substance)",
                target: [
                    {
                        code: "G04CA01",
                        display: "Alfuzosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703393008",
                display: "Alglucosidase alfa (substance)",
                target: [
                    {
                        code: "A16AB07",
                        display: "Alglucosidase alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116086005",
                display: "Alitretinoin (substance)",
                target: [
                    {
                        code: "L01XX22",
                        display: "Alitretinoin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "724156007",
                display: "Alizapride (substance)",
                target: [
                    {
                        code: "A03FA05",
                        display: "Alizaprid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387135004",
                display: "Allopurinol (substance)",
                target: [
                    {
                        code: "M04AA01",
                        display: "Allopurinol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386983007",
                display: "Alprazolam (substance)",
                target: [
                    {
                        code: "N05BA12",
                        display: "Alprazolam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372763006",
                display: "Amantadine (substance)",
                target: [
                    {
                        code: "N04BB01",
                        display: "Amantadin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428159003",
                display: "Ambrisentan (substance)",
                target: [
                    {
                        code: "C02KX02",
                        display: "Ambrisentan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698024002",
                display: "Ambroxol (substance)",
                target: [
                    {
                        code: "R05CB06",
                        display: "Ambroxol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "422654000",
                display: "Amifampridine (substance)",
                target: [
                    {
                        code: "N07XX05",
                        display: "Amifampridin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372821002",
                display: "Amiodarone (substance)",
                target: [
                    {
                        code: "C01BD01",
                        display: "Amiodaron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "391761004",
                display: "Amisulpride (substance)",
                target: [
                    {
                        code: "N05AL05",
                        display: "Amisulprid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372726002",
                display: "Amitriptyline (substance)",
                target: [
                    {
                        code: "N06AA09",
                        display: "Amitriptylin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386864001",
                display: "Amlodipine (substance)",
                target: [
                    {
                        code: "C08CA01",
                        display: "Amlodipin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372687004",
                display: "Amoxicillin (substance)",
                target: [
                    {
                        code: "J01CA04",
                        display: "Amoxicillin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77703004",
                display: "Amphotericin B (substance)",
                target: [
                    {
                        code: "A01AB04",
                        display: "Amphotericin B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372561005",
                display: "Anagrelide (substance)",
                target: [
                    {
                        code: "L01XX35",
                        display: "Anagrelid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386910003",
                display: "Anastrozole (substance)",
                target: [
                    {
                        code: "L02BG03",
                        display: "Anastrozol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "769102002",
                display: "Human anti-D immunoglobulin (substance)",
                target: [
                    {
                        code: "J06BB01",
                        display: "Anti-D(rh)-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703350008",
                display: "Apremilast (substance)",
                target: [
                    {
                        code: "L04AA32",
                        display: "Apremilast",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "406784005",
                display: "Aripiprazole (substance)",
                target: [
                    {
                        code: "N05AX12",
                        display: "Aripiprazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72251000",
                display: "Arsenic trioxide (substance)",
                target: [
                    {
                        code: "L01XX27",
                        display: "Arsentrioxid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "715255009",
                display: "Asfotase alfa (substance)",
                target: [
                    {
                        code: "A16AB13",
                        display: "Asfotase alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "371014004",
                display: "Asparaginase (substance)",
                target: [
                    {
                        code: "L01XX02",
                        display: "Asparaginase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718843009",
                display: "Ataluren (substance)",
                target: [
                    {
                        code: "M09AX03",
                        display: "Ataluren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413592000",
                display: "Atazanavir (substance)",
                target: [
                    {
                        code: "J05AE08",
                        display: "Atazanavir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387506000",
                display: "Atenolol (substance)",
                target: [
                    {
                        code: "C07AB03",
                        display: "Atenolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407037005",
                display: "Atomoxetine (substance)",
                target: [
                    {
                        code: "N06BA09",
                        display: "Atomoxetin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373444002",
                display: "Atorvastatin (substance)",
                target: [
                    {
                        code: "C10AA05",
                        display: "Atorvastatin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372832002",
                display: "Atropine (substance)",
                target: [
                    {
                        code: "A03BA01",
                        display: "Atropin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372832002",
                display: "Atropine (substance)",
                target: [
                    {
                        code: "S01FA01",
                        display: "Atropin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427882000",
                display: "Axitinib (substance)",
                target: [
                    {
                        code: "L01XE17",
                        display: "Axitinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372574004",
                display: "Azathioprine (substance)",
                target: [
                    {
                        code: "L04AX01",
                        display: "Azathioprin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386936005",
                display: "Azelaic acid (substance)",
                target: [
                    {
                        code: "D10AX03",
                        display: "Azelainsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387531004",
                display: "Azithromycin (substance)",
                target: [
                    {
                        code: "S01AA26",
                        display: "Azithromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387531004",
                display: "Azithromycin (substance)",
                target: [
                    {
                        code: "J01FA10",
                        display: "Azithromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387386004",
                display: "Aztreonam (substance)",
                target: [
                    {
                        code: "J01DF01",
                        display: "Aztreonam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387342009",
                display: "Baclofen (substance)",
                target: [
                    {
                        code: "M03BX01",
                        display: "Baclofen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "782576004",
                display: "Tree pollen (substance)",
                target: [
                    {
                        code: "V01AA05",
                        display: "Baumpollen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116574000",
                display: "Beclometasone (substance)",
                target: [
                    {
                        code: "R01AD01",
                        display: "Beclometason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116574000",
                display: "Beclometasone (substance)",
                target: [
                    {
                        code: "R03BA01",
                        display: "Beclometason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714086004",
                display: "Bedaquiline (substance)",
                target: [
                    {
                        code: "J04AK05",
                        display: "Bedaquilin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418067008",
                display: "Betahistine (substance)",
                target: [
                    {
                        code: "N07CA01",
                        display: "Betahistin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116571008",
                display: "Betamethasone (substance)",
                target: [
                    {
                        code: "D07AC01",
                        display: "Betamethason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116571008",
                display: "Betamethasone (substance)",
                target: [
                    {
                        code: "D07XC01",
                        display: "Betamethason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116571008",
                display: "Betamethasone (substance)",
                target: [
                    {
                        code: "H02AB01",
                        display: "Betamethason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387023000",
                display: "Bexarotene (substance)",
                target: [
                    {
                        code: "L01XX25",
                        display: "Bexaroten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386908000",
                display: "Bicalutamide (substance)",
                target: [
                    {
                        code: "L02BB03",
                        display: "Bicalutamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129492005",
                display: "Bimatoprost (substance)",
                target: [
                    {
                        code: "S01EE03",
                        display: "Bimatoprost",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387359004",
                display: "Biperiden (substance)",
                target: [
                    {
                        code: "N04AA02",
                        display: "Biperiden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "255991004",
                display: "2-phenylphenol (substance)",
                target: [
                    {
                        code: "D08AE06",
                        display: "Biphenylol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386868003",
                display: "Bisoprolol (substance)",
                target: [
                    {
                        code: "C07AB07",
                        display: "Bisoprolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129498009",
                display: "Bivalirudin (substance)",
                target: [
                    {
                        code: "B01AE06",
                        display: "Bivalirudin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "716122004",
                display: "Blinatumomab (substance)",
                target: [
                    {
                        code: "L01XC19",
                        display: "Blinatumomab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698183007",
                display: "Boceprevir (substance)",
                target: [
                    {
                        code: "J05AE12",
                        display: "Boceprevir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407097007",
                display: "Bortezomib (substance)",
                target: [
                    {
                        code: "L01XX32",
                        display: "Bortezomib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385559004",
                display: "Bosentan (substance)",
                target: [
                    {
                        code: "C02KX01",
                        display: "Bosentan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703128001",
                display: "Bosutinib (substance)",
                target: [
                    {
                        code: "L01XE14",
                        display: "Bosutinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108890005",
                display: "Botulinum toxin type A (substance)",
                target: [
                    {
                        code: "M03AX21",
                        display: "Botulinumtoxin Typ A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713395006",
                display: "Brentuximab vedotin (substance)",
                target: [
                    {
                        code: "L01XC12",
                        display: "Brentuximabvedotin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372547000",
                display: "Brimonidine (substance)",
                target: [
                    {
                        code: "S01EA05",
                        display: "Brimonidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386925003",
                display: "Brinzolamide (substance)",
                target: [
                    {
                        code: "S01EC04",
                        display: "Brinzolamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395726003",
                display: "Budesonide (substance)",
                target: [
                    {
                        code: "A07EA06",
                        display: "Budesonid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395726003",
                display: "Budesonide (substance)",
                target: [
                    {
                        code: "R01AD05",
                        display: "Budesonid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395726003",
                display: "Budesonide (substance)",
                target: [
                    {
                        code: "R03BA02",
                        display: "Budesonid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387150008",
                display: "Bupivacaine (substance)",
                target: [
                    {
                        code: "N01BB01",
                        display: "Bupivacain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387173000",
                display: "Buprenorphine (substance)",
                target: [
                    {
                        code: "N02AE01",
                        display: "Buprenorphin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387564004",
                display: "Bupropion (substance)",
                target: [
                    {
                        code: "N06AX12",
                        display: "Bupropion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395744006",
                display: "Buserelin (substance)",
                target: [
                    {
                        code: "L02AE01",
                        display: "Buserelin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395739004",
                display: "Scopolamine butylbromide (substance)",
                target: [
                    {
                        code: "A03BB01",
                        display: "Butylscopolamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "735267002",
                display: "Human C1 esterase inhibitor (substance)",
                target: [
                    {
                        code: "B06AC01",
                        display: "C1-Inhibitor, aus Plasma gewonnen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "446706007",
                display: "Cabazitaxel (substance)",
                target: [
                    {
                        code: "L01CD04",
                        display: "Cabazitaxel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718844003",
                display: "Cabozantinib (substance)",
                target: [
                    {
                        code: "L01XE26",
                        display: "Cabozantinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395766004",
                display: "Calcipotriol (substance)",
                target: [
                    {
                        code: "D05AX02",
                        display: "Calcipotriol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "259333003",
                display: "Calcitriol (substance)",
                target: [
                    {
                        code: "A11CC04",
                        display: "Calcitriol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387019008",
                display: "Calcium acetate (substance)",
                target: [
                    {
                        code: "V03AE07",
                        display: "Calciumacetat, wasserfrei",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698091001",
                display: "Canakinumab (substance)",
                target: [
                    {
                        code: "L04AC08",
                        display: "Canakinumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372512008",
                display: "Candesartan (substance)",
                target: [
                    {
                        code: "C09CA06",
                        display: "Candesartan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386906001",
                display: "Capecitabine (substance)",
                target: [
                    {
                        code: "L01BC06",
                        display: "Capecitabin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387160004",
                display: "Captopril (substance)",
                target: [
                    {
                        code: "C09AA01",
                        display: "Captopril",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387222003",
                display: "Carbamazepine (substance)",
                target: [
                    {
                        code: "N03AF01",
                        display: "Carbamazepin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713463006",
                display: "Carfilzomib (substance)",
                target: [
                    {
                        code: "L01XX45",
                        display: "Carfilzomib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412295009",
                display: "Carglumic acid (substance)",
                target: [
                    {
                        code: "A16AA05",
                        display: "Carglumsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386870007",
                display: "Carvedilol (substance)",
                target: [
                    {
                        code: "C07AG02",
                        display: "Carvedilol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387270009",
                display: "Cefaclor (substance)",
                target: [
                    {
                        code: "J01DC04",
                        display: "Cefaclor",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387534007",
                display: "Cefpodoxime (substance)",
                target: [
                    {
                        code: "J01DD13",
                        display: "Cefpodoxim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372833007",
                display: "Cefuroxime (substance)",
                target: [
                    {
                        code: "J01DC02",
                        display: "Cefuroxim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116081000",
                display: "Celecoxib (substance)",
                target: [
                    {
                        code: "M01AH01",
                        display: "Celecoxib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703146007",
                display: "Ceritinib (substance)",
                target: [
                    {
                        code: "L01XE28",
                        display: "Ceritinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "430306004",
                display: "Certolizumab pegol (substance)",
                target: [
                    {
                        code: "L04AB05",
                        display: "Certolizumab pegol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395961003",
                display: "Certoparin (substance)",
                target: [
                    {
                        code: "B01AB13",
                        display: "Certoparin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372523007",
                display: "Cetirizine (substance)",
                target: [
                    {
                        code: "R06AE07",
                        display: "Cetirizin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "82490009",
                display: "Chenodeoxycholic acid (substance)",
                target: [
                    {
                        code: "A05AA01",
                        display: "Chenodeoxycholsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373568007",
                display: "Chlorhexidine (substance)",
                target: [
                    {
                        code: "A01AB03",
                        display: "Chlorhexidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "734645001",
                display: "Chlormadinone (substance)",
                target: [
                    {
                        code: "G03DB06",
                        display: "Chlormadinon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387317000",
                display: "Chlorprothixene (substance)",
                target: [
                    {
                        code: "N05AF03",
                        display: "Chlorprothixen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373509001",
                display: "Chlortetracycline (substance)",
                target: [
                    {
                        code: "D10AF07",
                        display: "Chlortetracyclin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17147002",
                display: "Cholic acid (substance)",
                target: [
                    {
                        code: "A05AA03",
                        display: "Cholsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417420004",
                display: "Ciclesonide (substance)",
                target: [
                    {
                        code: "R03BA08",
                        display: "Ciclesonid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372854000",
                display: "Ciclopirox (substance)",
                target: [
                    {
                        code: "D01AE14",
                        display: "Ciclopirox",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387467008",
                display: "Ciclosporin (substance)",
                target: [
                    {
                        code: "L04AD01",
                        display: "Ciclosporin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409392004",
                display: "Cinacalcet (substance)",
                target: [
                    {
                        code: "H05BX01",
                        display: "Cinacalcet",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395953008",
                display: "Cinchocaine (substance)",
                target: [
                    {
                        code: "C05AD04",
                        display: "Cinchocain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372840008",
                display: "Ciprofloxacin (substance)",
                target: [
                    {
                        code: "J01MA02",
                        display: "Ciprofloxacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372840008",
                display: "Ciprofloxacin (substance)",
                target: [
                    {
                        code: "S02AA15",
                        display: "Ciprofloxacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372596005",
                display: "Citalopram (substance)",
                target: [
                    {
                        code: "N06AB04",
                        display: "Citalopram",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387487009",
                display: "Clarithromycin (substance)",
                target: [
                    {
                        code: "J01FA09",
                        display: "Clarithromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372744005",
                display: "Clemastine (substance)",
                target: [
                    {
                        code: "R06AA04",
                        display: "Clemastin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372786004",
                display: "Clindamycin (substance)",
                target: [
                    {
                        code: "J01FF01",
                        display: "Clindamycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372786004",
                display: "Clindamycin (substance)",
                target: [
                    {
                        code: "G01AA10",
                        display: "Clindamycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419129004",
                display: "Clobetasol (substance)",
                target: [
                    {
                        code: "D07AD01",
                        display: "Clobetasol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387166005",
                display: "Clomifene (substance)",
                target: [
                    {
                        code: "G03GB02",
                        display: "Clomifen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372903001",
                display: "Clomipramine (substance)",
                target: [
                    {
                        code: "N06AA04",
                        display: "Clomipramin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372805007",
                display: "Clonidine (substance)",
                target: [
                    {
                        code: "C02AC01",
                        display: "Clonidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372805007",
                display: "Clonidine (substance)",
                target: [
                    {
                        code: "S01EA04",
                        display: "Clonidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386952008",
                display: "Clopidogrel (substance)",
                target: [
                    {
                        code: "B01AC04",
                        display: "Clopidogrel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387325003",
                display: "Clotrimazole (substance)",
                target: [
                    {
                        code: "G01AF02",
                        display: "Clotrimazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387568001",
                display: "Clozapine (substance)",
                target: [
                    {
                        code: "N05AH02",
                        display: "Clozapin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "715257001",
                display: "Cobimetinib (substance)",
                target: [
                    {
                        code: "L01XE38",
                        display: "Cobimetinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387494007",
                display: "Codeine (substance)",
                target: [
                    {
                        code: "R05DA04",
                        display: "Codein",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18414002",
                display: "Colecalciferol (substance)",
                target: [
                    {
                        code: "A11CC05",
                        display: "Colecalciferol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387408001",
                display: "Colestyramine (substance)",
                target: [
                    {
                        code: "C10AC01",
                        display: "Colestyramin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713468002",
                display: "Conestat alfa (substance)",
                target: [
                    {
                        code: "B06AC04",
                        display: "Conestat alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703637000",
                display: "Crizotinib (substance)",
                target: [
                    {
                        code: "L01XE16",
                        display: "Crizotinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419382002",
                display: "Cyanocobalamin (substance)",
                target: [
                    {
                        code: "B03BA01",
                        display: "Cyanocobalamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372869004",
                display: "Cyclopentolate (substance)",
                target: [
                    {
                        code: "S01FA04",
                        display: "Cyclopentolat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "700029008",
                display: "Dabigatran etexilate (substance)",
                target: [
                    {
                        code: "B01AE07",
                        display: "Dabigatran etexilat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703641001",
                display: "Dabrafenib (substance)",
                target: [
                    {
                        code: "L01XE23",
                        display: "Dabrafenib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "712519008",
                display: "Daclatasvir (substance)",
                target: [
                    {
                        code: "J05AX14",
                        display: "Daclatasvir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372563008",
                display: "Dalteparin (substance)",
                target: [
                    {
                        code: "B01AB04",
                        display: "Dalteparin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385608005",
                display: "Darbepoetin alfa (substance)",
                target: [
                    {
                        code: "B03XA02",
                        display: "Darbepoetin alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "416140008",
                display: "Darifenacin (substance)",
                target: [
                    {
                        code: "G04BD10",
                        display: "Darifenacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423888002",
                display: "Darunavir (substance)",
                target: [
                    {
                        code: "J05AE10",
                        display: "Darunavir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714104000",
                display: "Dasabuvir (substance)",
                target: [
                    {
                        code: "J05AX16",
                        display: "Dasabuvir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423658008",
                display: "Dasatinib (substance)",
                target: [
                    {
                        code: "L01XE06",
                        display: "Dasatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420759005",
                display: "Decitabine (substance)",
                target: [
                    {
                        code: "L01BC08",
                        display: "Decitabin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419985007",
                display: "Deferasirox (substance)",
                target: [
                    {
                        code: "V03AC03",
                        display: "Deferasirox",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714097004",
                display: "Delamanid (substance)",
                target: [
                    {
                        code: "J04AK06",
                        display: "Delamanid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "446321003",
                display: "Denosumab (substance)",
                target: [
                    {
                        code: "M05BX04",
                        display: "Denosumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396015008",
                display: "Desloratadine (substance)",
                target: [
                    {
                        code: "R06AX27",
                        display: "Desloratadin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126189002",
                display: "Desmopressin (substance)",
                target: [
                    {
                        code: "H01BA02",
                        display: "Desmopressin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126108008",
                display: "Desogestrel (substance)",
                target: [
                    {
                        code: "G03AC09",
                        display: "Desogestrel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372584003",
                display: "Dexamethasone (substance)",
                target: [
                    {
                        code: "H02AB02",
                        display: "Dexamethason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372584003",
                display: "Dexamethasone (substance)",
                target: [
                    {
                        code: "S01BA01",
                        display: "Dexamethason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387278002",
                display: "Dexamfetamine (substance)",
                target: [
                    {
                        code: "N06BA02",
                        display: "Dexamfetamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396018005",
                display: "Dexketoprofen (substance)",
                target: [
                    {
                        code: "M01AE17",
                        display: "Dexketoprofen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126226000",
                display: "Dexpanthenol (substance)",
                target: [
                    {
                        code: "S01XA12",
                        display: "Dexpanthenol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126226000",
                display: "Dexpanthenol (substance)",
                target: [
                    {
                        code: "D03AX03",
                        display: "Dexpanthenol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108825009",
                display: "Dexrazoxane (substance)",
                target: [
                    {
                        code: "V03AF02",
                        display: "Dexrazoxan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387264003",
                display: "Diazepam (substance)",
                target: [
                    {
                        code: "N05BA01",
                        display: "Diazepam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421944000",
                display: "Dibotermin alfa (substance)",
                target: [
                    {
                        code: "M05BC01",
                        display: "Dibotermin alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7034005",
                display: "Diclofenac (substance)",
                target: [
                    {
                        code: "M01AB05",
                        display: "Diclofenac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7034005",
                display: "Diclofenac (substance)",
                target: [
                    {
                        code: "S01BC03",
                        display: "Diclofenac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7034005",
                display: "Diclofenac (substance)",
                target: [
                    {
                        code: "M02AA15",
                        display: "Diclofenac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7034005",
                display: "Diclofenac (substance)",
                target: [
                    {
                        code: "D11AX18",
                        display: "Diclofenac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373534001",
                display: "Digitoxin (substance)",
                target: [
                    {
                        code: "C01AA04",
                        display: "Digitoxin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387322000",
                display: "Dihydrocodeine (substance)",
                target: [
                    {
                        code: "R05DA14",
                        display: "Dihydrocodein",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387469006",
                display: "Dimenhydrinate (substance)",
                target: [
                    {
                        code: "A04AB02",
                        display: "Dimenhydrinat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "724035008",
                display: "Dimethyl fumarate (substance)",
                target: [
                    {
                        code: "N07XX09",
                        display: "Dimethylfumarat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387142004",
                display: "Dimetindene (substance)",
                target: [
                    {
                        code: "R06AB03",
                        display: "Dimetinden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395966008",
                display: "Distigmine (substance)",
                target: [
                    {
                        code: "N07AA03",
                        display: "Distigmin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713464000",
                display: "Dolutegravir (substance)",
                target: [
                    {
                        code: "J05AX12",
                        display: "Dolutegravir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387181004",
                display: "Domperidone (substance)",
                target: [
                    {
                        code: "A03FA03",
                        display: "Domperidon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386855006",
                display: "Donepezil (substance)",
                target: [
                    {
                        code: "N06DA02",
                        display: "Donepezil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373447009",
                display: "Dorzolamide (substance)",
                target: [
                    {
                        code: "S01EC03",
                        display: "Dorzolamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372508002",
                display: "Doxazosin (substance)",
                target: [
                    {
                        code: "C02CA04",
                        display: "Doxazosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372587005",
                display: "Doxepin (substance)",
                target: [
                    {
                        code: "N06AA12",
                        display: "Doxepin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372478003",
                display: "Doxycycline (substance)",
                target: [
                    {
                        code: "J01AA02",
                        display: "Doxycyclin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443195003",
                display: "Dronedarone (substance)",
                target: [
                    {
                        code: "C01BD07",
                        display: "Dronedaron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407032004",
                display: "Duloxetine (substance)",
                target: [
                    {
                        code: "N06AX21",
                        display: "Duloxetin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407032004",
                display: "Duloxetine (substance)",
                target: [
                    {
                        code: "G04BX18",
                        display: "Duloxetin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427429004",
                display: "Eculizumab (substance)",
                target: [
                    {
                        code: "L04AA25",
                        display: "Eculizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "768386004",
                display: "Hedera leaf (substance)",
                target: [
                    {
                        code: "R05CP02",
                        display: "Efeublätter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396058007",
                display: "Ferrous glycine sulfate (substance)",
                target: [
                    {
                        code: "B03AA01",
                        display: "Eisen(II)glycinsulfat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387402000",
                display: "Ferrous sulfate (substance)",
                target: [
                    {
                        code: "B03AA07",
                        display: "Eisen(II)sulfat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116130008",
                display: "Sodium ferric gluconate complex (substance)",
                target: [
                    {
                        code: "B03AC07",
                        display: "Eisen(III)natrium-Gluconat-Komplex",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714006001",
                display: "Eliglustat (substance)",
                target: [
                    {
                        code: "A16AX10",
                        display: "Eliglustat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432005001",
                display: "Eltrombopag (substance)",
                target: [
                    {
                        code: "B02BX05",
                        display: "Eltrombopag",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372658000",
                display: "Enalapril (substance)",
                target: [
                    {
                        code: "C09AA02",
                        display: "Enalapril",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409127007",
                display: "409127007",
                target: [
                    {
                        code: "J05AX07",
                        display: "Enfuvirtid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372562003",
                display: "Enoxaparin (substance)",
                target: [
                    {
                        code: "B01AB05",
                        display: "Enoxaparin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "416644000",
                display: "Entecavir (substance)",
                target: [
                    {
                        code: "J05AF10",
                        display: "Entecavir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703125003",
                display: "Enzalutamide (substance)",
                target: [
                    {
                        code: "L02BB04",
                        display: "Enzalutamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387362001",
                display: "Epinephrine (substance)",
                target: [
                    {
                        code: "C01CA24",
                        display: "Epinephrin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407010008",
                display: "Eplerenone (substance)",
                target: [
                    {
                        code: "C03DA04",
                        display: "Eplerenon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116066006",
                display: "Eptacog alfa (substance)",
                target: [
                    {
                        code: "B02BD08",
                        display: "Eptacog alfa (aktiviert)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414123001",
                display: "Erlotinib (substance)",
                target: [
                    {
                        code: "L01XE03",
                        display: "Erlotinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372694001",
                display: "Erythromycin (substance)",
                target: [
                    {
                        code: "D10AF02",
                        display: "Erythromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372694001",
                display: "Erythromycin (substance)",
                target: [
                    {
                        code: "J01FA01",
                        display: "Erythromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "83042003",
                display: "Erythropoietin (substance)",
                target: [
                    {
                        code: "B03XA01",
                        display: "Erythropoietin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400447003",
                display: "Escitalopram (substance)",
                target: [
                    {
                        code: "N06AB10",
                        display: "Escitalopram",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396047003",
                display: "Esomeprazole (substance)",
                target: [
                    {
                        code: "A02BC05",
                        display: "Esomeprazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126172005",
                display: "Estradiol (substance)",
                target: [
                    {
                        code: "G03CA03",
                        display: "Estradiol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126172005",
                display: "Estradiol (substance)",
                target: [
                    {
                        code: "G03CD03",
                        display: "Estradiol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73723004",
                display: "Estriol (substance)",
                target: [
                    {
                        code: "G03CD01",
                        display: "Estriol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73723004",
                display: "Estriol (substance)",
                target: [
                    {
                        code: "G03CA04",
                        display: "Estriol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387045004",
                display: "Etanercept (substance)",
                target: [
                    {
                        code: "L04AB01",
                        display: "Etanercept",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387244008",
                display: "Ethosuximide (substance)",
                target: [
                    {
                        code: "N03AD01",
                        display: "Ethosuximid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409134009",
                display: "Etoricoxib (substance)",
                target: [
                    {
                        code: "M01AH05",
                        display: "Etoricoxib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428698007",
                display: "Everolimus (substance)",
                target: [
                    {
                        code: "L01XE10",
                        display: "Everolimus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428698007",
                display: "Everolimus (substance)",
                target: [
                    {
                        code: "L04AA18",
                        display: "Everolimus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409149001",
                display: "Ezetimibe (substance)",
                target: [
                    {
                        code: "C10AX09",
                        display: "Ezetimib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "109003006",
                display: "Anti-inhibitor coagulant complex (substance)",
                target: [
                    {
                        code: "B02BD03",
                        display: "Faktor-VIII-Inhibitor-bypass-Aktivität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "80994002",
                display: "Fampridine (substance)",
                target: [
                    {
                        code: "N07XX07",
                        display: "Fampridin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441743008",
                display: "Febuxostat (substance)",
                target: [
                    {
                        code: "M04AA03",
                        display: "Febuxostat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386863007",
                display: "Felodipine (substance)",
                target: [
                    {
                        code: "C08CA02",
                        display: "Felodipin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386879008",
                display: "Fenofibrate (substance)",
                target: [
                    {
                        code: "C10AB05",
                        display: "Fenofibrat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395976006",
                display: "Fenoterol (substance)",
                target: [
                    {
                        code: "R03AC04",
                        display: "Fenoterol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373492002",
                display: "Fentanyl (substance)",
                target: [
                    {
                        code: "N02AB03",
                        display: "Fentanyl",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373492002",
                display: "Fentanyl (substance)",
                target: [
                    {
                        code: "N01AH01",
                        display: "Fentanyl",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432255001",
                display: "Fesoterodine (substance)",
                target: [
                    {
                        code: "G04BD11",
                        display: "Fesoterodin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372522002",
                display: "Fexofenadine (substance)",
                target: [
                    {
                        code: "R06AX26",
                        display: "Fexofenadin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703664004",
                display: "Fidaxomicin (substance)",
                target: [
                    {
                        code: "A07AA12",
                        display: "Fidaxomicin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386948008",
                display: "Filgrastim (substance)",
                target: [
                    {
                        code: "L03AA02",
                        display: "Filgrastim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386963006",
                display: "Finasteride (substance)",
                target: [
                    {
                        code: "G04CB01",
                        display: "Finasterid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "449000008",
                display: "Fingolimod (substance)",
                target: [
                    {
                        code: "L04AA27",
                        display: "Fingolimod",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372751001",
                display: "Flecainide (substance)",
                target: [
                    {
                        code: "C01BC04",
                        display: "Flecainid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387174006",
                display: "Fluconazole (substance)",
                target: [
                    {
                        code: "J02AC01",
                        display: "Fluconazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116588001",
                display: "Flunisolide (substance)",
                target: [
                    {
                        code: "R01AD04",
                        display: "Flunisolid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396059004",
                display: "Fluocinolone acetonide (substance)",
                target: [
                    {
                        code: "S01BA15",
                        display: "Fluocinolonacetonid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2925007",
                display: "Fluorometholone (substance)",
                target: [
                    {
                        code: "S01BA07",
                        display: "Fluorometholon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372767007",
                display: "Fluoxetine (substance)",
                target: [
                    {
                        code: "N06AB03",
                        display: "Fluoxetin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387567006",
                display: "Flupentixol (substance)",
                target: [
                    {
                        code: "N05AF01",
                        display: "Flupentixol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397192001",
                display: "Fluticasone (substance)",
                target: [
                    {
                        code: "R01AD08",
                        display: "Fluticason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397192001",
                display: "Fluticasone (substance)",
                target: [
                    {
                        code: "R03BA05",
                        display: "Fluticason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426409006",
                display: "Fluticasone furoate (substance)",
                target: [
                    {
                        code: "R01AD12",
                        display: "Fluticason furoat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387585004",
                display: "Fluvastatin (substance)",
                target: [
                    {
                        code: "C10AA04",
                        display: "Fluvastatin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372905008",
                display: "Fluvoxamine (substance)",
                target: [
                    {
                        code: "N06AB08",
                        display: "Fluvoxamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395862009",
                display: "Follitropin alfa (substance)",
                target: [
                    {
                        code: "G03GA05",
                        display: "Follitropin alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63718003",
                display: "Folic acid (substance)",
                target: [
                    {
                        code: "B03BB01",
                        display: "Folsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708189008",
                display: "Fondaparinux (substance)",
                target: [
                    {
                        code: "B01AX05",
                        display: "Fondaparinux",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414289007",
                display: "Formoterol (substance)",
                target: [
                    {
                        code: "R03AC13",
                        display: "Formoterol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372902006",
                display: "Foscarnet (substance)",
                target: [
                    {
                        code: "J05AD01",
                        display: "Foscarnet",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372534005",
                display: "Fosfomycin (substance)",
                target: [
                    {
                        code: "J01XX01",
                        display: "Fosfomycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385519002",
                display: "Fulvestrant (substance)",
                target: [
                    {
                        code: "L02BA03",
                        display: "Fulvestrant",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387475002",
                display: "Furosemide (substance)",
                target: [
                    {
                        code: "C03CA01",
                        display: "Furosemid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387530003",
                display: "Fusidic acid (substance)",
                target: [
                    {
                        code: "S01AA13",
                        display: "Fusidinsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387530003",
                display: "Fusidic acid (substance)",
                target: [
                    {
                        code: "D06AX01",
                        display: "Fusidinsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386845007",
                display: "Gabapentin (substance)",
                target: [
                    {
                        code: "N03AX12",
                        display: "Gabapentin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710810006",
                display: "Gadobenic acid (substance)",
                target: [
                    {
                        code: "V08CA08",
                        display: "Gadobensäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418351005",
                display: "Gadobutrol (substance)",
                target: [
                    {
                        code: "V08CA09",
                        display: "Gadobutrol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396067007",
                display: "Gadodiamide (substance)",
                target: [
                    {
                        code: "V08CA03",
                        display: "Gadodiamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420600009",
                display: "Gadoteridol (substance)",
                target: [
                    {
                        code: "V08CA04",
                        display: "Gadoteridol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710812003",
                display: "Gadoteric acid (substance)",
                target: [
                    {
                        code: "V08CA02",
                        display: "Gadotersäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409476008",
                display: "Gadoversetamide (substance)",
                target: [
                    {
                        code: "V08CA06",
                        display: "Gadoversetamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419797001",
                display: "Galsulfase (substance)",
                target: [
                    {
                        code: "A16AB08",
                        display: "Galsulfase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372848001",
                display: "Ganciclovir (substance)",
                target: [
                    {
                        code: "S01AD09",
                        display: "Ganciclovir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407100002",
                display: "Gefitinib (substance)",
                target: [
                    {
                        code: "L01XE02",
                        display: "Gefitinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387321007",
                display: "Gentamicin (substance)",
                target: [
                    {
                        code: "S01AA11",
                        display: "Gentamicin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387321007",
                display: "Gentamicin (substance)",
                target: [
                    {
                        code: "D06AX07",
                        display: "Gentamicin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372587005",
                display: "Doxepin (substance)",
                target: [
                    {
                        code: "D04AX01",
                        display: "Gerbstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "278910002",
                display: "Coagulation factor VIII (substance)",
                target: [
                    {
                        code: "B02BD02",
                        display: "Gerinnungsfaktor VIII",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108755008",
                display: "Glatiramer acetate (substance)",
                target: [
                    {
                        code: "L03AX13",
                        display: "Glatirameracetat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384978002",
                display: "Glibenclamide (substance)",
                target: [
                    {
                        code: "A10BB01",
                        display: "Glibenclamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386966003",
                display: "Glimepiride (substance)",
                target: [
                    {
                        code: "A10BB12",
                        display: "Glimepirid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67079006",
                display: "Glucose (substance)",
                target: [
                    {
                        code: "V04CA02",
                        display: "Glucose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67079006",
                display: "Glucose (substance)",
                target: [
                    {
                        code: "V04CA03",
                        display: "Glucose-Testzone, Blut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387404004",
                display: "Glyceryl trinitrate (substance)",
                target: [
                    {
                        code: "C01DA02",
                        display: "Glyceroltrinitrat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387122008",
                display: "Glycopyrronium bromide (substance)",
                target: [
                    {
                        code: "R03BB06",
                        display: "Glycopyrroniumbromid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442435002",
                display: "Golimumab (substance)",
                target: [
                    {
                        code: "L04AB06",
                        display: "Golimumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372489005",
                display: "Granisetron (substance)",
                target: [
                    {
                        code: "A04AA02",
                        display: "Granisetron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "256277009",
                display: "Grass pollen (substance)",
                target: [
                    {
                        code: "V01AA02",
                        display: "Gräserpollen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386837002",
                display: "Haloperidol (substance)",
                target: [
                    {
                        code: "N05AD01",
                        display: "Haloperidol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "720687003",
                display: "Dust mite protein (substance)",
                target: [
                    {
                        code: "V01AA03",
                        display: "Hausstaubmilben",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53048005",
                display: "Hematin (substance)",
                target: [
                    {
                        code: "B06AB01",
                        display: "Hematin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "109049002",
                display: "Histrelin (substance)",
                target: [
                    {
                        code: "L02AE05",
                        display: "Histrelin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38218009",
                display: "Hyaluronic acid (substance)",
                target: [
                    {
                        code: "S01XA28",
                        display: "Hyaluronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387525002",
                display: "Hydrochlorothiazide (substance)",
                target: [
                    {
                        code: "C03AA03",
                        display: "Hydrochlorothiazid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396458002",
                display: "Hydrocortisone (substance)",
                target: [
                    {
                        code: "S01BA02",
                        display: "Hydrocortison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396458002",
                display: "Hydrocortisone (substance)",
                target: [
                    {
                        code: "C05AA01",
                        display: "Hydrocortison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396458002",
                display: "Hydrocortisone (substance)",
                target: [
                    {
                        code: "A07EA02",
                        display: "Hydrocortison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396458002",
                display: "Hydrocortisone (substance)",
                target: [
                    {
                        code: "D07AA02",
                        display: "Hydrocortison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50665003",
                display: "Hydrocortisone butyrate (substance)",
                target: [
                    {
                        code: "D07AB02",
                        display: "Hydrocortisonbutyrat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44508008",
                display: "Hydromorphone (substance)",
                target: [
                    {
                        code: "N02AA03",
                        display: "Hydromorphon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387314007",
                display: "Hydroxycarbamide (substance)",
                target: [
                    {
                        code: "L01XX05",
                        display: "Hydroxycarbamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373540008",
                display: "Hydroxychloroquine (substance)",
                target: [
                    {
                        code: "P01BA02",
                        display: "Hydroxychloroquin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420936009",
                display: "Ibandronic acid (substance)",
                target: [
                    {
                        code: "M05BA06",
                        display: "Ibandronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710228002",
                display: "Ibrutinib (substance)",
                target: [
                    {
                        code: "L01XE27",
                        display: "Ibrutinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387207008",
                display: "Ibuprofen (substance)",
                target: [
                    {
                        code: "M01AE01",
                        display: "Ibuprofen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703834005",
                display: "Icatibant (substance)",
                target: [
                    {
                        code: "B06AC02",
                        display: "Icatibant",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710278000",
                display: "Idelalisib (substance)",
                target: [
                    {
                        code: "L01XX47",
                        display: "Idelalisib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84524005",
                display: "Idursulfase (substance)",
                target: [
                    {
                        code: "A16AB09",
                        display: "Idursulfase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395740002",
                display: "Iloprost (substance)",
                target: [
                    {
                        code: "C02KX08",
                        display: "Iloprost",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414460008",
                display: "Imatinib (substance)",
                target: [
                    {
                        code: "L01XE01",
                        display: "Imatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386968002",
                display: "Imiglucerase (substance)",
                target: [
                    {
                        code: "A16AB02",
                        display: "Imiglucerase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386941002",
                display: "Imiquimod (substance)",
                target: [
                    {
                        code: "D06BB10",
                        display: "Imiquimod",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420084002",
                display: "Human immunoglobulin (substance)",
                target: [
                    {
                        code: "J06BA01",
                        display:
                            "Immunglobuline, normal human, zur extravasalen Anwendung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420084002",
                display: "Human immunoglobulin (substance)",
                target: [
                    {
                        code: "J06BA02",
                        display:
                            "Immunglobuline, normal human, zur intravasalen Anwendung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373513008",
                display: "Indometacin (substance)",
                target: [
                    {
                        code: "M01AB01",
                        display: "Indometacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386891004",
                display: "Infliximab (substance)",
                target: [
                    {
                        code: "L04AB02",
                        display: "Infliximab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "325072002",
                display: "Insulin aspart (substance)",
                target: [
                    {
                        code: "A10AB05",
                        display: "Insulin aspart",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414515005",
                display: "Insulin detemir (substance)",
                target: [
                    {
                        code: "A10AE05",
                        display: "Insulin detemir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "411529005",
                display: "Insulin glargine (substance)",
                target: [
                    {
                        code: "A10AE04",
                        display: "Insulin glargin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "411530000",
                display: "Insulin glulisine (substance)",
                target: [
                    {
                        code: "A10AB06",
                        display: "Insulin glulisin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412210000",
                display: "Insulin lispro (substance)",
                target: [
                    {
                        code: "A10AB04",
                        display: "Insulin lispro",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386902004",
                display: "Interferon beta-1a (substance)",
                target: [
                    {
                        code: "L03AB07",
                        display: "Interferon beta-1a",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386903009",
                display: "Interferon beta-1b (substance)",
                target: [
                    {
                        code: "L03AB08",
                        display: "Interferon beta-1b",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386901006",
                display: "Interferon gamma-1b (substance)",
                target: [
                    {
                        code: "L03AB13",
                        display: "Interferon gamma 1b",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "42146005",
                display: "Iodide salt (substance)",
                target: [
                    {
                        code: "H03CA01",
                        display: "Iodide",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395750001",
                display: "Iodixanol (substance)",
                target: [
                    {
                        code: "V08AB09",
                        display: "Iodixanol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46257009",
                display: "Iodoform (substance)",
                target: [
                    {
                        code: "D09AA13",
                        display: "Iodoform",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395756007",
                display: "Iopromide (substance)",
                target: [
                    {
                        code: "V08AB05",
                        display: "Iopromid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "697995005",
                display: "Ipilimumab (substance)",
                target: [
                    {
                        code: "L01XC11",
                        display: "Ipilimumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386881005",
                display: "Ipratropium bromide (substance)",
                target: [
                    {
                        code: "R03BB01",
                        display: "Ipratropiumbromid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386877005",
                display: "Irbesartan (substance)",
                target: [
                    {
                        code: "C09CA04",
                        display: "Irbesartan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387332007",
                display: "Isosorbide dinitrate (substance)",
                target: [
                    {
                        code: "C01DA08",
                        display: "Isosorbiddinitrat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386854005",
                display: "Isosorbide mononitrate (substance)",
                target: [
                    {
                        code: "C01DA14",
                        display: "Isosorbidmononitrat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387208003",
                display: "Isotretinoin (substance)",
                target: [
                    {
                        code: "D10BA01",
                        display: "Isotretinoin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387532006",
                display: "Itraconazole (substance)",
                target: [
                    {
                        code: "J02AC02",
                        display: "Itraconazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421228002",
                display: "Ivabradine (substance)",
                target: [
                    {
                        code: "C01EB17",
                        display: "Ivabradin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703823007",
                display: "Ivacaftor (substance)",
                target: [
                    {
                        code: "R07AX02",
                        display: "Ivacaftor",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420467003",
                display: "Hypericum (substance)",
                target: [
                    {
                        code: "N06AP01",
                        display: "Johanniskraut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395838004",
                display: "Potassium aminobenzoate (substance)",
                target: [
                    {
                        code: "D11AX22",
                        display: "Kaliumaminobenzoat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8631001",
                display: "Potassium chloride (substance)",
                target: [
                    {
                        code: "A12BA01",
                        display: "Kaliumchlorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387396008",
                display: "Kanamycin (substance)",
                target: [
                    {
                        code: "S01AA24",
                        display: "Kanamycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372501008",
                display: "Ketorolac (substance)",
                target: [
                    {
                        code: "S01BC05",
                        display: "Ketorolac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61472002",
                display: "Collagen (substance)",
                target: [
                    {
                        code: "B02BC07",
                        display: "Kollagen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126098001",
                display: "Conjugated estrogen (substance)",
                target: [
                    {
                        code: "G03CA57",
                        display: "Konjugierte Estrogene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441647003",
                display: "Lacosamide (substance)",
                target: [
                    {
                        code: "N03AX18",
                        display: "Lacosamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "273945008",
                display: "Lactulose (substance)",
                target: [
                    {
                        code: "A06AD11",
                        display: "Lactulose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387562000",
                display: "Lamotrigine (substance)",
                target: [
                    {
                        code: "N03AX09",
                        display: "Lamotrigin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395765000",
                display: "Lanreotide (substance)",
                target: [
                    {
                        code: "H01CB03",
                        display: "Lanreotid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386888004",
                display: "Lansoprazole (substance)",
                target: [
                    {
                        code: "A02BC03",
                        display: "Lansoprazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414571007",
                display: "Lanthanum carbonate (substance)",
                target: [
                    {
                        code: "V03AE03",
                        display: "Lanthan(III)-carbonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425820005",
                display: "Lapatinib (substance)",
                target: [
                    {
                        code: "L01XE07",
                        display: "Lapatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409264006",
                display: "Laronidase (substance)",
                target: [
                    {
                        code: "A16AB05",
                        display: "Laronidase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386926002",
                display: "Latanoprost (substance)",
                target: [
                    {
                        code: "S01EE01",
                        display: "Latanoprost",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386981009",
                display: "Leflunomide (substance)",
                target: [
                    {
                        code: "L04AA13",
                        display: "Leflunomid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421471009",
                display: "Lenalidomide (substance)",
                target: [
                    {
                        code: "L04AX04",
                        display: "Lenalidomid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714108002",
                display: "Lenvatinib (substance)",
                target: [
                    {
                        code: "L01XE29",
                        display: "Lenvatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395986007",
                display: "Lercanidipine (substance)",
                target: [
                    {
                        code: "C08CA13",
                        display: "Lercanidipin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386911004",
                display: "Letrozole (substance)",
                target: [
                    {
                        code: "L02BG04",
                        display: "Letrozol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397198002",
                display: "Leuprorelin (substance)",
                target: [
                    {
                        code: "L02AE02",
                        display: "Leuprorelin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387000003",
                display: "Levetiracetam (substance)",
                target: [
                    {
                        code: "N03AX14",
                        display: "Levetiracetam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418934007",
                display: "Levobunolol (substance)",
                target: [
                    {
                        code: "S01ED03",
                        display: "Levobunolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421889003",
                display: "Levocetirizine (substance)",
                target: [
                    {
                        code: "R06AE09",
                        display: "Levocetirizin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387552007",
                display: "Levofloxacin (substance)",
                target: [
                    {
                        code: "J01MA12",
                        display: "Levofloxacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387509007",
                display: "Levomepromazine (substance)",
                target: [
                    {
                        code: "N05AA02",
                        display: "Levomepromazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126202002",
                display: "Levothyroxine sodium (substance)",
                target: [
                    {
                        code: "H03AA01",
                        display: "Levothyroxin-Natrium",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387480006",
                display: "Lidocaine (substance)",
                target: [
                    {
                        code: "N01BB02",
                        display: "Lidocain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387056004",
                display: "Linezolid (substance)",
                target: [
                    {
                        code: "J01XX08",
                        display: "Linezolid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710282003",
                display: "Lipegfilgrastim (substance)",
                target: [
                    {
                        code: "L03AA14",
                        display: "Lipegfilgrastim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444828003",
                display: "Liraglutide (substance)",
                target: [
                    {
                        code: "A10BX07",
                        display: "Liraglutid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425597005",
                display: "Lisdexamfetamine (substance)",
                target: [
                    {
                        code: "N06BA12",
                        display: "Lisdexamfetamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386873009",
                display: "Lisinopril (substance)",
                target: [
                    {
                        code: "C09AA03",
                        display: "Lisinopril",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "85899009",
                display: "Lithium (substance)",
                target: [
                    {
                        code: "N05AN01",
                        display: "Lithium",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387040009",
                display: "Loperamide (substance)",
                target: [
                    {
                        code: "A07DA03",
                        display: "Loperamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387106007",
                display: "Lorazepam (substance)",
                target: [
                    {
                        code: "N05BA06",
                        display: "Lorazepam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373567002",
                display: "Losartan (substance)",
                target: [
                    {
                        code: "C09CA01",
                        display: "Losartan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419830007",
                display: "Mebeverine (substance)",
                target: [
                    {
                        code: "A03AA04",
                        display: "Mebeverin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41199001",
                display: "Melatonin (substance)",
                target: [
                    {
                        code: "N05CH01",
                        display: "Melatonin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387055000",
                display: "Meloxicam (substance)",
                target: [
                    {
                        code: "M01AC06",
                        display: "Meloxicam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442519006",
                display: "Melperone (substance)",
                target: [
                    {
                        code: "N05AD03",
                        display: "Melperon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "406458000",
                display: "Memantine (substance)",
                target: [
                    {
                        code: "N06DX01",
                        display: "Memantin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59560006",
                display: "Mepivacaine (substance)",
                target: [
                    {
                        code: "N01BB03",
                        display: "Mepivacain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373457005",
                display: "Mercaptamine (substance)",
                target: [
                    {
                        code: "A16AA04",
                        display: "Mercaptamin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386835005",
                display: "Mercaptopurine (substance)",
                target: [
                    {
                        code: "L01BB02",
                        display: "Mercaptopurin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387501005",
                display: "Mesalazine (substance)",
                target: [
                    {
                        code: "A07EC02",
                        display: "Mesalazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22165008",
                display: "Metamizole sodium (substance)",
                target: [
                    {
                        code: "N02BB02",
                        display: "Metamizol-Natrium",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372567009",
                display: "Metformin (substance)",
                target: [
                    {
                        code: "A10BA02",
                        display: "Metformin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387486000",
                display: "Methocarbamol (substance)",
                target: [
                    {
                        code: "M03BA03",
                        display: "Methocarbamol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387381009",
                display: "Methotrexate (substance)",
                target: [
                    {
                        code: "M01CX01",
                        display: "Methotrexat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425913002",
                display: "Methoxy polyethylene glycol-epoetin beta (substance)",
                target: [
                    {
                        code: "B03XA03",
                        display: "Methoxy-Polyethylenglycol-Epoetin beta",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373337007",
                display: "Methylphenidate (substance)",
                target: [
                    {
                        code: "N06BA04",
                        display: "Methylphenidat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116593003",
                display: "Methylprednisolone (substance)",
                target: [
                    {
                        code: "H02AB04",
                        display: "Methylprednisolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708199003",
                display: "Methylprednisolone aceponate (substance)",
                target: [
                    {
                        code: "D07AC14",
                        display: "Methylprednisolonaceponat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372776000",
                display: "Metoclopramide (substance)",
                target: [
                    {
                        code: "A03FA01",
                        display: "Metoclopramid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372826007",
                display: "Metoprolol (substance)",
                target: [
                    {
                        code: "C07AB02",
                        display: "Metoprolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372602008",
                display: "Metronidazole (substance)",
                target: [
                    {
                        code: "P01AB01",
                        display: "Metronidazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372602008",
                display: "Metronidazole (substance)",
                target: [
                    {
                        code: "G01AF01",
                        display: "Metronidazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372602008",
                display: "Metronidazole (substance)",
                target: [
                    {
                        code: "D06BX01",
                        display: "Metronidazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373476007",
                display: "Midazolam (substance)",
                target: [
                    {
                        code: "N05CD08",
                        display: "Midazolam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373476007",
                display: "Midazolam (substance)",
                target: [
                    {
                        code: "N03AE02",
                        display: "Midazolam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710284002",
                display: "Mifamurtide (substance)",
                target: [
                    {
                        code: "L03AX15",
                        display: "Mifamurtid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412296005",
                display: "Miglustat (substance)",
                target: [
                    {
                        code: "A16AX06",
                        display: "Miglustat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713642004",
                display: "Miltefosine (substance)",
                target: [
                    {
                        code: "P01CX04",
                        display: "Miltefosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372653009",
                display: "Minocycline (substance)",
                target: [
                    {
                        code: "J01AA08",
                        display: "Minocyclin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703803006",
                display: "Mirabegron (substance)",
                target: [
                    {
                        code: "G04BD12",
                        display: "Mirabegron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386847004",
                display: "Mirtazapine (substance)",
                target: [
                    {
                        code: "N06AX11",
                        display: "Mirtazapin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387331000",
                display: "Mitomycin (substance)",
                target: [
                    {
                        code: "L01DC03",
                        display: "Mitomycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108447000",
                display: "Mivacurium chloride (substance)",
                target: [
                    {
                        code: "M03AC10",
                        display: "Mivacuriumchlorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698196008",
                display: "Molsidomine (substance)",
                target: [
                    {
                        code: "C01DX12",
                        display: "Molsidomin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395990009",
                display: "Mometasone (substance)",
                target: [
                    {
                        code: "D07AC13",
                        display: "Mometason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395990009",
                display: "Mometasone (substance)",
                target: [
                    {
                        code: "R01AD09",
                        display: "Mometason",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373728005",
                display: "Montelukast (substance)",
                target: [
                    {
                        code: "R03DC03",
                        display: "Montelukast",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441764007",
                display: "Moroctocog alfa (substance)",
                target: [
                    {
                        code: "B02BD31",
                        display: "Moroctocog alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373529000",
                display: "Morphine (substance)",
                target: [
                    {
                        code: "N02AA01",
                        display: "Morphin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412439003",
                display: "Moxifloxacin (substance)",
                target: [
                    {
                        code: "J01MA14",
                        display: "Moxifloxacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395805008",
                display: "Moxonidine (substance)",
                target: [
                    {
                        code: "C02AC05",
                        display: "Moxonidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412250002",
                display: "Multivitamin agent (substance)",
                target: [
                    {
                        code: "A11BA01",
                        display: "Multivitamine, rein",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409330005",
                display: "Mycophenolic acid (substance)",
                target: [
                    {
                        code: "L04AA06",
                        display: "Mycophenolsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "699946002",
                display: "Nadroparin (substance)",
                target: [
                    {
                        code: "B01AB06",
                        display: "Nadroparin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372588000",
                display: "Naproxen (substance)",
                target: [
                    {
                        code: "M01AE02",
                        display: "Naproxen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414805007",
                display: "Natalizumab (substance)",
                target: [
                    {
                        code: "L04AA23",
                        display: "Natalizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387390002",
                display: "Sodium chloride (substance)",
                target: [
                    {
                        code: "R04AX03",
                        display: "Natriumchlorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387390002",
                display: "Sodium chloride (substance)",
                target: [
                    {
                        code: "B05CB01",
                        display: "Natriumchlorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387319002",
                display: "Sodium bicarbonate (substance)",
                target: [
                    {
                        code: "A02AH01",
                        display: "Natriumhydrogencarbonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395881001",
                display: "Sodium picosulfate (substance)",
                target: [
                    {
                        code: "A06AB08",
                        display: "Natriumpicosulfat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395808005",
                display: "Nebivolol (substance)",
                target: [
                    {
                        code: "C07AB12",
                        display: "Nebivolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419460005",
                display: "Nepafenac (substance)",
                target: [
                    {
                        code: "S01BC10",
                        display: "Nepafenac",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387490003",
                display: "Nifedipine (substance)",
                target: [
                    {
                        code: "C08CA05",
                        display: "Nifedipin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427941004",
                display: "Nilotinib (substance)",
                target: [
                    {
                        code: "L01XE08",
                        display: "Nilotinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "712494002",
                display: "Nintedanib (substance)",
                target: [
                    {
                        code: "L01XE31",
                        display: "Nintedanib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385996000",
                display: "Nitisinone (substance)",
                target: [
                    {
                        code: "A16AX04",
                        display: "Nitisinon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444757009",
                display: "Nitrendipine (substance)",
                target: [
                    {
                        code: "C08CA08",
                        display: "Nitrendipin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373543005",
                display: "Nitrofurantoin (substance)",
                target: [
                    {
                        code: "J01XE01",
                        display: "Nitrofurantoin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703481003",
                display: "Nitroxoline (substance)",
                target: [
                    {
                        code: "J01XX07",
                        display: "Nitroxolin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704191007",
                display: "Nivolumab (substance)",
                target: [
                    {
                        code: "L01XC17",
                        display: "Nivolumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425189006",
                display: "Nonacog alfa (substance)",
                target: [
                    {
                        code: "B02BD09",
                        display: "Nonacog alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "873161000168105",
                display: "Nonacog gamma (substance)",
                target: [
                    {
                        code: "B02BD29",
                        display: "Nonacog gamma",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387271008",
                display: "Norfloxacin (substance)",
                target: [
                    {
                        code: "J01MA06",
                        display: "Norfloxacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387437002",
                display: "Noscapine (substance)",
                target: [
                    {
                        code: "R05DA07",
                        display: "Noscapin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710287009",
                display: "Obinutuzumab (substance)",
                target: [
                    {
                        code: "L01XC15",
                        display: "Obinutuzumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710290003",
                display: "Ocriplasmin (substance)",
                target: [
                    {
                        code: "S01XA22",
                        display: "Ocriplasmin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418888003",
                display: "Octocog alfa (substance)",
                target: [
                    {
                        code: "B02BD15",
                        display: "Octocog alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "109053000",
                display: "Octreotide (substance)",
                target: [
                    {
                        code: "H01CB02",
                        display: "Octreotid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444607009",
                display: "Ofatumumab (substance)",
                target: [
                    {
                        code: "L01XC10",
                        display: "Ofatumumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386849001",
                display: "Olanzapine (substance)",
                target: [
                    {
                        code: "N05AH03",
                        display: "Olanzapin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432162002",
                display: "Olaparib (substance)",
                target: [
                    {
                        code: "L01XX46",
                        display: "Olaparib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704459002",
                display: "Olodaterol (substance)",
                target: [
                    {
                        code: "R03AC19",
                        display: "Olodaterol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372550002",
                display: "Olopatadine (substance)",
                target: [
                    {
                        code: "S01GX09",
                        display: "Olopatadin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "406443008",
                display: "Omalizumab (substance)",
                target: [
                    {
                        code: "R03DX05",
                        display: "Omalizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387137007",
                display: "Omeprazole (substance)",
                target: [
                    {
                        code: "A02BC01",
                        display: "Omeprazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372487007",
                display: "Ondansetron (substance)",
                target: [
                    {
                        code: "A04AA01",
                        display: "Ondansetron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373253007",
                display: "Tricyclic antidepressant (substance)",
                target: [
                    {
                        code: "N06AA05",
                        display: "Opipramol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387455006",
                display: "Oxazepam (substance)",
                target: [
                    {
                        code: "N05BA04",
                        display: "Oxazepam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387025007",
                display: "Oxcarbazepine (substance)",
                target: [
                    {
                        code: "N03AF02",
                        display: "Oxcarbazepin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44262008",
                display: "Oxidized cellulose (substance)",
                target: [
                    {
                        code: "B02BC02",
                        display: "Oxidierte Zellulose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52140009",
                display: "Oxybuprocaine (substance)",
                target: [
                    {
                        code: "S01HA02",
                        display: "Oxybuprocain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372717000",
                display: "Oxybutynin (substance)",
                target: [
                    {
                        code: "G04BD04",
                        display: "Oxybutynin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "55452001",
                display: "Oxycodone (substance)",
                target: [
                    {
                        code: "N02AA05",
                        display: "Oxycodon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387158001",
                display: "Oxymetazoline (substance)",
                target: [
                    {
                        code: "R01AA05",
                        display: "Oxymetazolin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372675006",
                display: "Oxytetracycline (substance)",
                target: [
                    {
                        code: "S01AA04",
                        display: "Oxytetracyclin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372675006",
                display: "Oxytetracycline (substance)",
                target: [
                    {
                        code: "D06AA03",
                        display: "Oxytetracyclin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417550009",
                display: "Palifermin (substance)",
                target: [
                    {
                        code: "V03AF08",
                        display: "Palifermin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426276000",
                display: "Paliperidone (substance)",
                target: [
                    {
                        code: "N05AX13",
                        display: "Paliperidon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386900007",
                display: "Palivizumab (substance)",
                target: [
                    {
                        code: "J06BB16",
                        display: "Palivizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404852008",
                display: "Palonosetron (substance)",
                target: [
                    {
                        code: "A04AA05",
                        display: "Palonosetron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420442001",
                display: "Pamidronic acid (substance)",
                target: [
                    {
                        code: "M05BA03",
                        display: "Pamidronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423259008",
                display: "Panitumumab (substance)",
                target: [
                    {
                        code: "L01XC08",
                        display: "Panitumumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429068009",
                display: "Panobinostat (substance)",
                target: [
                    {
                        code: "L01XX42",
                        display: "Panobinostat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395821003",
                display: "Pantoprazole (substance)",
                target: [
                    {
                        code: "A02BC02",
                        display: "Pantoprazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387517004",
                display: "Paracetamol (substance)",
                target: [
                    {
                        code: "N02BE01",
                        display: "Paracetamol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108946001",
                display: "Paricalcitol (substance)",
                target: [
                    {
                        code: "H05BX02",
                        display: "Paricalcitol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372595009",
                display: "Paroxetine (substance)",
                target: [
                    {
                        code: "N06AB05",
                        display: "Paroxetin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704266003",
                display: "Pasireotide (substance)",
                target: [
                    {
                        code: "H01CB05",
                        display: "Pasireotid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443763005",
                display: "Pazopanib (substance)",
                target: [
                    {
                        code: "L01XE11",
                        display: "Pazopanib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385544005",
                display: "Pegfilgrastim (substance)",
                target: [
                    {
                        code: "L03AA13",
                        display: "Pegfilgrastim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421559001",
                display: "Peginterferon alfa-2a (substance)",
                target: [
                    {
                        code: "L03AB11",
                        display: "Peginterferon alfa-2a",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409201000",
                display: "Pegvisomant (substance)",
                target: [
                    {
                        code: "H01AX01",
                        display: "Pegvisomant",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "716125002",
                display: "Pembrolizumab (substance)",
                target: [
                    {
                        code: "L01XC18",
                        display: "Pembrolizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409159000",
                display: "Pemetrexed (substance)",
                target: [
                    {
                        code: "L01BA04",
                        display: "Pemetrexed",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37957009",
                display: "Pentoxyverine (substance)",
                target: [
                    {
                        code: "R05DB05",
                        display: "Pentoxyverin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25002001",
                display: "Perazine (substance)",
                target: [
                    {
                        code: "N05AB10",
                        display: "Perazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "410457007",
                display: "Permethrin (substance)",
                target: [
                    {
                        code: "P03AC04",
                        display: "Permethrin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704226002",
                display: "Pertuzumab (substance)",
                target: [
                    {
                        code: "L01XC13",
                        display: "Pertuzumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372725003",
                display: "Phenoxymethylpenicillin (substance)",
                target: [
                    {
                        code: "J01CE02",
                        display: "Phenoxymethylpenicillin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59488002",
                display: "Phenprocoumon (substance)",
                target: [
                    {
                        code: "B01AA04",
                        display: "Phenprocoumon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373757009",
                display: "Sodium chloride solution (substance)",
                target: [
                    {
                        code: "B05BB11",
                        display: "Physiologische Kochsalzlösung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372895002",
                display: "Pilocarpine (substance)",
                target: [
                    {
                        code: "S01EB01",
                        display: "Pilocarpin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385580005",
                display: "Pimecrolimus (substance)",
                target: [
                    {
                        code: "D11AH02",
                        display: "Pimecrolimus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703362007",
                display: "Pipamperone (substance)",
                target: [
                    {
                        code: "N05AD05",
                        display: "Pipamperon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "439581000",
                display: "Pirfenidone (substance)",
                target: [
                    {
                        code: "L04AX05",
                        display: "Pirfenidon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "707837002",
                display: "Piritramide (substance)",
                target: [
                    {
                        code: "N02AC03",
                        display: "Piritramid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387153005",
                display: "Piroxicam (substance)",
                target: [
                    {
                        code: "M01AC01",
                        display: "Piroxicam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "716308007",
                display: "Pitolisant (substance)",
                target: [
                    {
                        code: "N07XX11",
                        display: "Pitolisant",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442264009",
                display: "Plerixafor (substance)",
                target: [
                    {
                        code: "L03AX16",
                        display: "Plerixafor",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427905004",
                display: "Lauromacrogol 400 (substance)",
                target: [
                    {
                        code: "C05BB02",
                        display: "Polidocanol (Lauromacrogol 400)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710808009",
                display: "Polystyrene sulfonate (substance)",
                target: [
                    {
                        code: "V03AE01",
                        display: "Polystyrolsulfonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703789000",
                display: "Pomalidomide (substance)",
                target: [
                    {
                        code: "L04AX06",
                        display: "Pomalidomid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703796003",
                display: "Ponatinib (substance)",
                target: [
                    {
                        code: "L01XE24",
                        display: "Ponatinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421747003",
                display: "Posaconazole (substance)",
                target: [
                    {
                        code: "J02AC04",
                        display: "Posaconazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386989006",
                display: "Povidone iodine (substance)",
                target: [
                    {
                        code: "D08AG02",
                        display: "Povidon-Iod",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386852009",
                display: "Pramipexole (substance)",
                target: [
                    {
                        code: "N04BC05",
                        display: "Pramipexol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373566006",
                display: "Pravastatin (substance)",
                target: [
                    {
                        code: "C10AA03",
                        display: "Pravastatin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126086006",
                display: "Prednicarbate (substance)",
                target: [
                    {
                        code: "D07AC18",
                        display: "Prednicarbat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116601002",
                display: "Prednisolone (substance)",
                target: [
                    {
                        code: "H02AB06",
                        display: "Prednisolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116601002",
                display: "Prednisolone (substance)",
                target: [
                    {
                        code: "S01BA04",
                        display: "Prednisolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116601002",
                display: "Prednisolone (substance)",
                target: [
                    {
                        code: "A01AC04",
                        display: "Prednisolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116601002",
                display: "Prednisolone (substance)",
                target: [
                    {
                        code: "H02AB56",
                        display: "Prednisolon-Depot",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116602009",
                display: "Prednisone (substance)",
                target: [
                    {
                        code: "H02AB07",
                        display: "Prednison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415160008",
                display: "Pregabalin (substance)",
                target: [
                    {
                        code: "N03AX16",
                        display: "Pregabalin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387107003",
                display: "Prilocaine (substance)",
                target: [
                    {
                        code: "N01BB04",
                        display: "Prilocain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387238009",
                display: "Procaine (substance)",
                target: [
                    {
                        code: "N01BA02",
                        display: "Procain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16683002",
                display: "Progesterone (substance)",
                target: [
                    {
                        code: "G03DA04",
                        display: "Progesteron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16683002",
                display: "Progesterone (substance)",
                target: [
                    {
                        code: "G03DD01",
                        display: "Progesteron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372871004",
                display: "Promethazine (substance)",
                target: [
                    {
                        code: "N05CM22",
                        display: "Promethazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395997007",
                display: "Propiverine (substance)",
                target: [
                    {
                        code: "G04BD06",
                        display: "Propiverin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387423006",
                display: "Propofol (substance)",
                target: [
                    {
                        code: "N01AX10",
                        display: "Propofol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372772003",
                display: "Propranolol (substance)",
                target: [
                    {
                        code: "C07AA05",
                        display: "Propranolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25525005",
                display: "Protein C (substance)",
                target: [
                    {
                        code: "B01AD12",
                        display: "Protein C",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27766008",
                display: "Prothipendyl (substance)",
                target: [
                    {
                        code: "N05AX07",
                        display: "Prothipendyl",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373344003",
                display: "Pyridostigmine (substance)",
                target: [
                    {
                        code: "N07AA02",
                        display: "Pyridostigmin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386850001",
                display: "Quetiapine (substance)",
                target: [
                    {
                        code: "N05AH04",
                        display: "Quetiapin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429707008",
                display: "Raltegravir (substance)",
                target: [
                    {
                        code: "J05AX08",
                        display: "Raltegravir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386872004",
                display: "Ramipril (substance)",
                target: [
                    {
                        code: "C09AA05",
                        display: "Ramipril",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704259004",
                display: "Ramucirumab (substance)",
                target: [
                    {
                        code: "L01XC21",
                        display: "Ramucirumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "422456007",
                display: "Ranibizumab (substance)",
                target: [
                    {
                        code: "S01LA04",
                        display: "Ranibizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372755005",
                display: "Ranitidine (substance)",
                target: [
                    {
                        code: "A02BA02",
                        display: "Ranitidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420365007",
                display: "Ranolazine (substance)",
                target: [
                    {
                        code: "C01EB18",
                        display: "Ranolazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418734001",
                display: "Rasagiline (substance)",
                target: [
                    {
                        code: "N04BD02",
                        display: "Rasagilin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702804006",
                display: "Regorafenib (substance)",
                target: [
                    {
                        code: "L01XE21",
                        display: "Regorafenib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386839004",
                display: "Remifentanil (substance)",
                target: [
                    {
                        code: "N01AH06",
                        display: "Remifentanil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386964000",
                display: "Repaglinide (substance)",
                target: [
                    {
                        code: "A10BX02",
                        display: "Repaglinid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "768539002",
                display: "Risedronic acid (substance)",
                target: [
                    {
                        code: "M05BA07",
                        display: "Risedronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386840002",
                display: "Risperidone (substance)",
                target: [
                    {
                        code: "N05AX08",
                        display: "Risperidon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386919002",
                display: "Rituximab (substance)",
                target: [
                    {
                        code: "L01XC02",
                        display: "Rituximab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395868008",
                display: "Rivastigmine (substance)",
                target: [
                    {
                        code: "N06DA03",
                        display: "Rivastigmin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363573000",
                display: "Rizatriptan (substance)",
                target: [
                    {
                        code: "N02CC04",
                        display: "Rizatriptan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "448971002",
                display: "Roflumilast (substance)",
                target: [
                    {
                        code: "R03DX07",
                        display: "Roflumilast",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "439122000",
                display: "Romiplostim (substance)",
                target: [
                    {
                        code: "B02BX04",
                        display: "Romiplostim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372499000",
                display: "Ropinirole (substance)",
                target: [
                    {
                        code: "N04BC04",
                        display: "Ropinirol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386969005",
                display: "Ropivacaine (substance)",
                target: [
                    {
                        code: "N01BB09",
                        display: "Ropivacain",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421924006",
                display: "Rotigotine (substance)",
                target: [
                    {
                        code: "N04BC09",
                        display: "Rotigotin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "96037004",
                display: "Roxithromycin (substance)",
                target: [
                    {
                        code: "J01FA06",
                        display: "Roxithromycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702806008",
                display: "Ruxolitinib (substance)",
                target: [
                    {
                        code: "L01XE18",
                        display: "Ruxolitinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "700441006",
                display: "Saccharomyces boulardii (substance)",
                target: [
                    {
                        code: "A07FA02",
                        display: "Saccharomyces boulardii",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372897005",
                display: "Salbutamol (substance)",
                target: [
                    {
                        code: "R03AC02",
                        display: "Salbutamol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372897005",
                display: "Salbutamol (substance)",
                target: [
                    {
                        code: "R03CC02",
                        display: "Salbutamol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432859002",
                display: "Sapropterin (substance)",
                target: [
                    {
                        code: "A16AX07",
                        display: "Sapropterin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "719375007",
                display: "Sebelipase alfa (substance)",
                target: [
                    {
                        code: "A16AB14",
                        display: "Sebelipase alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708822004",
                display: "Secukinumab (substance)",
                target: [
                    {
                        code: "L04AC10",
                        display: "Secukinumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372594008",
                display: "Sertraline (substance)",
                target: [
                    {
                        code: "N06AB06",
                        display: "Sertralin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395871000",
                display: "Sevelamer (substance)",
                target: [
                    {
                        code: "V03AE02",
                        display: "Sevelamer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386842005",
                display: "Sevoflurane (substance)",
                target: [
                    {
                        code: "N01AB08",
                        display: "Sevofluran",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372572000",
                display: "Sildenafil (substance)",
                target: [
                    {
                        code: "C02KX06",
                        display: "Sildenafil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372572000",
                display: "Sildenafil (substance)",
                target: [
                    {
                        code: "C02KX04",
                        display: "Sildenafil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13652007",
                display: "Silicone (substance)",
                target: [
                    {
                        code: "V04CZ09",
                        display: "Silikone",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13652007",
                display: "Silicone (substance)",
                target: [
                    {
                        code: "A03AX13",
                        display: "Silikone",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442042006",
                display: "Silodosin (substance)",
                target: [
                    {
                        code: "G04CA04",
                        display: "Silodosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704262001",
                display: "Siltuximab (substance)",
                target: [
                    {
                        code: "L04AC11",
                        display: "Siltuximab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708823009",
                display: "Simeprevir (substance)",
                target: [
                    {
                        code: "J05AE14",
                        display: "Simeprevir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718853005",
                display: "Simoctocog alfa (substance)",
                target: [
                    {
                        code: "B02BD17",
                        display: "Simoctocog alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387584000",
                display: "Simvastatin (substance)",
                target: [
                    {
                        code: "C10AA01",
                        display: "Simvastatin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423307000",
                display: "Sitagliptin (substance)",
                target: [
                    {
                        code: "A10BH01",
                        display: "Sitagliptin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710806008",
                display: "Sofosbuvir (substance)",
                target: [
                    {
                        code: "J05AX15",
                        display: "Sofosbuvir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407030007",
                display: "Solifenacin (substance)",
                target: [
                    {
                        code: "G04BD08",
                        display: "Solifenacin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395883003",
                display: "Somatropin (substance)",
                target: [
                    {
                        code: "H01AC01",
                        display: "Somatropin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "422042001",
                display: "Sorafenib (substance)",
                target: [
                    {
                        code: "L01XE05",
                        display: "Sorafenib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387078006",
                display: "Spironolactone (substance)",
                target: [
                    {
                        code: "C03DA01",
                        display: "Spironolacton",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387248006",
                display: "Sulfasalazine (substance)",
                target: [
                    {
                        code: "M01CX02",
                        display: "Sulfasalazin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710202000",
                display: "Sultamicillin (substance)",
                target: [
                    {
                        code: "J01CR04",
                        display: "Sultamicillin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50580004",
                display: "Sulthiamine (substance)",
                target: [
                    {
                        code: "N03AX03",
                        display: "Sultiam",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395892000",
                display: "Sumatriptan (substance)",
                target: [
                    {
                        code: "N02CC01",
                        display: "Sumatriptan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421192001",
                display: "Sunitinib (substance)",
                target: [
                    {
                        code: "L01XE04",
                        display: "Sunitinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386975001",
                display: "Tacrolimus (substance)",
                target: [
                    {
                        code: "L04AD02",
                        display: "Tacrolimus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386975001",
                display: "Tacrolimus (substance)",
                target: [
                    {
                        code: "D11AH01",
                        display: "Tacrolimus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407111005",
                display: "Tadalafil (substance)",
                target: [
                    {
                        code: "C02KX05",
                        display: "Tadalafil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703348000",
                display: "Tafamidis (substance)",
                target: [
                    {
                        code: "N07XX08",
                        display: "Tafamidis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "699181001",
                display: "Tafluprost (substance)",
                target: [
                    {
                        code: "S01EE05",
                        display: "Tafluprost",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373345002",
                display: "Tamoxifen (substance)",
                target: [
                    {
                        code: "L02BA01",
                        display: "Tamoxifen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372509005",
                display: "Tamsulosin (substance)",
                target: [
                    {
                        code: "G04CA02",
                        display: "Tamsulosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441757005",
                display: "Tapentadol (substance)",
                target: [
                    {
                        code: "N02AX06",
                        display: "Tapentadol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710807004",
                display: "Teduglutide (substance)",
                target: [
                    {
                        code: "A16AX08",
                        display: "Teduglutid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698806003",
                display: "Telaprevir (substance)",
                target: [
                    {
                        code: "J05AE11",
                        display: "Telaprevir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425347005",
                display: "Telbivudine (substance)",
                target: [
                    {
                        code: "J05AF11",
                        display: "Telbivudin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387069000",
                display: "Telmisartan (substance)",
                target: [
                    {
                        code: "C09CA07",
                        display: "Telmisartan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418647000",
                display: "Temoporfin (substance)",
                target: [
                    {
                        code: "L01XD05",
                        display: "Temoporfin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387009002",
                display: "Temozolomide (substance)",
                target: [
                    {
                        code: "L01AX03",
                        display: "Temozolomid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387066007",
                display: "Tenecteplase (substance)",
                target: [
                    {
                        code: "B01AD11",
                        display: "Tenecteplase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421203005",
                display: "Tenofovir disoproxil (substance)",
                target: [
                    {
                        code: "J05AF07",
                        display: "Tenofovir disoproxil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387068008",
                display: "Terazosin (substance)",
                target: [
                    {
                        code: "G04CA03",
                        display: "Terazosin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373450007",
                display: "Terbinafine (substance)",
                target: [
                    {
                        code: "D01BA02",
                        display: "Terbinafin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703785006",
                display: "Teriflunomide (substance)",
                target: [
                    {
                        code: "L04AA31",
                        display: "Teriflunomid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425438001",
                display: "Teriparatide (substance)",
                target: [
                    {
                        code: "H05AA02",
                        display: "Teriparatid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43688007",
                display: "Testosterone (substance)",
                target: [
                    {
                        code: "G03BA03",
                        display: "Testosteron",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372810006",
                display: "Theophylline (substance)",
                target: [
                    {
                        code: "R03DA04",
                        display: "Theophyllin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37656002",
                display: "Thiamazole (substance)",
                target: [
                    {
                        code: "H03BB02",
                        display: "Thiamazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "699180000",
                display: "Tiapride (substance)",
                target: [
                    {
                        code: "N05AL03",
                        display: "Tiaprid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698805004",
                display: "Ticagrelor (substance)",
                target: [
                    {
                        code: "B01AC24",
                        display: "Ticagrelor",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372880004",
                display: "Timolol (substance)",
                target: [
                    {
                        code: "S01ED01",
                        display: "Timolol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412608008",
                display: "Tinzaparin (substance)",
                target: [
                    {
                        code: "B01AB10",
                        display: "Tinzaparin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425812008",
                display: "Tiotropium bromide (substance)",
                target: [
                    {
                        code: "R03BB04",
                        display: "Tiotropiumbromid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373440006",
                display: "Tizanidine (substance)",
                target: [
                    {
                        code: "M03BX02",
                        display: "Tizanidin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373548001",
                display: "Tobramycin (substance)",
                target: [
                    {
                        code: "J01GB01",
                        display: "Tobramycin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444648007",
                display: "Tocilizumab (substance)",
                target: [
                    {
                        code: "L04AC07",
                        display: "Tocilizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703717006",
                display: "Tolperisone (substance)",
                target: [
                    {
                        code: "M03BX04",
                        display: "Tolperison",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372570008",
                display: "Tolterodine (substance)",
                target: [
                    {
                        code: "G04BD07",
                        display: "Tolterodin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386844006",
                display: "Topiramate (substance)",
                target: [
                    {
                        code: "N03AX11",
                        display: "Topiramat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108476002",
                display: "Torasemide (substance)",
                target: [
                    {
                        code: "C03CA04",
                        display: "Torasemid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "433127001",
                display: "Trabectedin (substance)",
                target: [
                    {
                        code: "L01CX01",
                        display: "Trabectedin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386858008",
                display: "Tramadol (substance)",
                target: [
                    {
                        code: "N02AX02",
                        display: "Tramadol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708711009",
                display: "Trametinib (substance)",
                target: [
                    {
                        code: "L01XE25",
                        display: "Trametinib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387003001",
                display: "Trastuzumab (substance)",
                target: [
                    {
                        code: "L01XC03",
                        display: "Trastuzumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702836004",
                display: "Trastuzumab emtansine (substance)",
                target: [
                    {
                        code: "L01XC14",
                        display: "Trastuzumabemtansin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129493000",
                display: "Travoprost (substance)",
                target: [
                    {
                        code: "S01EE04",
                        display: "Travoprost",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395912000",
                display: "Treosulfan (substance)",
                target: [
                    {
                        code: "L01AB02",
                        display: "Treosulfan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443570007",
                display: "Treprostinil (substance)",
                target: [
                    {
                        code: "B01AC21",
                        display: "Treprostinil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116594009",
                display: "Triamcinolone (substance)",
                target: [
                    {
                        code: "D07AB09",
                        display: "Triamcinolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116594009",
                display: "Triamcinolone (substance)",
                target: [
                    {
                        code: "R01AD11",
                        display: "Triamcinolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116594009",
                display: "Triamcinolone (substance)",
                target: [
                    {
                        code: "A01AC01",
                        display: "Triamcinolon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116594009",
                display: "Triamcinolone (substance)",
                target: [
                    {
                        code: "H02AB58",
                        display: "Triamcinolon-Depot",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387179001",
                display: "Trimethoprim (substance)",
                target: [
                    {
                        code: "J01EA01",
                        display: "Trimethoprim",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373550009",
                display: "Trimipramine (substance)",
                target: [
                    {
                        code: "N06AA06",
                        display: "Trimipramin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395915003",
                display: "Triptorelin (substance)",
                target: [
                    {
                        code: "L02AE04",
                        display: "Triptorelin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387526001",
                display: "Tropicamide (substance)",
                target: [
                    {
                        code: "S01FA06",
                        display: "Tropicamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "412604005",
                display: "Trospium (substance)",
                target: [
                    {
                        code: "G04BD09",
                        display: "Trospium",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "735055007",
                display: "Turoctocog alfa (substance)",
                target: [
                    {
                        code: "B02BD16",
                        display: "Turoctocog alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698807007",
                display: "Urapidil (substance)",
                target: [
                    {
                        code: "C02CA06",
                        display: "Urapidil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41143004",
                display: "Ursodeoxycholic acid (substance)",
                target: [
                    {
                        code: "A05AA02",
                        display: "Ursodeoxycholsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443465002",
                display: "Ustekinumab (substance)",
                target: [
                    {
                        code: "L04AC05",
                        display: "Ustekinumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129476000",
                display: "Valganciclovir (substance)",
                target: [
                    {
                        code: "J05AB14",
                        display: "Valganciclovir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387080000",
                display: "Valproic acid (substance)",
                target: [
                    {
                        code: "N03AG01",
                        display: "Valproinsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386876001",
                display: "Valsartan (substance)",
                target: [
                    {
                        code: "C09CA03",
                        display: "Valsartan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418260004",
                display: "Vandetanib (substance)",
                target: [
                    {
                        code: "L01XE12",
                        display: "Vandetanib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704256006",
                display: "Vedolizumab (substance)",
                target: [
                    {
                        code: "L04AA33",
                        display: "Vedolizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444773003",
                display: "Velaglucerase alfa (substance)",
                target: [
                    {
                        code: "A16AB10",
                        display: "Velaglucerase alfa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702805007",
                display: "Vemurafenib (substance)",
                target: [
                    {
                        code: "L01XE15",
                        display: "Vemurafenib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372490001",
                display: "Venlafaxine (substance)",
                target: [
                    {
                        code: "N06AX16",
                        display: "Venlafaxin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372754009",
                display: "Verapamil (substance)",
                target: [
                    {
                        code: "C08DA01",
                        display: "Verapamil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "450967009",
                display: "Petrolatum gauze dressing (physical object)",
                target: [
                    {
                        code: "D09AX01",
                        display: "Verbandmittel mit Vaselin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387059006",
                display: "Verteporfin (substance)",
                target: [
                    {
                        code: "S01LA01",
                        display: "Verteporfin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698843001",
                display: "Vinflunine (substance)",
                target: [
                    {
                        code: "L01CA05",
                        display: "Vinflunin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703812008",
                display: "Vismodegib (substance)",
                target: [
                    {
                        code: "L01XX43",
                        display: "Vismodegib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385469007",
                display: "Voriconazole (substance)",
                target: [
                    {
                        code: "J02AC03",
                        display: "Voriconazol",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387171003",
                display: "Hydrogen peroxide (substance)",
                target: [
                    {
                        code: "A01AB02",
                        display: "Wasserstoffperoxid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395923001",
                display: "Xipamide (substance)",
                target: [
                    {
                        code: "C03BA10",
                        display: "Xipamid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372841007",
                display: "Xylometazoline (substance)",
                target: [
                    {
                        code: "R01AA07",
                        display: "Xylometazolin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372841007",
                display: "Xylometazoline (substance)",
                target: [
                    {
                        code: "R01AB06",
                        display: "Xylometazolin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395926009",
                display: "Zoledronic acid (substance)",
                target: [
                    {
                        code: "M05BA08",
                        display: "Zoledronsäure",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387569009",
                display: "Zolpidem (substance)",
                target: [
                    {
                        code: "N05CF02",
                        display: "Zolpidem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395929002",
                display: "Zopiclone (substance)",
                target: [
                    {
                        code: "N05CF01",
                        display: "Zopiclon",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default PSSubstanceTopATCSnomedGerman;
