# 🐘 Mastodonte

`mastodonte` es un generador de palabras para los mastodontes, cracks y figuras como tú.

<img src="https://i.imgur.com/5BEM3oA.gif" />

Esta librería es simplemente un lorem ipsum pero usando las palabras adecuadas para los máquinas, genios y artistas. De hecho, `mastodonte` está construido sobre [lorem-ipsum.js](https://github.com/knicklabs/lorem-ipsum.js), así que puedes leer su documentación para saber más sobre las opciones disponibles.

## Instalación

**pnpm**

```shell
pnpm add -D mastodonte
```

**npm**

```shell
npm install -D mastodonte
```

**yarn**

```shell
yarn add -D mastodonte
```

## Usando la clase Mastodonte (recomendada)

```js
import { Mastodonte } from 'mastodonte'

const mastodonteIpsum = new Mastodonte()

mastodonteIpsum.generateWords(1)
mastodonteIpsum.generateSentences(5)
mastodonteIpsum.generateParagraphs(7)
```

> Recuerda que puedes usar las mismas opciones disponibles en [lorem-ipsum](https://github.com/knicklabs/lorem-ipsum.js#using-the-class)

## Usando la función mastodonte

```js
import { mastodonte } from 'mastodonte'

mastodonte() // genera una frase por defecto
```

> Recuerda que puedes usar las mismas opciones disponibles en [lorem-ipsum](https://github.com/knicklabs/lorem-ipsum.js#using-the-function)
