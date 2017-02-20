import { CanvasDOM } from 'reactive-canvas'
import evaluateCode from './evaluateCode'
import * as Examples from './examples'

class Sandbox {
  constructor (editor, canvas) {
    this.editor = editor
    this.renderer = new CanvasDOM(canvas)
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
    } catch (e) {
      console.log(e)
    }
  }
}

export default Sandbox
