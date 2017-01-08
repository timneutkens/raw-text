const listen = require('test-listen').default
const fetch = require('node-fetch')
const micro = require('micro')

test('parse', async () => {
  const parse = require('./index')
  const server = micro(async (req) => {
    const data = await parse(req)
    return data
  })

  const url = await listen(server)

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'text/plain'
    },
    body: 'abc'
  })

  const text = await res.text()
  expect(text).toBe('abc')
})
