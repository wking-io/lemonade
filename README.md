# Lemonade

Composable AJAX requests that return a Future data type.

## Usage

> `npm install --save lemon-ade`

Lemonade is bundled to work with EcmaScript version 5.

For older environments you may need to polyfill the following
function: [`Object.assign`][js:object.assign].

### CommonJS Module

<!-- eslint-disable no-var -->

<!-- eslint-disable padding-line-between-statements -->

```js
var { __, compose } = require('ramda');
var { getJson } = require('lemon-ade');
var { dom, setProp, getProp } = require('saladbar');

// Given you want to add an API response to this html
// <p class="default"></p>

var endpoint = 'https://jsonplaceholder.typicode.com/posts/1';
var postBody = compose(getProp('body'), getJson);
var setHtmlWithPostBody = compose(
  setProp('innerHTML', postBody(endpoint)),
  dom
);

setHtmlWithPostBody('.default').fork(console.error, console.log);
//> DOM Element
```

### EcmaScript Module

The `package.json` sets a `module`-field for build-tools like [Rollup][].

```js
import { __, compose } from 'ramda';
import { getJson } from 'lemon-ade';
import { dom, setProp, getProp } from 'saladbar';

// Given you want to add an API response to this html
// <p class="default"></p>

const endpoint = 'https://jsonplaceholder.typicode.com/posts/1';
const postBody = compose(getProp('body'), getJson);
const setHtmlWithPostBody = compose(
  setProp('innerHTML', postBody(endpoint)),
  dom
);

setHtmlWithPostBody('.default').fork(console.error, console.log);
//> DOM Element
```

### Global Bundle (CDN)

Lemonade is hosted in full with all of its dependencies at:
[https://cdn.rawgit.com/wking-io/lemonade/14005c66/lib/bundle.js](https://cdn.rawgit.com/wking-io/lemonade/14005c66/lib/bundle.js)

This script will add `lemonade` to the global scope.
