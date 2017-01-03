# Raw Text

Parse raw request body as text

## Installation

`npm install --save raw-text`

## Usage

Using [Micro](https://www.github.com/zeit/micro)

```js
const rawText = require('raw-text')

module.exports = async function (req, res) {
  const text = await rawText(req)
  console.log(text)

  return ''
}
```

Using the built in HTTP server provided by node.js

```js
const http = require('http');
const rawText = require('raw-text')

const server = http.createServer((req, res) => {
const text = rawText(req).then(text => console.log(text))
                         .then(() => res.end())
})

server.listen(8000)
```

### Api

`rawText (req, {limit = '1mb'})`

- Use `require('raw-text')``
- Returns a `Promise` (can be used with async/await)
- Buffers the incoming body, calls `toString()` and returns it.
- limit is how much data is aggregated before parsing at max. It can be a `Number` of bytes or [a string](https://www.npmjs.com/package/bytes) like `'1mb'`.
- The `Promise` is rejected when an error occurs, it is your responsibility to catch it.
