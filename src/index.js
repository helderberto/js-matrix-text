const DEFAULT_OPTIONS = {
  fps: 10,
  duration: 600,
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  delay: 60,
  frames: 100,
}

export default class JsMatrixText {
  constructor(element, options = DEFAULT_OPTIONS) {
    if (!element) {
      throw new Error('Insira um elemento válido!')
    }

    this.element = document.querySelector(element)

    if (this.element) {
      this.init()
    }
  }

  init = () => {
    this.setElementText(this.element.innerText)

    // Handlers
    this.handleMouseEnter()
    this.handleMouseOut()
  }

  setElementText = elementText => {
    this.text = elementText
  }

  getElementText = () => this.text

  handleMouseOut = () => {
    this.element.addEventListener('mouseout', () => console.log('mouse out'))
  }

  handleMouseEnter = () => {
    this.element.addEventListener('mouseenter', () =>
      console.log('mouse enter')
    )
  }
}
