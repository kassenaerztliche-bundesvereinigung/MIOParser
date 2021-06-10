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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ContextEntry } from "io-ts";

export type ErrorMessageLanguage = "de" | "en";

export default class ErrorMessage {
    public static Language: ErrorMessageLanguage = "en";

    static ContextEntry(
        context: ContextEntry,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const actual =
            typeof context.actual === "string" ? `"${context.actual}"` : context.actual;
        const tag = (context.type as any)._tag ? (context.type as any)._tag : "";

        if (lang === "de") {
            return `Wert ist ${actual} aber sollte ${context.type.name} sein (${tag})`;
        } else {
            return `Value is ${actual} but should be ${context.type.name} (${tag})`;
        }
    }

    static Scalar(
        name: string,
        value: any,
        regex: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            let msg = `${name} hat ein falsches Format (${regex})`;
            if (value === undefined)
                msg = `Der Wert ist nicht definiert, sollte aber ${name} entsprechen (${regex})`;
            return msg;
        } else {
            let msg = `${name} has wrong format (${regex})`;
            if (value === undefined)
                msg = `Value is undefined but should be a ${name} (${regex})`;
            return msg;
        }
    }

    static MinArray(
        min: number,
        actual: number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Das Array enthält ${actual} sollte aber mindestens ${min} ${
                min > 1 ? "Elemente" : "Element"
            } enthalten`;
        } else {
            return `Array has length of ${actual} but should have at least ${min} ${
                min > 1 ? "elements" : "element"
            }`;
        }
    }

    static MaxArray(
        max: number,
        actual: number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Das Array enthält ${actual} sollte aber maximal ${max} ${
                max > 1 ? "Elemente" : "Element"
            } enthalten`;
        } else {
            return `Array has length of ${actual} but should have a maximum of ${max} ${
                max > 1 ? "elements" : "element"
            }`;
        }
    }

    static Slice(
        name: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Der Slice für Codec ${name} konnte nicht validiert werden`;
        } else {
            return `Wrong slice for Codec ${name} `;
        }
    }

    static Literal(
        is: unknown,
        should: string | boolean | number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Es wurde der Wert ${should} erwartet. Angegeben wurde ${is}`;
        } else {
            return `Expected literal ${should}, but received ${is}`;
        }
    }

    static Codec(
        name: string,
        min: string,
        max: string,
        actual: number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Fehler für Codec: ${name}. Sollte ${min} bis ${max} mal vorkommen. Codec kam allerdings ${actual} mal vor.`;
        } else {
            return `Error for Codec: ${name}. Should occur ${min} to ${max} times but occurs ${actual} times.`;
        }
    }

    static Excess(
        key: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Überflüssiges Element "${key}" gefunden`;
        } else {
            return `Excess key "${key}" found`;
        }
    }

    static Extensible(
        valueSet: string,
        value: any,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Der Wert "${value}" ist nicht im extensible ValueSet "${valueSet}" enthalten. Nach Möglichkeit sollte ein Wert aus dem korrekten ValueSet verwendet werden.`;
        } else {
            return `Value "${value}" is not contained in extensible ValueSet "${valueSet}". If possible, a value from within that ValueSet is preferred.`;
        }
    }

    static Constraint(
        humanMessage: string,
        key: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Folgender Constraint (${key}) wurde nicht eingehalten: ${humanMessage}`;
        } else {
            return `The following constraint (${key}) was not satisfied: ${humanMessage}`;
        }
    }

    static NotResolveConstraint(
        humanMessage: string,
        key: string,
        error: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Folgender Constraint (${key}) konnte nicht aufgelöst werden: ${humanMessage} \n ${error}`;
        } else {
            return `The following constraint (${key}) could not be resolved: ${humanMessage} \n ${error}`;
        }
    }

    static NoTargetWithinBundle(
        ref: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Die Referenz ${ref} verweist nicht auf eine Ressource innerhalb des Bundles`;
        } else {
            return `Reference ${ref} not targeting a resource within the bundle`;
        }
    }

    static WrongTarget(
        ref: string,
        targetProfile: string[],
        actualProfile: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Die Referenz ${ref} verweist auf ein nicht korrektes Profil. ${
                targetProfile.length > 1 ? "Erwartetes Profil" : "Erwartete Profile"
            }: ${targetProfile}, Referenziertes Profil: ${actualProfile}`;
        } else {
            return `Reference ${ref} does not target a correct profile. Expected ${
                targetProfile.length > 1 ? "Profiles" : "Profile"
            }: ${targetProfile}, Received Profile: ${actualProfile}`;
        }
    }

    static NoCompositionForUrl(
        ref: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Die Composition mit Url: ${ref} konnte nicht zur Validierung gefunden werden`;
        } else {
            return `The composition with url: ${ref} could not be found for validation`;
        }
    }

    static NoCompositionInBundle(
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return "Im Bundle konnte keine Composition gefunden werden.";
        } else {
            return "No composition was found within the bundle.";
        }
    }
}
