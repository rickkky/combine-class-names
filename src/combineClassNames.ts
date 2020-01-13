import traverseClassNames, {
  ClassNames,
  ClassNamesDist,
} from './traverseClassNames'

export const combineClassNames = function(...items: ClassNames) {
  const classList: string[] = []
  const cache: ClassNamesDist = {}

  const callback = (className: string) => {
    if (cache[className]) {
      return
    }

    classList.push(className)
    cache[className] = true
  }

  traverseClassNames(callback, ...items)

  return classList
}

export function joinClassNames(...items: ClassNames) {
  return combineClassNames(...items).join(' ')
}

export default combineClassNames
