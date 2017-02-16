import Canvas, { Component, Circle, Rectangle, Group, CanvasDOM, Text, Oscillator } from 'reactive-canvas'

const slowOscillator = Oscillator({ start: 1, range: 0.1, speed: 0.5 })
const fastOscillator = Oscillator({ start: 1, range: 0.2, speed: 1 })

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
      <Rectangle color='pink' width={100} scale={slowOscillator(seconds)}>
        <Eye offsetX={-20} offsetY={-30} lookDirection={lookDirection} scale={fastOscillator(seconds)}/>
        <Eye offsetX={20} offsetY={-30} lookDirection={lookDirection}/>
        <Text text="Hello World" color="black" fontSize={10} />
      </Rectangle>
    )
  }
}

class Window extends Component {
  render (seconds) {
    return (
      <Group centerX={80} centerY={250} scale={1}>
        {[0, 1, 2, 3, 4].map(i => <Face offsetX={150 * i}/>)}
      </Group>
    )
  }
}

window.onload = function () {
  var canvas = document.getElementById('myCanvas')
  var Main = new Window()
  CanvasDOM.render(Main, canvas)
}
