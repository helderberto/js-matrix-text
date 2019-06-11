export default class JsMatrixText {
  constructor(element) {
    if (!element) {
      throw new Error('Insira um elemento válido!')
    }

    this.element = document.querySelector(element)
  }

  mouseListeners = () => {
    console.log('dasdas')
  }
}
