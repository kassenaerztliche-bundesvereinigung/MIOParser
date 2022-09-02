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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_S_KBV_DOSAGE_FORM

type NFDSKBVDOSAGEFORM =
    | "AMP"
    | "APA"
    | "AEO"
    | "ASN"
    | "ASO"
    | "ATO"
    | "AUB"
    | "AUC"
    | "AUG"
    | "AUS"
    | "ATR"
    | "BAD"
    | "BAL"
    | "BAN"
    | "BPL"
    | "BEU"
    | "FRB"
    | "BIN"
    | "BON"
    | "BTA"
    | "BRE"
    | "CRE"
    | "XDS"
    | "DIS"
    | "DIG"
    | "DIL"
    | "DOS"
    | "DSC"
    | "DSS"
    | "DRA"
    | "DKA"
    | "DRM"
    | "DFL"
    | "XDG"
    | "EIN"
    | "EDP"
    | "ELE"
    | "ELI"
    | "EMU"
    | "ESU"
    | "ESS"
    | "EXT"
    | "FER"
    | "XFE"
    | "FET"
    | "FDA"
    | "FTA"
    | "FMR"
    | "FBE"
    | "FLA"
    | "FLU"
    | "FLE"
    | "FSE"
    | "FOL"
    | "FBW"
    | "GLI"
    | "GEL"
    | "GPA"
    | "XGM"
    | "GLO"
    | "GRA"
    | "GEK"
    | "GSE"
    | "GUL"
    | "XHS"
    | "XHA"
    | "HAS"
    | "HKP"
    | "KMP"
    | "HPI"
    | "HVW"
    | "IMP"
    | "IFA"
    | "IFB"
    | "IFD"
    | "IFF"
    | "INF"
    | "IFK"
    | "IFS"
    | "INH"
    | "IHA"
    | "IKA"
    | "INL"
    | "IHP"
    | "IIE"
    | "INI"
    | "IIL"
    | "IFL"
    | "ILO"
    | "PEN"
    | "IFE"
    | "IIM"
    | "ISU"
    | "INS"
    | "IST"
    | "IUP"
    | "KAN"
    | "KAP"
    | "KMR"
    | "KAT"
    | "KDA"
    | "KGU"
    | "KTA"
    | "KEG"
    | "KER"
    | "KSS"
    | "KSU"
    | "KKS"
    | "KLI"
    | "KLT"
    | "KPG"
    | "KOM"
    | "KOD"
    | "KON"
    | "KID"
    | "KII"
    | "XPK"
    | "KRI"
    | "LTA"
    | "LAN"
    | "LIQ"
    | "LOE"
    | "LOV"
    | "LSE"
    | "LII"
    | "LOT"
    | "LUP"
    | "LUT"
    | "HKM"
    | "MRP"
    | "WKM"
    | "GMR"
    | "MRG"
    | "MTA"
    | "MIL"
    | "MIS"
    | "MIX"
    | "MUW"
    | "XNC"
    | "NDS"
    | "NAG"
    | "NAO"
    | "NSA"
    | "NAS"
    | "NTR"
    | "OCU"
    | "OHT"
    | "OEL"
    | "OVU"
    | "PAM"
    | "PST"
    | "PAS"
    | "PEL"
    | "PER"
    | "PLG"
    | "PFL"
    | "PFT"
    | "PRS"
    | "PUD"
    | "PUL"
    | "PKI"
    | "PIE"
    | "PIF"
    | "PLK"
    | "PLF"
    | "PLH"
    | "PLI"
    | "PLS"
    | "PLV"
    | "PIS"
    | "PIV"
    | "PHV"
    | "PII"
    | "PHI"
    | "PIJ"
    | "PLE"
    | "PSE"
    | "PIK"
    | "PPL"
    | "RSC"
    | "RSU"
    | "RED"
    | "RGR"
    | "REK"
    | "RKA"
    | "RMS"
    | "RET"
    | "RUT"
    | "SAF"
    | "SAL"
    | "SAM"
    | "SLZ"
    | "SSU"
    | "SCH"
    | "SMF"
    | "SMT"
    | "SWA"
    | "SEI"
    | "SHA"
    | "SIR"
    | "SPR"
    | "SPA"
    | "SRI"
    | "SPF"
    | "SPL"
    | "STB"
    | "STA"
    | "STI"
    | "STR"
    | "SUL"
    | "SUT"
    | "SUB"
    | "SUP"
    | "SMU"
    | "SUS"
    | "SUV"
    | "SUE"
    | "TVW"
    | "TLE"
    | "TSE"
    | "TAB"
    | "TKA"
    | "TMR"
    | "TSD"
    | "TAE"
    | "XTC"
    | "TPN"
    | "TPO"
    | "TEE"
    | "TES"
    | "TST"
    | "TTR"
    | "TIN"
    | "TON"
    | "SPT"
    | "TSY"
    | "TRA"
    | "TRT"
    | "TRI"
    | "TAM"
    | "TSA"
    | "TRS"
    | "TSS"
    | "TRO"
    | "TEI"
    | "TUB"
    | "TUE"
    | "TUP"
    | "UTA"
    | "VCR"
    | "VGE"
    | "VKA"
    | "VAL"
    | "VOV"
    | "VAR"
    | "VST"
    | "VSU"
    | "VTA"
    | "VER"
    | "VLI"
    | "WAT"
    | "WKA"
    | "NAW"
    | "WGA"
    | "WUE"
    | "ZBU"
    | "ZCR"
    | "ZGE"
    | "ZPA"
    | "ZKA"
    | "ZAM";

