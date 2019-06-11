import JsMatrixText from '.'

describe('JsMatrixText', () => {
  let jsMatrixText

  beforeEach(() => {
    jsMatrixText = new JsMatrixText('.js-matrix-text')
  })

  it('should return an instance of JsMatrixText', () => {
    expect(jsMatrixText).toBeInstanceOf(JsMatrixText)
  })
})
