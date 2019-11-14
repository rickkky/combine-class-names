import combineClassNames, { ClassNames } from '../src'

describe('housekeeping', () => {
  it('shoule be defined as a function', () => {
    expect(typeof combineClassNames).toBe('function')
  })
})

const test = (received: ClassNames, expected: string[]) => {
  expect(combineClassNames(...received)).toStrictEqual(expected)
}

describe('functionality', () => {
  it('simple case', () => {
    test([''], [])

    test(['a', 'b'], ['a', 'b'])
    test(['a b'], ['a', 'b'])
    test(['a', ['a', 'b']], ['a', 'b'])
    test([['a', 'b'], 'a', 'b'], ['a', 'b'])

    test(['a', { a: false, b: true }], ['a', 'b'])
    test([{ a: true, b: false, c: false }, 'b'], ['a', 'b'])
    test([[{ a: true }], 'b'], ['a', 'b'])
  })

  it('invalid class names', () => {
    test(['_a 7b   -c d5 '], ['d5'])
    test(['-a ', ['4b', '_c']], [])
    test([{ '_a 7b   -c d5 ': true }], ['d5'])
    test([{ '_a 7b   -c d5 ': false }], [])
  })

  it('complex case', () => {
    test(
      [
        'a -b',
        ['7c', '54', { 'd8a_c ': true }],
        ['ac&a eb__a'],
        { '1ab-c - , c-ab': true, 'db5 , 4f': false },
      ],
      ['a', 'd8a_c', 'eb__a', 'c-ab'],
    )
  })
})