type NFDSKBVDOSAGEFORMType = t.KeyofC<{
    AMP: null;
    APA: null;
    AEO: null;
    ASN: null;
    ASO: null;
    ATO: null;
    AUB: null;
    AUC: null;
    AUG: null;
    AUS: null;
    ATR: null;
    BAD: null;
    BAL: null;
    BAN: null;
    BPL: null;
    BEU: null;
    FRB: null;
    BIN: null;
    BON: null;
    BTA: null;
    BRE: null;
    CRE: null;
    XDS: null;
    DIS: null;
    DIG: null;
    DIL: null;
    DOS: null;
    DSC: null;
    DSS: null;
    DRA: null;
    DKA: null;
    DRM: null;
    DFL: null;
    XDG: null;
    EIN: null;
    EDP: null;
    ELE: null;
    ELI: null;
    EMU: null;
    ESU: null;
    ESS: null;
    EXT: null;
    FER: null;
    XFE: null;
    FET: null;
    FDA: null;
    FTA: null;
    FMR: null;
    FBE: null;
    FLA: null;
    FLU: null;
    FLE: null;
    FSE: null;
    FOL: null;
    FBW: null;
    GLI: null;
    GEL: null;
    GPA: null;
    XGM: null;
    GLO: null;
    GRA: null;
    GEK: null;
    GSE: null;
    GUL: null;
    XHS: null;
    XHA: null;
    HAS: null;
    HKP: null;
    KMP: null;
    HPI: null;
    HVW: null;
    IMP: null;
    IFA: null;
    IFB: null;
    IFD: null;
    IFF: null;
    INF: null;
    IFK: null;
    IFS: null;
    INH: null;
    IHA: null;
    IKA: null;
    INL: null;
    IHP: null;
    IIE: null;
    INI: null;
    IIL: null;
    IFL: null;
    ILO: null;
    PEN: null;
    IFE: null;
    IIM: null;
    ISU: null;
    INS: null;
    IST: null;
    IUP: null;
    KAN: null;
    KAP: null;
    KMR: null;
    KAT: null;
    KDA: null;
    KGU: null;
    KTA: null;
    KEG: null;
    KER: null;
    KSS: null;
    KSU: null;
    KKS: null;
    KLI: null;
    KLT: null;
    KPG: null;
    KOM: null;
    KOD: null;
    KON: null;
    KID: null;
    KII: null;
    XPK: null;
    KRI: null;
    LTA: null;
    LAN: null;
    LIQ: null;
    LOE: null;
    LOV: null;
    LSE: null;
    LII: null;
    LOT: null;
    LUP: null;
    LUT: null;
    HKM: null;
    MRP: null;
    WKM: null;
    GMR: null;
    MRG: null;
    MTA: null;
    MIL: null;
    MIS: null;
    MIX: null;
    MUW: null;
    XNC: null;
    NDS: null;
    NAG: null;
    NAO: null;
    NSA: null;
    NAS: null;
    NTR: null;
    OCU: null;
    OHT: null;
    OEL: null;
    OVU: null;
    PAM: null;
    PST: null;
    PAS: null;
    PEL: null;
    PER: null;
    PLG: null;
    PFL: null;
    PFT: null;
    PRS: null;
    PUD: null;
    PUL: null;
    PKI: null;
    PIE: null;
    PIF: null;
    PLK: null;
    PLF: null;
    PLH: null;
    PLI: null;
    PLS: null;
    PLV: null;
    PIS: null;
    PIV: null;
    PHV: null;
    PII: null;
    PHI: null;
    PIJ: null;
    PLE: null;
    PSE: null;
    PIK: null;
    PPL: null;
    RSC: null;
    RSU: null;
    RED: null;
    RGR: null;
    REK: null;
    RKA: null;
    RMS: null;
    RET: null;
    RUT: null;
    SAF: null;
    SAL: null;
    SAM: null;
    SLZ: null;
    SSU: null;
    SCH: null;
    SMF: null;
    SMT: null;
    SWA: null;
    SEI: null;
    SHA: null;
    SIR: null;
    SPR: null;
    SPA: null;
    SRI: null;
    SPF: null;
    SPL: null;
    STB: null;
    STA: null;
    STI: null;
    STR: null;
    SUL: null;
    SUT: null;
    SUB: null;
    SUP: null;
    SMU: null;
    SUS: null;
    SUV: null;
    SUE: null;
    TVW: null;
    TLE: null;
    TSE: null;
    TAB: null;
    TKA: null;
    TMR: null;
    TSD: null;
    TAE: null;
    XTC: null;
    TPN: null;
    TPO: null;
    TEE: null;
    TES: null;
    TST: null;
    TTR: null;
    TIN: null;
    TON: null;
    SPT: null;
    TSY: null;
    TRA: null;
    TRT: null;
    TRI: null;
    TAM: null;
    TSA: null;
    TRS: null;
    TSS: null;
    TRO: null;
    TEI: null;
    TUB: null;
    TUE: null;
    TUP: null;
    UTA: null;
    VCR: null;
    VGE: null;
    VKA: null;
    VAL: null;
    VOV: null;
    VAR: null;
    VST: null;
    VSU: null;
    VTA: null;
    VER: null;
    VLI: null;
    WAT: null;
    WKA: null;
    NAW: null;
    WGA: null;
    WUE: null;
    ZBU: null;
    ZCR: null;
    ZGE: null;
    ZPA: null;
    ZKA: null;
    ZAM: null;
}>;

