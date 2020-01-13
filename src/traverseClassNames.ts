import traverseClassString from './traverseClassString'

export type ClassNamesDist = { [className: string]: boolean }

export type ClassNameItem = string | ClassNamesDist | undefined

export type ClassNames = (ClassNameItem | ClassNameItem[])[]

const hasOwnProperty = Object.prototype.hasOwnProperty

export function traverseClassNames(
  callback: (className: string) => void,
  ...items: ClassNames
) {
  items.forEach((item) => {
    if (typeof item === 'string') {
      return traverseClassString(callback, item)
    }

    if (typeof item === 'object') {
      if (Array.isArray(item)) {
        return traverseClassNames(callback, ...item)
      }

      for (let key in item) {
        // avoid enumerable properties on prototypes
        if (hasOwnProperty.call(item, key) && item[key]) {
          traverseClassString(callback, key)
        }
      }
    }
  })
}

export default traverseClassNames
