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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ContextEntry } from "io-ts";

export type ErrorMessageLanguage = "de" | "en";

export default class ErrorMessage {
    public static Language: ErrorMessageLanguage = "en";

    static capitalize(s: string): string {
        if (!s.length) return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    static ContextEntry(
        context: ContextEntry,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const actual =
            typeof context.actual === "string" ? `"${context.actual}"` : context.actual;
        const tag = (context.type as any)._tag ? (context.type as any)._tag : "";
        const should = context.type.name;

        if (lang === "de") {
            return `Wert ist ${actual} aber sollte${
                should.includes("|") ? " einer der folgenden Werte sein: " : " "
            }${context.type.name}${should.includes("|") ? "" : "sein"}  (${tag})`;
        } else {
            return `Value is ${actual} but should be ${
                should.includes("|") ? "in" : ""
            } ${context.type.name} (${tag})`;
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

    static ValueOfValueSetNotPresent(
        valueSet: any,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Es wird ein Wert aus ${valueSet} erwartet, aber keinen gefunden.`;
        } else {
            return `Expected value of valueset ${valueSet}, but none found.`;
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
        message?: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Der Slice für Codec ${name} konnte nicht validiert werden. ${
                message ? `Fehler: ${message}` : ""
            }`;
        } else {
            return `Wrong slice for Codec ${name}. ${message ? `Error: ${message}` : ""}`;
        }
    }

    static Literal(
        is: unknown,
        should: string | boolean | number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const s = typeof should === "string" ? `"${should}"` : should;
        const i = typeof is === "string" ? `"${is}"` : is;

        if (lang === "de") {
            return `Es wurde der Wert ${s} erwartet. Angegeben wurde ${i}`;
        } else {
            return `Expected literal ${s}, but received ${i}`;
        }
    }

    static Codec(
        name: string,
        min: string,
        max: string,
        actual: number,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const count = (): string => {
            return min === max
                ? min.toString()
                : `${min} ${lang === "de" ? "bis" : "to"} ${max}`;
        };

        if (lang === "de") {
            return `Fehler für Codec: ${name}. Sollte ${count()} mal vorkommen. Codec kam allerdings ${actual} mal vor.`;
        } else {
            return `Error for Codec: ${name}. Should occur ${count()} times but occurs ${actual} times.`;
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

    static NoSections(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        if (lang === "de") {
            return "In der Composition konnten keine sections gefunden werden.";
        } else {
            return "No sections were found in the composition.";
        }
    }

    static NoSectionForExistsValue(
        sectionExists?: (string | undefined)[],
        sliceValuePath?: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const append = sliceValuePath ? ` (${sliceValuePath})` : "";
        sectionExists = sectionExists?.filter((e) => e?.length);
        if (lang === "de") {
            return (
                `Es wurde keine Section mit den möglichen sliceKeys: "${
                    sectionExists ? sectionExists.join(", ") : "undefined"
                }" gefunden` + append
            );
        } else {
            return (
                `There was no section found for sliceKeys: "${
                    sectionExists ? sectionExists.join(", ") : "undefined"
                }"` + append
            );
        }
    }

    static NoSectionForValue(
        sectionValue?: string,
        sliceValuePath?: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const append = sliceValuePath ? ` (${sliceValuePath})` : "";
        if (lang === "de") {
            return (
                `Es wurde keine Section mit dem sliceValue ${
                    sectionValue ?? "undefined"
                } gefunden` + append
            );
        } else {
            return (
                `There was no section found for sliceValue ${
                    sectionValue ?? "undefined"
                }` + append
            );
        }
    }

    static ObjectNotPresent(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        if (lang === "de") {
            return "Es wurde kein Objekt zur Validierung übergeben.";
        } else {
            return "Found no object to validate.";
        }
    }

    static NoSliceByValue(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        if (lang === "de") {
            return "SliceValue für die Section fehlt.";
        } else {
            return "SliceValue for the section is missing";
        }
    }

    static ReferenceNotResolved(
        value: unknown,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            if (value == "")
                return "Die Referenz hat einen leeren String und kann nicht aufgelöst werden.";
            else
                return `Die Referenz konnte nicht aufgelöst werden. Der Wert "${value}" ist nicht korrekt.`;
        } else {
            if (value == "")
                return "The reference contains an empty string and can not be resolved.";
            else
                return `The Reference could not be resolved. The value "${value}" is not correct.`;
        }
    }

    static NoProfile(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        return lang === "de"
            ? "Das Meta-Element der Ressource hat kein Profil."
            : "Resource meta has no profile.";
    }

    static NoMeta(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        return lang === "de"
            ? "Die Ressource hat kein Meta-Element."
            : "Resource has no meta.";
    }

    static UnknownProfile(
        profile: string | undefined,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        return lang === "de"
            ? `Unbekanntes Profil: ${profile}.`
            : `Unknown profile: ${profile}.`;
    }

    static ProfileWithoutVersion(
        profile: string | undefined,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        return lang === "de"
            ? `Profil ohne Versionierung: ${profile}.`
            : `Profile without versioning: ${profile}.`;
    }

    static FileType(
        fileType: string | undefined,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        return lang === "de"
            ? `Die Datei hat ein falsches Format. "${fileType}" wird nicht unterstützt. Es können nur Daten vom Format .json oder .xml verarbeitet werden.`
            : `The file has a wrong format. Files of type "${fileType}" are not supported. Only files of with the extension .json or .xml can be processed.`;
    }

    static SyntaxError(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        return lang === "de"
            ? "Die Datei ist fehlerhaft. Bitte wenden Sie sich an den Herausgeber des MIOs."
            : "This file contains errors. Please contact the issuer of this document.";
    }

    static InvalidMIO(lang: ErrorMessageLanguage = ErrorMessage.Language): string {
        return lang === "de" ? "Fehlerhaftes MIO." : "Invalid MIO.";
    }

    static Reference(
        ref: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Unaufgelöste Referenz "${ref}".`;
        } else {
            return `Unresolved reference "${ref}".`;
        }
    }

    static Orphan(
        fullUrl: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Verwaiste Ressource mit der fullUrl "${fullUrl}" gefunden.`;
        } else {
            return `Found orphan resource with fullUrl "${fullUrl}".`;
        }
    }

    static ReferenceNotFound(
        fieldName: string,
        ref: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        const name = ErrorMessage.capitalize(fieldName);
        if (lang === "de") {
            return `${name} mit der Reference "${ref}" wurde nicht gefunden.`;
        } else {
            return `${name} with reference "${ref}" not found.`;
        }
    }

    static Valid(
        valid: boolean,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return valid ? "Datei valide." : "Datei nicht valide.";
        } else {
            return valid ? "File valid." : "File not valid.";
        }
    }

    static NoComposition(
        bundleName: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Ein Bundle (${bundleName}) muss eine Composition enthalten.`;
        } else {
            return `A Bundle (${bundleName}) must have a Composition.`;
        }
    }

    static OnlyOneComposition(
        bundleName: string,
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Ein Bundle (${bundleName}) darf nur eine Composition enthalten.`;
        } else {
            return `A Bundle (${bundleName}) must have only one composition.`;
        }
    }

    static CompositionRequire(
        bundleName: string,
        profile: string,
        profiles: string[],
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return ` Ein Bundle (${bundleName}) mit der Composition (${profile}) muss ${profiles.join(
                " oder "
            )} enthalten.`;
        } else {
            return `Bundle (${bundleName}) with Composition (${profile}) must have a ${profiles.join(
                " or a "
            )}.`;
        }
    }

    static CompositionExclude(
        bundleName: string,
        profile: string,
        profiles: string[],
        lang: ErrorMessageLanguage = ErrorMessage.Language
    ): string {
        if (lang === "de") {
            return `Ein Bundle (${bundleName}) mit der Composition (${profile}) darf kein ${profiles.join(
                " oder "
            )} enthalten.`;
        } else {
            return `A Bundle (${bundleName}) with Composition (${profile}) can not have a ${profiles.join(
                " or a "
            )}.`;
        }
    }
}
