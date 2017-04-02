const { Component, Rectangle, Group, randomColor, Oscillator } = ReactiveCanvas

const slowOscillator = Oscillator({ start: 1, range: 0.1, speed: 0.5 })

class Window extends Component {
  defaultState () {
    return { y: 0 }
  }
  onCanvasClick (e) {
    if (this.events.length) this.state.y = this.events[this.events.length-1].y
  }
  render (seconds) {
    const { y } = this.state
    return (
      <Group>
        <Rectangle centerX={10} centerY={y} height={200} color="black" />
      </Group>
      )
  }
}