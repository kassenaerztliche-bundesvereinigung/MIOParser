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

import { AnyType } from "../Interfaces";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const resolvePath = (
    object: any,
    path: string | undefined,
    defaultValue?: AnyType
): any => {
    if (!path) return;
    else
        return path.split(".").reduce((o, p) => {
            if (o) {
                if (Object.keys(o).includes("0")) return o[0][p];
                else return o[p];
            } else return defaultValue;
        }, object);
};

export default resolvePath;
