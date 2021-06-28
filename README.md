<p align="center">
    <a href="https://www.kbv.de/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://www.kbv.de/system/layout/logo_kbv.png" alt="Vue logo"></a>
</p>

<p align="center">

[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0&style=flat-square)
[![Lint: eslint](https://img.shields.io/github/workflow/status/prettier/prettier/Lint?label=Lint&style=flat-square)]()
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
</p>

# MIO Parser 

Der MIO Parser ist ein JavaScript/TypeScript Package zum Parsen von medizinischen Informationsobjekten (MIO). 
MIOs dienen dazu, medizinische Daten - etwa in einer elektronischen Patientenakte - standardisiert, also nach einem festgelegten Format, zu dokumentieren. 
Sie können als kleine digitale Informationsbausteine verstanden werden, die universell verwendbar und kombinierbar sind. 
Beispiele für bereits entwickelte MIOs sind der Impfpass und das zahnärztliche Bonusheft. Mehr dazu auf https://mio.kbv.de. 

Der Parser liest gültige JSON- und XML-FHIR Dokumente und gibt sie als Typescript-Objekte zurück. Gleichzeitig findet eine Validierung der Dokumente statt, sodass Fehler 
in den MIO-Dokumenten sichtbar werden. 

## Hintergrund 

Ab dem Jahr 2022 werden in der elektronische Patientenakte MIOs für alle Versicherten in Deutschland eingeführt. 
Die KBV hat den gesetzlichen Auftrag, die semantische und syntaktische Interoperabilität für Inhalte der elektronischen Patientenakte festzulegen. 
Zu diesem Zweck entwickelt die KBV die medizinischen Informationsobjekte, mit dem Ziel einen einheitlichen Standard zur Übertragung und Verarbeitung von medizinischen Daten zu definieren.
Die MIOs werden in HL7® FHIR® profiliert. 

Der MIO Parser ist ein Tool der KBV, um die Umsetzung der MIOs in IT-Systemen der medizinischen Versorgung (beispielsweise KIS, PVS und Apps der Versicherten) zu unterstützen.
Hierfür wird es zur freien Nutzung zur Verfügung gestellt. 

## Allgemeines 

Diese Anweisungen sollen helfen, den Parser zu installieren und zu nutzen. 

### Anforderungen 

[![Node Version](http://img.shields.io/badge/node-<=12.19.0-brightgreen.svg?style=flat-square)](https://nodejs.org/)
[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat-square)]()

<a href="http://nodejs.org" target="_blank">Node.js</a> mit NPM muss installiert sein. 

#### Abhängigkeiten 

-   [fp-ts](https://www.npmjs.com/package/fp-ts)
-   [io-ts](https://www.npmjs.com/package/io-ts)
-   [fhir](https://www.npmjs.com/package/fhir)

### Installation 

Über den <a href="https://www.npmjs.com/@kbv/mioparser">Node Package Manager</a>.  <br/>
(NPM wird für die Installation benötigt)

```shell
# latest stable
$ npm install @kbv/mioparser
```

Alternativ kann die Software selbst über Git geladen und gebaut werden: 

```bash
$ git clone https://github.com/kassenaerztliche-bundesvereinigung/mioparser.git
$ cd mioparser
$ npm install
$ npm build
```

### Grundlegende Nutzung 

Importieren des Parser Pakets

```typescript javascript
import MIOParser, { MIOParserResult, ZAEB } from "@kbv/mioparser";

const mioParser = new MIOParser();
```

Parsen in einer asynchronen Funktion

```typescript
const result: MIOParserResult = await mioParser.parseFile(...);
```

Oder als Promise

```typescript
mioParser.parseString("...").then((result) => {
    // ...
});
```

Auswertung

```typescript
const mio = result.value;
const errors = result.errors;

// Bundle
if (ZAEB.V1_1_0.Profile.Bundle.is(mio)) {
    const zaeb = mio as ZAEB.V1_1_0.Profile.Bundle;
    // ...
}

// Single Profile
if (ZAEB.V1_1_0.Profile.Patient.is(mio)) {
    const patient = mio as ZAEB.V1_1_0.Profile.Patient;
    // ...
}
```

#### MIOs 

Welche MIOs verarbeitet werden können kann dem [Changelog](https://github.com/kassenaerztliche-bundesvereinigung/MIOParser/blob/master/CHANGELOG.md) entnommen werden.

```typescript
import { Vaccination, ZAEB, MR } from "mioparser";
```

Für weiterführende Informationen zu den medizinischen Informationsobjekten besuche die <a href="https://mio.kbv.de/">MIO-Plattform</a> oder die <a href="https://simplifier.net/organization/kassenrztlichebundesvereinigungkbv/~projects">KBV auf Simplifier.net</a>.

### Erweiterte Nutzung 

Bespiele der Nutzung der Hilfsfunktionen des MIO Parsers

Ein Eintrag nach Profil

```typescript
import { ParserUtil, ZAEB } from "mioparser";

// ...

// Get patient from MIO
const patient = ParserUtil.getEntry(mio, [ZAEB.V1_1_0.Profile.Patient]);
```

Slices aus einem Array gemischter Typen

```typescript
// Get patient identifier gkv
if (patient) {
    const gkv = ParserUtil.getSlice(
        ZAEB.V1_1_0.Profile.PatientVersichertenIdGKV,
        patient.resource.identifier
    );
}
```

Mehrere Einträge nach Profilen

```typescript
// Get records from MIO
const records = ParserUtil.getEntries(mio, [
    ZAEB.V1_1_0.Profile.Observation,
    ZAEB.V1_1_0.Profile.GaplessDocumentation
]);

// Get persons from MIO
const persons = ParserUtil.getEntries(mio, [
    ZAEB.V1_1_0.Profile.Patient,
    ZAEB.V1_1_0.Profile.Organization
]);
```

## Tests 

Zum Ausführen der Tests muss das Paket [MIO Test Data](https://github.com/kassenaerztliche-bundesvereinigung/MIOTestData) installiert sein. 
Es stellt Funktionalitäten und Test-Datensätze bereit. 

### Setup der Tests 
Die Installation und das Ausführen der Tests kann so erfolgen:

```shell script
git clone https://github.com/kassenaerztliche-bundesvereinigung/miotestdata.git
cd miotestdata
npm run build
npm link
cd ../mioparser
npm run install
npm run test
```

### Mitwirken 

Derzeit ist keine Mitwirkung von externen Entwicklern vorgesehen. Dies kann sich aber ändern. #stayTuned

Softwarefehler können über die [GitHub Issues](https://github.com/kassenaerztliche-bundesvereinigung/MIOParser/issues) Seite gemeldet werden.

Über GitHub oder die Mail-Adresse support.mio@kbv.de können Fragen gestellt werden, nach dem das FAQ konsultiert wurde.

### Lizenz 

Diese Software ist unter der Apache-2.0 Lizenz lizensiert worden - siehe <a href="./LICENSE">LICENSE</a> Datei für mehr Details. 
(c) 2020 - 2021 Kassenärztliche Bundesvereinigung KdöR

### Bekannte Fehler 
* Felder, die eine Kardinalität von 1..1 haben und eine extension erlauben (wie z.B. family bei Patient-> Name) sind optional, da derzeit eine Validierung im Sinne von "entweder das eine Feld oder das andere oder beide" nicht implementiert ist. Somit wird derzeit ein Dokument mit fehlendem "family" Feld als falsch positiv validiert.
