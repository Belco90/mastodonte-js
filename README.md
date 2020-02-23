# 🐘 Mastodonte JS

Mastodonte JS es un generador de palabras para los mastodontes, cracks y figuras como tú.

<img src="https://i.imgur.com/SWBGkkT.gif" width="600 />

Esta librería es simplemente un lorem ipsum pero usando las palabras adecuadas para los máquinas, genios y artistas. De hecho, Mastodonte JS está construido sobre [lorem-ipsum.js](https://github.com/knicklabs/lorem-ipsum.js), así que puedes leer su documentación para saber más sobre las opciones disponibles.

## Instalación

**npm**

```
npm install mastodonte
```

**yarn**

```
yarn add mastodonte
```

## Usando la clase Mastodonte (recomendada)

```
import { Mastodonte } from "mastodonte";
// const Mastodonte = require("mastodonte").Mastodonte;

const mastodonteIpsum = new Mastodonte();

mastodonteIpsum.generateWords(1);
mastodonteIpsum.generateSentences(5);
mastodonteIpsum.generateParagraphs(7);
```

> Recuerda que puedes usar las mismas opciones disponibles en [lorem-ipsum](https://github.com/knicklabs/lorem-ipsum.js#using-the-class)

## Usando la función mastodonte

```
import { mastodonte } from "mastodonte";
// const mastodonte = require("mastodonte").mastodonte;

mastodonte(); // genera una frase por defecto
```

> Recuerda que puedes usar las mismas opciones disponibles en [lorem-ipsum](https://github.com/knicklabs/lorem-ipsum.js#using-the-function)

---

## TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
