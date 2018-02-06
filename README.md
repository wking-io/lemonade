# Lemonade

Composable AJAX requests that return a Future data type.

> This package used to be this project: https://github.com/runlevel3/lemonade
> However, that project has now been deprecated for this package name. Please visit the
> github project if you still need the old project.

## Usage

> `yarn install lemonade`
or
> `npm install lemonade`

Lemonade is bundled to work with EcmaScript version 5.

For older environments you may need to polyfill the following
function: [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

### CommonJS Module

<!-- eslint-disable no-var -->

<!-- eslint-disable padding-line-between-statements -->

```js
var { compose, lift } = require('ramda');
var { getJson } = require('lemonade');
var { dom, getProp, setProp } = require('saladbar');

// Given you want to add an API response to this html
// <p class="default"></p>

// API Endpoint
var endpoint = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to hit enpoint and return the body prop of the response
var postBody = compose(getProp('body'), getJson);

// Lifted function that will set the innerHTML of the passed in DOM Element with the API response
var setHtmlWithPostBody = lift((data, el) => setProp('innerHTML', data, el));

// Load the function and then fork it with the results
setHtmlWithPostBody(postBody(endpoint), dom('.default'))
.fork(console.error, console.log);
//> DOM Element
```

### EcmaScript Module

The `package.json` sets a `module`-field for build-tools like [Rollup](https://rollupjs.org/guide/en).

```js
import { compose, lift } from 'ramda';
import { getJson } from 'lemonade';
import { dom, getProp, setProp } from 'saladbar';

// Given you want to add an API response to this html
// <p class="default"></p>

// API Endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to hit enpoint and return the body prop of the response
const postBody = compose(getProp('body'), getJson);

// Lifted function that will set the innerHTML of the passed in DOM Element with the API response
const setHtmlWithPostBody = lift((data, el) => setProp('innerHTML', data, el));

// Load the function and then fork it with the results
setHtmlWithPostBody(postBody(endpoint), dom('.default'))
.fork(console.error, console.log);
//> DOM Element
```

### Global Bundle (CDN)

Lemonade is hosted in full with all of its dependencies at:
[https://cdn.rawgit.com/wking-io/lemonade/14005c66/lib/bundle.js](https://cdn.rawgit.com/wking-io/lemonade/14005c66/lib/bundle.js)

This script will add `lemonade` to the global scope.
