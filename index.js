const getRawBody = require('raw-body')
const typer = require('media-typer')

module.exports = function rawText (req, {limit = '1mb'} = {}) {
  const type = req.headers['content-type']
  const encoding = typer.parse(type).parameters.charset
  return getRawBody(req, {limit, encoding}).then(str => str.toString())
}
