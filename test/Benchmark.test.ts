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

import MIOParser from "../src";
import * as fs from "fs";
import * as TestUtil from "@kbv/miotestdata";

type TestFile = {
    file: Blob;
    size: number;
};

function roundStep(value: number, step?: number): number {
    step = step || 1.0;
    const inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

function bytesToSize(bytes: number): string {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const n = Math.floor(Math.log(bytes) / Math.log(1024));
    return roundStep(bytes / Math.pow(1024, n), 0.01) + " " + sizes[n];
}

function shuffleCopy<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return [...arr];
}

async function runFiles(testFiles: TestFile[], iterations: number): Promise<number[]> {
    const durations = [];
    const mioParser = new MIOParser();

    for (let index = 0; index < iterations; index++) {
        testFiles = shuffleCopy<TestFile>(testFiles);
        const start = performance.now();
        await mioParser.parseFiles(testFiles.map((f) => f.file));
        const end = performance.now();

        const duration = end - start;
        durations.push(roundStep(duration / 1000.0, 0.001));
    }

    return durations;
}

type PerformResult = {
    min: number;
    max: number;
    avg: number;
    dev: number;
};

async function benchmarkRun(
    numFiles: number[],
    iterations: number,
    files: TestFile[]
): Promise<PerformResult[]> {
    const results: PerformResult[] = [];
    for (const num of numFiles) {
        const testFiles: TestFile[] = [];
        for (let i = 0; i < num; i++) {
            testFiles.push(files[Math.floor(Math.random() * files.length)]);
        }

        const average = (arr: number[]): number =>
            arr.reduce((a, b) => a + b, 0) / arr.length;

        const durations = await runFiles(testFiles, iterations);
        const min = Math.min(...durations);
        const max = Math.max(...durations);
        const avg = average(durations);

        const squareDiffs = durations.map((value) => {
            const diff = value - avg;
            return diff * diff;
        });

        const avgSquareDiff = average(squareDiffs);

        const stdDev = Math.sqrt(avgSquareDiff);

        const format = (n: number, step = 0.001, pad = 5): string =>
            roundStep(n, step).toString().padEnd(pad, "0");

        const sizes = testFiles.map((f) => f.size);
        const totalSize = roundStep(
            sizes.reduce((p, c) => p + c),
            0.01
        );

        const filesStr = testFiles.length.toString().padStart(3, " ");
        const sizeStr = `(${bytesToSize(totalSize).padStart(9, " ")})`;
        const str =
            `Parse ${filesStr} files ${sizeStr} = ` +
            `min: ~${format(min)}s | ` +
            `max: ~${format(max)}s | ` +
            `avg: ~${format(avg)}s | ` +
            `dev: ±${format(stdDev)}`;

        process.stdout.write(str + "\n"); // eslint-disable-line
        results.push({ min, max, avg, dev: stdDev });
    }

    return results;
}

async function performBenchmark(
    name: string,
    paths: string[],
    iterations = 10
): Promise<void> {
    const numFiles = [1, 10, 50, 100, 250, 500];
    const str = `Benchmark setup "${name}": random arrays from ${paths.length} files, ${iterations} iterations`;
    process.stdout.write(str + "\n"); // eslint-disable-line

    const files: TestFile[] = paths.map((filePath: string) => {
        const bundleFile = fs.readFileSync(filePath);
        const stats = fs.statSync(filePath);

        return {
            file: new Blob([bundleFile]),
            size: stats.size
        };
    });

    await benchmarkRun(numFiles, iterations, files);
    process.stdout.write("\n"); // eslint-disable-line
}

jest.setTimeout(60 * 1000 * 10);

test("Parser Benchmark Test", (done) => {
    process.stdout.write("\n"); // eslint-disable-line
    process.stdout.write("# Parser Benchmark Test\n\n"); // eslint-disable-line

    const bundlesIM = TestUtil.getExamples("IM", "Bundles");
    const IM = performBenchmark("IM", bundlesIM, 10);

    const bundlesZB = TestUtil.getExamples("ZB", "Bundles");
    const ZB = performBenchmark("ZB", bundlesZB, 6);

    const All = performBenchmark("IM & ZB", [...bundlesIM, ...bundlesZB], 2);

    Promise.all([IM, ZB, All]).then(() => done());
});
