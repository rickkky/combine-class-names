const testCase = /^[a-zA-Z][a-zA-Z0-9_-]*$/

export function isValidClassName(className: string) {
  return testCase.test(className)
}

export default isValidClassName
