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

import { EventEmitter } from "events";

EventEmitter.defaultMaxListeners = 10;

export const EXTENSIBLE_WARNING = "ExtensibleWarning";

export default class WarningEmitter {
    protected emitter = new EventEmitter();

    // eslint-disable-next-line
    protected boundEventListener?: (...args: any[]) => void;

    // eslint-disable-next-line
    public on(event: string | symbol, listener: (...args: any[]) => void): void {
        this.boundEventListener = listener;
        this.emitter.on(event, listener);
    }

    public emit(
        errorMessage: string,
        warningPath: string,
        resource?: string,
        value?: string | unknown
    ): void {
        this.emitter.emit(EXTENSIBLE_WARNING, errorMessage, warningPath, resource, value);
    }

    public removeListener(): void {
        if (this.boundEventListener) {
            this.emitter.removeListener(EXTENSIBLE_WARNING, this.boundEventListener);
        }
    }
}

export const warningEmitter = new WarningEmitter();
