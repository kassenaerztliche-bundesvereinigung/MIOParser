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

// Diese Conceptmap verknüpft die Codes für U8 - Beratung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU8ConsultationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Consultation_German",
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

export default CMRU8ConsultationGerman;
