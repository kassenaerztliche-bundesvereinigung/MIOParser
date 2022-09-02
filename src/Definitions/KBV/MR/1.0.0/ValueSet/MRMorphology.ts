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
import MRMorphologyGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRMorphologyGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Morphology

type MRMorphology =
    | "62991000119101"
    | "302292003:363714003=(364146002:704327008=86367003)"
    | "441687008:{363713009=17621005,363714003=169251004}"
    | "441920005"
    | "445368001"
    | "249042007:246090004=(698247007:371881003=243788004)"
    | "169221005:363698007=43487005"
    | "459053006"
    | "144181000119106"
    | "79114003"
    | "406122000+106112009+106111002:{363698007=113305005}";

type MRMorphologyType = t.KeyofC<{
    "62991000119101": null;
    "302292003:363714003=(364146002:704327008=86367003)": null;
    "441687008:{363713009=17621005,363714003=169251004}": null;
    "441920005": null;
    "445368001": null;
    "249042007:246090004=(698247007:371881003=243788004)": null;
    "169221005:363698007=43487005": null;
    "459053006": null;
    "144181000119106": null;
    "79114003": null;
    "406122000+106112009+106111002:{363698007=113305005}": null;
}>;

const MRMorphology: MRMorphologyType = t.keyof({
    "62991000119101": null,
    "302292003:363714003=(364146002:704327008=86367003)": null,
    "441687008:{363713009=17621005,363714003=169251004}": null,
    "441920005": null,
    "445368001": null,
    "249042007:246090004=(698247007:371881003=243788004)": null,
    "169221005:363698007=43487005": null,
    "459053006": null,
    "144181000119106": null,
    "79114003": null,
    "406122000+106112009+106111002:{363698007=113305005}": null
});
export const MRMorphologyArray: string[] = [
    "62991000119101",
    "302292003:363714003=(364146002:704327008=86367003)",
    "441687008:{363713009=17621005,363714003=169251004}",
    "441920005",
    "445368001",
    "249042007:246090004=(698247007:371881003=243788004)",
    "169221005:363698007=43487005",
    "459053006",
    "144181000119106",
    "79114003",
    "406122000+106112009+106111002:{363698007=113305005}"
];

export const MRMorphologyValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "62991000119101",
                display: "Fetal abdominal wall defect (disorder)"
            },
            {
                code: "302292003:363714003=(364146002:704327008=86367003)",
                display:
                    "Finding of trunk structure (finding) : Interprets (attribute) = ( Stomach observable (observable entity) : Direct site (attribute) = Structure of left upper quadrant of abdomen (body structure) )"
            },
            {
                code: "441687008:{363713009=17621005,363714003=169251004}",
                display:
                    "Imaging of genitourinary system abnormal (finding):{Has interpretation (attribute)=Normal (qualifier value),Interprets (attribute)=Ultrasound scan of bladder (procedure)}"
            },
            {
                code: "441920005",
                display: "Radiographic shadow of heart abnormal (finding)"
            },
            {
                code: "445368001",
                display: "Normal position and orientation of heart (finding)"
            },
            {
                code: "249042007:246090004=(698247007:371881003=243788004)",
                display:
                    "Fetal heart finding (finding) : Associated finding (attribute) = (Cardiac arrhythmia (disorder) : During (attribute) = Child examination (procedure) )"
            },
            {
                code: "169221005:363698007=43487005",
                display:
                    "Ultrasound obstetric scan normal (finding):Finding site (attribute)=All chambers of the heart (body structure)"
            },
            {
                code: "459053006",
                display: "Increased fetal nuchal thickness (finding)"
            },
            {
                code: "144181000119106",
                display: "Fetal ultrasound ventriculomegaly (finding)"
            },
            {
                code: "79114003",
                display: "Fetal head molding (finding)"
            },
            {
                code: "406122000+106112009+106111002:{363698007=113305005}",
                display:
                    "Head finding (finding) + Fetal finding (finding) + Clinical sign related to pregnancy (finding) : { Finding site (attribute) = Cerebellar structure (body structure) }"
            }
        ]
    }
];

export { MRMorphologyGerman as ConceptMap };

export default MRMorphology;
