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
import MRMorphologyGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRMorphologyGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Morphology

type MRMorphology =
    | "62991000119101"
    | "1157188005"
    | "1157173000"
    | "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}"
    | "445368001"
    | "289444003:371881003=243788004"
    | "1157164008"
    | "459053006"
    | "144181000119106"
    | "79114003"
    | "1157174006";

type MRMorphologyType = t.KeyofC<{
    "62991000119101": null;
    "1157188005": null;
    "1157173000": null;
    "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}": null;
    "445368001": null;
    "289444003:371881003=243788004": null;
    "1157164008": null;
    "459053006": null;
    "144181000119106": null;
    "79114003": null;
    "1157174006": null;
}>;

const MRMorphology: MRMorphologyType = t.keyof({
    "62991000119101": null,
    "1157188005": null,
    "1157173000": null,
    "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}":
        null,
    "445368001": null,
    "289444003:371881003=243788004": null,
    "1157164008": null,
    "459053006": null,
    "144181000119106": null,
    "79114003": null,
    "1157174006": null
});
export const MRMorphologyArray: string[] = [
    "62991000119101",
    "1157188005",
    "1157173000",
    "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}",
    "445368001",
    "289444003:371881003=243788004",
    "1157164008",
    "459053006",
    "144181000119106",
    "79114003",
    "1157174006"
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
                code: "1157188005",
                display: "Stomach present in left upper quadrant of abdomen (finding)"
            },
            {
                code: "1157173000",
                display: "Bladder present (finding)"
            },
            {
                code: "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}",
                display:
                    "Ultrasound scan finding (finding) : { Has interpretation (attribute) = Potentially abnormal (qualifier value) } { Interprets (attribute) = ( Imaging interpretation (observable entity) : Direct site (attribute) = Heart structure (body structure) + Thoracic structure (body structure) ) } { Property (attribute) = Relative ratio (property) (qualifier value) }"
            },
            {
                code: "445368001",
                display: "Normal position and orientation of heart (finding)"
            },
            {
                code: "289444003:371881003=243788004",
                display:
                    "Irregular fetal heart rhythm (finding) : During (attribute) = Child examination (procedure)"
            },
            {
                code: "1157164008",
                display: "All chambers of heart present (finding)"
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
                code: "1157174006",
                display: "Cerebellum present (finding)"
            }
        ]
    }
];

export { MRMorphologyGerman as ConceptMap };

export default MRMorphology;
