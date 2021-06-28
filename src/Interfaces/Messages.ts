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

import ErrorMessage, { ErrorMessageLanguage } from "../Definitions/ErrorMessage";

export default class Messages {
    static capitalize(s: string): string {
        if (!s.length) return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
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
        const name = Messages.capitalize(fieldName);
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
