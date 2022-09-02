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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_Snomed_All

type VaccinationLabImmuneReactionTestPresenceSnomedAll =
    | "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003"
    | "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
    | "268376005"
    | "268375009"
    | "440662009"
    | "440661002";

type VaccinationLabImmuneReactionTestPresenceSnomedAllType = t.KeyofC<{
    "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003": null;
    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003": null;
    "268376005": null;
    "268375009": null;
    "440662009": null;
    "440661002": null;
}>;

const VaccinationLabImmuneReactionTestPresenceSnomedAll: VaccinationLabImmuneReactionTestPresenceSnomedAllType =
    t.keyof({
        "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003":
            null,
        "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003":
            null,
        "268376005": null,
        "268375009": null,
        "440662009": null,
        "440661002": null
    });
export const VaccinationLabImmuneReactionTestPresenceSnomedAllArray: string[] = [
    "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003",
    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
    "268376005",
    "268375009",
    "440662009",
    "440661002"
];

export const VaccinationLabImmuneReactionTestPresenceSnomedAllValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "363787002:246093002=259858000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Varicella-zoster virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=259833005,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Clostridium tetani toxoid antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=120856009,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Human poliovirus 1 antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120662001,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Bordetella pertussis antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120721000,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Mumps virus antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=120871008,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Neisseria meningitidis antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=120969007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Measles virus antibody (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120886002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity): Component (attribute) = Haemophilus influenzae type B antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=122450004,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Antibody to hepatitis B virus (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=32609007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Component (attribute)=Antibody to hepatitis A virus (substance),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=259834004,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Component (attribute)=Corynebacterium diphtheriae toxoid antibody (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity):Component (attribute)=Rubella virus antibody (substance),Time aspect (attribute)=Single point in time (qualifier value),Scale type (attribute)=Ordinal value (qualifier value),Inheres in (attribute)=Plasma (substance),Property (attribute)=Presence (property) (qualifier value),Direct site (attribute)=Serum specimen (specimen)"
            },
            {
                code: "363787002:370134009=123029007,246093002=120850003,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Rabies virus antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            }
        ]
    },
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "268376005",
                display: "Mantoux: positive (finding)"
            },
            {
                code: "268375009",
                display: "Mantoux: negative (finding)"
            },
            {
                code: "440662009",
                display: "Interferon gamma assay positive (finding)"
            },
            {
                code: "440661002",
                display: "Interferon gamma assay negative (finding)"
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresenceSnomedAll;
