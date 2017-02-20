const { Component, Circle, Group, randomColor, Oscillator } = ReactiveCanvas

const slowOscillator = Oscillator({ start: 1, range: 0.1, speed: 0.5 })

class Window extends Component {
  render (seconds) {
    const circles = this.events.map(({x, y, time}) => {
      return { x, y, color: 'blue', scale: 1/time }
    })
    return (
      <Group>
      {circles.map((c, i) => <Circle centerX={c.x || 50} centerY={c.y || 10 * seconds} color={c.color} scale={c.scale * 5 * slowOscillator(seconds + c.scale)} />)}
      </Group>
      )
  }
}