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

// Diese Conceptmap verknüpft die Codes für Hörscreenigmethode mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRHearscreeningMethodGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hearscreening_Method_German",
        element: [
            {
                code: "446077009",
                display: "Automated otoacoustic emission test (procedure)",
                target: [
                    {
                        code: "ErstuntersuchungmittelsTEOAEinderRegelindenersten3Lebenstagen",
                        display:
                            "Erstuntersuchung mittels TEOAE, in der Regel in den ersten 3 Lebenstagen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "252616000:246513007=261422002",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)",
                target: [
                    {
                        code: "ErstuntersuchungmittelsAABRinderRegelindenersten3Lebenstagen",
                        display:
                            "Erstuntersuchung mittels AABR, in der Regel in den ersten 3 Lebenstagen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "252616000:246513007=261426004",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)",
                target: [
                    {
                        code: "KontrollAABRbeiauffaelligemErstbefundinderRegelbisU2",
                        display:
                            "Kontroll-AABR bei auffälligem Erstbefund, in der Regel bis U2",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRHearscreeningMethodGerman;
