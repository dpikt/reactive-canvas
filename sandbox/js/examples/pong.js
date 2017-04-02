const { Component, Rectangle, Group, randomColor, Oscillator } = ReactiveCanvas

const slowOscillator = Oscillator({ start: 1, range: 0.1, speed: 0.5 })

class Window extends Component {
  render (seconds) {
    if (!this.state.y) this.state.y = 0
    if (this.events.length) this.state.y = this.events[this.events.length-1].y
    return (
      <Group>
        <Rectangle centerX={10} centerY={this.state.y} height={200} color="black" />
      </Group>
      )
  }
}