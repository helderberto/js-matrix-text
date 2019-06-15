const DEFAULT_OPTIONS = {
  fps: 10,
  duration: 600,
  characters: 'abcdefghijklmnopqrstuvwxyz',
  delay: 60,
  frames: 100,
  frameCount: 10,
}

export default class JsMatrixText {
  constructor(element, options = DEFAULT_OPTIONS) {
    if (!element) throw new Error('Insira um elemento válido!')

    this.element = document.querySelector(element)
    this.options = options

    if (this.element) this.init()
  }

  init = () => {
    this.initElementText = this.element.innerText
    this.frameIndex = 0
    this.timeout = undefined

    // Handlers
    this.handleMouseEnter()
    this.handleMouseOut()
  }

  updateText = () => {
    const { characters } = this.options

    const newText = Array.from({ length: this.initElementText.length }).map(
      () => characters[~~(Math.random() * characters.length)]
    )
    this.element.innerText = newText.join('')
  }

  resetText = () => {
    if (this.timeoutId !== undefined) clearTimeout(this.timeoutId)

    this.frameIndex = 0
    this.element.innerText = this.initElementText
  }

  animateText = () => {
    const { frameCount, delay } = this.options

    if (this.frameIndex >= frameCount) {
      this.resetText()
      return
    }

    this.frameIndex++
    this.updateText()

    this.timeoutId = setTimeout(this.animateText, delay)
  }

  handleMouseOut = () => {
    this.element.addEventListener('mouseout', this.resetText)
  }

  handleMouseEnter = () => {
    this.element.addEventListener('mouseenter', this.animateText)
  }
}
