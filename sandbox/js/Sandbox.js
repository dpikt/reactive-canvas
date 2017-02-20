import { CanvasDOM } from 'reactive-canvas'
import evaluateCode from './evaluateCode'
import * as Examples from './examples'

class Sandbox {
  constructor (editor, canvas, messageDisplay) {
    this.editor = editor
    this.renderer = new CanvasDOM(canvas)
    this.messageDisplay = messageDisplay
    this.editor.getSession().on('change', this.runCode.bind(this))
  }
  start () {
    this.editor.setValue(Examples.circles)
    this.runCode()
  }
  runCode () {
    const code = this.editor.getValue()
    try {
      const Window = evaluateCode(code)
      this.renderer.mount(Window)
      this.displayErrorMessage('')
    } catch (e) {
      this.displayErrorMessage(e.toString())
    }
  }
  displayErrorMessage (message) {
    this.messageDisplay.innerHTML = message
  }
  resetTimer () {
    this.renderer.resetTimer()
  }
  resetEvents () {
    this.renderer.resetEvents()
  }
}

export default Sandbox
