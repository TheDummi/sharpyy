<!-- @format -->

![sharpy](./docs/sharpy.png)

[![Discord](https://img.shields.io/discord/784094726432489522?logo=discord)](https://discord.gg/teNWyb69dq)
![npm](https://img.shields.io/npm/dw/sharpy)
![npm](https://img.shields.io/npm/dt/sharpy)
![Read the Docs](https://img.shields.io/readthedocs/node)
![npm type definitions](https://img.shields.io/npm/types/sharpy)
[![wakatime](https://wakatime.com/badge/user/0eeef1b5-98a7-4ec0-ab4c-db00536d5ed1/project/5ee8b6e6-942e-455f-ae9c-65536165f83a.svg)](https://wakatime.com/badge/user/0eeef1b5-98a7-4ec0-ab4c-db00536d5ed1/project/5ee8b6e6-942e-455f-ae9c-65536165f83a)
![node-current](https://img.shields.io/node/v/sharpy)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/sharpy/sharpy)

_Because chalk does not work in windows terminals..._

# Highlights

> - Fast
> - Lightweight
> - Easy to use
> - Customizable
> - TypeScript Types
> - ESM & CJS support
> - Works on all machines
> - No dependencies

## Install

```cmd
npm install sharpy
```

## How-To-Use

```ts
import { Style } from 'sharpy'

// Anything passed after the first argument is a style. You can combine every style available.
sharpy(text:string, ...style:Array<keyof typeof Style | Style>)

// Style is an enum and you can pass both a string value as well as a enum key.
```

## Usage

```ts
// ESM
import sharpy from 'sharpy';

console.log(sharpy('Hello, World!', 'invisible'));

// Use tx<Colorname> for text color.
console.log(sharpy('Hello, World!', 'txBlue'));

// Use bg<Colorname> for background color.
console.log(sharpy('Hello, World!', 'bgBlue'));

// It does not stop at colors...
console.log(sharpy('Hello, World!', 'strikethrough'));

console.log(sharpy('Hello, World!', 'underline'));

console.log(sharpy('Hello, World!', 'italic'));

console.log(sharpy('Hello, World!', 'dim'));

// combine multiple effects
console.log(sharpy('Hello, World!', 'txRed', 'bold', 'underline', 'inverse'));

// You like rainbows?
console.log(sharpy('Hello, World!', 'rainbow', 'bold', 'underlines', 'italic'));

console.log(sharpy('Hello, World!', 'bgRainbow', 'bold', 'underlines', 'italic'));
```

![output](./docs/output.png)

```ts
// CJS
const { default: sharpy } = require('sharpy');

console.log(sharpy('Hello, World!', 'invisible'));

// Use tx<Colorname> for text color.
console.log(sharpy('Hello, World!', 'txBlue'));

// Use bg<Colorname> for background color.
console.log(sharpy('Hello, World!', 'bgBlue'));

// It does not stop at colors...
console.log(sharpy('Hello, World!', 'strikethrough'));

console.log(sharpy('Hello, World!', 'underline'));

console.log(sharpy('Hello, World!', 'italic'));

console.log(sharpy('Hello, World!', 'dim'));

// combine multiple effects
console.log(sharpy('Hello, World!', 'txRed', 'bold', 'underline', 'inverse'));

// You like rainbows?
console.log(sharpy('Hello, World!', 'rainbow', 'bold', 'underlines', 'italic'));

console.log(sharpy('Hello, World!', 'bgRainbow', 'bold', 'underlines', 'italic'));
```

![output](./docs/output.png)

## Styles

> - normal
> - bold
> - dim
> - italic
> - underline
> - inverse
> - invisible
> - strikethrough
> - underlines

## Text Colors

> - txGray
> - txRed
> - txGreen
> - txYellow
> - txBlue
> - txMagenta
> - txCyan
> - txWhite
> - rainbow

## Background Colors

> - bgGray
> - bgRed
> - bgGreen
> - bgYellow
> - bgBlue
> - bgMagenta
> - bgCyan
> - bgWhite
> - bgRainbow
