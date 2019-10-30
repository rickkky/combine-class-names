import traverseClassNames, {
  ClassNames,
  ClassNamesDist,
} from './traverseClassNames'

export default function combineClassNames(...items: ClassNames) {
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
