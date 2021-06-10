/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

export type CompositionReferenceSection = {
    entry: string[];
    name?: string;
    sliceByValue?: string;
    sections?: CompositionReferenceSection[];
};

export type CompositionReference = {
    sliceBy: string;
    sections: CompositionReferenceSection[];
};

const VaccinationCompositionAddendumV100000: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "Record_Addendum",
            sliceByValue: "IMMUCAT",
            entry: [
                "https://fhir.kbv.de/Structuredefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.00.000"
            ]
        }
    ]
};
const VaccinationCompositionPrimeV100000: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "Record_Prime",
            sliceByValue: "IMMUNIZ",
            entry: [
                "https://fhir.kbv.de/Structuredefinition/KBV_PR_MIO_Vaccination_Record_Prime|1.00.000"
            ]
        },
        {
            name: "Observation",
            sliceByValue: "COBSCAT",
            entry: [
                "https://fhir.kbv.de/Structuredefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.00.000"
            ]
        },
        {
            name: "Condition",
            sliceByValue: "11348-0",
            entry: [
                "https://fhir.kbv.de/Structuredefinition/KBV_PR_MIO_Vaccination_Condition|1.00.000"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance|1.00.000"
                    ]
                }
            ]
        }
    ]
};
const ZAEBCompositionV100000: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation|1.00.000",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Gapless_Documentation|1.00.000"
            ]
        }
    ]
};
const MRCompositionV100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "Stempelinformationen",
            sliceByValue:
                "Stempelinformationen des Arztes/der Klinik/der mitbetreuenden Hebamme",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
            ]
        },
        {
            name: "Termine",
            sliceByValue: "Termine",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "Terminbestimmung",
            sliceByValue: "Terminbestimmung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy|1.0.0"
            ]
        },
        {
            name: "AnamneseUndAllgemeineBefunde",
            sliceByValue: "Anamnese und allgemeine Befunde",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A|1.0.0"
            ]
        },
        {
            name: "BesondereBefunde",
            sliceByValue: "Besondere Befunde",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "Beratung",
            sliceByValue: "Beratung der Schwangeren",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed|1.0.0"
            ]
        },
        {
            name: "AntiDProphylaxe",
            sliceByValue: "Anti-D-Prophylaxe",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.0.0"
            ]
        },
        {
            name: "Untersuchungen",
            sliceByValue: "Untersuchungen",
            entry: [],
            sections: [
                {
                    name: "LaboruntersuchungenUndRoetelnschutz",
                    sliceByValue: "Laboruntersuchungen und Rötelnschutz",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status|1.0.0"
                    ],
                    sections: [
                        {
                            name: "Laboruntersuchung",
                            sliceByValue: "Laboruntersuchung",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
                            ]
                        },
                        {
                            name: "LaboruntersuchungMaskiert",
                            sliceByValue: "Laboruntersuchung, Ergebnis maskiert",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
                            ]
                        }
                    ]
                },
                {
                    name: "Gravidogramm",
                    sliceByValue: "Gravidogramm",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Movement|1.0.0"
                    ]
                },
                {
                    name: "Ultraschall",
                    sliceByValue: "Ultraschall",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound|1.0.0"
                    ],
                    sections: [
                        {
                            name: "Ultraschall_I",
                            sliceByValue: "I. Screening",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_General_Information|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                            ]
                        },
                        {
                            name: "Ultraschall_II",
                            sliceByValue: "II. Screening",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                            ]
                        },
                        {
                            name: "Ultraschall_III",
                            sliceByValue: "III. Screening",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                            ]
                        },
                        {
                            name: "WeitereUltraschallUntersuchungen",
                            sliceByValue: "Weitere Ultraschall-Untersuchungen",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies|1.0.0"
                            ]
                        }
                    ]
                },
                {
                    name: "Cardiotokographie",
                    sliceByValue: "Cardiotokographie",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography|1.0.0"
                    ]
                },
                {
                    name: "Epikrise",
                    sliceByValue: "Abschluss-Untersuchung/Epikrise",
                    entry: [],
                    sections: [
                        {
                            name: "Schwangerschaft",
                            sliceByValue: "Schwangerschaft",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy|1.0.0"
                            ]
                        },
                        {
                            name: "Geburt",
                            sliceByValue: "Geburt",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information|1.0.0",
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.0.0"
                            ],
                            sections: [
                                {
                                    entry: [
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Live_Birth|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation|1.0.0"
                                    ],
                                    name: "Angaben zum Kind",
                                    sliceByValue: "Angaben zum Kind",
                                    sections: [
                                        {
                                            name: "Apgar-Score",
                                            sliceByValue: "Apgar-Score",
                                            entry: [
                                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score|1.0.0"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Wochenbett",
                            sliceByValue:
                                "Erste Untersuchung nach Entbindung (Wochenbett)",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth|1.0.0"
                            ],
                            sections: [
                                {
                                    name: "AngabenZurMutter",
                                    sliceByValue: "Angaben zur Mutter",
                                    entry: [
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0"
                                    ]
                                },
                                {
                                    name: "AngabenZumKind",
                                    sliceByValue: "Angaben zum Kind",
                                    entry: [
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "ZweiteUntersuchungNachEntbindung",
                            sliceByValue: "Zweite Untersuchung nach Entbindung",
                            entry: [
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth|1.0.0"
                            ],
                            sections: [
                                {
                                    name: "AngabenZurMutter",
                                    sliceByValue: "Angaben zur Mutter",
                                    entry: [
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior|1.0.0"
                                    ]
                                },
                                {
                                    name: "AngabenZumKind",
                                    sliceByValue: "Angaben zum Kind",
                                    entry: [
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy|1.0.0",
                                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3|1.0.0"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "StationaereBehandlung",
            sliceByValue: "Stationäre Behandlung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
            ]
        }
    ]
};
const CMRCompositionCysticFibrosisScreeningV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
            ]
        }
    ]
};
const CMRCompositionExtendedNewbornScreeningV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
            ]
        }
    ]
};
const CMRCompositionHipScreeningV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Problem_Of_Hip|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.0"
            ]
        }
    ]
};
const CMRCompositionNeonatalHearscreeningV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        }
    ]
};
const CMRCompositionPercentileCurveV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionPulseOxymetryScreeningV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU1V100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "schwangerschaftsanamnese",
            sliceByValue: "Schwangerschaftsanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pregnancy_History|1.0.0"
            ]
        },
        {
            name: "geburtsanamnese",
            sliceByValue: "Geburtsanamnese",
            entry: [],
            sections: [
                {
                    name: "geschlecht",
                    sliceByValue: "Geschlecht",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.0"
                    ]
                },
                {
                    name: "befundePraenatalerDiagnostik",
                    sliceByValue:
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.0"
                    ]
                },
                {
                    name: "baseExcess",
                    sliceByValue: "Base excess",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.0"
                    ]
                },
                {
                    name: "phWert",
                    sliceByValue: "pH-Wert (Nabelarterie)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.0"
                    ]
                },
                {
                    name: "kindslage",
                    sliceByValue: "Kindslage",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.0"
                    ]
                },
                {
                    name: "geburtsmodus",
                    sliceByValue: "Geburtsmodus",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.0"
                    ]
                },
                {
                    name: "geburtsdatumUhrzeit",
                    sliceByValue: "Geburtsdatum",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.0"
                    ]
                },
                {
                    name: "schwangerschaftswocheTage",
                    sliceByValue: "SSW (Wochen+Tage)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "familienanamnese",
            sliceByValue: "Familienanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Family_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "Körperliche Untersuchung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Edema_Of_Newborn|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Neonatal_Jaundice|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Trauma_of_Fetus|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Congenital_Malformation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Term_Infant|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Apgar_Score|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Length|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Weight|1.0.0"
            ]
        },
        {
            name: "sonstiges",
            sliceByValue: "Sonstiges",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.0"
            ]
        },
        {
            name: "pulsoxymetrieScreening",
            sliceByValue: "Pulsoxymetrie-Screening (Messung am Fuß)",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.0"
            ]
        },
        {
            name: "hoerscreening",
            sliceByValue: "Neugeborenen-Hörscreening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        },
        {
            name: "erweitertesNeugeborenenscreening",
            sliceByValue: "Erweitertes Neugeborenen-Screening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
            ]
        },
        {
            name: "mukoviszidoseScreening",
            sliceByValue: "Screening auf Mukoviszidose",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
            ]
        },
        {
            name: "untersuchungsGrenzen",
            sliceByValue: "Bitte bringen Sie Ihr Kind zur Untersuchung:",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Participation_Period|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "Perzentilkurven",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values"
            ]
        }
    ]
};
const CMRCompositionU2V100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "schwangerschaftsanamnese",
            sliceByValue: "Schwangerschaftsanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pregnancy_History|1.0.0"
            ]
        },
        {
            name: "geburtsanamnese",
            sliceByValue: "Geburtsanamnese",
            entry: [],
            sections: [
                {
                    name: "geschlecht",
                    sliceByValue: "Geschlecht",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.0"
                    ]
                },
                {
                    name: "befundePraenatalerDiagnostik",
                    sliceByValue:
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.0"
                    ]
                },
                {
                    name: "baseExcess",
                    sliceByValue: "Base excess",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.0"
                    ]
                },
                {
                    name: "phWert",
                    sliceByValue: "pH-Wert (Nabelarterie)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.0"
                    ]
                },
                {
                    name: "kindslage",
                    sliceByValue: "Kindslage",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.0"
                    ]
                },
                {
                    name: "geburtsmodus",
                    sliceByValue: "Geburtsmodus",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.0"
                    ]
                },
                {
                    name: "geburtsdatumUhrzeit",
                    sliceByValue: "Geburtsdatum",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.0"
                    ]
                },
                {
                    name: "schwangerschaftswocheTage",
                    sliceByValue: "SSW (Wochen+Tage)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "Aktuelle Anamnese des Kindes",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "familienanamnese",
            sliceByValue: "Familienanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Family_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "Sozialanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "Körperliche Untersuchung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Head|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "Beratung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U2_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "Ergebnisse",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "pulsoxymetrieScreening",
            sliceByValue: "Pulsoxymetrie-Screening (Messung am Fuß)",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.0"
            ]
        },
        {
            name: "hoerscreening",
            sliceByValue: "Neugeborenen-Hörscreening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        },
        {
            name: "erweitertesNeugeborenenscreening",
            sliceByValue: "Erweitertes Neugeborenen-Screening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
            ]
        },
        {
            name: "mukoviszidoseScreening",
            sliceByValue: "Screening auf Mukoviszidose",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "Perzentilkurven",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU3V100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "schwangerschaftsanamnese",
            sliceByValue: "Schwangerschaftsanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pregnancy_History|1.0.0"
            ]
        },
        {
            name: "geburtsanamnese",
            sliceByValue: "Geburtsanamnese",
            entry: [],
            sections: [
                {
                    name: "geschlecht",
                    sliceByValue: "Geschlecht",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.0"
                    ]
                },
                {
                    name: "befundePraenatalerDiagnostik",
                    sliceByValue:
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.0"
                    ]
                },
                {
                    name: "baseExcess",
                    sliceByValue: "Base excess",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.0"
                    ]
                },
                {
                    name: "phWert",
                    sliceByValue: "pH-Wert (Nabelarterie)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.0"
                    ]
                },
                {
                    name: "kindslage",
                    sliceByValue: "Kindslage",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.0"
                    ]
                },
                {
                    name: "geburtsmodus",
                    sliceByValue: "Geburtsmodus",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.0"
                    ]
                },
                {
                    name: "geburtsdatumUhrzeit",
                    sliceByValue: "Geburtsdatum",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.0"
                    ]
                },
                {
                    name: "schwangerschaftswocheTage",
                    sliceByValue: "SSW (Wochen+Tage)",
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "Aktuelle Anamnese des Kindes",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "familienanamnese",
            sliceByValue: "Familienanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Family_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "Sozialanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "Körperliche Untersuchung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Head|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "Beratung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U3_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "Ergebnisse",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Medication_Statement_Vitamine_K_Prophylaxis|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "hoerscreening",
            sliceByValue: "Neugeborenen-Hörscreening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        },
        {
            name: "erweitertesNeugeborenenscreening",
            sliceByValue: "Erweitertes Neugeborenen-Screening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
            ]
        },
        {
            name: "mukoviszidoseScreening",
            sliceByValue: "Screening auf Mukoviszidose",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "Orientierende Beurteilung der Entwicklung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Development_Assessment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.0"
            ]
        },
        {
            name: "screeningHueftgelenksdysplasie",
            sliceByValue: "Screening auf Hüftgelenksdysplasie und -luxation",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "Perzentilkurven",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU4V100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "Aktuelle Anamnese des Kindes",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "Sozialanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "Körperliche Untersuchung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "Beratung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U4_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "Ergebnisse",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "hoerscreening",
            sliceByValue: "Neugeborenen-Hörscreening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "Orientierende Beurteilung der Entwicklung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Development_Assessment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.0"
            ]
        },
        {
            name: "screeningHueftgelenksdysplasie",
            sliceByValue: "Screening auf Hüftgelenksdysplasie und -luxation",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "Perzentilkurven",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU5V100: CompositionReference = {
    sliceBy: "title",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "Aktuelle Anamnese des Kindes",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "Sozialanamnese",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "Körperliche Untersuchung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "Beratung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U5_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "Ergebnisse",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "hoerscreening",
            sliceByValue: "Neugeborenen-Hörscreening",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "Orientierende Beurteilung der Entwicklung",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Development_Assessment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "Perzentilkurven",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU6V100: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "423374008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "281575007",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "425044008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "409066002",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U6_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "423100009",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "406207000",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Development_Assessment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "129822005",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU7V100: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "423374008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "281575007",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "425044008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "409066002",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "423100009",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "406207000",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Development_Assessment|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "129822005",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU7aV100: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "423374008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "281575007",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "425044008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "409066002",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7a_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "423100009",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "406207000",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Development_Assessment|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "129822005",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU8V100: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "423374008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "281575007",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "425044008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "409066002",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U8_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "423100009",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "406207000",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Development_Assessment|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "129822005",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const CMRCompositionU9V100: CompositionReference = {
    sliceBy: "code.coding.code",
    sections: [
        {
            name: "aktuelleAnamneseDesKindes",
            sliceByValue: "423374008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Current_Child_History|1.0.0"
            ]
        },
        {
            name: "sozialanamnese",
            sliceByValue: "281575007",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
            ]
        },
        {
            name: "untersuchung",
            sliceByValue: "425044008",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U9_Physical_Exam_Abdomen_Genitals|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
            ]
        },
        {
            name: "beratung",
            sliceByValue: "409066002",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U9_Consultation|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
            ]
        },
        {
            name: "ergebnisse",
            sliceByValue: "423100009",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
            ],
            sections: [
                {
                    entry: [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
                    ]
                }
            ]
        },
        {
            name: "orientierendeBeurteilungDerEntwicklung",
            sliceByValue: "406207000",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Development_Assessment|1.0.0"
            ]
        },
        {
            name: "perzentilkurven",
            sliceByValue: "129822005",
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
            ]
        }
    ]
};
const PCCompositionExaminationParticipationV100: CompositionReference = {
    sliceBy: "",
    sections: []
};
const PNCompositionParentalNotesV100: CompositionReference = {
    sliceBy: "",
    sections: [
        {
            entry: [
                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Observation_Parental_Notes|1.0.0"
            ]
        }
    ]
};

