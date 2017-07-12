const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')
const pageId = require('spike-page-id')
const SpikeDatoCMS = require('spike-datocms')
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: Object.assign(
      locals
    )
  }),
  plugins: [
    new SpikeDatoCMS({
      addDataTo: locals,
      token: 'd552423567ed1794c6a1',
      models: [{
        name: 'about',
        json: 'about.json'
      }],
    })
  ],
  postcss: cssStandards(),
  babel: { presets: [[jsStandards, { modules: false }]], plugins: [dynamicImport] },
  server: {open: false}
}
