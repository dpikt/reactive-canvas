import { CanvasDOM } from 'reactive-canvas'
import evaluateCode from './evaluateCode'
import * as Examples from './examples'
import debounce from 'lodash.debounce'

class Sandbox {
  constructor (editor, canvas, messageDisplay) {
    this.editor = editor
    this.renderer = new CanvasDOM(canvas)
    this.messageDisplay = messageDisplay
    const runCode = debounce(this.runCode.bind(this), 300)
    this.editor.getSession().on('change', runCode)
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
      this.displaySuccessMessage('')
    } catch (e) {
      this.displayErrorMessage(e.toString())
    }
  }
  displaySuccessMessage (message) {
    this.messageDisplay.className = 'flash-message success'
    this.messageDisplay.innerHTML = message
  }
  displayErrorMessage (message) {
    this.messageDisplay.className = 'flash-message error'
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