const NFDSKBVDOSAGEFORM: NFDSKBVDOSAGEFORMType = t.keyof({
    AMP: null,
    APA: null,
    AEO: null,
    ASN: null,
    ASO: null,
    ATO: null,
    AUB: null,
    AUC: null,
    AUG: null,
    AUS: null,
    ATR: null,
    BAD: null,
    BAL: null,
    BAN: null,
    BPL: null,
    BEU: null,
    FRB: null,
    BIN: null,
    BON: null,
    BTA: null,
    BRE: null,
    CRE: null,
    XDS: null,
    DIS: null,
    DIG: null,
    DIL: null,
    DOS: null,
    DSC: null,
    DSS: null,
    DRA: null,
    DKA: null,
    DRM: null,
    DFL: null,
    XDG: null,
    EIN: null,
    EDP: null,
    ELE: null,
    ELI: null,
    EMU: null,
    ESU: null,
    ESS: null,
    EXT: null,
    FER: null,
    XFE: null,
    FET: null,
    FDA: null,
    FTA: null,
    FMR: null,
    FBE: null,
    FLA: null,
    FLU: null,
    FLE: null,
    FSE: null,
    FOL: null,
    FBW: null,
    GLI: null,
    GEL: null,
    GPA: null,
    XGM: null,
    GLO: null,
    GRA: null,
    GEK: null,
    GSE: null,
    GUL: null,
    XHS: null,
    XHA: null,
    HAS: null,
    HKP: null,
    KMP: null,
    HPI: null,
    HVW: null,
    IMP: null,
    IFA: null,
    IFB: null,
    IFD: null,
    IFF: null,
    INF: null,
    IFK: null,
    IFS: null,
    INH: null,
    IHA: null,
    IKA: null,
    INL: null,
    IHP: null,
    IIE: null,
    INI: null,
    IIL: null,
    IFL: null,
    ILO: null,
    PEN: null,
    IFE: null,
    IIM: null,
    ISU: null,
    INS: null,
    IST: null,
    IUP: null,
    KAN: null,
    KAP: null,
    KMR: null,
    KAT: null,
    KDA: null,
    KGU: null,
    KTA: null,
    KEG: null,
    KER: null,
    KSS: null,
    KSU: null,
    KKS: null,
    KLI: null,
    KLT: null,
    KPG: null,
    KOM: null,
    KOD: null,
    KON: null,
    KID: null,
    KII: null,
    XPK: null,
    KRI: null,
    LTA: null,
    LAN: null,
    LIQ: null,
    LOE: null,
    LOV: null,
    LSE: null,
    LII: null,
    LOT: null,
    LUP: null,
    LUT: null,
    HKM: null,
    MRP: null,
    WKM: null,
    GMR: null,
    MRG: null,
    MTA: null,
    MIL: null,
    MIS: null,
    MIX: null,
    MUW: null,
    XNC: null,
    NDS: null,
    NAG: null,
    NAO: null,
    NSA: null,
    NAS: null,
    NTR: null,
    OCU: null,
    OHT: null,
    OEL: null,
    OVU: null,
    PAM: null,
    PST: null,
    PAS: null,
    PEL: null,
    PER: null,
    PLG: null,
    PFL: null,
    PFT: null,
    PRS: null,
    PUD: null,
    PUL: null,
    PKI: null,
    PIE: null,
    PIF: null,
    PLK: null,
    PLF: null,
    PLH: null,
    PLI: null,
    PLS: null,
    PLV: null,
    PIS: null,
    PIV: null,
    PHV: null,
    PII: null,
    PHI: null,
    PIJ: null,
    PLE: null,
    PSE: null,
    PIK: null,
    PPL: null,
    RSC: null,
    RSU: null,
    RED: null,
    RGR: null,
    REK: null,
    RKA: null,
    RMS: null,
    RET: null,
    RUT: null,
    SAF: null,
    SAL: null,
    SAM: null,
    SLZ: null,
    SSU: null,
    SCH: null,
    SMF: null,
    SMT: null,
    SWA: null,
    SEI: null,
    SHA: null,
    SIR: null,
    SPR: null,
    SPA: null,
    SRI: null,
    SPF: null,
    SPL: null,
    STB: null,
    STA: null,
    STI: null,
    STR: null,
    SUL: null,
    SUT: null,
    SUB: null,
    SUP: null,
    SMU: null,
    SUS: null,
    SUV: null,
    SUE: null,
    TVW: null,
    TLE: null,
    TSE: null,
    TAB: null,
    TKA: null,
    TMR: null,
    TSD: null,
    TAE: null,
    XTC: null,
    TPN: null,
    TPO: null,
    TEE: null,
    TES: null,
    TST: null,
    TTR: null,
    TIN: null,
    TON: null,
    SPT: null,
    TSY: null,
    TRA: null,
    TRT: null,
    TRI: null,
    TAM: null,
    TSA: null,
    TRS: null,
    TSS: null,
    TRO: null,
    TEI: null,
    TUB: null,
    TUE: null,
    TUP: null,
    UTA: null,
    VCR: null,
    VGE: null,
    VKA: null,
    VAL: null,
    VOV: null,
    VAR: null,
    VST: null,
    VSU: null,
    VTA: null,
    VER: null,
    VLI: null,
    WAT: null,
    WKA: null,
    NAW: null,
    WGA: null,
    WUE: null,
    ZBU: null,
    ZCR: null,
    ZGE: null,
    ZPA: null,
    ZKA: null,
    ZAM: null
});
export const NFDSKBVDOSAGEFORMArray: string[] = [
    "AMP",
    "APA",
    "AEO",
    "ASN",
    "ASO",
    "ATO",
    "AUB",
    "AUC",
    "AUG",
    "AUS",
    "ATR",
    "BAD",
    "BAL",
    "BAN",
    "BPL",
    "BEU",
    "FRB",
    "BIN",
    "BON",
    "BTA",
    "BRE",
    "CRE",
    "XDS",
    "DIS",
    "DIG",
    "DIL",
    "DOS",
    "DSC",
    "DSS",
    "DRA",
    "DKA",
    "DRM",
    "DFL",
    "XDG",
    "EIN",
    "EDP",
    "ELE",
    "ELI",
    "EMU",
    "ESU",
    "ESS",
    "EXT",
    "FER",
    "XFE",
    "FET",
    "FDA",
    "FTA",
    "FMR",
    "FBE",
    "FLA",
    "FLU",
    "FLE",
    "FSE",
    "FOL",
    "FBW",
    "GLI",
    "GEL",
    "GPA",
    "XGM",
    "GLO",
    "GRA",
    "GEK",
    "GSE",
    "GUL",
    "XHS",
    "XHA",
    "HAS",
    "HKP",
    "KMP",
    "HPI",
    "HVW",
    "IMP",
    "IFA",
    "IFB",
    "IFD",
    "IFF",
    "INF",
    "IFK",
    "IFS",
    "INH",
    "IHA",
    "IKA",
    "INL",
    "IHP",
    "IIE",
    "INI",
    "IIL",
    "IFL",
    "ILO",
    "PEN",
    "IFE",
    "IIM",
    "ISU",
    "INS",
    "IST",
    "IUP",
    "KAN",
    "KAP",
    "KMR",
    "KAT",
    "KDA",
    "KGU",
    "KTA",
    "KEG",
    "KER",
    "KSS",
    "KSU",
    "KKS",
    "KLI",
    "KLT",
    "KPG",
    "KOM",
    "KOD",
    "KON",
    "KID",
    "KII",
    "XPK",
    "KRI",
    "LTA",
    "LAN",
    "LIQ",
    "LOE",
    "LOV",
    "LSE",
    "LII",
    "LOT",
    "LUP",
    "LUT",
    "HKM",
    "MRP",
    "WKM",
    "GMR",
    "MRG",
    "MTA",
    "MIL",
    "MIS",
    "MIX",
    "MUW",
    "XNC",
    "NDS",
    "NAG",
    "NAO",
    "NSA",
    "NAS",
    "NTR",
    "OCU",
    "OHT",
    "OEL",
    "OVU",
    "PAM",
    "PST",
    "PAS",
    "PEL",
    "PER",
    "PLG",
    "PFL",
    "PFT",
    "PRS",
    "PUD",
    "PUL",
    "PKI",
    "PIE",
    "PIF",
    "PLK",
    "PLF",
    "PLH",
    "PLI",
    "PLS",
    "PLV",
    "PIS",
    "PIV",
    "PHV",
    "PII",
    "PHI",
    "PIJ",
    "PLE",
    "PSE",
    "PIK",
    "PPL",
    "RSC",
    "RSU",
    "RED",
    "RGR",
    "REK",
    "RKA",
    "RMS",
    "RET",
    "RUT",
    "SAF",
    "SAL",
    "SAM",
    "SLZ",
    "SSU",
    "SCH",
    "SMF",
    "SMT",
    "SWA",
    "SEI",
    "SHA",
    "SIR",
    "SPR",
    "SPA",
    "SRI",
    "SPF",
    "SPL",
    "STB",
    "STA",
    "STI",
    "STR",
    "SUL",
    "SUT",
    "SUB",
    "SUP",
    "SMU",
    "SUS",
    "SUV",
    "SUE",
    "TVW",
    "TLE",
    "TSE",
    "TAB",
    "TKA",
    "TMR",
    "TSD",
    "TAE",
    "XTC",
    "TPN",
    "TPO",
    "TEE",
    "TES",
    "TST",
    "TTR",
    "TIN",
    "TON",
    "SPT",
    "TSY",
    "TRA",
    "TRT",
    "TRI",
    "TAM",
    "TSA",
    "TRS",
    "TSS",
    "TRO",
    "TEI",
    "TUB",
    "TUE",
    "TUP",
    "UTA",
    "VCR",
    "VGE",
    "VKA",
    "VAL",
    "VOV",
    "VAR",
    "VST",
    "VSU",
    "VTA",
    "VER",
    "VLI",
    "WAT",
    "WKA",
    "NAW",
    "WGA",
    "WUE",
    "ZBU",
    "ZCR",
    "ZGE",
    "ZPA",
    "ZKA",
    "ZAM"
];