export const CompositionReferenceMap: {
    profile: string;
    compositionReference: CompositionReference;
}[] = [
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum|1.00.000",
        compositionReference: VaccinationCompositionAddendumV100000
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime|1.00.000",
        compositionReference: VaccinationCompositionPrimeV100000
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.00.000",
        compositionReference: ZAEBCompositionV100000
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Composition|1.0.0",
        compositionReference: MRCompositionV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Cystic_Fibrosis_Screening|1.0.0",
        compositionReference: CMRCompositionCysticFibrosisScreeningV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Extended_Newborn_Screening|1.0.0",
        compositionReference: CMRCompositionExtendedNewbornScreeningV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Hip_Screening|1.0.0",
        compositionReference: CMRCompositionHipScreeningV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Neonatal_Hearscreening|1.0.0",
        compositionReference: CMRCompositionNeonatalHearscreeningV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Percentile_Curve|1.0.0",
        compositionReference: CMRCompositionPercentileCurveV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Pulse_Oxymetry_Screening|1.0.0",
        compositionReference: CMRCompositionPulseOxymetryScreeningV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U1|1.0.0",
        compositionReference: CMRCompositionU1V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U2|1.0.0",
        compositionReference: CMRCompositionU2V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U3|1.0.0",
        compositionReference: CMRCompositionU3V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U4|1.0.0",
        compositionReference: CMRCompositionU4V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U5|1.0.0",
        compositionReference: CMRCompositionU5V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U6|1.0.0",
        compositionReference: CMRCompositionU6V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7|1.0.0",
        compositionReference: CMRCompositionU7V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7a|1.0.0",
        compositionReference: CMRCompositionU7aV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U8|1.0.0",
        compositionReference: CMRCompositionU8V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U9|1.0.0",
        compositionReference: CMRCompositionU9V100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Composition_Examination_Participation|1.0.0",
        compositionReference: PCCompositionExaminationParticipationV100
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Composition_Parental_Notes|1.0.0",
        compositionReference: PNCompositionParentalNotesV100
    }
];
