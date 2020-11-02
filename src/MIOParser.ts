/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as FHIR from "fhir/fhir";
import {
    MIOParserResult,
    ValidationResult,
    KBVEntry,
    PatientMap,
    MatchPatient,
    MIOError,
    GeneralError
} from "./Interfaces/AppInternals";
import Messages from "./Interfaces/Messages";
import getResource, { getAllEntries, isBundle } from "./Resources";
import ErrorMessage, { ErrorMessageLanguage } from "./Definitions/ErrorMessage";
import { MIOTypes, KBVBundleResource } from "./Definitions/ProfileMap";
import { Meta } from "./Definitions/FHIR/4.0.1/Profile";
import Validator from "./Validator";
import { v4 as uuidv4 } from "uuid";
import { EXTENSIBLE_WARNING, warningEmitter } from "./Definitions/util";

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
    private patientsFromResults: PatientMap[];

    constructor() {
        this.fhirParser = new FHIR.Fhir();
        this.patientsFromResults = [];
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
     * A file is being taken and first parsed to a JSON-Object then this is taken and being converted into a typscript object with the help of this.handleResult.
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
        this.patientsFromResults = [];

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
        this.patientsFromResults = [];

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
    protected stringToObject(str: string, fileType?: string): object {
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
     * This function takes the input object and tries to map that to a Typescript object and will either resolve or reject the promise
     *
     * @param input {object} the parsed object of type object that now needs to be mapped to a Resource Type
     * @param resolve from the upper level promise
     */
    protected handleResult = (
        input: object,
        resolve: (
            value?: MIOParserResult | PromiseLike<MIOParserResult> | undefined
        ) => void
    ): void => {
        let warnings: MIOError[] = [];
        this.setupListeners(warnings);

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
                const entries = getAllEntries(value.entry as KBVEntry[]);
                value.entry = entries.values;

                warnings = Array.from(new Set(warnings));
                const returnMioResult: MIOParserResult = {
                    value: value,
                    errors: [
                        ...result.errors,
                        ...entries.errors,
                        ...Validator.validateComposition(value)
                    ],
                    warnings: Validator.getUnresolvedReferences(value).concat(warnings)
                };

                const patientResult = value.entry.find(
                    (e: any) => e.resource.resourceType === "Patient"
                );

                if (patientResult) {
                    const patient = patientResult.resource;
                    const patientMatch = this.findMatchForPatient(patient);
                    if (patientMatch) returnMioResult.patient = patientMatch[1];
                    else {
                        const newUuid = uuidv4();
                        this.patientsFromResults.push([
                            this.getPatient(patient),
                            newUuid
                        ]);
                        returnMioResult.patient = newUuid;
                    }
                }

                resolve(returnMioResult);
            } else {
                warnings = Array.from(new Set(warnings));
                resolve({
                    value: value,
                    errors: result.errors,
                    warnings: warnings
                });
            }
        }
    };

    private getPatient(patient: any): MatchPatient {
        let lastName;
        let firstName;
        if (patient.name && patient.name[0]) {
            lastName = patient.name[0]._family
                ? patient.name[0]._family.extension.find(
                      (e: any) =>
                          e.url ===
                          "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                  )
                : undefined;
            if (lastName) lastName = lastName.valueString;
            else lastName = patient.name[0].family;

            firstName = patient.name[0].given;
        }

        const birthDate = patient.birthDate;
        return {
            lastName: lastName,
            firstName: firstName,
            birthDate: birthDate
        };
    }

    private findMatchForPatient(patient: any): PatientMap | undefined {
        return this.patientsFromResults.find((e: [MatchPatient, string]) => {
            return (
                this.checkLastName(e, patient) &&
                this.checkFirstName(e, patient) &&
                this.checkBirthDate(e, patient)
            );
        });
    }

    private checkLastName(
        patientFromResultArray: [MatchPatient, string],
        patient: any
    ): boolean {
        const patientFromResultLastName = patientFromResultArray[0].lastName;
        if (patient.name) {
            const primitiveLastName = patient.name.some(
                (nameField: any) => nameField.family === patientFromResultLastName
            );
            if (primitiveLastName) return primitiveLastName;
            else {
                return patient.name.some((nameField: any) => {
                    if (nameField._family) {
                        return nameField._family.extension.some(
                            (extensionField: any) =>
                                extensionField.url ===
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name" &&
                                extensionField.valueString === patientFromResultLastName
                        );
                    } else return false;
                });
            }
        } else return false;
    }

    private checkFirstName(
        patientFromResultArray: [MatchPatient, string],
        patient: any
    ): boolean {
        const patientFromResultFirstName = patientFromResultArray[0].firstName;
        const firstNameExists = patient.name.some((nameField: any) => {
            const patientsFirstNames = nameField.given;
            if (patientsFirstNames.length === patientFromResultFirstName.length) {
                for (let i = 0; i < patientsFirstNames.length; i++) {
                    if (
                        !patientsFirstNames.some(
                            (e: string) => e === patientFromResultFirstName[i]
                        )
                    )
                        return false;
                }
                return true;
            } else return false;
        });
        return firstNameExists;
    }

    private checkBirthDate(
        patientFromResultArray: [MatchPatient, string],
        patient: any
    ): boolean {
        const patientFromResultBirthDate = patientFromResultArray[0].birthDate;
        return patient.birthDate === patientFromResultBirthDate;
    }

    private setupListeners = (warnings: MIOError[]): void => {
        warningEmitter.on(
            EXTENSIBLE_WARNING,
            (
                errorMessage: string,
                warningPath: string,
                resource: string,
                value: string
            ) => {
                const mioWarning = {
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
