# combine-class-names

[![npm version](https://badge.fury.io/js/combine-class-names.svg)](https://badge.fury.io/js/combine-class-names)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install

```
npm i -S combine-class-names
```

## API

```typescript
function combineClassNames(
  ...items:
    | string
    | { [className: string]: boolean }
    | (string | { [className: string]: boolean })[]
): string[]
```

## Example

```javascript
import combineClassNames from 'combine-class-names'

let classList = combineClassNames('element', { 'element--primary': true })
```
