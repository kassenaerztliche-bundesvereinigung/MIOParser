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

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/security-labels

type Securitylabels =
    | "U"
    | "L"
    | "M"
    | "N"
    | "R"
    | "V"
    | "ACCTRECEIVABLE"
    | "CASH"
    | "AE"
    | "DN"
    | "DV"
    | "MC"
    | "CC"
    | "PBILLACCT"
    | "_ActAccountCode"
    | "CONT"
    | "DAY"
    | "LOC"
    | "MONTH"
    | "PERIOD"
    | "PROV"
    | "WEEK"
    | "YEAR"
    | "_ActAdjudicationGroupCode"
    | "ANF"
    | "AA"
    | "AR"
    | "AS"
    | "_ActAdjudicationCode"
    | "DISPLAY"
    | "FORM"
    | "_ActAdjudicationResultActionCode"
    | "CPTM"
    | "HCPCSA"
    | "_ActBillableModifierCode"
    | "BLK"
    | "CAP"
    | "CONTF"
    | "FINBILL"
    | "ROST"
    | "SESS"
    | "FFPS"
    | "FFCS"
    | "TFS"
    | "FFS"
    | "_ActBillingArrangementCode"
    | "ROIFS"
    | "ROIPS"
    | "_ActBoundedROICode"
    | "CACC"
    | "CAIC"
    | "CAMC"
    | "CANC"
    | "CAPC"
    | "CBGC"
    | "CCCC"
    | "CCGC"
    | "CCPC"
    | "CCSC"
    | "CDEC"
    | "CDRC"
    | "CEMC"
    | "CFPC"
    | "CIMC"
    | "CMGC"
    | "CNEC"
    | "CNMC"
    | "CNQC"
    | "CNSC"
    | "COGC"
    | "COMC"
    | "COPC"
    | "COSC"
    | "COTC"
    | "CPEC"
    | "CPGC"
    | "CPHC"
    | "CPRC"
    | "CPSC"
    | "CPYC"
    | "CROC"
    | "CRPC"
    | "CSUC"
    | "CTSC"
    | "CURC"
    | "CVSC"
    | "LGPC"
    | "_ActCredentialedCareProvisionPersonCode"
    | "AALC"
    | "AAMC"
    | "ABHC"
    | "ACAC"
    | "ACHC"
    | "AHOC"
    | "ALTC"
    | "AOSC"
    | "CACS"
    | "CAMI"
    | "CAST"
    | "CBAR"
    | "CCAD"
    | "CCAR"
    | "CDEP"
    | "CDGD"
    | "CDIA"
    | "CEPI"
    | "CFEL"
    | "CHFC"
    | "CHRO"
    | "CHYP"
    | "CMIH"
    | "CMSC"
    | "COJR"
    | "CONC"
    | "COPD"
    | "CORT"
    | "CPAD"
    | "CPND"
    | "CPST"
    | "CSDM"
    | "CSIC"
    | "CSLD"
    | "CSPT"
    | "CTBU"
    | "CVDC"
    | "CWMA"
    | "CWOH"
    | "_ActCredentialedCareProvisionProgramCode"
    | "_ActCredentialedCareCode"
    | "AMB"
    | "EMER"
    | "FLD"
    | "HH"
    | "ACUTE"
    | "NONAC"
    | "IMP"
    | "OBSENC"
    | "PRENC"
    | "SS"
    | "VR"
    | "_ActEncounterCode"
    | "ALC"
    | "CARD"
    | "CHR"
    | "DNTL"
    | "DRGRHB"
    | "GENRL"
    | "MED"
    | "OBS"
    | "ONC"
    | "PALL"
    | "PED"
    | "PHAR"
    | "PHYRHB"
    | "PSYCH"
    | "SURG"
    | "_ActMedicalServiceCode"
    | "_ActCareProvisionCode"
    | "AUTOATTCH"
    | "DOCUMENT"
    | "HEALTHREC"
    | "IMG"
    | "LABRESULTS"
    | "MODEL"
    | "WIATTCH"
    | "XRAY"
    | "_ActClaimAttachmentCategoryCode"
    | "ICOL"
    | "IDSCL"
    | "INFAO"
    | "INFASO"
    | "INFA"
    | "IRDSCL"
    | "RSDID"
    | "RSREID"
    | "RESEARCH"
    | "_ActConsentType"
    | "ID"
    | "IP"
    | "O"
    | "X"
    | "_ActContainerRegistrationCode"
    | "AUTO"
    | "ENDC"
    | "REFLEX"
    | "_ActControlVariable"
    | "AUTH"
    | "NAUTH"
    | "_ActCoverageAuthorizationConfirmationCode"
    | "ELG"
    | "NELG"
    | "_ActCoverageEligibilityConfirmationCode"
    | "_ActCoverageConfirmationCode"
    | "COVPRD"
    | "LFEMX"
    | "NETAMT"
    | "PRDMX"
    | "UNITPRICE"
    | "UNITQTY"
    | "_ActCoverageQuantityLimitCode"
    | "COVMX"
    | "_ActCoveredPartyLimitCode"
    | "_ActCoverageLimitCode"
    | "EHCPOL"
    | "HSAPOL"
    | "COL"
    | "UNINSMOT"
    | "AUTOPOL"
    | "DENTPRG"
    | "CANPRG"
    | "ENDRENAL"
    | "HIVAIDS"
    | "DISEASEPRG"
    | "MANDPOL"
    | "MENTPRG"
    | "SAFNET"
    | "SUBPRG"
    | "SUBSIDMC"
    | "SUBSUPP"
    | "SUBSIDIZ"
    | "PUBLICPOL"
    | "WCBPOL"
    | "_ActInsurancePolicyCode"
    | "DENTAL"
    | "DISEASE"
    | "DRUGPOL"
    | "HIP"
    | "LTC"
    | "POS"
    | "HMO"
    | "PPO"
    | "MCPOL"
    | "MENTPOL"
    | "SUBPOL"
    | "VISPOL"
    | "_ActHealthInsuranceTypeCode"
    | "DIS"
    | "EWB"
    | "FLEXP"
    | "ANNU"
    | "TLIFE"
    | "ULIFE"
    | "LIFE"
    | "PNC"
    | "REI"
    | "SURPL"
    | "UMBRL"
    | "_ActInsuranceTypeCode"
    | "CHAR"
    | "CRIME"
    | "EAP"
    | "GOVEMP"
    | "HIRISK"
    | "IND"
    | "MILITARY"
    | "RETIRE"
    | "SOCIAL"
    | "VET"
    | "_ActProgramTypeCode"
    | "_ActCoverageTypeCode"
    | "21"
    | "EMAUTH"
    | "_AuthorizationIssueManagementCode"
    | "_ActAdministrativeDetectedIssueManagementCode"
    | "19"
    | "2"
    | "22"
    | "23"
    | "3"
    | "4"
    | "6"
    | "5"
    | "7"
    | "1"
    | "15"
    | "16"
    | "17"
    | "18"
    | "20"
    | "14"
    | "10"
    | "11"
    | "12"
    | "13"
    | "9"
    | "8"
    | "_ActDetectedIssueManagementCode"
    | "CHLDCARE"
    | "CONVEYNC"
    | "HLTHCARE"
    | "HOMECARE"
    | "HOSPPTNT"
    | "HOSPVSTR"
    | "HOUSEHLD"
    | "INMATE"
    | "INTIMATE"
    | "LTRMCARE"
    | "PLACE"
    | "PTNTCARE"
    | "SCHOOL2"
    | "SOCIAL2"
    | "SUBSTNCE"
    | "TRAVINT"
    | "WORK2"
    | "_ActExposureCode"
    | "CHRG"
    | "REV"
    | "_ActFinancialTransactionCode"
    | "MVA"
    | "SCHOOL"
    | "SPT"
    | "WPA"
    | "_ActIncidentCode"
    | "ACADR"
    | "ACALL"
    | "ACALLG"
    | "ACCONS"
    | "ACDEMO"
    | "ACDI"
    | "ACIMMUN"
    | "ACLAB"
    | "ACMED"
    | "ACMEDC"
    | "ACMEN"
    | "ACOBS"
    | "ACPOLPRG"
    | "ACPROV"
    | "ACPSERV"
    | "ACSUBSTAB"
    | "_ActInformationAccessCode"
    | "INFCON"
    | "INFAUT"
    | "INFCRT"
    | "INFDNG"
    | "INFEMER"
    | "INFPWR"
    | "INFREG"
    | "_ActInformationAccessContextCode"
    | "ALLCAT"
    | "ALLGCAT"
    | "ARCAT"
    | "COBSCAT"
    | "DEMOCAT"
    | "DICAT"
    | "IMMUCAT"
    | "LABCAT"
    | "MEDCCAT"
    | "MENCAT"
    | "PSVCCAT"
    | "RXCAT"
    | "_ActInformationCategoryCode"
    | "ALEC"
    | "BONUS"
    | "CFWD"
    | "EDU"
    | "EPYMT"
    | "GARN"
    | "INVOICE"
    | "PINV"
    | "PPRD"
    | "PROA"
    | "RECOV"
    | "RETRO"
    | "TRAN"
    | "_ActInvoiceAdjudicationPaymentGroupCode"
    | "INVTYPE"
    | "PAYEE"
    | "PAYOR"
    | "SENDAPP"
    | "_ActInvoiceAdjudicationPaymentSummaryCode"
    | "_ActInvoiceAdjudicationPaymentCode"
    | "UNSPSC"
    | "_ActInvoiceDetailClinicalProductCode"
    | "GTIN"
    | "UPC"
    | "_ActInvoiceDetailDrugProductCode"
    | "COIN"
    | "COPAYMENT"
    | "DEDUCTIBLE"
    | "PAY"
    | "SPEND"
    | "COINS"
    | "_ActInvoiceDetailGenericAdjudicatorCode"
    | "AFTHRS"
    | "ISOL"
    | "OOO"
    | "_ActInvoiceDetailGenericModifierCode"
    | "CANCAPT"
    | "DSC"
    | "ESA"
    | "FFSTOP"
    | "FNLFEE"
    | "FRSTFEE"
    | "MARKUP"
    | "MISSAPT"
    | "PERFEE"
    | "PERMBNS"
    | "RESTOCK"
    | "TRAVEL"
    | "URGENT"
    | "_ActInvoiceDetailGenericProviderCode"
    | "FST"
    | "HST"
    | "PST"
    | "_ActInvoiceDetailTaxCode"
    | "_ActInvoiceDetailGenericCode"
    | "I"
    | "P"
    | "S"
    | "SP"
    | "W"
    | "_HL7AccommodationCode"
    | "_ActEncounterAccommodationCode"
    | "_ActInvoiceDetailPreferredAccommodationCode"
    | "_ActInvoiceDetailClinicalServiceCode"
    | "_ActInvoiceDetailCode"
    | "CPNDDRGING"
    | "CPNDINDING"
    | "CPNDSUPING"
    | "DRUGING"
    | "FRAMEING"
    | "LENSING"
    | "PRDING"
    | "_ActInvoiceInterGroupCode"
    | "CPINV"
    | "CSINV"
    | "CSPINV"
    | "FININV"
    | "OHSINV"
    | "PAINV"
    | "RXCINV"
    | "RXDINV"
    | "SBFINV"
    | "VRXINV"
    | "_ActInvoiceRootGroupCode"
    | "_ActInvoiceGroupCode"
    | "_ActInvoiceElementCode"
    | "ADNFPPELAT"
    | "ADNFPPELCT"
    | "ADNFPPMNAT"
    | "ADNFPPMNCT"
    | "ADNFSPELAT"
    | "ADNFSPELCT"
    | "ADNFSPMNAT"
    | "ADNFSPMNCT"
    | "ADNPPPELAT"
    | "ADNPPPELCT"
    | "ADNPPPMNAT"
    | "ADNPPPMNCT"
    | "ADNPSPELAT"
    | "ADNPSPELCT"
    | "ADNPSPMNAT"
    | "ADNPSPMNCT"
    | "ADPPPPELAT"
    | "ADPPPPELCT"
    | "ADPPPPMNAT"
    | "ADPPPPMNCT"
    | "ADPPSPELAT"
    | "ADPPSPELCT"
    | "ADPPSPMNAT"
    | "ADPPSPMNCT"
    | "ADRFPPELAT"
    | "ADRFPPELCT"
    | "ADRFPPMNAT"
    | "ADRFPPMNCT"
    | "ADRFSPELAT"
    | "ADRFSPELCT"
    | "ADRFSPMNAT"
    | "ADRFSPMNCT"
    | "_InvoiceElementAdjudicated"
    | "PDNFPPELAT"
    | "PDNFPPELCT"
    | "PDNFPPMNAT"
    | "PDNFPPMNCT"
    | "PDNFSPELAT"
    | "PDNFSPELCT"
    | "PDNFSPMNAT"
    | "PDNFSPMNCT"
    | "PDNPPPELAT"
    | "PDNPPPELCT"
    | "PDNPPPMNAT"
    | "PDNPPPMNCT"
    | "PDNPSPELAT"
    | "PDNPSPELCT"
    | "PDNPSPMNAT"
    | "PDNPSPMNCT"
    | "PDPPPPELAT"
    | "PDPPPPELCT"
    | "PDPPPPMNAT"
    | "PDPPPPMNCT"
    | "PDPPSPELAT"
    | "PDPPSPELCT"
    | "PDPPSPMNAT"
    | "PDPPSPMNCT"
    | "_InvoiceElementPaid"
    | "SBBLELAT"
    | "SBBLELCT"
    | "SBNFELAT"
    | "SBNFELCT"
    | "SBPDELAT"
    | "SBPDELCT"
    | "_InvoiceElementSubmitted"
    | "_ActInvoiceElementSummaryCode"
    | "COVGE"
    | "EFORM"
    | "FAX"
    | "GFTH"
    | "LATE"
    | "MANUAL"
    | "OOJ"
    | "ORTHO"
    | "PAPER"
    | "PIE"
    | "PYRDELAY"
    | "REFNR"
    | "REPSERV"
    | "UNRELAT"
    | "VERBAUTH"
    | "_ActInvoiceOverrideCode"
    | "CARELIST"
    | "INTOLIST"
    | "PROBLIST"
    | "RISKLIST"
    | "CONDLIST"
    | "GOALLIST"
    | "_ActObservationList"
    | "ACU"
    | "CHRON"
    | "ONET"
    | "PRN"
    | "_ActMedicationTherapyDurationWorkingListCode"
    | "_ActTherapyDurationWorkingListCode"
    | "CURMEDLIST"
    | "DISCMEDLIST"
    | "HISTMEDLIST"
    | "MEDLIST"
    | "_ActListCode"
    | "CTLSUB"
    | "INV"
    | "LU"
    | "OTC"
    | "RX"
    | "SA"
    | "SAC"
    | "_ActMonitoringProtocolCode"
    | "IND01"
    | "IND02"
    | "IND03"
    | "IND04"
    | "IND05"
    | "_ActNonObservationIndicationCode"
    | "VFPAPER"
    | "_ActObservationVerificationType"
    | "ACH"
    | "CHK"
    | "DDP"
    | "NON"
    | "_ActPaymentCode"
    | "DF"
    | "SO"
    | "EM"
    | "FFC"
    | "FFP"
    | "FFSS"
    | "TF"
    | "FF"
    | "FS"
    | "MS"
    | "UD"
    | "RFCS"
    | "RFC"
    | "RFFS"
    | "RFF"
    | "RFPS"
    | "RFP"
    | "RFS"
    | "TBS"
    | "TB"
    | "RF"
    | "UDE"
    | "_ActPharmacySupplyType"
    | "EMRGONLY"
    | "GRANTORCHOICE"
    | "IMPLIED"
    | "IMPLIEDD"
    | "NOCONSENT"
    | "NOPP"
    | "OPTIN"
    | "OPTINR"
    | "OPTOUT"
    | "OPTOUTE"
    | "_ActConsentDirective"
    | "42CFRPart2"
    | "CommonRule"
    | "HIPAANOPP"
    | "HIPAAPsyNotes"
    | "HIPAASelfPay"
    | "Title38Section7332"
    | "_ActUSPrivacyLaw"
    | "_ActPrivacyLaw"
    | "ETH"
    | "GDIS"
    | "HIV"
    | "MST"
    | "SCA"
    | "SDV"
    | "SEX"
    | "COGN"
    | "DVD"
    | "EMOTDIS"
    | "BH"
    | "MH"
    | "PSY"
    | "PSYTHPN"
    | "ETHUD"
    | "OPIOIDUD"
    | "SUD"
    | "SPI"
    | "STD"
    | "TBOO"
    | "VIO"
    | "SICKLE"
    | "_ActInformationSensitivityPolicy"
    | "DEMO"
    | "DOB"
    | "GENDER"
    | "LIVARG"
    | "MARST"
    | "RACE"
    | "REL"
    | "_EntitySensitivityPolicyType"
    | "B"
    | "EMPL"
    | "LOCIS"
    | "SSP"
    | "_RoleInformationSensitivityPolicy"
    | "ADOL"
    | "CEL"
    | "DIA"
    | "DRGIS"
    | "EMP"
    | "PDS"
    | "PHY"
    | "PRS"
    | "_InformationSensitivityPolicy"
    | "ACOCOMPT"
    | "CTCOMPT"
    | "FMCOMPT"
    | "HRCOMPT"
    | "LRCOMPT"
    | "PACOMPT"
    | "RESCOMPT"
    | "RMGTCOMPT"
    | "COMPT"
    | "_ActPrivacyPolicy"
    | "TRSTACCRD"
    | "TRSTAGRE"
    | "TRSTASSUR"
    | "TRSTCERT"
    | "TRSTFWK"
    | "TRSTMEC"
    | "ActTrustPolicyType"
    | "COVPOL"
    | "ACCESSCONSCHEME"
    | "AUTHPOL"
    | "DELEPOL"
    | "ANONY"
    | "AOD"
    | "AUDIT"
    | "AUDTR"
    | "CPLYCC"
    | "CPLYCD"
    | "CPLYJPP"
    | "CPLYOPP"
    | "CPLYOSP"
    | "CPLYPOL"
    | "DECLASSIFYLABEL"
    | "DEID"
    | "DELAU"
    | "DOWNGRDLABEL"
    | "DRIVLABEL"
    | "ENCRYPTR"
    | "ENCRYPTT"
    | "ENCRYPTU"
    | "ENCRYPT"
    | "HUAPRV"
    | "LABEL"
    | "MASK"
    | "MINEC"
    | "PERSISTLABEL"
    | "PRIVMARK"
    | "PSEUD"
    | "REDACT"
    | "UPGRDLABEL"
    | "ObligationPolicy"
    | "NOAUTH"
    | "NOCOLLECT"
    | "NODSCLCD"
    | "NODSCLCDS"
    | "NOINTEGRATE"
    | "NOLIST"
    | "NOMOU"
    | "NOORGPOL"
    | "NOPAT"
    | "NOPERSISTP"
    | "NORDSCLCD"
    | "NORDSCLCDS"
    | "NORDSCLW"
    | "NORELINK"
    | "NOREUSE"
    | "NOVIP"
    | "ORCON"
    | "RefrainPolicy"
    | "SecurityPolicy"
    | "_ActPolicyType"
    | "RENT"
    | "LOAN"
    | "SALE"
    | "TRANSFER"
    | "_ActProductAcquisitionCode"
    | "SREC"
    | "SSTOR"
    | "STRAN"
    | "_ActSpecimenTransportCode"
    | "ACID"
    | "ALK"
    | "DEFB"
    | "FILT"
    | "LDLP"
    | "NEUT"
    | "RECA"
    | "UFIL"
    | "_ActSpecimenTreatmentCode"
    | "DRUG"
    | "FD"
    | "BOOSTER"
    | "INITIMMUNIZ"
    | "IMMUNIZ"
    | "_ActSubstanceAdministrationCode"
    | "LABOE"
    | "MEDOE"
    | "OE"
    | "ALLERLREV"
    | "DIAGLISTE"
    | "DISCHINSTE"
    | "DISCHSUME"
    | "PATEDUE"
    | "PATREPE"
    | "PROBLISTE"
    | "RADREPE"
    | "CLINNOTEE"
    | "IMMLREV"
    | "WELLREMLREV"
    | "REMLREV"
    | "PATDOC"
    | "ALLERLE"
    | "CDSREV"
    | "DISCHSUMREV"
    | "CLINNOTEREV"
    | "DIAGLISTREV"
    | "IMMLE"
    | "LABRREV"
    | "MICROORGRREV"
    | "MICROSENSRREV"
    | "MICRORREV"
    | "MARWLREV"
    | "MLREV"
    | "OREV"
    | "PATREPREV"
    | "PROBLISTREV"
    | "RADREPREV"
    | "WELLREMLE"
    | "REMLE"
    | "FALLRISK"
    | "RISKASSESS"
    | "PATINFO"
    | "_ActTaskCode"
    | "AFOOT"
    | "AMBAIR"
    | "AMBGRND"
    | "AMBHELO"
    | "AMBT"
    | "LAWENF"
    | "PRVTRN"
    | "PUBTRN"
    | "_ActPatientTransportationModeCode"
    | "_ActTransportationModeCode"
    | "ARTBLD"
    | "AUTO-HIGH"
    | "AUTO-LOW"
    | "PRE"
    | "RERUN"
    | "DILUTION"
    | "EVNFCTS"
    | "FIBRIN"
    | "HEMOLYSIS"
    | "ICTERUS"
    | "LIPEMIA"
    | "INTFR"
    | "AVAILABLE"
    | "CONSUMPTION"
    | "CURRENT"
    | "INITIAL"
    | "VOLUME"
    | "_ActSpecObsCode"
    | "ANNDI"
    | "ANNGEN"
    | "ANNIMM"
    | "ANNLAB"
    | "ANNMED"
    | "_ActPatientAnnotationType"
    | "_AnnotationType"
    | "GENE"
    | "_GeneticObservationType"
    | "OBSANTC"
    | "OBSANTV"
    | "_ImmunizationObservationType"
    | "PAT_ADV_EVNT"
    | "VAC_PROBLEM"
    | "_IndividualCaseSafetyReportType"
    | "21611-9"
    | "21612-7"
    | "29553-5"
    | "30525-0"
    | "30972-4"
    | "_LOINCObservationActContextAgeType"
    | "REP_HALF_LIFE"
    | "SPLCOATING"
    | "SPLCOLOR"
    | "SPLIMAGE"
    | "SPLIMPRINT"
    | "SPLSCORING"
    | "SPLSHAPE"
    | "SPLSIZE"
    | "SPLSYMBOL"
    | "_MedicationObservationType"
    | "AIRTRNS"
    | "ANANTRNS"
    | "ANHUMTRNS"
    | "BDYFLDTRNS"
    | "BLDTRNS"
    | "DERMTRNS"
    | "ENVTRNS"
    | "FECTRNS"
    | "FOMTRNS"
    | "FOODTRNS"
    | "HUMHUMTRNS"
    | "INDTRNS"
    | "LACTTRNS"
    | "NOSTRNS"
    | "PARTRNS"
    | "PLACTRNS"
    | "SEXTRNS"
    | "TRNSFTRNS"
    | "VECTRNS"
    | "WATTRNS"
    | "_CaseTransmissionMode"
    | "_ObservationIssueTriggerCodedObservationType"
    | "AGGREGATE"
    | "CMPMSRMTH"
    | "CMPMSRSCRWGHT"
    | "COPY"
    | "CRS"
    | "DEF"
    | "DISC"
    | "FINALDT"
    | "GUIDE"
    | "IDUR"
    | "ITMCNT"
    | "KEY"
    | "MEDT"
    | "MSD"
    | "MSRADJ"
    | "MSRAGG"
    | "MSRIMPROV"
    | "MSRJUR"
    | "MSRRPTR"
    | "MSRRPTTIME"
    | "MSRSCORE"
    | "MSRSET"
    | "MSRTOPIC"
    | "MSRTP"
    | "MSRTYPE"
    | "RAT"
    | "REF"
    | "SDE"
    | "STRAT"
    | "TRANF"
    | "USE"
    | "_ObservationQualityMeasureAttribute"
    | "TIME_ABSOLUTE"
    | "TIME_RELATIVE"
    | "_ObservationSequenceType"
    | "REPRESENTATIVE_BEAT"
    | "RHYTHM"
    | "_ECGObservationSeriesType"
    | "_ObservationSeriesType"
    | "CLSSRM"
    | "GRADE"
    | "SCHL"
    | "SCHLDIV"
    | "TEACHER"
    | "_PatientImmunizationRelatedObservationType"
    | "DENEX"
    | "DENEXCEP"
    | "DENOM"
    | "IPPOP"
    | "IPOP"
    | "MSROBS"
    | "MSRPOPL"
    | "MSRPOPLEX"
    | "NUMER"
    | "NUMEX"
    | "_PopulationInclusionObservationType"
    | "PREFSTRENGTH"
    | "_PreferenceObservationType"
    | "ADVERSE_REACTION"
    | "ASSERTION"
    | "CASESER"
    | "CDIO"
    | "CRIT"
    | "CTMO"
    | "ADMDX"
    | "DISDX"
    | "INTDX"
    | "NOI"
    | "DX"
    | "GISTIER"
    | "HHOBS"
    | "NAT"
    | "SUPPRESSED"
    | "KEY204"
    | "KEY205"
    | "DUPTHPCLS"
    | "DUPTHPGEN"
    | "DUPTHPY"
    | "ABUSE"
    | "FRAUD"
    | "PLYDOC"
    | "PLYPHRM"
    | "COMPLY"
    | "DOSECOND"
    | "DOSEDURHIND"
    | "DOSEDURH"
    | "DOSEDURLIND"
    | "DOSEDURL"
    | "DOSEDUR"
    | "DOSEHINDA"
    | "DOSEHIND"
    | "DOSEHINDSA"
    | "DOSEHINDW"
    | "DOSEH"
    | "DOSEIVLIND"
    | "DOSEIVL"
    | "DOSELINDA"
    | "DOSELIND"
    | "DOSELINDSA"
    | "DOSELINDW"
    | "DOSEL"
    | "MDOSE"
    | "DOSE"
    | "ADALRT"
    | "GEALRT"
    | "PEALRT"
    | "AGE"
    | "HGHT"
    | "LACT"
    | "PREG"
    | "WGHT"
    | "COND"
    | "CREACT"
    | "GEN"
    | "GEND"
    | "LAB"
    | "ALGY"
    | "INT"
    | "REACT"
    | "RALG"
    | "RAR"
    | "RINT"
    | "RREACT"
    | "OBSA"
    | "BUS"
    | "CODE_DEPREC"
    | "CODE_INVAL"
    | "FORMAT"
    | "ILLEGAL"
    | "LEN_LONG"
    | "LEN_SHORT"
    | "LEN_RANGE"
    | "MISSCOND"
    | "MISSMAND"
    | "NODUPS"
    | "NOPERSIST"
    | "MAXOCCURS"
    | "MINOCCURS"
    | "REP_RANGE"
    | "VALIDAT"
    | "_ActAdministrativeAuthorizationDetectedIssueCode"
    | "KEY206"
    | "OBSOLETE"
    | "_ActAdministrativeRuleDetectedIssueCode"
    | "_ActAdministrativeDetectedIssueCode"
    | "FOOD"
    | "DRG"
    | "NHP"
    | "NONRX"
    | "TPROD"
    | "_InteractionDetectedIssueCode"
    | "PREVINEF"
    | "_AppropriatenessDetectedIssueCode"
    | "DACT"
    | "ALRTENDLATE"
    | "ALRTSTRTLATE"
    | "TIME"
    | "ENDLATE"
    | "STRTLATE"
    | "_TimingDetectedIssueCode"
    | "_AdministrationDetectedIssueCode"
    | "ALLDONE"
    | "NOTACTN"
    | "NOTEQUIVGEN"
    | "NOTEQUIVTHER"
    | "NOTEQUIV"
    | "INTERVAL"
    | "MINFREQ"
    | "TIMING"
    | "FULFIL"
    | "HELD"
    | "TOOLATE"
    | "TOOSOON"
    | "_SupplyDetectedIssueCode"
    | "HISTORIC"
    | "PATPREFALT"
    | "PATPREF"
    | "_ActSuppliedItemDetectedIssueCode"
    | "ISSUE"
    | "KSUBJ"
    | "KSUBT"
    | "DALG"
    | "EALG"
    | "FALG"
    | "ALG"
    | "DNAINT"
    | "DINT"
    | "ENAINT"
    | "EINT"
    | "FNAINT"
    | "FINT"
    | "NAINT"
    | "OINT"
    | "SEV"
    | "FDACOATING"
    | "FDACOLOR"
    | "FDAIMPRINTCD"
    | "FDALOGO"
    | "FDASCORING"
    | "FDASHAPE"
    | "FDASIZE"
    | "_FDALabelData"
    | "_ObservationType"
    | "CIRCLE"
    | "ELLIPSE"
    | "POINT"
    | "POLY"
    | "_ROIOverlayShape"
    | "C"
    | "BR"
    | "DM"
    | "FAST"
    | "FORMULA"
    | "GF"
    | "LF"
    | "LP"
    | "LQ"
    | "LS"
    | "NF"
    | "PAF"
    | "PAR"
    | "RD"
    | "SCH"
    | "SUPPLEMENT"
    | "T"
    | "VLI"
    | "DIET"
    | "DRUGPRG"
    | "F"
    | "PRLMN"
    | "SECCATOBS"
    | "SECCLASSOBS"
    | "SECCONOBS"
    | "SECALTINTOBS"
    | "SECDATINTOBS"
    | "SECINTCONOBS"
    | "SECINTPRVABOBS"
    | "SECINTPRVRBOBS"
    | "SECINTPRVOBS"
    | "SECINTSTOBS"
    | "SECINTOBS"
    | "TRSTACCRDOBS"
    | "TRSTAGREOBS"
    | "TRSTCERTOBS"
    | "TRSTFWKOBS"
    | "TRSTLOAOBS"
    | "TRSTMECOBS"
    | "SECTRSTOBS"
    | "SECOBS"
    | "SUBSIDFFS"
    | "WRKCOMP"
    | "_ActBillableServiceCode"
    | "_ActProcedureCode"
    | "_HL7DefinedActCodes"
    | "COPAY"
    | "DEDUCT"
    | "DOSEIND"
    | "PRA"
    | "STORE"
    | "ANNUITY"
    | "PROP"
    | "RETACCT"
    | "TRUST"
    | "ASSET"
    | "CHILD"
    | "DISABL"
    | "INVEST"
    | "SPOUSAL"
    | "SUPPLE"
    | "TAX"
    | "INCOME"
    | "CLOTH"
    | "HEALTH"
    | "HOUSE"
    | "LEGAL"
    | "MORTG"
    | "SUNDRY"
    | "TRANS"
    | "UTIL"
    | "LIVEXP"
    | "_ActFinancialStatusObservationValue"
    | "ADOPT"
    | "BTHCERT"
    | "CCOC"
    | "DRLIC"
    | "FOSTER"
    | "MEMBER"
    | "MIL"
    | "MRGCERT"
    | "PASSPORT"
    | "STUDENRL"
    | "ELSTAT"
    | "DISABLE"
    | "IVDRG"
    | "PGNT"
    | "HLSTAT"
    | "RELDEP"
    | "SPSDEP"
    | "URELDEP"
    | "LIVDEP"
    | "ALONE"
    | "DEPCHD"
    | "DEPSPS"
    | "DEPYGCHD"
    | "FAM"
    | "RELAT"
    | "SPS"
    | "UNREL"
    | "LIVSIT"
    | "HMLESS"
    | "ILGIM"
    | "INCAR"
    | "PROB"
    | "REFUG"
    | "UNEMPL"
    | "SOECSTAT"
    | "_ActCoverageAssessmentObservationValue"
    | "A0"
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "_AllergyTestValue"
    | "ALLORNONESCR"
    | "LINEARSCR"
    | "OPPORSCR"
    | "WEIGHTSCR"
    | "_CompositeMeasureScoring"
    | "ADC"
    | "CHD"
    | "DEP"
    | "DP"
    | "ECH"
    | "FLY"
    | "_CoverageLevelObservationValue"
    | "_CoverageLimitObservationValue"
    | "CRITH"
    | "CRITL"
    | "CRITU"
    | "_CriticalityObservationValue"
    | "Employed"
    | "NotInLaborForce"
    | "Unemployed"
    | "_EmploymentStatus"
    | "Homozygote"
    | "_GeneticObservationValue"
    | "COHORT"
    | "CONTVAR"
    | "PROPOR"
    | "RATIO"
    | "_ObservationMeasureScoring"
    | "COMPOSITE"
    | "EFFICIENCY"
    | "EXPERIENCE"
    | "INTERM-OM"
    | "PRO-PM"
    | "OUTCOME"
    | "APPROPRIATE"
    | "PROCESS"
    | "RESOURCE"
    | "STRUCTURE"
    | "_ObservationMeasureType"
    | "IPP"
    | "_ObservationPopulationInclusion"
    | "G"
    | "LE"
    | "ME"
    | "MI"
    | "_PartialCompletionScale"
    | "ABSTRED"
    | "AGGRED"
    | "ANONYED"
    | "MAPPED"
    | "MASKED"
    | "PSEUDED"
    | "REDACTED"
    | "SUBSETTED"
    | "SYNTAC"
    | "TRSLT"
    | "VERSIONED"
    | "_SECALTINTOBV"
    | "CRYTOHASH"
    | "DIGSIG"
    | "_SECDATINTOBV"
    | "HRELIABLE"
    | "RELIABLE"
    | "UNCERTREL"
    | "UNRELIABLE"
    | "_SECINTCONOBV"
    | "CLINAST"
    | "DEVAST"
    | "HCPAST"
    | "PACQAST"
    | "PATAST"
    | "PAYAST"
    | "PROAST"
    | "SDMAST"
    | "_SECINTPRVABOBV"
    | "CLINRPT"
    | "DEVRPT"
    | "HCPRPT"
    | "PACQRPT"
    | "PATRPT"
    | "PAYRPT"
    | "PRORPT"
    | "SDMRPT"
    | "_SECINTPRVRBOBV"
    | "_SECINTPRVOBV"
    | "_SECINTOBV"
    | "TRSTACCRDOBV"
    | "TRSTAGREOBV"
    | "TRSTCERTOBV"
    | "LOAAN1"
    | "LOAAN2"
    | "LOAAN3"
    | "LOAAN4"
    | "LOAAN"
    | "LOAAP1"
    | "LOAAP2"
    | "LOAAP3"
    | "LOAAP4"
    | "LOAAP"
    | "LOAAS1"
    | "LOAAS2"
    | "LOAAS3"
    | "LOAAS4"
    | "LOAAS"
    | "LOACM1"
    | "LOACM2"
    | "LOACM3"
    | "LOACM4"
    | "LOACM"
    | "LOAID1"
    | "LOAID2"
    | "LOAID3"
    | "LOAID4"
    | "LOAID"
    | "LOANR1"
    | "LOANR2"
    | "LOANR3"
    | "LOANR4"
    | "LOANR"
    | "LOARA1"
    | "LOARA2"
    | "LOARA3"
    | "LOARA4"
    | "LOARA"
    | "LOATK1"
    | "LOATK2"
    | "LOATK3"
    | "LOATK4"
    | "LOATK"
    | "TRSTLOAOBV"
    | "TRSTMECOBV"
    | "SECTRSTOBV"
    | "_SecurityObservationValue"
    | "H"
    | "_SeverityObservation"
    | "LLD"
    | "RLD"
    | "SFWL"
    | "SIT"
    | "STN"
    | "RTRD"
    | "TRD"
    | "SUP"
    | "_SubjectBodyPosition"
    | "ACT"
    | "ACTPEND"
    | "INACT"
    | "INPNDINV"
    | "INPNDUPD"
    | "_VerificationOutcomeValue"
    | "DS"
    | "EMS"
    | "ES"
    | "NS"
    | "RSWN"
    | "RSWON"
    | "VLS"
    | "VS"
    | "_WorkSchedule"
    | "_AnnotationValue"
    | "_CommonClinicalObservationValue"
    | "_IndividualCaseSafetyReportValueDomains"
    | "_IndicationValue"
    | "ACCREQNA"
    | "FLRCNV"
    | "MEDNEC"
    | "PAT"
    | "_ActAccommodationReason"
    | "COVSUS"
    | "DECSD"
    | "REGERR"
    | "_ActIneligibilityReason"
    | "EMPLOY"
    | "FINAN"
    | "MULTI"
    | "STATUTORY"
    | "VEHIC"
    | "WORK"
    | "_CoverageEligibilityReason"
    | "_EligibilityActReasonCode"
    | "_ActCoverageReason"
    | "OVRER"
    | "OVRINCOMP"
    | "OVRPJ"
    | "OVRPS"
    | "OVRTPS"
    | "_ActConsentInformationAccessOverrideReason"
    | "HMARKT"
    | "CAREMGT"
    | "DONAT"
    | "GOV"
    | "HACCRED"
    | "HCOMPL"
    | "HDECD"
    | "HDIRECT"
    | "HDM"
    | "HLEGAL"
    | "HOUTCOMS"
    | "HPRGRP"
    | "HQUALIMP"
    | "LABELING"
    | "METAMGT"
    | "HSYSADMIN"
    | "MEMADMIN"
    | "MILCDM"
    | "PATADMIN"
    | "PATSFTY"
    | "PERFMSR"
    | "RECORDMGT"
    | "HTEST"
    | "SYSDEV"
    | "TRAIN"
    | "HOPERAT"
    | "CLMATTCH"
    | "COVAUTH"
    | "ELIGDTRM"
    | "ELIGVER"
    | "ENROLLM"
    | "MILDCRG"
    | "COVERAGE"
    | "REMITADV"
    | "HPAYMT"
    | "BIORCH"
    | "CLINTRCHNPC"
    | "CLINTRCHPC"
    | "PRECLINTRCH"
    | "CLINTRCH"
    | "DSRCH"
    | "POARCH"
    | "TRANSRCH"
    | "HRESCH"
    | "FAMRQT"
    | "PWATRNY"
    | "SUPNWK"
    | "PATRQT"
    | "DISASTER"
    | "THREAT"
    | "PUBHLTH"
    | "CLINTRL"
    | "COC"
    | "BTG"
    | "ERTREAT"
    | "ETREAT"
    | "POPHLTH"
    | "TREAT"
    | "PurposeOfUse"
    | "_ActHealthInformationManagementReason"
    | "MARKT"
    | "ACCRED"
    | "COMPL"
    | "ENADMIN"
    | "OUTCOMS"
    | "PRGRPT"
    | "QUALIMP"
    | "SYSADMN"
    | "OPERAT"
    | "PAYMT"
    | "RESCH"
    | "SRVC"
    | "_ActInformationPrivacyReason"
    | "_ActInformationManagementReason"
    | "COLDCHNBRK"
    | "ADVSTORAGE"
    | "EXPLOT"
    | "OUTSIDESCHED"
    | "PRODRECALL"
    | "_ActInvalidReason"
    | "INCCOVPTY"
    | "INCINVOICE"
    | "INCPOLICY"
    | "INCPROV"
    | "_ActInvoiceCancelReason"
    | "IMMUNE"
    | "MEDPREC"
    | "OSTOCK"
    | "PATOBJ"
    | "PHILISOP"
    | "RELIG"
    | "VACEFF"
    | "VACSAF"
    | "_ActNoImmunizationReason"
    | "FRR01"
    | "FRR02"
    | "FRR03"
    | "FRR04"
    | "FRR05"
    | "FRR06"
    | "_ActSupplyFulfillmentRefusalReason"
    | "RET"
    | "TRM"
    | "UNS"
    | "_ClinicalResearchEventReason"
    | "NPT"
    | "PPT"
    | "UPT"
    | "_ClinicalResearchObservationReason"
    | "ALTCHOICE"
    | "CLARIF"
    | "DRUGHIGH"
    | "HOSPADM"
    | "LABINT"
    | "NON-AVAIL"
    | "SALG"
    | "SDDI"
    | "SDUPTHER"
    | "SINTOL"
    | "WASHOUT"
    | "_CombinedPharmacyOrderSuspendReasonCode"
    | "ALTD"
    | "EIE"
    | "NORECMTCH"
    | "_ControlActNullificationReasonCode"
    | "INRQSTATE"
    | "NOPRODMTCH"
    | "NOSERMTCH"
    | "NOVERMTCH"
    | "NOMATCH"
    | "NOUSERPERM"
    | "NOAGNTPERM"
    | "NOUSRPERM"
    | "NOPERM"
    | "WRNGVER"
    | "_ControlActNullificationRefusalReasonType"
    | "DISCONT"
    | "INEFFECT"
    | "MONIT"
    | "NOREQ"
    | "NOTCOVER"
    | "PREFUS"
    | "RECALL"
    | "DOSECHG"
    | "REPLACE"
    | "REPLACEFIX"
    | "UNABLE"
    | "_MedicationOrderAbortReasonCode"
    | "HOLDDONE"
    | "HOLDINAP"
    | "_MedicationOrderReleaseReasonCode"
    | "ADMINERROR"
    | "CLINMOD"
    | "_ModifyPrescriptionReasonType"
    | "CONTRA"
    | "FOABORT"
    | "FOSUSP"
    | "NOPICK"
    | "PATDEC"
    | "QUANTCHG"
    | "_PharmacySupplyEventAbortReason"
    | "FLRSTCK"
    | "OFFICE"
    | "PHARM"
    | "PROG"
    | "_PharmacySupplyEventStockReasonCode"
    | "ALREADYRX"
    | "FAMPHYS"
    | "MODIFY"
    | "NEEDAPMT"
    | "NOTAVAIL"
    | "NOTPAT"
    | "ONHOLD"
    | "PRNA"
    | "STOPMED"
    | "TOOEARLY"
    | "_PharmacySupplyRequestRenewalRefusalReasonCode"
    | "IMPROV"
    | "INTOL"
    | "NEWSTR"
    | "NEWTHER"
    | "_SupplyOrderAbortReasonCode"
    | "_ControlActReason"
    | "CHGDATA"
    | "FIXDATA"
    | "MDATA"
    | "NEWDATA"
    | "UMDATA"
    | "_GenericUpdateReasonCode"
    | "ADMREV"
    | "PATCAR"
    | "PATREQ"
    | "PRCREV"
    | "REGUL"
    | "RSRCH"
    | "VALIDATION"
    | "_PatientProfileQueryReasonCode"
    | "LOCKED"
    | "UNKWNTARGET"
    | "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode"
    | "_RefusalReasonCode"
    | "DEC"
    | "FIN"
    | "MTG"
    | "_SchedulingActReason"
    | "FILLED"
    | "_StatusRevisionRefusalReasonCode"
    | "PATINELIG"
    | "PROTUNMET"
    | "PROVUNAUTH"
    | "_SubstanceAdministrationPermissionRefusalReasonCode"
    | "ALGINT"
    | "COMPCON"
    | "THERCHAR"
    | "TRIAL"
    | "_SubstanceAdminSubstitutionNotAllowedReason"
    | "CT"
    | "FP"
    | "OS"
    | "RR"
    | "_SubstanceAdminSubstitutionReason"
    | "ER"
    | "RQ"
    | "_TransferActReason"
    | "_ActBillableClinicalServiceReason"
    | "_ActBillableServiceReason"
    | "ESP"
    | "SPC"
    | "SPO";

