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

import { KBVResource } from "..";
import * as t from "io-ts";

/**
 * Describes an entry in a bundle which always contains a fullUrl which may have any resourceType
 */
export interface MIOEntry<T> {
    fullUrl: string;
    resource: T;
}

/**
 * Describes an entry in a bundle which always contains a fullUrl which must be a Resource of KBV
 */
export type KBVEntry = {
    fullUrl: string;
    resource: KBVResource;
};

/**
 * Representation of a MIO version number e.g. 1.0.0, 1.02.003
 */
export class VersionNumber {
    readonly major: number = NaN;
    readonly minor: number = NaN;
    readonly patch: number = NaN;

    constructor(readonly value?: string) {
        const parts = value ? value.split(".") : [];

        this.major = parseInt(parts[0]);
        this.minor = parseInt(parts[1]);
        this.patch = parseInt(parts[2]);
    }

    public equal(value?: string): boolean {
        const version = new VersionNumber(value);

        return (
            this.partEquals(this.major, version.major) &&
            this.partEquals(this.minor, version.minor) &&
            this.partEquals(this.patch, version.patch)
        );
    }

    public toString(): string {
        return [this.major, this.minor, this.patch].filter((n) => !isNaN(n)).join(".");
    }

    protected partEquals(a: number, b: number): boolean {
        return a === b || (isNaN(a) && isNaN(b));
    }
}

/**
 * Describes the profile and version of a given resource (resource.meta.profile)
 */
export class ResourceMeta {
    readonly version: VersionNumber;

    constructor(readonly profile: string, version?: string) {
        this.version = new VersionNumber(version);
    }

    public isEqual(profile: string, version?: string, versioned = true): boolean {
        return this.profile === profile && (!versioned || this.version.equal(version));
    }

    public equals(value: ResourceMeta, versioned = true): boolean {
        return (
            this.profile === value.profile &&
            (!versioned || this.version.equal(value.version.value))
        );
    }

    public toString(): string {
        const version = this.version.toString();
        return this.profile + (version ? "|" + version : "");
    }
}

/**
 * Describes the contents of a MIOError
 * message: the message to describe what went wrong
 * resource: the reference to the resource that is in question
 * path: the path within that resource to locate the error
 * value: the value that caused the error
 */
export type MIOError = {
    message: string;
    resource: string;
    path: string;
    value: string;
};

/**
 * Describes the result of parsing an object
 * value: the resource that is now has typesafety
 * errors: Errors that occurred during validation, should be fixed
 * warnings: Warnings that occurred during validation, more informational, may be fixed
 * patient?: UUID of the patient that this relates to
 */
export interface MIOParserResult {
    value: KBVResource;
    errors: MIOError[];
    warnings: MIOError[];
    patient?: string;
}

/**
 * Provides an Error Message for non-validation errors, such as Syntax errors.
 * message: The main message of that error, describing what happened
 * details: The details describing the error or giving "under the hood" information.
 */
export class GeneralError extends Error {
    constructor(readonly message: string, readonly details: string) {
        super();
    }
}

/**
 * Describes the result of validation
 * errors: Array of MIOErrors
 * valid: boolean to quickly indicate validity
 * message: accompanying message with the error
 */
export interface ValidationResult {
    errors: MIOError[];
    valid: boolean;
    message: string;
}

/**
 * Describes a reference for validating a Composition Resource
 */
export type Reference = {
    id: string;
    path: string;
};

/**
 * Any io-ts type
 */
export type AnyType = t.Any;
