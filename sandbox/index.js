const Ace = window.ace // these folks need an NPM package stat
import Sandbox from './js'

window.onload = function () {
  // Set up editor
  const editor = Ace.edit('editor')
  editor.getSession().setMode('ace/mode/jsx')
  editor.$blockScrolling = Infinity // Squash deprecation warnings
  // Intialize sandbox
  const canvas = document.getElementsByClassName('main-canvas')[0]
  const sandbox = new Sandbox(editor, canvas)
  sandbox.start()
}
