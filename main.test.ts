import { abc123 } from './main'

describe('main', () => {
  it('abc123', async () => {
    const expectResult = 'abc123'

    const result = abc123()

    expect(result).toStrictEqual(expectResult)
  })
})
