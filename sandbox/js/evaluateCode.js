import Babel from './babel'
import Canvas from 'reactive-canvas'
import * as ReactiveCanvas from 'reactive-canvas'

const testCode = `
  const { Component, Circle, Rectangle, Group, Text, Oscillator } = ReactiveCanvas
  class Poop extends Component {
    test () {

    }
  }
`

const wrapCode = (code) => {
  return `
    (function (Canvas, ReactiveCanvas) {
      ${code}
      const thing = new Poop()
      console.log(thing)
      return thing
    })
  `
}

const evaluate = (code) => {
  const transpiled = Babel.transpile(testCode)
  // const { Component, Circle, Rectangle, Group, Text, Oscillator } = ReactiveCanvas
  // class Window extends Component {
  //   test () {

  //   }
  // }
  // return new Window()
  const wrapperFunction = wrapCode(transpiled)
  console.log(wrapperFunction)
  return eval(wrapperFunction)(Canvas, ReactiveCanvas)
}

export default evaluate