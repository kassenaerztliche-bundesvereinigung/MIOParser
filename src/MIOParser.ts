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

import * as FHIR from "fhir/fhir";

import {
    MIOParserResult,
    ValidationResult,
    KBVEntry,
    MIOError,
    GeneralError
} from "./Interfaces/AppInternals";
import Messages from "./Interfaces/Messages";
import * as Util from "./Interfaces/Util";

import getResource, { getAllEntries, isBundle } from "./Resources";
import ErrorMessage, { ErrorMessageLanguage } from "./Definitions/ErrorMessage";
import { MIOTypes, KBVBundleResource } from "./Definitions/ProfileMaps/ProfileMap";
import { Meta } from "./Definitions/FHIR/4.0.1/Profile";

import { EXTENSIBLE_WARNING, warningEmitter } from "./Definitions/CustomTypes";

/**
 * MIOParser class to parse MIOs
 * This class has functions to accept MIO-files or -strings and can convert them into typescript objects which can be used elsewhere
 */
export default class MIOParser {
    /**
     * FhirParser by lantanagroup
     * @protected
     */
    protected fhirParser: FHIR.Fhir;

    constructor() {
        this.fhirParser = new FHIR.Fhir();
    }

    /**
     * Sets the language for the output of logging, errors, etc. (either german "de" oder english "en")
     * Default language is English
     *
     * @param lang {ErrorMessageLanguage} The language of the parsers output
     */
    public static setLang(lang: ErrorMessageLanguage): void {
        ErrorMessage.Language = lang;
    }

    /**
     * A file is being taken and first parsed to a JSON-Object then this is taken and being converted into a typescript object with the help of this.handleResult.
     * The result then is returned as a promise
     *
     * @param {Blob} file input, FHIR file, either of type "application/json" or "text/xml"
     * @returns {Promise<MIOParserResult>} Processed result containing the values and/or errors and warnings
     */
    public async parseFile(file: Blob): Promise<MIOParserResult> {
        // parserLogging.info("Starting to parse MIO");

        return new Promise((resolve, reject: (reason?: Error) => void) => {
            const fileReader = new FileReader();

            // Callback for the readAsText- Method
            fileReader.onloadend = (): void => {
                try {
                    // Result is being parsed into a JS-Object
                    const result = this.stringToObject(
                        fileReader.result as string,
                        file.type
                    );

                    // The JS-Object now is being parsed into a Typescript-representation
                    this.handleResult(result, resolve);
                } catch (error) {
                    // File parsing in stringToObject threw error
                    reject(error);
                }
            };

            fileReader.readAsText(file);
        });
    }

    /**
     * Parses multiple MIO-files and returns an Array of results.
     *
     * @param files {Blob[]} Files that need to be processed
     * @returns {Promise<MIOParserResult[]} Processed result containing the values and/or errors and warnings
     */
    public async parseFiles(files: Blob[]): Promise<MIOParserResult[]> {
        const promises: Promise<MIOParserResult>[] = [];

        files.forEach((file) => {
            promises.push(this.parseFile(file));
        });

        return Promise.all(promises);
    }

