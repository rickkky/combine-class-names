declare function isValidClassName(className: string): boolean
declare function traverseClassString(
  callback: (className: string) => void,
  classString: string,
): void
declare type ClassNamesDist = {
  [className: string]: boolean
}
declare type ClassNameItem = string | ClassNamesDist
declare type ClassNames = (ClassNameItem | ClassNameItem[])[]
declare function traverseClassNames(
  callback: (className: string) => void,
  ...items: ClassNames
): void
declare function combineClassNames(...items: ClassNames): string[]
export default combineClassNames
export {
  isValidClassName,
  traverseClassString,
  ClassNamesDist,
  ClassNameItem,
  ClassNames,
  traverseClassNames,
}
