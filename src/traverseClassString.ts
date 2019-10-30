import isValidClassName from './isValidClassName'

const splitBySpace = /([\S]+)/g

export function traverseClassString(
  callback: (className: string) => void,
  classString: string,
) {
  const classNames = classString.match(splitBySpace)

  if (classNames) {
    classNames.forEach((className) => {
      if (isValidClassName(className)) {
        callback(className)
      }
    })
  }
}

export default traverseClassString
