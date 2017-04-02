const Ace = window.ace // these folks need an NPM package stat
import Sandbox from './js'

const getElement = (className) => document.getElementsByClassName(className)[0]

window.onload = function () {
  // Set up editor
  const editor = Ace.edit('editor')
  editor.getSession().setMode('ace/mode/jsx')
  editor.$blockScrolling = Infinity // Squash deprecation warnings
  editor.setShowPrintMargin(false) // Hide stupid line
  // Intialize sandbox
  const canvas = getElement('main-canvas')
  const messageDisplay = getElement('flash-message')
  const sandbox = new Sandbox(editor, canvas, messageDisplay)
  getElement('reset-timer').addEventListener('click', sandbox.resetTimer.bind(sandbox))
  getElement('reset-events').addEventListener('click', sandbox.resetEvents.bind(sandbox))
  sandbox.start()
}
