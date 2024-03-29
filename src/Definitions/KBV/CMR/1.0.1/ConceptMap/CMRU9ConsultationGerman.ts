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

// Diese Conceptmap verknüpft die Codes für U9 - Beratung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU9ConsultationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U9_Consultation_German",
        element: [
            {
                code: "409066002:{363702006=426482000,260686004=360160009}",
                display:
                    "Education, guidance and counseling (procedure) : { Has focus (attribute) = Prevention of dental caries (procedure) , Method (attribute) = Checking - action (qualifier value) }",
                target: [
                    {
                        code: "KariesprophylaxemittelsFluoridpruefen",
                        display: "Kariesprophylaxe mittels Fluorid prüfen",
                        equivalence: "equivalent"
                    }
                ]
            },
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
                        code: "SprachberatungFoerderungvondeutscherSpracheundMutterspracheeinschliesslichderLautundGebaerdensprache",
                        display:
                            "Sprachberatung: Förderung von deutscher Sprache und „Muttersprache“ (einschließlich der Laut- und Gebärdensprache)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "284352003+304507003",
                display:
                    "Obesity diet education (procedure) + Exercise education (procedure)",
                target: [
                    {
                        code: "BewegungundAdipositaspraevention",
                        display: "Bewegung und Adipositasprävention",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11816003",
                display: "Diet education (procedure)",
                target: [
                    {
                        code: "Ernaehrung",
                        display: "Ernährung",
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
                code: "408935001",
                display: "Substance abuse prevention education (procedure)",
                target: [
                    {
                        code: "Sucht",
                        display: "Sucht",
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

export default CMRU9ConsultationGerman;
