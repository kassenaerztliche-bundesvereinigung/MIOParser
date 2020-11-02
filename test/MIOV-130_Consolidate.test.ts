/* eslint-disable no-undef */

import MIOParser, { MIOParserResult } from "../src";
import fs from "fs";
import path from "path";

describe("MIOV-130: Consolodiation Tests", () => {
    const mioParser = new MIOParser();

    test("Finds One Patients in 2 Files", (done) => {
        const ludger1 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein1.json"
                )
            )
            .toString();
        const ludger2 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein2.json"
                )
            )
            .toString();

        const fileArray = [ludger1, ludger2];

        mioParser.parseStrings(fileArray).then((result) => {
            console.log(result);
            const firstUuid = result[0].patient;
            expect(result.every((e) => e.patient === firstUuid)).toBeTruthy();

            const uuids = new Set(result.map((e: MIOParserResult) => e.patient));
            expect(uuids.size).toEqual(1);
            done();
        });
    });

    test("Finds Two Patients in 3 Files", (done) => {
        const ludger1 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein1.json"
                )
            )
            .toString();
        const ludger2 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein2.json"
                )
            )
            .toString();
        const annaLena = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Anna-Lena_von_Mangels1.json"
                )
            )
            .toString();

        const fileArray = [ludger1, ludger2, annaLena];

        mioParser.parseStrings(fileArray).then((result) => {
            console.log(result);
            const firstUuid = result[0].patient;
            expect(result.every((e) => e.patient === firstUuid)).toBeFalsy();

            const uuids = new Set(result.map((e: MIOParserResult) => e.patient));
            expect(uuids.size).toEqual(2);
            done();
        });
    });

    test("Finds Two Patients, because of extra firstName", (done) => {
        const ludger1 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein1.json"
                )
            )
            .toString();
        const ludger2 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Pudger_Koenigsstein.json"
                )
            )
            .toString();

        const fileArray = [ludger1, ludger2];

        mioParser.parseStrings(fileArray).then((result) => {
            console.log(result);
            const firstUuid = result[0].patient;
            expect(result.every((e) => e.patient === firstUuid)).toBeFalsy();

            const uuids = new Set(result.map((e: MIOParserResult) => e.patient));
            expect(uuids.size).toEqual(2);
            done();
        });
    });

    test("Finds Two Patients, because of missing firstName", (done) => {
        const ludger1 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_Ludger_Koenigsstein1.json"
                )
            )
            .toString();
        const ludger2 = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_NoFirstName_Koenigsstein.json"
                )
            )
            .toString();

        const fileArray = [ludger1, ludger2];

        mioParser.parseStrings(fileArray).then((result) => {
            console.log(result);
            const firstUuid = result[0].patient;
            expect(result.every((e) => e.patient === firstUuid)).toBeFalsy();

            const uuids = new Set(result.map((e: MIOParserResult) => e.patient));
            expect(uuids.size).toEqual(2);
            done();
        });
    });

    test("No Patient found", (done) => {
        const noPatient = fs
            .readFileSync(
                path.join(
                    __dirname,
                    "../test/Resources/ConsolidationTest/IM_No_Patient.json"
                )
            )
            .toString();

        mioParser.parseString(noPatient).then((result) => {
            expect(result.errors.length).toBeTruthy();
            done();
        });
    });
});
