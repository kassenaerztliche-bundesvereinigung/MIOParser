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

// Diese Conceptmap verknüpft die Codes des Geräte Status mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const DeviceStatusReasonGerman: ConceptMap = [
    {
        source: "http://terminology.hl7.org/CodeSystem/device-status-reason",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Device_Status_Reason_German",
        element: [
            {
                code: "online",
                display: "Online",
                target: [
                    {
                        code: "online",
                        display: "Online",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "paused",
                display: "Paused",
                target: [
                    {
                        code: "pausiert",
                        display: "Pausiert",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "standby",
                display: "Standby",
                target: [
                    {
                        code: "standBy",
                        display: "Stand-By",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "offline",
                display: "Offline",
                target: [
                    {
                        code: "offline",
                        display: "Offline",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "not-ready",
                display: "Not Ready",
                target: [
                    {
                        code: "nichtBereit",
                        display: "nichtBereit",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "transduc-discon",
                display: "Transducer Disconnected",
                target: [
                    {
                        code: "signalgeberNichtVerbunden",
                        display: "Signalgeber nicht verbunden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "hw-discon",
                display: "Hardware Disconnected",
                target: [
                    {
                        code: "hardwareNichtVerbunden",
                        display: "Hardware nicht verbunden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "off",
                display: "Off",
                target: [
                    {
                        code: "aus",
                        display: "Aus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default DeviceStatusReasonGerman;