export const NFDSKBVDOSAGEFORMValueSet: ValueSet = [
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_KBV_DARREICHUNGSFORM",
        concept: [
            {
                code: "AMP",
                display: "Ampullen"
            },
            {
                code: "APA",
                display: "Ampullenpaare"
            },
            {
                code: "AEO",
                display: "Ätherisches Öl"
            },
            {
                code: "ASN",
                display: "Augen- und Nasensalbe"
            },
            {
                code: "ASO",
                display: "Augen- und Ohrensalbe"
            },
            {
                code: "ATO",
                display: "Augen- und Ohrentropfen"
            },
            {
                code: "AUB",
                display: "Augenbad"
            },
            {
                code: "AUC",
                display: "Augencreme"
            },
            {
                code: "AUG",
                display: "Augengel"
            },
            {
                code: "AUS",
                display: "Augensalbe"
            },
            {
                code: "ATR",
                display: "Augentropfen"
            },
            {
                code: "BAD",
                display: "Bad"
            },
            {
                code: "BAL",
                display: "Balsam"
            },
            {
                code: "BAN",
                display: "Bandage"
            },
            {
                code: "BPL",
                display: "Basisplatte"
            },
            {
                code: "BEU",
                display: "Beutel"
            },
            {
                code: "FRB",
                display: "Beutel mit retardierten Filmtabletten"
            },
            {
                code: "BIN",
                display: "Binden"
            },
            {
                code: "BON",
                display: "Bonbons"
            },
            {
                code: "BTA",
                display: "Brausetabletten"
            },
            {
                code: "BRE",
                display: "Brei"
            },
            {
                code: "CRE",
                display: "Creme"
            },
            {
                code: "XDS",
                display: "Deo-Spray"
            },
            {
                code: "DIS",
                display: "Depot-Injektionssuspension"
            },
            {
                code: "DIG",
                display: "Digitale Gesundheitsanwendungen"
            },
            {
                code: "DIL",
                display: "Dilution"
            },
            {
                code: "DOS",
                display: "Dosieraerosol"
            },
            {
                code: "DSC",
                display: "Dosierschaum"
            },
            {
                code: "DSS",
                display: "Dosierspray"
            },
            {
                code: "DRA",
                display: "Dragees"
            },
            {
                code: "DKA",
                display: "Dragees in Kalenderpackung"
            },
            {
                code: "DRM",
                display: "Dragees magensaftresistent"
            },
            {
                code: "DFL",
                display: "Durchstechflaschen"
            },
            {
                code: "XDG",
                display: "Duschgel"
            },
            {
                code: "EIN",
                display: "Einreibung"
            },
            {
                code: "EDP",
                display: "Einzeldosis-Pipetten"
            },
            {
                code: "ELE",
                display: "Elektroden"
            },
            {
                code: "ELI",
                display: "Elixier"
            },
            {
                code: "EMU",
                display: "Emulsion"
            },
            {
                code: "ESU",
                display: "Erwachsenen-Suppositorien"
            },
            {
                code: "ESS",
                display: "Essenz"
            },
            {
                code: "EXT",
                display: "Extrakt"
            },
            {
                code: "FER",
                display: "Fertigspritzen"
            },
            {
                code: "XFE",
                display: "Festiger"
            },
            {
                code: "FET",
                display: "Fettsalbe"
            },
            {
                code: "FDA",
                display: "Filmdragees"
            },
            {
                code: "FTA",
                display: "Filmtabletten"
            },
            {
                code: "FMR",
                display: "Filmtabletten magensaftresistent"
            },
            {
                code: "FBE",
                display: "Filterbeutel"
            },
            {
                code: "FLA",
                display: "Flasche"
            },
            {
                code: "FLU",
                display: "Flüssig"
            },
            {
                code: "FLE",
                display: "Flüssigkeit zum Einnehmen"
            },
            {
                code: "FSE",
                display: "Flüssigseife"
            },
            {
                code: "FOL",
                display: "Folie"
            },
            {
                code: "FBW",
                display: "Franzbranntwein"
            },
            {
                code: "GLI",
                display:
                    "Gas und Lösungsmittel zur Herstellung einer Injektions-/Infusionsdispersion"
            },
            {
                code: "GEL",
                display: "Gel"
            },
            {
                code: "GPA",
                display: "Gelplatte"
            },
            {
                code: "XGM",
                display: "Gesichtsmaske"
            },
            {
                code: "GLO",
                display: "Globuli"
            },
            {
                code: "GRA",
                display: "Granulat"
            },
            {
                code: "GEK",
                display: "Granulat zur Entnahme aus Kapseln"
            },
            {
                code: "GSE",
                display: "Granulat zur Herstellung einer Suspension zum Einnehmen"
            },
            {
                code: "GUL",
                display: "Gurgellösung"
            },
            {
                code: "XHS",
                display: "Haarspülung"
            },
            {
                code: "XHA",
                display: "Halsband"
            },
            {
                code: "HAS",
                display: "Handschuhe"
            },
            {
                code: "HKP",
                display: "Hartkapseln"
            },
            {
                code: "KMP",
                display: "Hartkapseln mit magensaftresistent überzogenen Pellets"
            },
            {
                code: "HPI",
                display: "Hartkapseln mit Pulver zur Inhalation"
            },
            {
                code: "HVW",
                display: "Hartkapseln mit veränderter Wirkstofffreisetzung"
            },
            {
                code: "IMP",
                display: "Implantat"
            },
            {
                code: "IFA",
                display: "Infusionsampullen"
            },
            {
                code: "IFB",
                display: "Infusionsbeutel"
            },
            {
                code: "IFD",
                display: "Infusionsdispersion"
            },
            {
                code: "IFF",
                display: "Infusionsflaschen"
            },
            {
                code: "INF",
                display: "Infusionslösung"
            },
            {
                code: "IFK",
                display: "Infusionslösungskonzentrat"
            },
            {
                code: "IFS",
                display: "Infusionsset"
            },
            {
                code: "INH",
                display: "Inhalat"
            },
            {
                code: "IHA",
                display: "Inhalationsampullen"
            },
            {
                code: "IKA",
                display: "Inhalationskapseln"
            },
            {
                code: "INL",
                display: "Inhalationslösung"
            },
            {
                code: "IHP",
                display: "Inhalationspulver"
            },
            {
                code: "IIE",
                display: "Injektions- oder Infusionslösung oder Lösung zum Einnehmen"
            },
            {
                code: "INI",
                display: "Injektions-, Infusionsflaschen"
            },
            {
                code: "IIL",
                display: "Injektions-, Infusionslösung"
            },
            {
                code: "IFL",
                display: "Injektionsflaschen"
            },
            {
                code: "ILO",
                display: "Injektionslösung"
            },
            {
                code: "PEN",
                display: "Injektionslösung in einem Fertigpen"
            },
            {
                code: "IFE",
                display: "Injektionslösung in einer Fertigspritze"
            },
            {
                code: "IIM",
                display: "Injektionslösung zur intramuskulären Anwendung"
            },
            {
                code: "ISU",
                display: "Injektionssuspension"
            },
            {
                code: "INS",
                display: "Instant-Tee"
            },
            {
                code: "IST",
                display: "Instillation"
            },
            {
                code: "IUP",
                display: "Intrauterinpessar"
            },
            {
                code: "KAN",
                display: "Kanülen"
            },
            {
                code: "KAP",
                display: "Kapseln"
            },
            {
                code: "KMR",
                display: "Kapseln magensaftresistent"
            },
            {
                code: "KAT",
                display: "Katheter"
            },
            {
                code: "KDA",
                display: "Kaudragees"
            },
            {
                code: "KGU",
                display: "Kaugummi"
            },
            {
                code: "KTA",
                display: "Kautabletten"
            },
            {
                code: "KEG",
                display: "Kegel"
            },
            {
                code: "KER",
                display: "Kerne"
            },
            {
                code: "KSS",
                display: "Kinder- und Säuglings-Suppositorien"
            },
            {
                code: "KSU",
                display: "Kinder-Suppositorien"
            },
            {
                code: "KKS",
                display: "Kleinkinder-Suppositorien"
            },
            {
                code: "KLI",
                display: "Klistiere"
            },
            {
                code: "KLT",
                display: "Klistier-Tabletten"
            },
            {
                code: "KPG",
                display: "Kombipackung"
            },
            {
                code: "KOM",
                display: "Kompressen"
            },
            {
                code: "KOD",
                display: "Kondome"
            },
            {
                code: "KON",
                display: "Konzentrat"
            },
            {
                code: "KID",
                display: "Konzentrat zur Herstellung einer Infusionsdispersion"
            },
            {
                code: "KII",
                display:
                    "Konzentrat zur Herstellung einer Injektions- oder Infusionslösung"
            },
            {
                code: "XPK",
                display: "Körperpflege"
            },
            {
                code: "KRI",
                display: "Kristallsuspension"
            },
            {
                code: "LTA",
                display: "Lacktabletten"
            },
            {
                code: "LAN",
                display: "Lanzetten"
            },
            {
                code: "LIQ",
                display: "Liquidum"
            },
            {
                code: "LOE",
                display: "Lösung"
            },
            {
                code: "LOV",
                display: "Lösung für einen Vernebler"
            },
            {
                code: "LSE",
                display: "Lösung zum Einnehmen"
            },
            {
                code: "LII",
                display: "Lösung zur Injektion, Infusion und Inhalation"
            },
            {
                code: "LOT",
                display: "Lotion"
            },
            {
                code: "LUP",
                display: "Lutschpastillen"
            },
            {
                code: "LUT",
                display: "Lutschtabletten"
            },
            {
                code: "HKM",
                display: "Magensaftresistente Hartkapseln"
            },
            {
                code: "MRP",
                display: "Magensaftresistente Pellets"
            },
            {
                code: "WKM",
                display: "Magensaftresistente Weichkapseln"
            },
            {
                code: "GMR",
                display: "Magensaftresistentes Granulat"
            },
            {
                code: "MRG",
                display: "Magensaftresistentes Retardgranulat"
            },
            {
                code: "MTA",
                display: "Manteltabletten"
            },
            {
                code: "MIL",
                display: "Milch"
            },
            {
                code: "MIS",
                display: "Mischung"
            },
            {
                code: "MIX",
                display: "Mixtur"
            },
            {
                code: "MUW",
                display: "Mundwasser"
            },
            {
                code: "XNC",
                display: "Nachtcreme"
            },
            {
                code: "NDS",
                display: "Nasendosierspray"
            },
            {
                code: "NAG",
                display: "Nasengel"
            },
            {
                code: "NAO",
                display: "Nasenöl"
            },
            {
                code: "NSA",
                display: "Nasensalbe"
            },
            {
                code: "NAS",
                display: "Nasenspray"
            },
            {
                code: "NTR",
                display: "Nasentropfen"
            },
            {
                code: "OCU",
                display: "Ocusert"
            },
            {
                code: "OHT",
                display: "Ohrentropfen"
            },
            {
                code: "OEL",
                display: "Öl"
            },
            {
                code: "OVU",
                display: "Ovula"
            },
            {
                code: "PAM",
                display: "Packungsmasse"
            },
            {
                code: "PST",
                display: "Paste"
            },
            {
                code: "PAS",
                display: "Pastillen"
            },
            {
                code: "PEL",
                display: "Pellets"
            },
            {
                code: "PER",
                display: "Perlen"
            },
            {
                code: "PLG",
                display: "Perlongetten"
            },
            {
                code: "PFL",
                display: "Pflaster"
            },
            {
                code: "PFT",
                display: "Pflaster transdermal"
            },
            {
                code: "PRS",
                display: "Presslinge"
            },
            {
                code: "PUD",
                display: "Puder"
            },
            {
                code: "PUL",
                display: "Pulver"
            },
            {
                code: "PKI",
                display: "Pulver für ein Konzentrat zur Herstellung einer Infusionslösung"
            },
            {
                code: "PIE",
                display:
                    "Pulver für ein Konzentrat zur Herstellung einer Infusionslösung, Pulver zur Herstellung einer Lösung zum Einnehmen"
            },
            {
                code: "PIF",
                display:
                    "Pulver für ein Konzentrat zur Herstellung einer Infusionslösung, Pulver zur Herstellung einer Lösung zum Einnehmen"
            },
            {
                code: "PLK",
                display:
                    "Pulver und Lösungsmittel für ein Konzentrat zur Herstellung einer Infusionslösung"
            },
            {
                code: "PLF",
                display: "Pulver und Lösungsmittel zur Herstellung einer Infusionslösung"
            },
            {
                code: "PLH",
                display:
                    "Pulver und Lösungsmittel zur Herstellung einer Injektions- bzw. Infusionslösung"
            },
            {
                code: "PLI",
                display: "Pulver und Lösungsmittel zur Herstellung einer Injektionslösung"
            },
            {
                code: "PLS",
                display:
                    "Pulver und Lösungsmittel zur Herstellung einer Injektionssuspension"
            },
            {
                code: "PLV",
                display:
                    "Pulver und Lösungsmittel zur Herstellung einer Lösung zur intravesikalen Anwendung"
            },
            {
                code: "PIS",
                display: "Pulver zur Herstellung einer Infusionssuspension"
            },
            {
                code: "PIV",
                display:
                    "Pulver zur Herstellung einer Injektions- bzw. Infusionslösung oder einer Lösung zur intravesikalen Anwendung"
            },
            {
                code: "PHV",
                display:
                    "Pulver zur Herstellung einer Injektions- bzw. Infusionslösung oder Pulver und Lösungsmittel zur Herstellung einer Lösung zur intravesikalen Anwendung"
            },
            {
                code: "PII",
                display: "Pulver zur Herstellung einer Injektions- oder Infusionslösung"
            },
            {
                code: "PHI",
                display:
                    "Pulver zur Herstellung einer Injektions-, Infusions- oder Inhalationslösung"
            },
            {
                code: "PIJ",
                display: "Pulver zur Herstellung einer Injektionslösung"
            },
            {
                code: "PLE",
                display: "Pulver zur Herstellung einer Lösung zum Einnehmen"
            },
            {
                code: "PSE",
                display: "Pulver zur Herstellung einer Suspension zum Einnehmen"
            },
            {
                code: "PIK",
                display: "Pulver zur Herstellung eines Infusionslösungskonzentrates"
            },
            {
                code: "PPL",
                display: "Pumplösung"
            },
            {
                code: "RSC",
                display: "Rektalschaum"
            },
            {
                code: "RSU",
                display: "Rektalsuspension"
            },
            {
                code: "RED",
                display: "Retard-Dragees"
            },
            {
                code: "RGR",
                display: "Retard-Granulat"
            },
            {
                code: "REK",
                display: "Retard-Kapseln"
            },
            {
                code: "RKA",
                display: "Retard-Kapseln"
            },
            {
                code: "RMS",
                display: "Retardmikrokapseln und Suspensionsmittel"
            },
            {
                code: "RET",
                display: "Retard-Tabletten"
            },
            {
                code: "RUT",
                display: "Retard-überzogene Tabletten"
            },
            {
                code: "SAF",
                display: "Saft"
            },
            {
                code: "SAL",
                display: "Salbe"
            },
            {
                code: "SAM",
                display: "Salbe zur Anwendung in der Mundhöhle"
            },
            {
                code: "SLZ",
                display: "Salz"
            },
            {
                code: "SSU",
                display: "Säuglings-Suppositorien"
            },
            {
                code: "SCH",
                display: "Schaum"
            },
            {
                code: "SMF",
                display: "Schmelzfilm"
            },
            {
                code: "SMT",
                display: "Schmelztabletten"
            },
            {
                code: "SWA",
                display: "Schwämme"
            },
            {
                code: "SEI",
                display: "Seife"
            },
            {
                code: "SHA",
                display: "Shampoo"
            },
            {
                code: "SIR",
                display: "Sirup"
            },
            {
                code: "SPR",
                display: "Spray"
            },
            {
                code: "SPA",
                display: "Spritzampullen"
            },
            {
                code: "SRI",
                display: "Spritzen"
            },
            {
                code: "SPF",
                display: "Sprühflasche"
            },
            {
                code: "SPL",
                display: "Spüllösung"
            },
            {
                code: "STB",
                display: "Stäbchen"
            },
            {
                code: "STA",
                display: "Stechampullen"
            },
            {
                code: "STI",
                display: "Stifte"
            },
            {
                code: "STR",
                display: "Streifen"
            },
            {
                code: "SUL",
                display: "Sublingualspray, Lösung"
            },
            {
                code: "SUT",
                display: "Sublingualtabletten"
            },
            {
                code: "SUB",
                display: "Substanz"
            },
            {
                code: "SUP",
                display: "Suppositorien"
            },
            {
                code: "SMU",
                display: "Suppositorien mit Mulleinlage"
            },
            {
                code: "SUS",
                display: "Suspension"
            },
            {
                code: "SUV",
                display: "Suspension für einen Vernebler"
            },
            {
                code: "SUE",
                display: "Suspension zum Einnehmen"
            },
            {
                code: "TVW",
                display: "Tablette mit veränderter Wirkstofffreisetzung"
            },
            {
                code: "TLE",
                display: "Tablette zur Herstellung einer Lösung zum Einnehmen"
            },
            {
                code: "TSE",
                display: "Tablette zur Herstellung einer Suspension zum Einnehmen"
            },
            {
                code: "TAB",
                display: "Tabletten"
            },
            {
                code: "TKA",
                display: "Tabletten in Kalenderpackung"
            },
            {
                code: "TMR",
                display: "Tabletten magensaftresistent"
            },
            {
                code: "TSD",
                display:
                    "Tabletten zur Herstellung einer Suspension zum Einnehmen für einen Dosierspender"
            },
            {
                code: "TAE",
                display: "Täfelchen"
            },
            {
                code: "XTC",
                display: "Tagescreme"
            },
            {
                code: "TPN",
                display: "Tampon"
            },
            {
                code: "TPO",
                display: "Tamponaden"
            },
            {
                code: "TEE",
                display: "Tee"
            },
            {
                code: "TES",
                display: "Test"
            },
            {
                code: "TST",
                display: "Teststäbchen"
            },
            {
                code: "TTR",
                display: "Teststreifen"
            },
            {
                code: "TIN",
                display: "Tinktur"
            },
            {
                code: "TON",
                display: "Tonikum"
            },
            {
                code: "SPT",
                display: "Transdermales Spray"
            },
            {
                code: "TSY",
                display: "Transdermales System"
            },
            {
                code: "TRA",
                display: "Trinkampullen"
            },
            {
                code: "TRT",
                display: "Trinktabletten"
            },
            {
                code: "TRI",
                display: "Trituration"
            },
            {
                code: "TAM",
                display: "Trockenampullen"
            },
            {
                code: "TSA",
                display: "Trockensaft"
            },
            {
                code: "TRS",
                display: "Trockensubstanz mit Lösungsmittel"
            },
            {
                code: "TSS",
                display: "Trockensubstanz ohne Lösungsmittel"
            },
            {
                code: "TRO",
                display: "Tropfen"
            },
            {
                code: "TEI",
                display: "Tropfen zum Einnehmen"
            },
            {
                code: "TUB",
                display: "Tube"
            },
            {
                code: "TUE",
                display: "Tücher"
            },
            {
                code: "TUP",
                display: "Tupfer"
            },
            {
                code: "UTA",
                display: "Überzogene Tabletten"
            },
            {
                code: "VCR",
                display: "Vaginalcreme"
            },
            {
                code: "VGE",
                display: "Vaginalgel"
            },
            {
                code: "VKA",
                display: "Vaginalkapseln"
            },
            {
                code: "VAL",
                display: "Vaginallösung"
            },
            {
                code: "VOV",
                display: "Vaginalovula"
            },
            {
                code: "VAR",
                display: "Vaginalring"
            },
            {
                code: "VST",
                display: "Vaginalstäbchen"
            },
            {
                code: "VSU",
                display: "Vaginalsuppositorien"
            },
            {
                code: "VTA",
                display: "Vaginaltabletten"
            },
            {
                code: "VER",
                display: "Verband"
            },
            {
                code: "VLI",
                display: "Vlies"
            },
            {
                code: "WAT",
                display: "Watte"
            },
            {
                code: "WKA",
                display: "Weichkapseln"
            },
            {
                code: "NAW",
                display: "Wirkstoffhaltiger Nagellack"
            },
            {
                code: "WGA",
                display: "Wundgaze"
            },
            {
                code: "WUE",
                display: "Würfel"
            },
            {
                code: "ZBU",
                display: "Zahnbürste"
            },
            {
                code: "ZCR",
                display: "Zahncreme"
            },
            {
                code: "ZGE",
                display: "Zahngel"
            },
            {
                code: "ZPA",
                display: "Zahnpasta"
            },
            {
                code: "ZKA",
                display: "Zerbeisskapseln"
            },
            {
                code: "ZAM",
                display: "Zylinderampullen"
            }
        ]
    }
];

export default NFDSKBVDOSAGEFORM;
