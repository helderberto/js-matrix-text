import JsMatrixText from '.'

describe('JsMatrixText', () => {
  let jsMatrixText

  beforeEach(() => {
    jsMatrixText = new JsMatrixText()
  })

  it('should check if instance jsMatrixText exists', () => {
    expect(jsMatrixText).toBeTruthy()
  })
})
