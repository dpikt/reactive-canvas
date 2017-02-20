import * as Babel from 'babel-standalone'
import JSXPlugin from 'babel-plugin-transform-react-jsx'

Babel.registerPlugin('babel-plugin-transform-react-jsx', JSXPlugin)

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

export default { transpile }