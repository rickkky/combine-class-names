'use strict'

var testCase = /^[a-zA-Z][a-zA-Z0-9_-]*$/
function isValidClassName(className) {
  return testCase.test(className)
}

var splitBySpace = /([\S]+)/g
function traverseClassString(callback, classString) {
  var classNames = classString.match(splitBySpace)

  if (classNames) {
    classNames.forEach(function(className) {
      if (isValidClassName(className)) {
        callback(className)
      }
    })
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty
function traverseClassNames(callback) {
  for (
    var _len = arguments.length,
      items = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    items[_key - 1] = arguments[_key]
  }

  items.forEach(function(item) {
    if (typeof item === 'string') {
      return traverseClassString(callback, item)
    }

    if (typeof item === 'object') {
      if (Array.isArray(item)) {
        return traverseClassNames.apply(void 0, [callback].concat(item))
      }

      for (var key in item) {
        // avoid enumerable properties on prototypes
        if (hasOwnProperty.call(item, key) && item[key]) {
          traverseClassString(callback, key)
        }
      }
    }
  })
}

function combineClassNames() {
  var classList = []
  var cache = {}

  var callback = function callback(className) {
    if (cache[className]) {
      return
    }

    classList.push(className)
    cache[className] = true
  }

  for (
    var _len = arguments.length, items = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    items[_key] = arguments[_key]
  }

  traverseClassNames.apply(void 0, [callback].concat(items))
  return classList
}

/*!
  Copyright (c) 2019 Ricky.
  Licensed under the MIT License (MIT), see
  https://github.com/rickkky/combine-class-names
*/

exports.default = combineClassNames
exports.isValidClassName = isValidClassName
exports.traverseClassNames = traverseClassNames
exports.traverseClassString = traverseClassString
//# sourceMappingURL=combine-class-names.cjs.development.js.map
