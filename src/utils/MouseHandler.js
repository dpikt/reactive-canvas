class MouseHandler {
  constructor (element) {
    this.clicking = false
    this.boundFunc = null
    this.elementX = element.offsetLeft
    this.elementY = element.offsetTop
    element.addEventListener('mousedown', this._mouseDown.bind(this))
    element.addEventListener('mousemove', this._mouseMove.bind(this))
    element.addEventListener('mouseup', this._mouseUp.bind(this))
  }
  onContinuousClick (f) {
    this.boundFunc = f
  }
  _fire (e) {
    const x = e.pageX - this.elementX
    const y = e.pageY - this.elementY
    if (this.boundFunc) this.boundFunc(x, y)
  }
  _mouseDown (e) {
    this.clicking = true
    this._fire(e)
  }
  _mouseMove (e) {
    if (this.clicking) this._fire(e)
  }
  _mouseUp () {
    this.clicking = false
  }
}

export default MouseHandler