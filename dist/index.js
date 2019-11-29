
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./combine-class-names.cjs.production.min.js')
} else {
  module.exports = require('./combine-class-names.cjs.development.js')
}
