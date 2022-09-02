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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Snomed

type MRExaminationSnomed =
    | "15220000"
    | "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,704318007=705057003"
    | "363787002:704318007=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008"
    | "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003"
    | "363787002:246093002=120737006,370134009=123029007,370132008=30766002,704318007=118569000,704319004=50863008,704327008=119364003"
    | "363787002:246093002=120737006,704318007=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003"
    | "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,704318007=705057003,704319004=78014005"
    | "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003"
    | "363787002:704319004=87612001,704318007=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002"
    | "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=38082009,704318007=118556004,370132008=30766002"
    | "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,704318007=118550005"
    | "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003";

type MRExaminationSnomedType = t.KeyofC<{
    "15220000": null;
    "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,704318007=705057003": null;
    "363787002:704318007=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008": null;
    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003": null;
    "363787002:246093002=120737006,370134009=123029007,370132008=30766002,704318007=118569000,704319004=50863008,704327008=119364003": null;
    "363787002:246093002=120737006,704318007=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003": null;
    "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,704318007=705057003,704319004=78014005": null;
    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003": null;
    "363787002:704319004=87612001,704318007=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002": null;
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=38082009,704318007=118556004,370132008=30766002": null;
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,704318007=118550005": null;
    "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003": null;
}>;

const MRExaminationSnomed: MRExaminationSnomedType = t.keyof({
    "15220000": null,
    "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,704318007=705057003":
        null,
    "363787002:704318007=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008":
        null,
    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003":
        null,
    "363787002:246093002=120737006,370134009=123029007,370132008=30766002,704318007=118569000,704319004=50863008,704327008=119364003":
        null,
    "363787002:246093002=120737006,704318007=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003":
        null,
    "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,704318007=705057003,704319004=78014005":
        null,
    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003":
        null,
    "363787002:704319004=87612001,704318007=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002":
        null,
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=38082009,704318007=118556004,370132008=30766002":
        null,
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,704318007=118550005":
        null,
    "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003":
        null
});
export const MRExaminationSnomedArray: string[] = [
    "15220000",
    "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,704318007=705057003",
    "363787002:704318007=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008",
    "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
    "363787002:246093002=120737006,370134009=123029007,370132008=30766002,704318007=118569000,704319004=50863008,704327008=119364003",
    "363787002:246093002=120737006,704318007=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003",
    "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,704318007=705057003,704319004=78014005",
    "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003",
    "363787002:704319004=87612001,704318007=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002",
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=38082009,704318007=118556004,370132008=30766002",
    "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,704318007=118550005",
    "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003"
];

export const MRExaminationSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "15220000",
                display: "Laboratory test (procedure)"
            },
            {
                code: "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,704318007=705057003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Component (attribute) = Blood group antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value)"
            },
            {
                code: "363787002:704318007=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008",
                display:
                    "Observable entity (observable entity) : Property type (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Scale type (attribute) = Quantitative (qualifier value) , Component (attribute) = Blood group antibody (substance) , Inheres in (attribute) = Blood group antibody (substance)"
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=30766002,704318007=118569000,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Property type (attribute) = Arbitrary concentration (property) (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=120737006,704318007=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Property type (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,704318007=705057003,704319004=78014005",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Deoxyribonucleic acid of Chlamydia trachomatis (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Urine specimen (specimen) , Technique (attribute) = Probe with target amplification technique (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Property type (attribute) = Presence (property) (qualifier value) , Inheres in (attribute) = Urine (substance)"
            },
            {
                code: "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Component (attribute) = Antigen of Hepatitis B virus surface protein (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            },
            {
                code: "363787002:704319004=87612001,704318007=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Property type (attribute) = Mass concentration (property) (qualifier value) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Hemoglobin (substance) , Scale type (attribute) = Quantitative (qualifier value)"
            },
            {
                code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=38082009,704318007=118556004,370132008=30766002",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Hemoglobin (substance) , Property type (attribute) = Substance concentration (property) (qualifier value) , Scale type (attribute) = Quantitative (qualifier value)"
            },
            {
                code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,704318007=118550005",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Population of all erythrocytes in portion of fluid (body structure) , Scale type (attribute) = Quantitative (qualifier value) , Property type (attribute) = Number concentration (property) (qualifier value)"
            },
            {
                code: "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,704318007=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Treponema pallidum antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property type (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)"
            }
        ]
    }
];

export default MRExaminationSnomed;