const Securitylabels: t.Type<Securitylabels> = t.union(
    [
        t.literal("U"),
        t.literal("L"),
        t.literal("M"),
        t.literal("N"),
        t.literal("R"),
        t.literal("V"),
        t.literal("ACCTRECEIVABLE"),
        t.literal("CASH"),
        t.literal("AE"),
        t.literal("DN"),
        t.literal("DV"),
        t.literal("MC"),
        t.literal("CC"),
        t.literal("PBILLACCT"),
        t.literal("_ActAccountCode"),
        t.literal("CONT"),
        t.literal("DAY"),
        t.literal("LOC"),
        t.literal("MONTH"),
        t.literal("PERIOD"),
        t.literal("PROV"),
        t.literal("WEEK"),
        t.literal("YEAR"),
        t.literal("_ActAdjudicationGroupCode"),
        t.literal("ANF"),
        t.literal("AA"),
        t.literal("AR"),
        t.literal("AS"),
        t.literal("_ActAdjudicationCode"),
        t.literal("DISPLAY"),
        t.literal("FORM"),
        t.literal("_ActAdjudicationResultActionCode"),
        t.literal("CPTM"),
        t.literal("HCPCSA"),
        t.literal("_ActBillableModifierCode"),
        t.literal("BLK"),
        t.literal("CAP"),
        t.literal("CONTF"),
        t.literal("FINBILL"),
        t.literal("ROST"),
        t.literal("SESS"),
        t.literal("FFPS"),
        t.literal("FFCS"),
        t.literal("TFS"),
        t.literal("FFS"),
        t.literal("_ActBillingArrangementCode"),
        t.literal("ROIFS"),
        t.literal("ROIPS"),
        t.literal("_ActBoundedROICode"),
        t.literal("CACC"),
        t.literal("CAIC"),
        t.literal("CAMC"),
        t.literal("CANC"),
        t.literal("CAPC"),
        t.literal("CBGC"),
        t.literal("CCCC"),
        t.literal("CCGC"),
        t.literal("CCPC"),
        t.literal("CCSC"),
        t.literal("CDEC"),
        t.literal("CDRC"),
        t.literal("CEMC"),
        t.literal("CFPC"),
        t.literal("CIMC"),
        t.literal("CMGC"),
        t.literal("CNEC"),
        t.literal("CNMC"),
        t.literal("CNQC"),
        t.literal("CNSC"),
        t.literal("COGC"),
        t.literal("COMC"),
        t.literal("COPC"),
        t.literal("COSC"),
        t.literal("COTC"),
        t.literal("CPEC"),
        t.literal("CPGC"),
        t.literal("CPHC"),
        t.literal("CPRC"),
        t.literal("CPSC"),
        t.literal("CPYC"),
        t.literal("CROC"),
        t.literal("CRPC"),
        t.literal("CSUC"),
        t.literal("CTSC"),
        t.literal("CURC"),
        t.literal("CVSC"),
        t.literal("LGPC"),
        t.literal("_ActCredentialedCareProvisionPersonCode"),
        t.literal("AALC"),
        t.literal("AAMC"),
        t.literal("ABHC"),
        t.literal("ACAC"),
        t.literal("ACHC"),
        t.literal("AHOC"),
        t.literal("ALTC"),
        t.literal("AOSC"),
        t.literal("CACS"),
        t.literal("CAMI"),
        t.literal("CAST"),
        t.literal("CBAR"),
        t.literal("CCAD"),
        t.literal("CCAR"),
        t.literal("CDEP"),
        t.literal("CDGD"),
        t.literal("CDIA"),
        t.literal("CEPI"),
        t.literal("CFEL"),
        t.literal("CHFC"),
        t.literal("CHRO"),
        t.literal("CHYP"),
        t.literal("CMIH"),
        t.literal("CMSC"),
        t.literal("COJR"),
        t.literal("CONC"),
        t.literal("COPD"),
        t.literal("CORT"),
        t.literal("CPAD"),
        t.literal("CPND"),
        t.literal("CPST"),
        t.literal("CSDM"),
        t.literal("CSIC"),
        t.literal("CSLD"),
        t.literal("CSPT"),
        t.literal("CTBU"),
        t.literal("CVDC"),
        t.literal("CWMA"),
        t.literal("CWOH"),
        t.literal("_ActCredentialedCareProvisionProgramCode"),
        t.literal("_ActCredentialedCareCode"),
        t.literal("AMB"),
        t.literal("EMER"),
        t.literal("FLD"),
        t.literal("HH"),
        t.literal("ACUTE"),
        t.literal("NONAC"),
        t.literal("IMP"),
        t.literal("OBSENC"),
        t.literal("PRENC"),
        t.literal("SS"),
        t.literal("VR"),
        t.literal("_ActEncounterCode"),
        t.literal("ALC"),
        t.literal("CARD"),
        t.literal("CHR"),
        t.literal("DNTL"),
        t.literal("DRGRHB"),
        t.literal("GENRL"),
        t.literal("MED"),
        t.literal("OBS"),
        t.literal("ONC"),
        t.literal("PALL"),
        t.literal("PED"),
        t.literal("PHAR"),
        t.literal("PHYRHB"),
        t.literal("PSYCH"),
        t.literal("SURG"),
        t.literal("_ActMedicalServiceCode"),
        t.literal("_ActCareProvisionCode"),
        t.literal("AUTOATTCH"),
        t.literal("DOCUMENT"),
        t.literal("HEALTHREC"),
        t.literal("IMG"),
        t.literal("LABRESULTS"),
        t.literal("MODEL"),
        t.literal("WIATTCH"),
        t.literal("XRAY"),
        t.literal("_ActClaimAttachmentCategoryCode"),
        t.literal("ICOL"),
        t.literal("IDSCL"),
        t.literal("INFAO"),
        t.literal("INFASO"),
        t.literal("INFA"),
        t.literal("IRDSCL"),
        t.literal("RSDID"),
        t.literal("RSREID"),
        t.literal("RESEARCH"),
        t.literal("_ActConsentType"),
        t.literal("ID"),
        t.literal("IP"),
        t.literal("O"),
        t.literal("X"),
        t.literal("_ActContainerRegistrationCode"),
        t.literal("AUTO"),
        t.literal("ENDC"),
        t.literal("REFLEX"),
        t.literal("_ActControlVariable"),
        t.literal("AUTH"),
        t.literal("NAUTH"),
        t.literal("_ActCoverageAuthorizationConfirmationCode"),
        t.literal("ELG"),
        t.literal("NELG"),
        t.literal("_ActCoverageEligibilityConfirmationCode"),
        t.literal("_ActCoverageConfirmationCode"),
        t.literal("COVPRD"),
        t.literal("LFEMX"),
        t.literal("NETAMT"),
        t.literal("PRDMX"),
        t.literal("UNITPRICE"),
        t.literal("UNITQTY"),
        t.literal("_ActCoverageQuantityLimitCode"),
        t.literal("COVMX"),
        t.literal("_ActCoveredPartyLimitCode"),
        t.literal("_ActCoverageLimitCode"),
        t.literal("EHCPOL"),
        t.literal("HSAPOL"),
        t.literal("COL"),
        t.literal("UNINSMOT"),
        t.literal("AUTOPOL"),
        t.literal("DENTPRG"),
        t.literal("CANPRG"),
        t.literal("ENDRENAL"),
        t.literal("HIVAIDS"),
        t.literal("DISEASEPRG"),
        t.literal("MANDPOL"),
        t.literal("MENTPRG"),
        t.literal("SAFNET"),
        t.literal("SUBPRG"),
        t.literal("SUBSIDMC"),
        t.literal("SUBSUPP"),
        t.literal("SUBSIDIZ"),
        t.literal("PUBLICPOL"),
        t.literal("WCBPOL"),
        t.literal("_ActInsurancePolicyCode"),
        t.literal("DENTAL"),
        t.literal("DISEASE"),
        t.literal("DRUGPOL"),
        t.literal("HIP"),
        t.literal("LTC"),
        t.literal("POS"),
        t.literal("HMO"),
        t.literal("PPO"),
        t.literal("MCPOL"),
        t.literal("MENTPOL"),
        t.literal("SUBPOL"),
        t.literal("VISPOL"),
        t.literal("_ActHealthInsuranceTypeCode"),
        t.literal("DIS"),
        t.literal("EWB"),
        t.literal("FLEXP"),
        t.literal("ANNU"),
        t.literal("TLIFE"),
        t.literal("ULIFE"),
        t.literal("LIFE"),
        t.literal("PNC"),
        t.literal("REI"),
        t.literal("SURPL"),
        t.literal("UMBRL"),
        t.literal("_ActInsuranceTypeCode"),
        t.literal("CHAR"),
        t.literal("CRIME"),
        t.literal("EAP"),
        t.literal("GOVEMP"),
        t.literal("HIRISK"),
        t.literal("IND"),
        t.literal("MILITARY"),
        t.literal("RETIRE"),
        t.literal("SOCIAL"),
        t.literal("VET"),
        t.literal("_ActProgramTypeCode"),
        t.literal("_ActCoverageTypeCode"),
        t.literal("21"),
        t.literal("EMAUTH"),
        t.literal("_AuthorizationIssueManagementCode"),
        t.literal("_ActAdministrativeDetectedIssueManagementCode"),
        t.literal("19"),
        t.literal("2"),
        t.literal("22"),
        t.literal("23"),
        t.literal("3"),
        t.literal("4"),
        t.literal("6"),
        t.literal("5"),
        t.literal("7"),
        t.literal("1"),
        t.literal("15"),
        t.literal("16"),
        t.literal("17"),
        t.literal("18"),
        t.literal("20"),
        t.literal("14"),
        t.literal("10"),
        t.literal("11"),
        t.literal("12"),
        t.literal("13"),
        t.literal("9"),
        t.literal("8"),
        t.literal("_ActDetectedIssueManagementCode"),
        t.literal("CHLDCARE"),
        t.literal("CONVEYNC"),
        t.literal("HLTHCARE"),
        t.literal("HOMECARE"),
        t.literal("HOSPPTNT"),
        t.literal("HOSPVSTR"),
        t.literal("HOUSEHLD"),
        t.literal("INMATE"),
        t.literal("INTIMATE"),
        t.literal("LTRMCARE"),
        t.literal("PLACE"),
        t.literal("PTNTCARE"),
        t.literal("SCHOOL2"),
        t.literal("SOCIAL2"),
        t.literal("SUBSTNCE"),
        t.literal("TRAVINT"),
        t.literal("WORK2"),
        t.literal("_ActExposureCode"),
        t.literal("CHRG"),
        t.literal("REV"),
        t.literal("_ActFinancialTransactionCode"),
        t.literal("MVA"),
        t.literal("SCHOOL"),
        t.literal("SPT"),
        t.literal("WPA"),
        t.literal("_ActIncidentCode"),
        t.literal("ACADR"),
        t.literal("ACALL"),
        t.literal("ACALLG"),
        t.literal("ACCONS"),
        t.literal("ACDEMO"),
        t.literal("ACDI"),
        t.literal("ACIMMUN"),
        t.literal("ACLAB"),
        t.literal("ACMED"),
        t.literal("ACMEDC"),
        t.literal("ACMEN"),
        t.literal("ACOBS"),
        t.literal("ACPOLPRG"),
        t.literal("ACPROV"),
        t.literal("ACPSERV"),
        t.literal("ACSUBSTAB"),
        t.literal("_ActInformationAccessCode"),
        t.literal("INFCON"),
        t.literal("INFAUT"),
        t.literal("INFCRT"),
        t.literal("INFDNG"),
        t.literal("INFEMER"),
        t.literal("INFPWR"),
        t.literal("INFREG"),
        t.literal("_ActInformationAccessContextCode"),
        t.literal("ALLCAT"),
        t.literal("ALLGCAT"),
        t.literal("ARCAT"),
        t.literal("COBSCAT"),
        t.literal("DEMOCAT"),
        t.literal("DICAT"),
        t.literal("IMMUCAT"),
        t.literal("LABCAT"),
        t.literal("MEDCCAT"),
        t.literal("MENCAT"),
        t.literal("PSVCCAT"),
        t.literal("RXCAT"),
        t.literal("_ActInformationCategoryCode"),
        t.literal("ALEC"),
        t.literal("BONUS"),
        t.literal("CFWD"),
        t.literal("EDU"),
        t.literal("EPYMT"),
        t.literal("GARN"),
        t.literal("INVOICE"),
        t.literal("PINV"),
        t.literal("PPRD"),
        t.literal("PROA"),
        t.literal("RECOV"),
        t.literal("RETRO"),
        t.literal("TRAN"),
        t.literal("_ActInvoiceAdjudicationPaymentGroupCode"),
        t.literal("INVTYPE"),
        t.literal("PAYEE"),
        t.literal("PAYOR"),
        t.literal("SENDAPP"),
        t.literal("_ActInvoiceAdjudicationPaymentSummaryCode"),
        t.literal("_ActInvoiceAdjudicationPaymentCode"),
        t.literal("UNSPSC"),
        t.literal("_ActInvoiceDetailClinicalProductCode"),
        t.literal("GTIN"),
        t.literal("UPC"),
        t.literal("_ActInvoiceDetailDrugProductCode"),
        t.literal("COIN"),
        t.literal("COPAYMENT"),
        t.literal("DEDUCTIBLE"),
        t.literal("PAY"),
        t.literal("SPEND"),
        t.literal("COINS"),
        t.literal("_ActInvoiceDetailGenericAdjudicatorCode"),
        t.literal("AFTHRS"),
        t.literal("ISOL"),
        t.literal("OOO"),
        t.literal("_ActInvoiceDetailGenericModifierCode"),
        t.literal("CANCAPT"),
        t.literal("DSC"),
        t.literal("ESA"),
        t.literal("FFSTOP"),
        t.literal("FNLFEE"),
        t.literal("FRSTFEE"),
        t.literal("MARKUP"),
        t.literal("MISSAPT"),
        t.literal("PERFEE"),
        t.literal("PERMBNS"),
        t.literal("RESTOCK"),
        t.literal("TRAVEL"),
        t.literal("URGENT"),
        t.literal("_ActInvoiceDetailGenericProviderCode"),
        t.literal("FST"),
        t.literal("HST"),
        t.literal("PST"),
        t.literal("_ActInvoiceDetailTaxCode"),
        t.literal("_ActInvoiceDetailGenericCode"),
        t.literal("I"),
        t.literal("P"),
        t.literal("S"),
        t.literal("SP"),
        t.literal("W"),
        t.literal("_HL7AccommodationCode"),
        t.literal("_ActEncounterAccommodationCode"),
        t.literal("_ActInvoiceDetailPreferredAccommodationCode"),
        t.literal("_ActInvoiceDetailClinicalServiceCode"),
        t.literal("_ActInvoiceDetailCode"),
        t.literal("CPNDDRGING"),
        t.literal("CPNDINDING"),
        t.literal("CPNDSUPING"),
        t.literal("DRUGING"),
        t.literal("FRAMEING"),
        t.literal("LENSING"),
        t.literal("PRDING"),
        t.literal("_ActInvoiceInterGroupCode"),
        t.literal("CPINV"),
        t.literal("CSINV"),
        t.literal("CSPINV"),
        t.literal("FININV"),
        t.literal("OHSINV"),
        t.literal("PAINV"),
        t.literal("RXCINV"),
        t.literal("RXDINV"),
        t.literal("SBFINV"),
        t.literal("VRXINV"),
        t.literal("_ActInvoiceRootGroupCode"),
        t.literal("_ActInvoiceGroupCode"),
        t.literal("_ActInvoiceElementCode"),
        t.literal("ADNFPPELAT"),
        t.literal("ADNFPPELCT"),
        t.literal("ADNFPPMNAT"),
        t.literal("ADNFPPMNCT"),
        t.literal("ADNFSPELAT"),
        t.literal("ADNFSPELCT"),
        t.literal("ADNFSPMNAT"),
        t.literal("ADNFSPMNCT"),
        t.literal("ADNPPPELAT"),
        t.literal("ADNPPPELCT"),
        t.literal("ADNPPPMNAT"),
        t.literal("ADNPPPMNCT"),
        t.literal("ADNPSPELAT"),
        t.literal("ADNPSPELCT"),
        t.literal("ADNPSPMNAT"),
        t.literal("ADNPSPMNCT"),
        t.literal("ADPPPPELAT"),
        t.literal("ADPPPPELCT"),
        t.literal("ADPPPPMNAT"),
        t.literal("ADPPPPMNCT"),
        t.literal("ADPPSPELAT"),
        t.literal("ADPPSPELCT"),
        t.literal("ADPPSPMNAT"),
        t.literal("ADPPSPMNCT"),
        t.literal("ADRFPPELAT"),
        t.literal("ADRFPPELCT"),
        t.literal("ADRFPPMNAT"),
        t.literal("ADRFPPMNCT"),
        t.literal("ADRFSPELAT"),
        t.literal("ADRFSPELCT"),
        t.literal("ADRFSPMNAT"),
        t.literal("ADRFSPMNCT"),
        t.literal("_InvoiceElementAdjudicated"),
        t.literal("PDNFPPELAT"),
        t.literal("PDNFPPELCT"),
        t.literal("PDNFPPMNAT"),
        t.literal("PDNFPPMNCT"),
        t.literal("PDNFSPELAT"),
        t.literal("PDNFSPELCT"),
        t.literal("PDNFSPMNAT"),
        t.literal("PDNFSPMNCT"),
        t.literal("PDNPPPELAT"),
        t.literal("PDNPPPELCT"),
        t.literal("PDNPPPMNAT"),
        t.literal("PDNPPPMNCT"),
        t.literal("PDNPSPELAT"),
        t.literal("PDNPSPELCT"),
        t.literal("PDNPSPMNAT"),
        t.literal("PDNPSPMNCT"),
        t.literal("PDPPPPELAT"),
        t.literal("PDPPPPELCT"),
        t.literal("PDPPPPMNAT"),
        t.literal("PDPPPPMNCT"),
        t.literal("PDPPSPELAT"),
        t.literal("PDPPSPELCT"),
        t.literal("PDPPSPMNAT"),
        t.literal("PDPPSPMNCT"),
        t.literal("_InvoiceElementPaid"),
        t.literal("SBBLELAT"),
        t.literal("SBBLELCT"),
        t.literal("SBNFELAT"),
        t.literal("SBNFELCT"),
        t.literal("SBPDELAT"),
        t.literal("SBPDELCT"),
        t.literal("_InvoiceElementSubmitted"),
        t.literal("_ActInvoiceElementSummaryCode"),
        t.literal("COVGE"),
        t.literal("EFORM"),
        t.literal("FAX"),
        t.literal("GFTH"),
        t.literal("LATE"),
        t.literal("MANUAL"),
        t.literal("OOJ"),
        t.literal("ORTHO"),
        t.literal("PAPER"),
        t.literal("PIE"),
        t.literal("PYRDELAY"),
        t.literal("REFNR"),
        t.literal("REPSERV"),
        t.literal("UNRELAT"),
        t.literal("VERBAUTH"),
        t.literal("_ActInvoiceOverrideCode"),
        t.literal("CARELIST"),
        t.literal("INTOLIST"),
        t.literal("PROBLIST"),
        t.literal("RISKLIST"),
        t.literal("CONDLIST"),
        t.literal("GOALLIST"),
        t.literal("_ActObservationList"),
        t.literal("ACU"),
        t.literal("CHRON"),
        t.literal("ONET"),
        t.literal("PRN"),
        t.literal("_ActMedicationTherapyDurationWorkingListCode"),
        t.literal("_ActTherapyDurationWorkingListCode"),
        t.literal("CURMEDLIST"),
        t.literal("DISCMEDLIST"),
        t.literal("HISTMEDLIST"),
        t.literal("MEDLIST"),
        t.literal("_ActListCode"),
        t.literal("CTLSUB"),
        t.literal("INV"),
        t.literal("LU"),
        t.literal("OTC"),
        t.literal("RX"),
        t.literal("SA"),
        t.literal("SAC"),
        t.literal("_ActMonitoringProtocolCode"),
        t.literal("IND01"),
        t.literal("IND02"),
        t.literal("IND03"),
        t.literal("IND04"),
        t.literal("IND05"),
        t.literal("_ActNonObservationIndicationCode"),
        t.literal("VFPAPER"),
        t.literal("_ActObservationVerificationType"),
        t.literal("ACH"),
        t.literal("CHK"),
        t.literal("DDP"),
        t.literal("NON"),
        t.literal("_ActPaymentCode"),
        t.literal("DF"),
        t.literal("SO"),
        t.literal("EM"),
        t.literal("FFC"),
        t.literal("FFP"),
        t.literal("FFSS"),
        t.literal("TF"),
        t.literal("FF"),
        t.literal("FS"),
        t.literal("MS"),
        t.literal("UD"),
        t.literal("RFCS"),
        t.literal("RFC"),
        t.literal("RFFS"),
        t.literal("RFF"),
        t.literal("RFPS"),
        t.literal("RFP"),
        t.literal("RFS"),
        t.literal("TBS"),
        t.literal("TB"),
        t.literal("RF"),
        t.literal("UDE"),
        t.literal("_ActPharmacySupplyType"),
        t.literal("EMRGONLY"),
        t.literal("GRANTORCHOICE"),
        t.literal("IMPLIED"),
        t.literal("IMPLIEDD"),
        t.literal("NOCONSENT"),
        t.literal("NOPP"),
        t.literal("OPTIN"),
        t.literal("OPTINR"),
        t.literal("OPTOUT"),
        t.literal("OPTOUTE"),
        t.literal("_ActConsentDirective"),
        t.literal("42CFRPart2"),
        t.literal("CommonRule"),
        t.literal("HIPAANOPP"),
        t.literal("HIPAAPsyNotes"),
        t.literal("HIPAASelfPay"),
        t.literal("Title38Section7332"),
        t.literal("_ActUSPrivacyLaw"),
        t.literal("_ActPrivacyLaw"),
        t.literal("ETH"),
        t.literal("GDIS"),
        t.literal("HIV"),
        t.literal("MST"),
        t.literal("SCA"),
        t.literal("SDV"),
        t.literal("SEX"),
        t.literal("COGN"),
        t.literal("DVD"),
        t.literal("EMOTDIS"),
        t.literal("BH"),
        t.literal("MH"),
        t.literal("PSY"),
        t.literal("PSYTHPN"),
        t.literal("ETHUD"),
        t.literal("OPIOIDUD"),
        t.literal("SUD"),
        t.literal("SPI"),
        t.literal("STD"),
        t.literal("TBOO"),
        t.literal("VIO"),
        t.literal("SICKLE"),
        t.literal("_ActInformationSensitivityPolicy"),
        t.literal("DEMO"),
        t.literal("DOB"),
        t.literal("GENDER"),
        t.literal("LIVARG"),
        t.literal("MARST"),
        t.literal("RACE"),
        t.literal("REL"),
        t.literal("_EntitySensitivityPolicyType"),
        t.literal("B"),
        t.literal("EMPL"),
        t.literal("LOCIS"),
        t.literal("SSP"),
        t.literal("_RoleInformationSensitivityPolicy"),
        t.literal("ADOL"),
        t.literal("CEL"),
        t.literal("DIA"),
        t.literal("DRGIS"),
        t.literal("EMP"),
        t.literal("PDS"),
        t.literal("PHY"),
        t.literal("PRS"),
        t.literal("_InformationSensitivityPolicy"),
        t.literal("ACOCOMPT"),
        t.literal("CTCOMPT"),
        t.literal("FMCOMPT"),
        t.literal("HRCOMPT"),
        t.literal("LRCOMPT"),
        t.literal("PACOMPT"),
        t.literal("RESCOMPT"),
        t.literal("RMGTCOMPT"),
        t.literal("COMPT"),
        t.literal("_ActPrivacyPolicy"),
        t.literal("TRSTACCRD"),
        t.literal("TRSTAGRE"),
        t.literal("TRSTASSUR"),
        t.literal("TRSTCERT"),
        t.literal("TRSTFWK"),
        t.literal("TRSTMEC"),
        t.literal("ActTrustPolicyType"),
        t.literal("COVPOL"),
        t.literal("ACCESSCONSCHEME"),
        t.literal("AUTHPOL"),
        t.literal("DELEPOL"),
        t.literal("ANONY"),
        t.literal("AOD"),
        t.literal("AUDIT"),
        t.literal("AUDTR"),
        t.literal("CPLYCC"),
        t.literal("CPLYCD"),
        t.literal("CPLYJPP"),
        t.literal("CPLYOPP"),
        t.literal("CPLYOSP"),
        t.literal("CPLYPOL"),
        t.literal("DECLASSIFYLABEL"),
        t.literal("DEID"),
        t.literal("DELAU"),
        t.literal("DOWNGRDLABEL"),
        t.literal("DRIVLABEL"),
        t.literal("ENCRYPTR"),
        t.literal("ENCRYPTT"),
        t.literal("ENCRYPTU"),
        t.literal("ENCRYPT"),
        t.literal("HUAPRV"),
        t.literal("LABEL"),
        t.literal("MASK"),
        t.literal("MINEC"),
        t.literal("PERSISTLABEL"),
        t.literal("PRIVMARK"),
        t.literal("PSEUD"),
        t.literal("REDACT"),
        t.literal("UPGRDLABEL"),
        t.literal("ObligationPolicy"),
        t.literal("NOAUTH"),
        t.literal("NOCOLLECT"),
        t.literal("NODSCLCD"),
        t.literal("NODSCLCDS"),
        t.literal("NOINTEGRATE"),
        t.literal("NOLIST"),
        t.literal("NOMOU"),
        t.literal("NOORGPOL"),
        t.literal("NOPAT"),
        t.literal("NOPERSISTP"),
        t.literal("NORDSCLCD"),
        t.literal("NORDSCLCDS"),
        t.literal("NORDSCLW"),
        t.literal("NORELINK"),
        t.literal("NOREUSE"),
        t.literal("NOVIP"),
        t.literal("ORCON"),
        t.literal("RefrainPolicy"),
        t.literal("SecurityPolicy"),
        t.literal("_ActPolicyType"),
        t.literal("RENT"),
        t.literal("LOAN"),
        t.literal("SALE"),
        t.literal("TRANSFER"),
        t.literal("_ActProductAcquisitionCode"),
        t.literal("SREC"),
        t.literal("SSTOR"),
        t.literal("STRAN"),
        t.literal("_ActSpecimenTransportCode"),
        t.literal("ACID"),
        t.literal("ALK"),
        t.literal("DEFB"),
        t.literal("FILT"),
        t.literal("LDLP"),
        t.literal("NEUT"),
        t.literal("RECA"),
        t.literal("UFIL"),
        t.literal("_ActSpecimenTreatmentCode"),
        t.literal("DRUG"),
        t.literal("FD"),
        t.literal("BOOSTER"),
        t.literal("INITIMMUNIZ"),
        t.literal("IMMUNIZ"),
        t.literal("_ActSubstanceAdministrationCode"),
        t.literal("LABOE"),
        t.literal("MEDOE"),
        t.literal("OE"),
        t.literal("ALLERLREV"),
        t.literal("DIAGLISTE"),
        t.literal("DISCHINSTE"),
        t.literal("DISCHSUME"),
        t.literal("PATEDUE"),
        t.literal("PATREPE"),
        t.literal("PROBLISTE"),
        t.literal("RADREPE"),
        t.literal("CLINNOTEE"),
        t.literal("IMMLREV"),
        t.literal("WELLREMLREV"),
        t.literal("REMLREV"),
        t.literal("PATDOC"),
        t.literal("ALLERLE"),
        t.literal("CDSREV"),
        t.literal("DISCHSUMREV"),
        t.literal("CLINNOTEREV"),
        t.literal("DIAGLISTREV"),
        t.literal("IMMLE"),
        t.literal("LABRREV"),
        t.literal("MICROORGRREV"),
        t.literal("MICROSENSRREV"),
        t.literal("MICRORREV"),
        t.literal("MARWLREV"),
        t.literal("MLREV"),
        t.literal("OREV"),
        t.literal("PATREPREV"),
        t.literal("PROBLISTREV"),
        t.literal("RADREPREV"),
        t.literal("WELLREMLE"),
        t.literal("REMLE"),
        t.literal("FALLRISK"),
        t.literal("RISKASSESS"),
        t.literal("PATINFO"),
        t.literal("_ActTaskCode"),
        t.literal("AFOOT"),
        t.literal("AMBAIR"),
        t.literal("AMBGRND"),
        t.literal("AMBHELO"),
        t.literal("AMBT"),
        t.literal("LAWENF"),
        t.literal("PRVTRN"),
        t.literal("PUBTRN"),
        t.literal("_ActPatientTransportationModeCode"),
        t.literal("_ActTransportationModeCode"),
        t.literal("ARTBLD"),
        t.literal("AUTO-HIGH"),
        t.literal("AUTO-LOW"),
        t.literal("PRE"),
        t.literal("RERUN"),
        t.literal("DILUTION"),
        t.literal("EVNFCTS"),
        t.literal("FIBRIN"),
        t.literal("HEMOLYSIS"),
        t.literal("ICTERUS"),
        t.literal("LIPEMIA"),
        t.literal("INTFR"),
        t.literal("AVAILABLE"),
        t.literal("CONSUMPTION"),
        t.literal("CURRENT"),
        t.literal("INITIAL"),
        t.literal("VOLUME"),
        t.literal("_ActSpecObsCode"),
        t.literal("ANNDI"),
        t.literal("ANNGEN"),
        t.literal("ANNIMM"),
        t.literal("ANNLAB"),
        t.literal("ANNMED"),
        t.literal("_ActPatientAnnotationType"),
        t.literal("_AnnotationType"),
        t.literal("GENE"),
        t.literal("_GeneticObservationType"),
        t.literal("OBSANTC"),
        t.literal("OBSANTV"),
        t.literal("_ImmunizationObservationType"),
        t.literal("PAT_ADV_EVNT"),
        t.literal("VAC_PROBLEM"),
        t.literal("_IndividualCaseSafetyReportType"),
        t.literal("21611-9"),
        t.literal("21612-7"),
        t.literal("29553-5"),
        t.literal("30525-0"),
        t.literal("30972-4"),
        t.literal("_LOINCObservationActContextAgeType"),
        t.literal("REP_HALF_LIFE"),
        t.literal("SPLCOATING"),
        t.literal("SPLCOLOR"),
        t.literal("SPLIMAGE"),
        t.literal("SPLIMPRINT"),
        t.literal("SPLSCORING"),
        t.literal("SPLSHAPE"),
        t.literal("SPLSIZE"),
        t.literal("SPLSYMBOL"),
        t.literal("_MedicationObservationType"),
        t.literal("AIRTRNS"),
        t.literal("ANANTRNS"),
        t.literal("ANHUMTRNS"),
        t.literal("BDYFLDTRNS"),
        t.literal("BLDTRNS"),
        t.literal("DERMTRNS"),
        t.literal("ENVTRNS"),
        t.literal("FECTRNS"),
        t.literal("FOMTRNS"),
        t.literal("FOODTRNS"),
        t.literal("HUMHUMTRNS"),
        t.literal("INDTRNS"),
        t.literal("LACTTRNS"),
        t.literal("NOSTRNS"),
        t.literal("PARTRNS"),
        t.literal("PLACTRNS"),
        t.literal("SEXTRNS"),
        t.literal("TRNSFTRNS"),
        t.literal("VECTRNS"),
        t.literal("WATTRNS"),
        t.literal("_CaseTransmissionMode"),
        t.literal("_ObservationIssueTriggerCodedObservationType"),
        t.literal("AGGREGATE"),
        t.literal("CMPMSRMTH"),
        t.literal("CMPMSRSCRWGHT"),
        t.literal("COPY"),
        t.literal("CRS"),
        t.literal("DEF"),
        t.literal("DISC"),
        t.literal("FINALDT"),
        t.literal("GUIDE"),
        t.literal("IDUR"),
        t.literal("ITMCNT"),
        t.literal("KEY"),
        t.literal("MEDT"),
        t.literal("MSD"),
        t.literal("MSRADJ"),
        t.literal("MSRAGG"),
        t.literal("MSRIMPROV"),
        t.literal("MSRJUR"),
        t.literal("MSRRPTR"),
        t.literal("MSRRPTTIME"),
        t.literal("MSRSCORE"),
        t.literal("MSRSET"),
        t.literal("MSRTOPIC"),
        t.literal("MSRTP"),
        t.literal("MSRTYPE"),
        t.literal("RAT"),
        t.literal("REF"),
        t.literal("SDE"),
        t.literal("STRAT"),
        t.literal("TRANF"),
        t.literal("USE"),
        t.literal("_ObservationQualityMeasureAttribute"),
        t.literal("TIME_ABSOLUTE"),
        t.literal("TIME_RELATIVE"),
        t.literal("_ObservationSequenceType"),
        t.literal("REPRESENTATIVE_BEAT"),
        t.literal("RHYTHM"),
        t.literal("_ECGObservationSeriesType"),
        t.literal("_ObservationSeriesType"),
        t.literal("CLSSRM"),
        t.literal("GRADE"),
        t.literal("SCHL"),
        t.literal("SCHLDIV"),
        t.literal("TEACHER"),
        t.literal("_PatientImmunizationRelatedObservationType"),
        t.literal("DENEX"),
        t.literal("DENEXCEP"),
        t.literal("DENOM"),
        t.literal("IPPOP"),
        t.literal("IPOP"),
        t.literal("MSROBS"),
        t.literal("MSRPOPL"),
        t.literal("MSRPOPLEX"),
        t.literal("NUMER"),
        t.literal("NUMEX"),
        t.literal("_PopulationInclusionObservationType"),
        t.literal("PREFSTRENGTH"),
        t.literal("_PreferenceObservationType"),
        t.literal("ADVERSE_REACTION"),
        t.literal("ASSERTION"),
        t.literal("CASESER"),
        t.literal("CDIO"),
        t.literal("CRIT"),
        t.literal("CTMO"),
        t.literal("ADMDX"),
        t.literal("DISDX"),
        t.literal("INTDX"),
        t.literal("NOI"),
        t.literal("DX"),
        t.literal("GISTIER"),
        t.literal("HHOBS"),
        t.literal("NAT"),
        t.literal("SUPPRESSED"),
        t.literal("KEY204"),
        t.literal("KEY205"),
        t.literal("DUPTHPCLS"),
        t.literal("DUPTHPGEN"),
        t.literal("DUPTHPY"),
        t.literal("ABUSE"),
        t.literal("FRAUD"),
        t.literal("PLYDOC"),
        t.literal("PLYPHRM"),
        t.literal("COMPLY"),
        t.literal("DOSECOND"),
        t.literal("DOSEDURHIND"),
        t.literal("DOSEDURH"),
        t.literal("DOSEDURLIND"),
        t.literal("DOSEDURL"),
        t.literal("DOSEDUR"),
        t.literal("DOSEHINDA"),
        t.literal("DOSEHIND"),
        t.literal("DOSEHINDSA"),
        t.literal("DOSEHINDW"),
        t.literal("DOSEH"),
        t.literal("DOSEIVLIND"),
        t.literal("DOSEIVL"),
        t.literal("DOSELINDA"),
        t.literal("DOSELIND"),
        t.literal("DOSELINDSA"),
        t.literal("DOSELINDW"),
        t.literal("DOSEL"),
        t.literal("MDOSE"),
        t.literal("DOSE"),
        t.literal("ADALRT"),
        t.literal("GEALRT"),
        t.literal("PEALRT"),
        t.literal("AGE"),
        t.literal("HGHT"),
        t.literal("LACT"),
        t.literal("PREG"),
        t.literal("WGHT"),
        t.literal("COND"),
        t.literal("CREACT"),
        t.literal("GEN"),
        t.literal("GEND"),
        t.literal("LAB"),
        t.literal("ALGY"),
        t.literal("INT"),
        t.literal("REACT"),
        t.literal("RALG"),
        t.literal("RAR"),
        t.literal("RINT"),
        t.literal("RREACT"),
        t.literal("OBSA"),
        t.literal("BUS"),
        t.literal("CODE_DEPREC"),
        t.literal("CODE_INVAL"),
        t.literal("FORMAT"),
        t.literal("ILLEGAL"),
        t.literal("LEN_LONG"),
        t.literal("LEN_SHORT"),
        t.literal("LEN_RANGE"),
        t.literal("MISSCOND"),
        t.literal("MISSMAND"),
        t.literal("NODUPS"),
        t.literal("NOPERSIST"),
        t.literal("MAXOCCURS"),
        t.literal("MINOCCURS"),
        t.literal("REP_RANGE"),
        t.literal("VALIDAT"),
        t.literal("_ActAdministrativeAuthorizationDetectedIssueCode"),
        t.literal("KEY206"),
        t.literal("OBSOLETE"),
        t.literal("_ActAdministrativeRuleDetectedIssueCode"),
        t.literal("_ActAdministrativeDetectedIssueCode"),
        t.literal("FOOD"),
        t.literal("DRG"),
        t.literal("NHP"),
        t.literal("NONRX"),
        t.literal("TPROD"),
        t.literal("_InteractionDetectedIssueCode"),
        t.literal("PREVINEF"),
        t.literal("_AppropriatenessDetectedIssueCode"),
        t.literal("DACT"),
        t.literal("ALRTENDLATE"),
        t.literal("ALRTSTRTLATE"),
        t.literal("TIME"),
        t.literal("ENDLATE"),
        t.literal("STRTLATE"),
        t.literal("_TimingDetectedIssueCode"),
        t.literal("_AdministrationDetectedIssueCode"),
        t.literal("ALLDONE"),
        t.literal("NOTACTN"),
        t.literal("NOTEQUIVGEN"),
        t.literal("NOTEQUIVTHER"),
        t.literal("NOTEQUIV"),
        t.literal("INTERVAL"),
        t.literal("MINFREQ"),
        t.literal("TIMING"),
        t.literal("FULFIL"),
        t.literal("HELD"),
        t.literal("TOOLATE"),
        t.literal("TOOSOON"),
        t.literal("_SupplyDetectedIssueCode"),
        t.literal("HISTORIC"),
        t.literal("PATPREFALT"),
        t.literal("PATPREF"),
        t.literal("_ActSuppliedItemDetectedIssueCode"),
        t.literal("ISSUE"),
        t.literal("KSUBJ"),
        t.literal("KSUBT"),
        t.literal("DALG"),
        t.literal("EALG"),
        t.literal("FALG"),
        t.literal("ALG"),
        t.literal("DNAINT"),
        t.literal("DINT"),
        t.literal("ENAINT"),
        t.literal("EINT"),
        t.literal("FNAINT"),
        t.literal("FINT"),
        t.literal("NAINT"),
        t.literal("OINT"),
        t.literal("SEV"),
        t.literal("FDACOATING"),
        t.literal("FDACOLOR"),
        t.literal("FDAIMPRINTCD"),
        t.literal("FDALOGO"),
        t.literal("FDASCORING"),
        t.literal("FDASHAPE"),
        t.literal("FDASIZE"),
        t.literal("_FDALabelData"),
        t.literal("_ObservationType"),
        t.literal("CIRCLE"),
        t.literal("ELLIPSE"),
        t.literal("POINT"),
        t.literal("POLY"),
        t.literal("_ROIOverlayShape"),
        t.literal("C"),
        t.literal("BR"),
        t.literal("DM"),
        t.literal("FAST"),
        t.literal("FORMULA"),
        t.literal("GF"),
        t.literal("LF"),
        t.literal("LP"),
        t.literal("LQ"),
        t.literal("LS"),
        t.literal("NF"),
        t.literal("PAF"),
        t.literal("PAR"),
        t.literal("RD"),
        t.literal("SCH"),
        t.literal("SUPPLEMENT"),
        t.literal("T"),
        t.literal("VLI"),
        t.literal("DIET"),
        t.literal("DRUGPRG"),
        t.literal("F"),
        t.literal("PRLMN"),
        t.literal("SECCATOBS"),
        t.literal("SECCLASSOBS"),
        t.literal("SECCONOBS"),
        t.literal("SECALTINTOBS"),
        t.literal("SECDATINTOBS"),
        t.literal("SECINTCONOBS"),
        t.literal("SECINTPRVABOBS"),
        t.literal("SECINTPRVRBOBS"),
        t.literal("SECINTPRVOBS"),
        t.literal("SECINTSTOBS"),
        t.literal("SECINTOBS"),
        t.literal("TRSTACCRDOBS"),
        t.literal("TRSTAGREOBS"),
        t.literal("TRSTCERTOBS"),
        t.literal("TRSTFWKOBS"),
        t.literal("TRSTLOAOBS"),
        t.literal("TRSTMECOBS"),
        t.literal("SECTRSTOBS"),
        t.literal("SECOBS"),
        t.literal("SUBSIDFFS"),
        t.literal("WRKCOMP"),
        t.literal("_ActBillableServiceCode"),
        t.literal("_ActProcedureCode"),
        t.literal("_HL7DefinedActCodes"),
        t.literal("COPAY"),
        t.literal("DEDUCT"),
        t.literal("DOSEIND"),
        t.literal("PRA"),
        t.literal("STORE"),
        t.literal("ANNUITY"),
        t.literal("PROP"),
        t.literal("RETACCT"),
        t.literal("TRUST"),
        t.literal("ASSET"),
        t.literal("CHILD"),
        t.literal("DISABL"),
        t.literal("INVEST"),
        t.literal("SPOUSAL"),
        t.literal("SUPPLE"),
        t.literal("TAX"),
        t.literal("INCOME"),
        t.literal("CLOTH"),
        t.literal("HEALTH"),
        t.literal("HOUSE"),
        t.literal("LEGAL"),
        t.literal("MORTG"),
        t.literal("SUNDRY"),
        t.literal("TRANS"),
        t.literal("UTIL"),
        t.literal("LIVEXP"),
        t.literal("_ActFinancialStatusObservationValue"),
        t.literal("ADOPT"),
        t.literal("BTHCERT"),
        t.literal("CCOC"),
        t.literal("DRLIC"),
        t.literal("FOSTER"),
        t.literal("MEMBER"),
        t.literal("MIL"),
        t.literal("MRGCERT"),
        t.literal("PASSPORT"),
        t.literal("STUDENRL"),
        t.literal("ELSTAT"),
        t.literal("DISABLE"),
        t.literal("IVDRG"),
        t.literal("PGNT"),
        t.literal("HLSTAT"),
        t.literal("RELDEP"),
        t.literal("SPSDEP"),
        t.literal("URELDEP"),
        t.literal("LIVDEP"),
        t.literal("ALONE"),
        t.literal("DEPCHD"),
        t.literal("DEPSPS"),
        t.literal("DEPYGCHD"),
        t.literal("FAM"),
        t.literal("RELAT"),
        t.literal("SPS"),
        t.literal("UNREL"),
        t.literal("LIVSIT"),
        t.literal("HMLESS"),
        t.literal("ILGIM"),
        t.literal("INCAR"),
        t.literal("PROB"),
        t.literal("REFUG"),
        t.literal("UNEMPL"),
        t.literal("SOECSTAT"),
        t.literal("_ActCoverageAssessmentObservationValue"),
        t.literal("A0"),
        t.literal("A1"),
        t.literal("A2"),
        t.literal("A3"),
        t.literal("A4"),
        t.literal("_AllergyTestValue"),
        t.literal("ALLORNONESCR"),
        t.literal("LINEARSCR"),
        t.literal("OPPORSCR"),
        t.literal("WEIGHTSCR"),
        t.literal("_CompositeMeasureScoring"),
        t.literal("ADC"),
        t.literal("CHD"),
        t.literal("DEP"),
        t.literal("DP"),
        t.literal("ECH"),
        t.literal("FLY"),
        t.literal("_CoverageLevelObservationValue"),
        t.literal("_CoverageLimitObservationValue"),
        t.literal("CRITH"),
        t.literal("CRITL"),
        t.literal("CRITU"),
        t.literal("_CriticalityObservationValue"),
        t.literal("Employed"),
        t.literal("NotInLaborForce"),
        t.literal("Unemployed"),
        t.literal("_EmploymentStatus"),
        t.literal("Homozygote"),
        t.literal("_GeneticObservationValue"),
        t.literal("COHORT"),
        t.literal("CONTVAR"),
        t.literal("PROPOR"),
        t.literal("RATIO"),
        t.literal("_ObservationMeasureScoring"),
        t.literal("COMPOSITE"),
        t.literal("EFFICIENCY"),
        t.literal("EXPERIENCE"),
        t.literal("INTERM-OM"),
        t.literal("PRO-PM"),
        t.literal("OUTCOME"),
        t.literal("APPROPRIATE"),
        t.literal("PROCESS"),
        t.literal("RESOURCE"),
        t.literal("STRUCTURE"),
        t.literal("_ObservationMeasureType"),
        t.literal("IPP"),
        t.literal("_ObservationPopulationInclusion"),
        t.literal("G"),
        t.literal("LE"),
        t.literal("ME"),
        t.literal("MI"),
        t.literal("_PartialCompletionScale"),
        t.literal("ABSTRED"),
        t.literal("AGGRED"),
        t.literal("ANONYED"),
        t.literal("MAPPED"),
        t.literal("MASKED"),
        t.literal("PSEUDED"),
        t.literal("REDACTED"),
        t.literal("SUBSETTED"),
        t.literal("SYNTAC"),
        t.literal("TRSLT"),
        t.literal("VERSIONED"),
        t.literal("_SECALTINTOBV"),
        t.literal("CRYTOHASH"),
        t.literal("DIGSIG"),
        t.literal("_SECDATINTOBV"),
        t.literal("HRELIABLE"),
        t.literal("RELIABLE"),
        t.literal("UNCERTREL"),
        t.literal("UNRELIABLE"),
        t.literal("_SECINTCONOBV"),
        t.literal("CLINAST"),
        t.literal("DEVAST"),
        t.literal("HCPAST"),
        t.literal("PACQAST"),
        t.literal("PATAST"),
        t.literal("PAYAST"),
        t.literal("PROAST"),
        t.literal("SDMAST"),
        t.literal("_SECINTPRVABOBV"),
        t.literal("CLINRPT"),
        t.literal("DEVRPT"),
        t.literal("HCPRPT"),
        t.literal("PACQRPT"),
        t.literal("PATRPT"),
        t.literal("PAYRPT"),
        t.literal("PRORPT"),
        t.literal("SDMRPT"),
        t.literal("_SECINTPRVRBOBV"),
        t.literal("_SECINTPRVOBV"),
        t.literal("_SECINTOBV"),
        t.literal("TRSTACCRDOBV"),
        t.literal("TRSTAGREOBV"),
        t.literal("TRSTCERTOBV"),
        t.literal("LOAAN1"),
        t.literal("LOAAN2"),
        t.literal("LOAAN3"),
        t.literal("LOAAN4"),
        t.literal("LOAAN"),
        t.literal("LOAAP1"),
        t.literal("LOAAP2"),
        t.literal("LOAAP3"),
        t.literal("LOAAP4"),
        t.literal("LOAAP"),
        t.literal("LOAAS1"),
        t.literal("LOAAS2"),
        t.literal("LOAAS3"),
        t.literal("LOAAS4"),
        t.literal("LOAAS"),
        t.literal("LOACM1"),
        t.literal("LOACM2"),
        t.literal("LOACM3"),
        t.literal("LOACM4"),
        t.literal("LOACM"),
        t.literal("LOAID1"),
        t.literal("LOAID2"),
        t.literal("LOAID3"),
        t.literal("LOAID4"),
        t.literal("LOAID"),
        t.literal("LOANR1"),
        t.literal("LOANR2"),
        t.literal("LOANR3"),
        t.literal("LOANR4"),
        t.literal("LOANR"),
        t.literal("LOARA1"),
        t.literal("LOARA2"),
        t.literal("LOARA3"),
        t.literal("LOARA4"),
        t.literal("LOARA"),
        t.literal("LOATK1"),
        t.literal("LOATK2"),
        t.literal("LOATK3"),
        t.literal("LOATK4"),
        t.literal("LOATK"),
        t.literal("TRSTLOAOBV"),
        t.literal("TRSTMECOBV"),
        t.literal("SECTRSTOBV"),
        t.literal("_SecurityObservationValue"),
        t.literal("H"),
        t.literal("_SeverityObservation"),
        t.literal("LLD"),
        t.literal("RLD"),
        t.literal("SFWL"),
        t.literal("SIT"),
        t.literal("STN"),
        t.literal("RTRD"),
        t.literal("TRD"),
        t.literal("SUP"),
        t.literal("_SubjectBodyPosition"),
        t.literal("ACT"),
        t.literal("ACTPEND"),
        t.literal("INACT"),
        t.literal("INPNDINV"),
        t.literal("INPNDUPD"),
        t.literal("_VerificationOutcomeValue"),
        t.literal("DS"),
        t.literal("EMS"),
        t.literal("ES"),
        t.literal("NS"),
        t.literal("RSWN"),
        t.literal("RSWON"),
        t.literal("VLS"),
        t.literal("VS"),
        t.literal("_WorkSchedule"),
        t.literal("_AnnotationValue"),
        t.literal("_CommonClinicalObservationValue"),
        t.literal("_IndividualCaseSafetyReportValueDomains"),
        t.literal("_IndicationValue"),
        t.literal("ACCREQNA"),
        t.literal("FLRCNV"),
        t.literal("MEDNEC"),
        t.literal("PAT"),
        t.literal("_ActAccommodationReason"),
        t.literal("COVSUS"),
        t.literal("DECSD"),
        t.literal("REGERR"),
        t.literal("_ActIneligibilityReason"),
        t.literal("EMPLOY"),
        t.literal("FINAN"),
        t.literal("MULTI"),
        t.literal("STATUTORY"),
        t.literal("VEHIC"),
        t.literal("WORK"),
        t.literal("_CoverageEligibilityReason"),
        t.literal("_EligibilityActReasonCode"),
        t.literal("_ActCoverageReason"),
        t.literal("OVRER"),
        t.literal("OVRINCOMP"),
        t.literal("OVRPJ"),
        t.literal("OVRPS"),
        t.literal("OVRTPS"),
        t.literal("_ActConsentInformationAccessOverrideReason"),
        t.literal("HMARKT"),
        t.literal("CAREMGT"),
        t.literal("DONAT"),
        t.literal("GOV"),
        t.literal("HACCRED"),
        t.literal("HCOMPL"),
        t.literal("HDECD"),
        t.literal("HDIRECT"),
        t.literal("HDM"),
        t.literal("HLEGAL"),
        t.literal("HOUTCOMS"),
        t.literal("HPRGRP"),
        t.literal("HQUALIMP"),
        t.literal("LABELING"),
        t.literal("METAMGT"),
        t.literal("HSYSADMIN"),
        t.literal("MEMADMIN"),
        t.literal("MILCDM"),
        t.literal("PATADMIN"),
        t.literal("PATSFTY"),
        t.literal("PERFMSR"),
        t.literal("RECORDMGT"),
        t.literal("HTEST"),
        t.literal("SYSDEV"),
        t.literal("TRAIN"),
        t.literal("HOPERAT"),
        t.literal("CLMATTCH"),
        t.literal("COVAUTH"),
        t.literal("ELIGDTRM"),
        t.literal("ELIGVER"),
        t.literal("ENROLLM"),
        t.literal("MILDCRG"),
        t.literal("COVERAGE"),
        t.literal("REMITADV"),
        t.literal("HPAYMT"),
        t.literal("BIORCH"),
        t.literal("CLINTRCHNPC"),
        t.literal("CLINTRCHPC"),
        t.literal("PRECLINTRCH"),
        t.literal("CLINTRCH"),
        t.literal("DSRCH"),
        t.literal("POARCH"),
        t.literal("TRANSRCH"),
        t.literal("HRESCH"),
        t.literal("FAMRQT"),
        t.literal("PWATRNY"),
        t.literal("SUPNWK"),
        t.literal("PATRQT"),
        t.literal("DISASTER"),
        t.literal("THREAT"),
        t.literal("PUBHLTH"),
        t.literal("CLINTRL"),
        t.literal("COC"),
        t.literal("BTG"),
        t.literal("ERTREAT"),
        t.literal("ETREAT"),
        t.literal("POPHLTH"),
        t.literal("TREAT"),
        t.literal("PurposeOfUse"),
        t.literal("_ActHealthInformationManagementReason"),
        t.literal("MARKT"),
        t.literal("ACCRED"),
        t.literal("COMPL"),
        t.literal("ENADMIN"),
        t.literal("OUTCOMS"),
        t.literal("PRGRPT"),
        t.literal("QUALIMP"),
        t.literal("SYSADMN"),
        t.literal("OPERAT"),
        t.literal("PAYMT"),
        t.literal("RESCH"),
        t.literal("SRVC"),
        t.literal("_ActInformationPrivacyReason"),
        t.literal("_ActInformationManagementReason"),
        t.literal("COLDCHNBRK"),
        t.literal("ADVSTORAGE"),
        t.literal("EXPLOT"),
        t.literal("OUTSIDESCHED"),
        t.literal("PRODRECALL"),
        t.literal("_ActInvalidReason"),
        t.literal("INCCOVPTY"),
        t.literal("INCINVOICE"),
        t.literal("INCPOLICY"),
        t.literal("INCPROV"),
        t.literal("_ActInvoiceCancelReason"),
        t.literal("IMMUNE"),
        t.literal("MEDPREC"),
        t.literal("OSTOCK"),
        t.literal("PATOBJ"),
        t.literal("PHILISOP"),
        t.literal("RELIG"),
        t.literal("VACEFF"),
        t.literal("VACSAF"),
        t.literal("_ActNoImmunizationReason"),
        t.literal("FRR01"),
        t.literal("FRR02"),
        t.literal("FRR03"),
        t.literal("FRR04"),
        t.literal("FRR05"),
        t.literal("FRR06"),
        t.literal("_ActSupplyFulfillmentRefusalReason"),
        t.literal("RET"),
        t.literal("TRM"),
        t.literal("UNS"),
        t.literal("_ClinicalResearchEventReason"),
        t.literal("NPT"),
        t.literal("PPT"),
        t.literal("UPT"),
        t.literal("_ClinicalResearchObservationReason"),
        t.literal("ALTCHOICE"),
        t.literal("CLARIF"),
        t.literal("DRUGHIGH"),
        t.literal("HOSPADM"),
        t.literal("LABINT"),
        t.literal("NON-AVAIL"),
        t.literal("SALG"),
        t.literal("SDDI"),
        t.literal("SDUPTHER"),
        t.literal("SINTOL"),
        t.literal("WASHOUT"),
        t.literal("_CombinedPharmacyOrderSuspendReasonCode"),
        t.literal("ALTD"),
        t.literal("EIE"),
        t.literal("NORECMTCH"),
        t.literal("_ControlActNullificationReasonCode"),
        t.literal("INRQSTATE"),
        t.literal("NOPRODMTCH"),
        t.literal("NOSERMTCH"),
        t.literal("NOVERMTCH"),
        t.literal("NOMATCH"),
        t.literal("NOUSERPERM"),
        t.literal("NOAGNTPERM"),
        t.literal("NOUSRPERM"),
        t.literal("NOPERM"),
        t.literal("WRNGVER"),
        t.literal("_ControlActNullificationRefusalReasonType"),
        t.literal("DISCONT"),
        t.literal("INEFFECT"),
        t.literal("MONIT"),
        t.literal("NOREQ"),
        t.literal("NOTCOVER"),
        t.literal("PREFUS"),
        t.literal("RECALL"),
        t.literal("DOSECHG"),
        t.literal("REPLACE"),
        t.literal("REPLACEFIX"),
        t.literal("UNABLE"),
        t.literal("_MedicationOrderAbortReasonCode"),
        t.literal("HOLDDONE"),
        t.literal("HOLDINAP"),
        t.literal("_MedicationOrderReleaseReasonCode"),
        t.literal("ADMINERROR"),
        t.literal("CLINMOD"),
        t.literal("_ModifyPrescriptionReasonType"),
        t.literal("CONTRA"),
        t.literal("FOABORT"),
        t.literal("FOSUSP"),
        t.literal("NOPICK"),
        t.literal("PATDEC"),
        t.literal("QUANTCHG"),
        t.literal("_PharmacySupplyEventAbortReason"),
        t.literal("FLRSTCK"),
        t.literal("OFFICE"),
        t.literal("PHARM"),
        t.literal("PROG"),
        t.literal("_PharmacySupplyEventStockReasonCode"),
        t.literal("ALREADYRX"),
        t.literal("FAMPHYS"),
        t.literal("MODIFY"),
        t.literal("NEEDAPMT"),
        t.literal("NOTAVAIL"),
        t.literal("NOTPAT"),
        t.literal("ONHOLD"),
        t.literal("PRNA"),
        t.literal("STOPMED"),
        t.literal("TOOEARLY"),
        t.literal("_PharmacySupplyRequestRenewalRefusalReasonCode"),
        t.literal("IMPROV"),
        t.literal("INTOL"),
        t.literal("NEWSTR"),
        t.literal("NEWTHER"),
        t.literal("_SupplyOrderAbortReasonCode"),
        t.literal("_ControlActReason"),
        t.literal("CHGDATA"),
        t.literal("FIXDATA"),
        t.literal("MDATA"),
        t.literal("NEWDATA"),
        t.literal("UMDATA"),
        t.literal("_GenericUpdateReasonCode"),
        t.literal("ADMREV"),
        t.literal("PATCAR"),
        t.literal("PATREQ"),
        t.literal("PRCREV"),
        t.literal("REGUL"),
        t.literal("RSRCH"),
        t.literal("VALIDATION"),
        t.literal("_PatientProfileQueryReasonCode"),
        t.literal("LOCKED"),
        t.literal("UNKWNTARGET"),
        t.literal("_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode"),
        t.literal("_RefusalReasonCode"),
        t.literal("DEC"),
        t.literal("FIN"),
        t.literal("MTG"),
        t.literal("_SchedulingActReason"),
        t.literal("FILLED"),
        t.literal("_StatusRevisionRefusalReasonCode"),
        t.literal("PATINELIG"),
        t.literal("PROTUNMET"),
        t.literal("PROVUNAUTH"),
        t.literal("_SubstanceAdministrationPermissionRefusalReasonCode"),
        t.literal("ALGINT"),
        t.literal("COMPCON"),
        t.literal("THERCHAR"),
        t.literal("TRIAL"),
        t.literal("_SubstanceAdminSubstitutionNotAllowedReason"),
        t.literal("CT"),
        t.literal("FP"),
        t.literal("OS"),
        t.literal("RR"),
        t.literal("_SubstanceAdminSubstitutionReason"),
        t.literal("ER"),
        t.literal("RQ"),
        t.literal("_TransferActReason"),
        t.literal("_ActBillableClinicalServiceReason"),
        t.literal("_ActBillableServiceReason"),
        t.literal("ESP"),
        t.literal("SPC"),
        t.literal("SPO")
    ],
    "Securitylabels"
);

