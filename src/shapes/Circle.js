import Component from '../Component'

class Circle extends Component {
  defaultProps () {
    return {
      radius: 25,
      scale: 1,
      color: 'black'
    }
  }
  draw (ctx) {
    const { centerX, centerY, radius, color, scale } = this.props
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * scale, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fillStyle = color
    ctx.fill()
  }
}

export default Circle