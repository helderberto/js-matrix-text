export default class JsMatrixText {
  constructor(element) {
    this.element = document.querySelector(element)
    console.log(this.element)
    this.init()
  }

  init = () => {
    this.element.innerHTML = 'Updated!'
  }
}