    /**
     * Instead of a file a string may also be provided to be evaluated.
     *
     * @param value {string} The string to be evaluated
     * @param fileType {string | undefined} Type of input string either "application/json" or "text/xml"
     * @returns {Promise<MIOParserResult>} Processed result containing the values and/or errors and warnings
     */
    public async parseString(value: string, fileType?: string): Promise<MIOParserResult> {
        return new Promise((resolve, reject) => {
            try {
                const result = this.stringToObject(value, fileType);
                try {
                    // The JS-Object now is being parsed into a Typescript-representation
                    this.handleResult(result, resolve);
                } catch (error) {
                    reject(error);
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Parses multiple string snippets.
     *
     * @param values {string[]} String values and snippets that should be processed and parsed
     * @param fileType {string | undefined} Type of input strings either "application/json" or "text/xml"
     * @returns {Promise<MIOParserResult>} Processed result containing the values and/or errors and warnings
     */
    public async parseStrings(
        values: string[],
        fileType?: string
    ): Promise<MIOParserResult[]> {
        const promises: Promise<MIOParserResult>[] = [];

        values.forEach((value) => {
            promises.push(this.parseString(value, fileType));
        });

        return Promise.all(promises);
    }

    /**
     * This function takes a string and optional filetype to and returns an object that either is converted vom XML to Json by lantanagroup/fhir or a parsed json object
     *
     * @param str {string} The string to be evaluated
     * @param fileType {string | undefined} File type that the string originates
     * @returns {object} a JSON-representation of the string
     */
    protected stringToObject(str: string, fileType?: string): Record<string, unknown> {
        // Checks for file type and transforms accordingly
        if (!fileType) {
            switch (str[0]) {
                case "<":
                    fileType = "text/xml";
                    break;
                case "{":
                    fileType = "application/json";
                    break;
                default:
                    fileType = "unknown/fileType";
                    break;
            }
        }
        if (fileType === "text/xml" || fileType === "application/xml") {
            try {
                return this.fhirParser.xmlToObj(str);
            } catch (error) {
                throw new GeneralError(Messages.SyntaxError(), error.message);
            }
        } else if (fileType === "application/json") {
            try {
                return JSON.parse(str);
            } catch (error) {
                throw new GeneralError(Messages.SyntaxError(), error.message);
            }
        } else {
            throw new GeneralError(Messages.FileType(fileType), "");
        }
    }

    /**
     * Quickly validates a file and returns only validation results.
     *
     * @param file {Blob} The value to be evaluated and validated
     * @returns {Promise<ValidationResult>} ValidationResult Object that contains information regarding the validation
     */
    public async validateFile(file: Blob): Promise<ValidationResult> {
        return this.parseFile(file).then((result) => {
            const valid: boolean = result.errors.length > 0 && !result.value;
            return {
                valid: valid,
                errors: result.errors,
                message: Messages.Valid(valid)
            };
        });
    }

    /**
     * This function cleans the json object of any null entries.
     * @param obj the json object to be cleaned
     * @protected
     */
    protected cleanEmpty(obj: Record<string, unknown>): void {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (obj[key] !== null) {
                    if (typeof obj[key] === "object") {
                        this.cleanEmpty(obj[key] as Record<string, unknown>);
                    }
                } else {
                    if (Array.isArray(obj)) {
                        let index = obj.indexOf(null);
                        while (index > 0) {
                            obj.splice(index, 1);
                            index = obj.indexOf(null);
                        }
                    } else {
                        delete obj[key];
                    }
                }
            }
        }
    }

    /**
     * This function takes the input object and tries to map that to a Typescript object and will either resolve or reject the promise
     *
     * @param input {object} the parsed object of type object that now needs to be mapped to a Resource Type
     * @param resolve from the upper level promise
     */
    protected handleResult = (
        input: Record<string, unknown>,
        resolve: (
            value?: MIOParserResult | PromiseLike<MIOParserResult> | undefined
        ) => void
    ): void => {
        const warnings: MIOError[] = [];
        this.setupListeners(warnings);
        this.cleanEmpty(input);

        // Tries to get the resource for the object, meta and id must be present
        const result = getResource(
            input as {
                meta: Meta;
                id: string;
            },
            MIOTypes
        );

        // If errors occurred
        if (!result.value || result.errors.length) {
            // const message = Messages.InvalidMIO();
            // parserLogging.warn(message);
            resolve(result);
        }
        // if no errors occurred
        else {
            const value = result.value as KBVBundleResource;
            if (isBundle(value)) {
                const entries = getAllEntries(value.entry as KBVEntry[], value);
                value.entry = entries.values;

                result.warnings.push(...Array.from(new Set(warnings)));
                const returnMioResult: MIOParserResult = {
                    value: value,
                    errors: [...result.errors, ...entries.errors],
                    warnings: Util.getUnresolvedReferences(value).concat(result.warnings)
                };
                resolve(returnMioResult);
            } else {
                result.warnings.push(...Array.from(new Set(warnings)));
                resolve({
                    value: value,
                    errors: result.errors,
                    warnings: result.warnings
                });
            }
        }

        warningEmitter.removeListener();
    };

    private setupListeners = (warnings: MIOError[]): void => {
        warningEmitter.on(
            EXTENSIBLE_WARNING,
            (
                errorMessage: string,
                warningPath: string,
                resource: string,
                value: string
            ) => {
                const mioWarning: MIOError = {
                    message: errorMessage,
                    path: warningPath,
                    resource: resource,
                    value: value
                };

                const alreadyContained = warnings.some(
                    (e) =>
                        e.path === mioWarning.path && e.resource === mioWarning.resource
                );

                if (!alreadyContained) warnings.push(mioWarning);
            }
        );
    };
}
