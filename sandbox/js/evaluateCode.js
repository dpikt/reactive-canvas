import Babel from './babel'
import Canvas from 'reactive-canvas'
import * as ReactiveCanvas from 'reactive-canvas'


// Inject library
const wrapCode = (code) => {
  return `
    (function (Canvas, ReactiveCanvas) {
      ${code}
      return new Window()
    })
  `
}

const evaluate = (code) => {
  const transpiled = Babel.transpile(code)
  const wrappedFunction = wrapCode(transpiled)
  return eval(wrappedFunction)(Canvas, ReactiveCanvas)
}

export default evaluate