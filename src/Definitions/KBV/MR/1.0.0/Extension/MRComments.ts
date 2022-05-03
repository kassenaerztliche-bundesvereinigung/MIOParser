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
import { Literal, Excess, ReqArray } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments"

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCommentsHinweiseSchwangere {
    url: "hinweiseSchwangere";
    id?: string;
    valueString?: "Schwangerschaft und Geburt sind natürliche Vorgänge und stellen keine Krankheit dar. Manchmal können sie allerdings mit einem erhöhten Risiko für Mutter und Kind belastet sein. Eine sorgfältige Schwangerschaftsbetreuung hilft, einen großen Teil dieser Risiken zu vermeiden oder rechtzeitig zu erkennen, um Gefahren abzuwenden. Voraussetzung dafür ist jedoch Ihre regelmäßige Teilnahme an den Vorsorgeuntersuchungen!Die in Ihrem Mutterpass aufgeführten Untersuchungen dienen der Gesunderhaltung von Mutter und Kind und entsprechen langjähriger geburtshilflicher Erfahrung und modernen medizinischen Erkenntnissen. Dieser Mutterpass enthält die während der Schwangerschaft erhobenen wichtigen Befunde. Er wird Ihnen nach jeder Vorsorgeuntersuchung wieder mitgegeben. Die Angaben im Mutterpass dienen der Information von Arzt und Hebamme sowie Ihrer und Ihres Kindes Sicherheit. Der Mutterpass ist Ihr persönliches Dokument. Sie allein entscheiden darüber, wem er zugänglich gemacht werden soll. Andere (z. B. Arbeitgeber, Behörden) dürfen eine Einsichtnahme nicht verlangen.Bitte: ● Nutzen Sie die Ihnen gebotenen Möglichkeiten, um sich und Ihrem Kind Sicherheit zu verschaffen! ● Vergessen Sie nicht, dieses Heft zu jeder ärztlichen Untersuchung während der Schwangerschaft, zur Entbindung und zur Untersuchung des Kindes mitzubringen! ● Lassen Sie sich helfen, wenn Sie Sorgen haben! ● Beraten Sie sich mit Ihrem Arzt und befolgen Sie seine Ratschläge!";
}

export const MRCommentsHinweiseSchwangere: t.Type<MRCommentsHinweiseSchwangere> =
    t.recursion("MRCommentsHinweiseSchwangere", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("hinweiseSchwangere")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Schwangerschaft und Geburt sind natürliche Vorgänge und stellen keine Krankheit dar. Manchmal können sie allerdings mit einem erhöhten Risiko für Mutter und Kind belastet sein. Eine sorgfältige Schwangerschaftsbetreuung hilft, einen großen Teil dieser Risiken zu vermeiden oder rechtzeitig zu erkennen, um Gefahren abzuwenden. Voraussetzung dafür ist jedoch Ihre regelmäßige Teilnahme an den Vorsorgeuntersuchungen!Die in Ihrem Mutterpass aufgeführten Untersuchungen dienen der Gesunderhaltung von Mutter und Kind und entsprechen langjähriger geburtshilflicher Erfahrung und modernen medizinischen Erkenntnissen. Dieser Mutterpass enthält die während der Schwangerschaft erhobenen wichtigen Befunde. Er wird Ihnen nach jeder Vorsorgeuntersuchung wieder mitgegeben. Die Angaben im Mutterpass dienen der Information von Arzt und Hebamme sowie Ihrer und Ihres Kindes Sicherheit. Der Mutterpass ist Ihr persönliches Dokument. Sie allein entscheiden darüber, wem er zugänglich gemacht werden soll. Andere (z. B. Arbeitgeber, Behörden) dürfen eine Einsichtnahme nicht verlangen.Bitte: ● Nutzen Sie die Ihnen gebotenen Möglichkeiten, um sich und Ihrem Kind Sicherheit zu verschaffen! ● Vergessen Sie nicht, dieses Heft zu jeder ärztlichen Untersuchung während der Schwangerschaft, zur Entbindung und zur Untersuchung des Kindes mitzubringen! ● Lassen Sie sich helfen, wenn Sie Sorgen haben! ● Beraten Sie sich mit Ihrem Arzt und befolgen Sie seine Ratschläge!"
                    )
                })
            ])
        )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCommentsHinweiseMutter {
    url: "hinweiseMutter";
    id?: string;
    valueString?: "Nach Schwangerschaft und Geburt beginnt für Sie zwar wieder der Alltag mit neuen Aufgaben, beachten Sie aber bitte Folgendes: ● Gehen Sie etwa 6–8 Wochen nach der Entbindung zur Nachuntersuchung ● Nutzen Sie alle Kinder-Früherkennungsuntersuchungen (U2 – U9) beim Kinder- oder Hausarzt";
}

export const MRCommentsHinweiseMutter: t.Type<MRCommentsHinweiseMutter> = t.recursion(
    "MRCommentsHinweiseMutter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("hinweiseMutter")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Nach Schwangerschaft und Geburt beginnt für Sie zwar wieder der Alltag mit neuen Aufgaben, beachten Sie aber bitte Folgendes: ● Gehen Sie etwa 6–8 Wochen nach der Entbindung zur Nachuntersuchung ● Nutzen Sie alle Kinder-Früherkennungsuntersuchungen (U2 – U9) beim Kinder- oder Hausarzt"
                    )
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCommentsAufbewahrungshinweis {
    url: "aufbewahrungshinweis";
    id?: string;
    valueString?: "Während der Schwangerschaft sollten Sie Ihren Mutterpass immer bei sich haben und zu jeder ärztlichen Untersuchung mitbringen,insbesondere auch zur Entbindung. Ihr Mutterpass gehört zu den Dokumenten, die Sie immer sorgfältig aufbewahren sollten.";
}

export const MRCommentsAufbewahrungshinweis: t.Type<MRCommentsAufbewahrungshinweis> =
    t.recursion("MRCommentsAufbewahrungshinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("aufbewahrungshinweis")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Während der Schwangerschaft sollten Sie Ihren Mutterpass immer bei sich haben und zu jeder ärztlichen Untersuchung mitbringen,insbesondere auch zur Entbindung. Ihr Mutterpass gehört zu den Dokumenten, die Sie immer sorgfältig aufbewahren sollten."
                    )
                })
            ])
        )
    );

interface MRComments {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments";
    id?: string;
    extension?: (
        | MRCommentsHinweiseSchwangere
        | MRCommentsHinweiseMutter
        | MRCommentsAufbewahrungshinweis
    )[];
}

const MRComments: t.Type<MRComments> = t.recursion("MRComments", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments"
                )
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRCommentsHinweiseSchwangere>,
                            t.Type<MRCommentsHinweiseMutter>,
                            t.Type<MRCommentsAufbewahrungshinweis>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRCommentsHinweiseSchwangere,
                        MRCommentsHinweiseMutter,
                        MRCommentsAufbewahrungshinweis
                    ]),
                    [
                        {
                            codec: MRCommentsHinweiseSchwangere,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "hinweiseSchwangere" }
                        },
                        {
                            codec: MRCommentsHinweiseMutter,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "hinweiseMutter" }
                        },
                        {
                            codec: MRCommentsAufbewahrungshinweis,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "aufbewahrungshinweis" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default MRComments;
