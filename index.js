const getRawBody = require('raw-body')
const typer = require('media-typer')

module.exports = async function parse (req, {limit = '1mb'} = {}) {
  const type = req.headers['content-type']
  const encoding = typer.parse(type).parameters.charset
  req.rawBody = req.rawBody || getRawBody(req, {limit, encoding})
  const str = await req.rawBody

  return str.toString()
}
