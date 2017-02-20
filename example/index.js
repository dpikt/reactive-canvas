import Canvas from 'reactive-canvas'
import * as ReactiveCanvas from 'reactive-canvas'
import * as Babel from 'babel-standalone'
const Ace = window.ace // these folks need an NPM package stat

const { Component, Line, Circle, Rectangle, Group, CanvasDOM, Text, Oscillator } = ReactiveCanvas

import JSXPlugin from 'babel-plugin-transform-react-jsx'
Babel.registerPlugin('babel-plugin-transform-react-jsx', JSXPlugin)


const wrapCode = (code) => {
  return `
    (function (Canvas, ReactiveCanvas) {
      ${code}
      try {
        return new Window()
      } catch (e) {
        throw e
      }
    })
  `
}

const evaluate = (code) => {
  const wrapperFunction = wrapCode(transpile(code))
  return eval(wrapperFunction)(Canvas, ReactiveCanvas)
}

const fetchFile = (filepath, callback) => {
  const client = new XMLHttpRequest()
  client.open('GET', filepath)
  client.onreadystatechange = () => {
    if (callback) callback(client.responseText)
  }
  client.send()
}

const babelConfig = { 

  presets: ['es2015'],
  plugins: [
    ['transform-react-jsx', {
      'pragma': 'Canvas.create'
    }]
  ]
}

const transpile = (code) => {
  return Babel.transform(code, babelConfig).code
}

class Sandbox {
  constructor (editor, renderer) {
    this.editor = editor
    this.renderer = renderer
    this.editor.getSession().on('change', this.runCode.bind(this))
    this.fetchDefaultCode()
  }
  fetchDefaultCode () {
    const self = this
    fetchFile('/default.js', (text) => {
      self.editor.setValue(text)
      self.runCode()
    })
  }
  runCode () {
    const code = this.editor.getValue()
    try {
      const Window = evaluate(code)
      this.renderer.mount(Window)
    } catch (e) {
      console.log(e)
    }
  }
}

window.onload = function () {
  const editor = Ace.edit('editor')
  editor.getSession().setMode('ace/mode/jsx')
  editor.$blockScrolling = Infinity // Squash deprecation warnings

  const canvas = document.getElementsByClassName('main-canvas')[0]
  const Renderer = new CanvasDOM(canvas)

  const sandbox = new Sandbox(editor, Renderer)
}