export const SecuritylabelsArray: string[] = [
    "U",
    "L",
    "M",
    "N",
    "R",
    "V",
    "ACCTRECEIVABLE",
    "CASH",
    "AE",
    "DN",
    "DV",
    "MC",
    "CC",
    "PBILLACCT",
    "_ActAccountCode",
    "CONT",
    "DAY",
    "LOC",
    "MONTH",
    "PERIOD",
    "PROV",
    "WEEK",
    "YEAR",
    "_ActAdjudicationGroupCode",
    "ANF",
    "AA",
    "AR",
    "AS",
    "_ActAdjudicationCode",
    "DISPLAY",
    "FORM",
    "_ActAdjudicationResultActionCode",
    "CPTM",
    "HCPCSA",
    "_ActBillableModifierCode",
    "BLK",
    "CAP",
    "CONTF",
    "FINBILL",
    "ROST",
    "SESS",
    "FFPS",
    "FFCS",
    "TFS",
    "FFS",
    "_ActBillingArrangementCode",
    "ROIFS",
    "ROIPS",
    "_ActBoundedROICode",
    "CACC",
    "CAIC",
    "CAMC",
    "CANC",
    "CAPC",
    "CBGC",
    "CCCC",
    "CCGC",
    "CCPC",
    "CCSC",
    "CDEC",
    "CDRC",
    "CEMC",
    "CFPC",
    "CIMC",
    "CMGC",
    "CNEC",
    "CNMC",
    "CNQC",
    "CNSC",
    "COGC",
    "COMC",
    "COPC",
    "COSC",
    "COTC",
    "CPEC",
    "CPGC",
    "CPHC",
    "CPRC",
    "CPSC",
    "CPYC",
    "CROC",
    "CRPC",
    "CSUC",
    "CTSC",
    "CURC",
    "CVSC",
    "LGPC",
    "_ActCredentialedCareProvisionPersonCode",
    "AALC",
    "AAMC",
    "ABHC",
    "ACAC",
    "ACHC",
    "AHOC",
    "ALTC",
    "AOSC",
    "CACS",
    "CAMI",
    "CAST",
    "CBAR",
    "CCAD",
    "CCAR",
    "CDEP",
    "CDGD",
    "CDIA",
    "CEPI",
    "CFEL",
    "CHFC",
    "CHRO",
    "CHYP",
    "CMIH",
    "CMSC",
    "COJR",
    "CONC",
    "COPD",
    "CORT",
    "CPAD",
    "CPND",
    "CPST",
    "CSDM",
    "CSIC",
    "CSLD",
    "CSPT",
    "CTBU",
    "CVDC",
    "CWMA",
    "CWOH",
    "_ActCredentialedCareProvisionProgramCode",
    "_ActCredentialedCareCode",
    "AMB",
    "EMER",
    "FLD",
    "HH",
    "ACUTE",
    "NONAC",
    "IMP",
    "OBSENC",
    "PRENC",
    "SS",
    "VR",
    "_ActEncounterCode",
    "ALC",
    "CARD",
    "CHR",
    "DNTL",
    "DRGRHB",
    "GENRL",
    "MED",
    "OBS",
    "ONC",
    "PALL",
    "PED",
    "PHAR",
    "PHYRHB",
    "PSYCH",
    "SURG",
    "_ActMedicalServiceCode",
    "_ActCareProvisionCode",
    "AUTOATTCH",
    "DOCUMENT",
    "HEALTHREC",
    "IMG",
    "LABRESULTS",
    "MODEL",
    "WIATTCH",
    "XRAY",
    "_ActClaimAttachmentCategoryCode",
    "ICOL",
    "IDSCL",
    "INFAO",
    "INFASO",
    "INFA",
    "IRDSCL",
    "RSDID",
    "RSREID",
    "RESEARCH",
    "_ActConsentType",
    "ID",
    "IP",
    "O",
    "X",
    "_ActContainerRegistrationCode",
    "AUTO",
    "ENDC",
    "REFLEX",
    "_ActControlVariable",
    "AUTH",
    "NAUTH",
    "_ActCoverageAuthorizationConfirmationCode",
    "ELG",
    "NELG",
    "_ActCoverageEligibilityConfirmationCode",
    "_ActCoverageConfirmationCode",
    "COVPRD",
    "LFEMX",
    "NETAMT",
    "PRDMX",
    "UNITPRICE",
    "UNITQTY",
    "_ActCoverageQuantityLimitCode",
    "COVMX",
    "_ActCoveredPartyLimitCode",
    "_ActCoverageLimitCode",
    "EHCPOL",
    "HSAPOL",
    "COL",
    "UNINSMOT",
    "AUTOPOL",
    "DENTPRG",
    "CANPRG",
    "ENDRENAL",
    "HIVAIDS",
    "DISEASEPRG",
    "MANDPOL",
    "MENTPRG",
    "SAFNET",
    "SUBPRG",
    "SUBSIDMC",
    "SUBSUPP",
    "SUBSIDIZ",
    "PUBLICPOL",
    "WCBPOL",
    "_ActInsurancePolicyCode",
    "DENTAL",
    "DISEASE",
    "DRUGPOL",
    "HIP",
    "LTC",
    "POS",
    "HMO",
    "PPO",
    "MCPOL",
    "MENTPOL",
    "SUBPOL",
    "VISPOL",
    "_ActHealthInsuranceTypeCode",
    "DIS",
    "EWB",
    "FLEXP",
    "ANNU",
    "TLIFE",
    "ULIFE",
    "LIFE",
    "PNC",
    "REI",
    "SURPL",
    "UMBRL",
    "_ActInsuranceTypeCode",
    "CHAR",
    "CRIME",
    "EAP",
    "GOVEMP",
    "HIRISK",
    "IND",
    "MILITARY",
    "RETIRE",
    "SOCIAL",
    "VET",
    "_ActProgramTypeCode",
    "_ActCoverageTypeCode",
    "21",
    "EMAUTH",
    "_AuthorizationIssueManagementCode",
    "_ActAdministrativeDetectedIssueManagementCode",
    "19",
    "2",
    "22",
    "23",
    "3",
    "4",
    "6",
    "5",
    "7",
    "1",
    "15",
    "16",
    "17",
    "18",
    "20",
    "14",
    "10",
    "11",
    "12",
    "13",
    "9",
    "8",
    "_ActDetectedIssueManagementCode",
    "CHLDCARE",
    "CONVEYNC",
    "HLTHCARE",
    "HOMECARE",
    "HOSPPTNT",
    "HOSPVSTR",
    "HOUSEHLD",
    "INMATE",
    "INTIMATE",
    "LTRMCARE",
    "PLACE",
    "PTNTCARE",
    "SCHOOL2",
    "SOCIAL2",
    "SUBSTNCE",
    "TRAVINT",
    "WORK2",
    "_ActExposureCode",
    "CHRG",
    "REV",
    "_ActFinancialTransactionCode",
    "MVA",
    "SCHOOL",
    "SPT",
    "WPA",
    "_ActIncidentCode",
    "ACADR",
    "ACALL",
    "ACALLG",
    "ACCONS",
    "ACDEMO",
    "ACDI",
    "ACIMMUN",
    "ACLAB",
    "ACMED",
    "ACMEDC",
    "ACMEN",
    "ACOBS",
    "ACPOLPRG",
    "ACPROV",
    "ACPSERV",
    "ACSUBSTAB",
    "_ActInformationAccessCode",
    "INFCON",
    "INFAUT",
    "INFCRT",
    "INFDNG",
    "INFEMER",
    "INFPWR",
    "INFREG",
    "_ActInformationAccessContextCode",
    "ALLCAT",
    "ALLGCAT",
    "ARCAT",
    "COBSCAT",
    "DEMOCAT",
    "DICAT",
    "IMMUCAT",
    "LABCAT",
    "MEDCCAT",
    "MENCAT",
    "PSVCCAT",
    "RXCAT",
    "_ActInformationCategoryCode",
    "ALEC",
    "BONUS",
    "CFWD",
    "EDU",
    "EPYMT",
    "GARN",
    "INVOICE",
    "PINV",
    "PPRD",
    "PROA",
    "RECOV",
    "RETRO",
    "TRAN",
    "_ActInvoiceAdjudicationPaymentGroupCode",
    "INVTYPE",
    "PAYEE",
    "PAYOR",
    "SENDAPP",
    "_ActInvoiceAdjudicationPaymentSummaryCode",
    "_ActInvoiceAdjudicationPaymentCode",
    "UNSPSC",
    "_ActInvoiceDetailClinicalProductCode",
    "GTIN",
    "UPC",
    "_ActInvoiceDetailDrugProductCode",
    "COIN",
    "COPAYMENT",
    "DEDUCTIBLE",
    "PAY",
    "SPEND",
    "COINS",
    "_ActInvoiceDetailGenericAdjudicatorCode",
    "AFTHRS",
    "ISOL",
    "OOO",
    "_ActInvoiceDetailGenericModifierCode",
    "CANCAPT",
    "DSC",
    "ESA",
    "FFSTOP",
    "FNLFEE",
    "FRSTFEE",
    "MARKUP",
    "MISSAPT",
    "PERFEE",
    "PERMBNS",
    "RESTOCK",
    "TRAVEL",
    "URGENT",
    "_ActInvoiceDetailGenericProviderCode",
    "FST",
    "HST",
    "PST",
    "_ActInvoiceDetailTaxCode",
    "_ActInvoiceDetailGenericCode",
    "I",
    "P",
    "S",
    "SP",
    "W",
    "_HL7AccommodationCode",
    "_ActEncounterAccommodationCode",
    "_ActInvoiceDetailPreferredAccommodationCode",
    "_ActInvoiceDetailClinicalServiceCode",
    "_ActInvoiceDetailCode",
    "CPNDDRGING",
    "CPNDINDING",
    "CPNDSUPING",
    "DRUGING",
    "FRAMEING",
    "LENSING",
    "PRDING",
    "_ActInvoiceInterGroupCode",
    "CPINV",
    "CSINV",
    "CSPINV",
    "FININV",
    "OHSINV",
    "PAINV",
    "RXCINV",
    "RXDINV",
    "SBFINV",
    "VRXINV",
    "_ActInvoiceRootGroupCode",
    "_ActInvoiceGroupCode",
    "_ActInvoiceElementCode",
    "ADNFPPELAT",
    "ADNFPPELCT",
    "ADNFPPMNAT",
    "ADNFPPMNCT",
    "ADNFSPELAT",
    "ADNFSPELCT",
    "ADNFSPMNAT",
    "ADNFSPMNCT",
    "ADNPPPELAT",
    "ADNPPPELCT",
    "ADNPPPMNAT",
    "ADNPPPMNCT",
    "ADNPSPELAT",
    "ADNPSPELCT",
    "ADNPSPMNAT",
    "ADNPSPMNCT",
    "ADPPPPELAT",
    "ADPPPPELCT",
    "ADPPPPMNAT",
    "ADPPPPMNCT",
    "ADPPSPELAT",
    "ADPPSPELCT",
    "ADPPSPMNAT",
    "ADPPSPMNCT",
    "ADRFPPELAT",
    "ADRFPPELCT",
    "ADRFPPMNAT",
    "ADRFPPMNCT",
    "ADRFSPELAT",
    "ADRFSPELCT",
    "ADRFSPMNAT",
    "ADRFSPMNCT",
    "_InvoiceElementAdjudicated",
    "PDNFPPELAT",
    "PDNFPPELCT",
    "PDNFPPMNAT",
    "PDNFPPMNCT",
    "PDNFSPELAT",
    "PDNFSPELCT",
    "PDNFSPMNAT",
    "PDNFSPMNCT",
    "PDNPPPELAT",
    "PDNPPPELCT",
    "PDNPPPMNAT",
    "PDNPPPMNCT",
    "PDNPSPELAT",
    "PDNPSPELCT",
    "PDNPSPMNAT",
    "PDNPSPMNCT",
    "PDPPPPELAT",
    "PDPPPPELCT",
    "PDPPPPMNAT",
    "PDPPPPMNCT",
    "PDPPSPELAT",
    "PDPPSPELCT",
    "PDPPSPMNAT",
    "PDPPSPMNCT",
    "_InvoiceElementPaid",
    "SBBLELAT",
    "SBBLELCT",
    "SBNFELAT",
    "SBNFELCT",
    "SBPDELAT",
    "SBPDELCT",
    "_InvoiceElementSubmitted",
    "_ActInvoiceElementSummaryCode",
    "COVGE",
    "EFORM",
    "FAX",
    "GFTH",
    "LATE",
    "MANUAL",
    "OOJ",
    "ORTHO",
    "PAPER",
    "PIE",
    "PYRDELAY",
    "REFNR",
    "REPSERV",
    "UNRELAT",
    "VERBAUTH",
    "_ActInvoiceOverrideCode",
    "CARELIST",
    "INTOLIST",
    "PROBLIST",
    "RISKLIST",
    "CONDLIST",
    "GOALLIST",
    "_ActObservationList",
    "ACU",
    "CHRON",
    "ONET",
    "PRN",
    "_ActMedicationTherapyDurationWorkingListCode",
    "_ActTherapyDurationWorkingListCode",
    "CURMEDLIST",
    "DISCMEDLIST",
    "HISTMEDLIST",
    "MEDLIST",
    "_ActListCode",
    "CTLSUB",
    "INV",
    "LU",
    "OTC",
    "RX",
    "SA",
    "SAC",
    "_ActMonitoringProtocolCode",
    "IND01",
    "IND02",
    "IND03",
    "IND04",
    "IND05",
    "_ActNonObservationIndicationCode",
    "VFPAPER",
    "_ActObservationVerificationType",
    "ACH",
    "CHK",
    "DDP",
    "NON",
    "_ActPaymentCode",
    "DF",
    "SO",
    "EM",
    "FFC",
    "FFP",
    "FFSS",
    "TF",
    "FF",
    "FS",
    "MS",
    "UD",
    "RFCS",
    "RFC",
    "RFFS",
    "RFF",
    "RFPS",
    "RFP",
    "RFS",
    "TBS",
    "TB",
    "RF",
    "UDE",
    "_ActPharmacySupplyType",
    "EMRGONLY",
    "GRANTORCHOICE",
    "IMPLIED",
    "IMPLIEDD",
    "NOCONSENT",
    "NOPP",
    "OPTIN",
    "OPTINR",
    "OPTOUT",
    "OPTOUTE",
    "_ActConsentDirective",
    "42CFRPart2",
    "CommonRule",
    "HIPAANOPP",
    "HIPAAPsyNotes",
    "HIPAASelfPay",
    "Title38Section7332",
    "_ActUSPrivacyLaw",
    "_ActPrivacyLaw",
    "ETH",
    "GDIS",
    "HIV",
    "MST",
    "SCA",
    "SDV",
    "SEX",
    "COGN",
    "DVD",
    "EMOTDIS",
    "BH",
    "MH",
    "PSY",
    "PSYTHPN",
    "ETHUD",
    "OPIOIDUD",
    "SUD",
    "SPI",
    "STD",
    "TBOO",
    "VIO",
    "SICKLE",
    "_ActInformationSensitivityPolicy",
    "DEMO",
    "DOB",
    "GENDER",
    "LIVARG",
    "MARST",
    "RACE",
    "REL",
    "_EntitySensitivityPolicyType",
    "B",
    "EMPL",
    "LOCIS",
    "SSP",
    "_RoleInformationSensitivityPolicy",
    "ADOL",
    "CEL",
    "DIA",
    "DRGIS",
    "EMP",
    "PDS",
    "PHY",
    "PRS",
    "_InformationSensitivityPolicy",
    "ACOCOMPT",
    "CTCOMPT",
    "FMCOMPT",
    "HRCOMPT",
    "LRCOMPT",
    "PACOMPT",
    "RESCOMPT",
    "RMGTCOMPT",
    "COMPT",
    "_ActPrivacyPolicy",
    "TRSTACCRD",
    "TRSTAGRE",
    "TRSTASSUR",
    "TRSTCERT",
    "TRSTFWK",
    "TRSTMEC",
    "ActTrustPolicyType",
    "COVPOL",
    "ACCESSCONSCHEME",
    "AUTHPOL",
    "DELEPOL",
    "ANONY",
    "AOD",
    "AUDIT",
    "AUDTR",
    "CPLYCC",
    "CPLYCD",
    "CPLYJPP",
    "CPLYOPP",
    "CPLYOSP",
    "CPLYPOL",
    "DECLASSIFYLABEL",
    "DEID",
    "DELAU",
    "DOWNGRDLABEL",
    "DRIVLABEL",
    "ENCRYPTR",
    "ENCRYPTT",
    "ENCRYPTU",
    "ENCRYPT",
    "HUAPRV",
    "LABEL",
    "MASK",
    "MINEC",
    "PERSISTLABEL",
    "PRIVMARK",
    "PSEUD",
    "REDACT",
    "UPGRDLABEL",
    "ObligationPolicy",
    "NOAUTH",
    "NOCOLLECT",
    "NODSCLCD",
    "NODSCLCDS",
    "NOINTEGRATE",
    "NOLIST",
    "NOMOU",
    "NOORGPOL",
    "NOPAT",
    "NOPERSISTP",
    "NORDSCLCD",
    "NORDSCLCDS",
    "NORDSCLW",
    "NORELINK",
    "NOREUSE",
    "NOVIP",
    "ORCON",
    "RefrainPolicy",
    "SecurityPolicy",
    "_ActPolicyType",
    "RENT",
    "LOAN",
    "SALE",
    "TRANSFER",
    "_ActProductAcquisitionCode",
    "SREC",
    "SSTOR",
    "STRAN",
    "_ActSpecimenTransportCode",
    "ACID",
    "ALK",
    "DEFB",
    "FILT",
    "LDLP",
    "NEUT",
    "RECA",
    "UFIL",
    "_ActSpecimenTreatmentCode",
    "DRUG",
    "FD",
    "BOOSTER",
    "INITIMMUNIZ",
    "IMMUNIZ",
    "_ActSubstanceAdministrationCode",
    "LABOE",
    "MEDOE",
    "OE",
    "ALLERLREV",
    "DIAGLISTE",
    "DISCHINSTE",
    "DISCHSUME",
    "PATEDUE",
    "PATREPE",
    "PROBLISTE",
    "RADREPE",
    "CLINNOTEE",
    "IMMLREV",
    "WELLREMLREV",
    "REMLREV",
    "PATDOC",
    "ALLERLE",
    "CDSREV",
    "DISCHSUMREV",
    "CLINNOTEREV",
    "DIAGLISTREV",
    "IMMLE",
    "LABRREV",
    "MICROORGRREV",
    "MICROSENSRREV",
    "MICRORREV",
    "MARWLREV",
    "MLREV",
    "OREV",
    "PATREPREV",
    "PROBLISTREV",
    "RADREPREV",
    "WELLREMLE",
    "REMLE",
    "FALLRISK",
    "RISKASSESS",
    "PATINFO",
    "_ActTaskCode",
    "AFOOT",
    "AMBAIR",
    "AMBGRND",
    "AMBHELO",
    "AMBT",
    "LAWENF",
    "PRVTRN",
    "PUBTRN",
    "_ActPatientTransportationModeCode",
    "_ActTransportationModeCode",
    "ARTBLD",
    "AUTO-HIGH",
    "AUTO-LOW",
    "PRE",
    "RERUN",
    "DILUTION",
    "EVNFCTS",
    "FIBRIN",
    "HEMOLYSIS",
    "ICTERUS",
    "LIPEMIA",
    "INTFR",
    "AVAILABLE",
    "CONSUMPTION",
    "CURRENT",
    "INITIAL",
    "VOLUME",
    "_ActSpecObsCode",
    "ANNDI",
    "ANNGEN",
    "ANNIMM",
    "ANNLAB",
    "ANNMED",
    "_ActPatientAnnotationType",
    "_AnnotationType",
    "GENE",
    "_GeneticObservationType",
    "OBSANTC",
    "OBSANTV",
    "_ImmunizationObservationType",
    "PAT_ADV_EVNT",
    "VAC_PROBLEM",
    "_IndividualCaseSafetyReportType",
    "21611-9",
    "21612-7",
    "29553-5",
    "30525-0",
    "30972-4",
    "_LOINCObservationActContextAgeType",
    "REP_HALF_LIFE",
    "SPLCOATING",
    "SPLCOLOR",
    "SPLIMAGE",
    "SPLIMPRINT",
    "SPLSCORING",
    "SPLSHAPE",
    "SPLSIZE",
    "SPLSYMBOL",
    "_MedicationObservationType",
    "AIRTRNS",
    "ANANTRNS",
    "ANHUMTRNS",
    "BDYFLDTRNS",
    "BLDTRNS",
    "DERMTRNS",
    "ENVTRNS",
    "FECTRNS",
    "FOMTRNS",
    "FOODTRNS",
    "HUMHUMTRNS",
    "INDTRNS",
    "LACTTRNS",
    "NOSTRNS",
    "PARTRNS",
    "PLACTRNS",
    "SEXTRNS",
    "TRNSFTRNS",
    "VECTRNS",
    "WATTRNS",
    "_CaseTransmissionMode",
    "_ObservationIssueTriggerCodedObservationType",
    "AGGREGATE",
    "CMPMSRMTH",
    "CMPMSRSCRWGHT",
    "COPY",
    "CRS",
    "DEF",
    "DISC",
    "FINALDT",
    "GUIDE",
    "IDUR",
    "ITMCNT",
    "KEY",
    "MEDT",
    "MSD",
    "MSRADJ",
    "MSRAGG",
    "MSRIMPROV",
    "MSRJUR",
    "MSRRPTR",
    "MSRRPTTIME",
    "MSRSCORE",
    "MSRSET",
    "MSRTOPIC",
    "MSRTP",
    "MSRTYPE",
    "RAT",
    "REF",
    "SDE",
    "STRAT",
    "TRANF",
    "USE",
    "_ObservationQualityMeasureAttribute",
    "TIME_ABSOLUTE",
    "TIME_RELATIVE",
    "_ObservationSequenceType",
    "REPRESENTATIVE_BEAT",
    "RHYTHM",
    "_ECGObservationSeriesType",
    "_ObservationSeriesType",
    "CLSSRM",
    "GRADE",
    "SCHL",
    "SCHLDIV",
    "TEACHER",
    "_PatientImmunizationRelatedObservationType",
    "DENEX",
    "DENEXCEP",
    "DENOM",
    "IPPOP",
    "IPOP",
    "MSROBS",
    "MSRPOPL",
    "MSRPOPLEX",
    "NUMER",
    "NUMEX",
    "_PopulationInclusionObservationType",
    "PREFSTRENGTH",
    "_PreferenceObservationType",
    "ADVERSE_REACTION",
    "ASSERTION",
    "CASESER",
    "CDIO",
    "CRIT",
    "CTMO",
    "ADMDX",
    "DISDX",
    "INTDX",
    "NOI",
    "DX",
    "GISTIER",
    "HHOBS",
    "NAT",
    "SUPPRESSED",
    "KEY204",
    "KEY205",
    "DUPTHPCLS",
    "DUPTHPGEN",
    "DUPTHPY",
    "ABUSE",
    "FRAUD",
    "PLYDOC",
    "PLYPHRM",
    "COMPLY",
    "DOSECOND",
    "DOSEDURHIND",
    "DOSEDURH",
    "DOSEDURLIND",
    "DOSEDURL",
    "DOSEDUR",
    "DOSEHINDA",
    "DOSEHIND",
    "DOSEHINDSA",
    "DOSEHINDW",
    "DOSEH",
    "DOSEIVLIND",
    "DOSEIVL",
    "DOSELINDA",
    "DOSELIND",
    "DOSELINDSA",
    "DOSELINDW",
    "DOSEL",
    "MDOSE",
    "DOSE",
    "ADALRT",
    "GEALRT",
    "PEALRT",
    "AGE",
    "HGHT",
    "LACT",
    "PREG",
    "WGHT",
    "COND",
    "CREACT",
    "GEN",
    "GEND",
    "LAB",
    "ALGY",
    "INT",
    "REACT",
    "RALG",
    "RAR",
    "RINT",
    "RREACT",
    "OBSA",
    "BUS",
    "CODE_DEPREC",
    "CODE_INVAL",
    "FORMAT",
    "ILLEGAL",
    "LEN_LONG",
    "LEN_SHORT",
    "LEN_RANGE",
    "MISSCOND",
    "MISSMAND",
    "NODUPS",
    "NOPERSIST",
    "MAXOCCURS",
    "MINOCCURS",
    "REP_RANGE",
    "VALIDAT",
    "_ActAdministrativeAuthorizationDetectedIssueCode",
    "KEY206",
    "OBSOLETE",
    "_ActAdministrativeRuleDetectedIssueCode",
    "_ActAdministrativeDetectedIssueCode",
    "FOOD",
    "DRG",
    "NHP",
    "NONRX",
    "TPROD",
    "_InteractionDetectedIssueCode",
    "PREVINEF",
    "_AppropriatenessDetectedIssueCode",
    "DACT",
    "ALRTENDLATE",
    "ALRTSTRTLATE",
    "TIME",
    "ENDLATE",
    "STRTLATE",
    "_TimingDetectedIssueCode",
    "_AdministrationDetectedIssueCode",
    "ALLDONE",
    "NOTACTN",
    "NOTEQUIVGEN",
    "NOTEQUIVTHER",
    "NOTEQUIV",
    "INTERVAL",
    "MINFREQ",
    "TIMING",
    "FULFIL",
    "HELD",
    "TOOLATE",
    "TOOSOON",
    "_SupplyDetectedIssueCode",
    "HISTORIC",
    "PATPREFALT",
    "PATPREF",
    "_ActSuppliedItemDetectedIssueCode",
    "ISSUE",
    "KSUBJ",
    "KSUBT",
    "DALG",
    "EALG",
    "FALG",
    "ALG",
    "DNAINT",
    "DINT",
    "ENAINT",
    "EINT",
    "FNAINT",
    "FINT",
    "NAINT",
    "OINT",
    "SEV",
    "FDACOATING",
    "FDACOLOR",
    "FDAIMPRINTCD",
    "FDALOGO",
    "FDASCORING",
    "FDASHAPE",
    "FDASIZE",
    "_FDALabelData",
    "_ObservationType",
    "CIRCLE",
    "ELLIPSE",
    "POINT",
    "POLY",
    "_ROIOverlayShape",
    "C",
    "BR",
    "DM",
    "FAST",
    "FORMULA",
    "GF",
    "LF",
    "LP",
    "LQ",
    "LS",
    "NF",
    "PAF",
    "PAR",
    "RD",
    "SCH",
    "SUPPLEMENT",
    "T",
    "VLI",
    "DIET",
    "DRUGPRG",
    "F",
    "PRLMN",
    "SECCATOBS",
    "SECCLASSOBS",
    "SECCONOBS",
    "SECALTINTOBS",
    "SECDATINTOBS",
    "SECINTCONOBS",
    "SECINTPRVABOBS",
    "SECINTPRVRBOBS",
    "SECINTPRVOBS",
    "SECINTSTOBS",
    "SECINTOBS",
    "TRSTACCRDOBS",
    "TRSTAGREOBS",
    "TRSTCERTOBS",
    "TRSTFWKOBS",
    "TRSTLOAOBS",
    "TRSTMECOBS",
    "SECTRSTOBS",
    "SECOBS",
    "SUBSIDFFS",
    "WRKCOMP",
    "_ActBillableServiceCode",
    "_ActProcedureCode",
    "_HL7DefinedActCodes",
    "COPAY",
    "DEDUCT",
    "DOSEIND",
    "PRA",
    "STORE",
    "ANNUITY",
    "PROP",
    "RETACCT",
    "TRUST",
    "ASSET",
    "CHILD",
    "DISABL",
    "INVEST",
    "SPOUSAL",
    "SUPPLE",
    "TAX",
    "INCOME",
    "CLOTH",
    "HEALTH",
    "HOUSE",
    "LEGAL",
    "MORTG",
    "SUNDRY",
    "TRANS",
    "UTIL",
    "LIVEXP",
    "_ActFinancialStatusObservationValue",
    "ADOPT",
    "BTHCERT",
    "CCOC",
    "DRLIC",
    "FOSTER",
    "MEMBER",
    "MIL",
    "MRGCERT",
    "PASSPORT",
    "STUDENRL",
    "ELSTAT",
    "DISABLE",
    "IVDRG",
    "PGNT",
    "HLSTAT",
    "RELDEP",
    "SPSDEP",
    "URELDEP",
    "LIVDEP",
    "ALONE",
    "DEPCHD",
    "DEPSPS",
    "DEPYGCHD",
    "FAM",
    "RELAT",
    "SPS",
    "UNREL",
    "LIVSIT",
    "HMLESS",
    "ILGIM",
    "INCAR",
    "PROB",
    "REFUG",
    "UNEMPL",
    "SOECSTAT",
    "_ActCoverageAssessmentObservationValue",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "_AllergyTestValue",
    "ALLORNONESCR",
    "LINEARSCR",
    "OPPORSCR",
    "WEIGHTSCR",
    "_CompositeMeasureScoring",
    "ADC",
    "CHD",
    "DEP",
    "DP",
    "ECH",
    "FLY",
    "_CoverageLevelObservationValue",
    "_CoverageLimitObservationValue",
    "CRITH",
    "CRITL",
    "CRITU",
    "_CriticalityObservationValue",
    "Employed",
    "NotInLaborForce",
    "Unemployed",
    "_EmploymentStatus",
    "Homozygote",
    "_GeneticObservationValue",
    "COHORT",
    "CONTVAR",
    "PROPOR",
    "RATIO",
    "_ObservationMeasureScoring",
    "COMPOSITE",
    "EFFICIENCY",
    "EXPERIENCE",
    "INTERM-OM",
    "PRO-PM",
    "OUTCOME",
    "APPROPRIATE",
    "PROCESS",
    "RESOURCE",
    "STRUCTURE",
    "_ObservationMeasureType",
    "IPP",
    "_ObservationPopulationInclusion",
    "G",
    "LE",
    "ME",
    "MI",
    "_PartialCompletionScale",
    "ABSTRED",
    "AGGRED",
    "ANONYED",
    "MAPPED",
    "MASKED",
    "PSEUDED",
    "REDACTED",
    "SUBSETTED",
    "SYNTAC",
    "TRSLT",
    "VERSIONED",
    "_SECALTINTOBV",
    "CRYTOHASH",
    "DIGSIG",
    "_SECDATINTOBV",
    "HRELIABLE",
    "RELIABLE",
    "UNCERTREL",
    "UNRELIABLE",
    "_SECINTCONOBV",
    "CLINAST",
    "DEVAST",
    "HCPAST",
    "PACQAST",
    "PATAST",
    "PAYAST",
    "PROAST",
    "SDMAST",
    "_SECINTPRVABOBV",
    "CLINRPT",
    "DEVRPT",
    "HCPRPT",
    "PACQRPT",
    "PATRPT",
    "PAYRPT",
    "PRORPT",
    "SDMRPT",
    "_SECINTPRVRBOBV",
    "_SECINTPRVOBV",
    "_SECINTOBV",
    "TRSTACCRDOBV",
    "TRSTAGREOBV",
    "TRSTCERTOBV",
    "LOAAN1",
    "LOAAN2",
    "LOAAN3",
    "LOAAN4",
    "LOAAN",
    "LOAAP1",
    "LOAAP2",
    "LOAAP3",
    "LOAAP4",
    "LOAAP",
    "LOAAS1",
    "LOAAS2",
    "LOAAS3",
    "LOAAS4",
    "LOAAS",
    "LOACM1",
    "LOACM2",
    "LOACM3",
    "LOACM4",
    "LOACM",
    "LOAID1",
    "LOAID2",
    "LOAID3",
    "LOAID4",
    "LOAID",
    "LOANR1",
    "LOANR2",
    "LOANR3",
    "LOANR4",
    "LOANR",
    "LOARA1",
    "LOARA2",
    "LOARA3",
    "LOARA4",
    "LOARA",
    "LOATK1",
    "LOATK2",
    "LOATK3",
    "LOATK4",
    "LOATK",
    "TRSTLOAOBV",
    "TRSTMECOBV",
    "SECTRSTOBV",
    "_SecurityObservationValue",
    "H",
    "_SeverityObservation",
    "LLD",
    "RLD",
    "SFWL",
    "SIT",
    "STN",
    "RTRD",
    "TRD",
    "SUP",
    "_SubjectBodyPosition",
    "ACT",
    "ACTPEND",
    "INACT",
    "INPNDINV",
    "INPNDUPD",
    "_VerificationOutcomeValue",
    "DS",
    "EMS",
    "ES",
    "NS",
    "RSWN",
    "RSWON",
    "VLS",
    "VS",
    "_WorkSchedule",
    "_AnnotationValue",
    "_CommonClinicalObservationValue",
    "_IndividualCaseSafetyReportValueDomains",
    "_IndicationValue",
    "ACCREQNA",
    "FLRCNV",
    "MEDNEC",
    "PAT",
    "_ActAccommodationReason",
    "COVSUS",
    "DECSD",
    "REGERR",
    "_ActIneligibilityReason",
    "EMPLOY",
    "FINAN",
    "MULTI",
    "STATUTORY",
    "VEHIC",
    "WORK",
    "_CoverageEligibilityReason",
    "_EligibilityActReasonCode",
    "_ActCoverageReason",
    "OVRER",
    "OVRINCOMP",
    "OVRPJ",
    "OVRPS",
    "OVRTPS",
    "_ActConsentInformationAccessOverrideReason",
    "HMARKT",
    "CAREMGT",
    "DONAT",
    "GOV",
    "HACCRED",
    "HCOMPL",
    "HDECD",
    "HDIRECT",
    "HDM",
    "HLEGAL",
    "HOUTCOMS",
    "HPRGRP",
    "HQUALIMP",
    "LABELING",
    "METAMGT",
    "HSYSADMIN",
    "MEMADMIN",
    "MILCDM",
    "PATADMIN",
    "PATSFTY",
    "PERFMSR",
    "RECORDMGT",
    "HTEST",
    "SYSDEV",
    "TRAIN",
    "HOPERAT",
    "CLMATTCH",
    "COVAUTH",
    "ELIGDTRM",
    "ELIGVER",
    "ENROLLM",
    "MILDCRG",
    "COVERAGE",
    "REMITADV",
    "HPAYMT",
    "BIORCH",
    "CLINTRCHNPC",
    "CLINTRCHPC",
    "PRECLINTRCH",
    "CLINTRCH",
    "DSRCH",
    "POARCH",
    "TRANSRCH",
    "HRESCH",
    "FAMRQT",
    "PWATRNY",
    "SUPNWK",
    "PATRQT",
    "DISASTER",
    "THREAT",
    "PUBHLTH",
    "CLINTRL",
    "COC",
    "BTG",
    "ERTREAT",
    "ETREAT",
    "POPHLTH",
    "TREAT",
    "PurposeOfUse",
    "_ActHealthInformationManagementReason",
    "MARKT",
    "ACCRED",
    "COMPL",
    "ENADMIN",
    "OUTCOMS",
    "PRGRPT",
    "QUALIMP",
    "SYSADMN",
    "OPERAT",
    "PAYMT",
    "RESCH",
    "SRVC",
    "_ActInformationPrivacyReason",
    "_ActInformationManagementReason",
    "COLDCHNBRK",
    "ADVSTORAGE",
    "EXPLOT",
    "OUTSIDESCHED",
    "PRODRECALL",
    "_ActInvalidReason",
    "INCCOVPTY",
    "INCINVOICE",
    "INCPOLICY",
    "INCPROV",
    "_ActInvoiceCancelReason",
    "IMMUNE",
    "MEDPREC",
    "OSTOCK",
    "PATOBJ",
    "PHILISOP",
    "RELIG",
    "VACEFF",
    "VACSAF",
    "_ActNoImmunizationReason",
    "FRR01",
    "FRR02",
    "FRR03",
    "FRR04",
    "FRR05",
    "FRR06",
    "_ActSupplyFulfillmentRefusalReason",
    "RET",
    "TRM",
    "UNS",
    "_ClinicalResearchEventReason",
    "NPT",
    "PPT",
    "UPT",
    "_ClinicalResearchObservationReason",
    "ALTCHOICE",
    "CLARIF",
    "DRUGHIGH",
    "HOSPADM",
    "LABINT",
    "NON-AVAIL",
    "SALG",
    "SDDI",
    "SDUPTHER",
    "SINTOL",
    "WASHOUT",
    "_CombinedPharmacyOrderSuspendReasonCode",
    "ALTD",
    "EIE",
    "NORECMTCH",
    "_ControlActNullificationReasonCode",
    "INRQSTATE",
    "NOPRODMTCH",
    "NOSERMTCH",
    "NOVERMTCH",
    "NOMATCH",
    "NOUSERPERM",
    "NOAGNTPERM",
    "NOUSRPERM",
    "NOPERM",
    "WRNGVER",
    "_ControlActNullificationRefusalReasonType",
    "DISCONT",
    "INEFFECT",
    "MONIT",
    "NOREQ",
    "NOTCOVER",
    "PREFUS",
    "RECALL",
    "DOSECHG",
    "REPLACE",
    "REPLACEFIX",
    "UNABLE",
    "_MedicationOrderAbortReasonCode",
    "HOLDDONE",
    "HOLDINAP",
    "_MedicationOrderReleaseReasonCode",
    "ADMINERROR",
    "CLINMOD",
    "_ModifyPrescriptionReasonType",
    "CONTRA",
    "FOABORT",
    "FOSUSP",
    "NOPICK",
    "PATDEC",
    "QUANTCHG",
    "_PharmacySupplyEventAbortReason",
    "FLRSTCK",
    "OFFICE",
    "PHARM",
    "PROG",
    "_PharmacySupplyEventStockReasonCode",
    "ALREADYRX",
    "FAMPHYS",
    "MODIFY",
    "NEEDAPMT",
    "NOTAVAIL",
    "NOTPAT",
    "ONHOLD",
    "PRNA",
    "STOPMED",
    "TOOEARLY",
    "_PharmacySupplyRequestRenewalRefusalReasonCode",
    "IMPROV",
    "INTOL",
    "NEWSTR",
    "NEWTHER",
    "_SupplyOrderAbortReasonCode",
    "_ControlActReason",
    "CHGDATA",
    "FIXDATA",
    "MDATA",
    "NEWDATA",
    "UMDATA",
    "_GenericUpdateReasonCode",
    "ADMREV",
    "PATCAR",
    "PATREQ",
    "PRCREV",
    "REGUL",
    "RSRCH",
    "VALIDATION",
    "_PatientProfileQueryReasonCode",
    "LOCKED",
    "UNKWNTARGET",
    "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
    "_RefusalReasonCode",
    "DEC",
    "FIN",
    "MTG",
    "_SchedulingActReason",
    "FILLED",
    "_StatusRevisionRefusalReasonCode",
    "PATINELIG",
    "PROTUNMET",
    "PROVUNAUTH",
    "_SubstanceAdministrationPermissionRefusalReasonCode",
    "ALGINT",
    "COMPCON",
    "THERCHAR",
    "TRIAL",
    "_SubstanceAdminSubstitutionNotAllowedReason",
    "CT",
    "FP",
    "OS",
    "RR",
    "_SubstanceAdminSubstitutionReason",
    "ER",
    "RQ",
    "_TransferActReason",
    "_ActBillableClinicalServiceReason",
    "_ActBillableServiceReason",
    "ESP",
    "SPC",
    "SPO"
];

export const SecuritylabelsValueSet: ValueSet = [
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    }
];

export default Securitylabels;
