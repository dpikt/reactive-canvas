import Canvas, { Component, Circle, Rectangle, CanvasDOM } from 'reactive-canvas'

class Eye extends Component {
  render () {
    const { lookDirection } = this.props
    return (
      <Circle color="white" radius={10}>
        <Circle color="black" radius={5} offsetX={(lookDirection === 'left') ? -5 : 5} />
      </Circle>
    )
  }
}

class Face extends Component {
  render (seconds) {
    const lookDirection = (seconds % 2) < 1 ? 'left' : 'right'
    return (
      <Rectangle color='pink' width={100}>
        <Eye offsetX={-20} offsetY={-30} lookDirection={lookDirection}/>
        <Eye offsetX={20} offsetY={-30} lookDirection={lookDirection}/>
      </Rectangle>
    )
  }
}

class Window extends Component {
  render (seconds) {
    return (
      <Face centerX={350} centerY={250} scale={(1.5 - seconds % 3) ** 2} />
    )
  }
}

window.onload = function () {
  var canvas = document.getElementById('myCanvas')
  var Main = new Window()
  CanvasDOM.render(Main, canvas)
}
