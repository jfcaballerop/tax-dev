const { concatUpper } = require('../src/utils/string.utils')

describe('Test string utils', () => {
  test('Upper and concat obj_name', () => {
    const mockObj = {
      firstName: 'prueba',
      lastName: 'test'
    }
    const result = concatUpper(mockObj)
    expect(result).toBe('PRUEBA TEST')
  })
})
