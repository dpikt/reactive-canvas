import Component from '../Component'
import { Point } from '../utils'

class Rectangle extends Component {
  defaultProps () {
    return {
      width: 50,
      height: 50,
      scale: 1,
      color: 'black',
      borderColor: 'black',
      borderWidth: 1
    }
  }
  draw (ctx) {
    const { centerX, centerY, width, height, color, borderWidth, borderColor, scale } = this.props
    const scaledWidth = width * scale
    const scaledHeight = height * scale
    const leftCorner = new Point(centerX - (scaledWidth / 2), centerY - scaledHeight / 2)
    ctx.beginPath()
    ctx.rect(leftCorner.X, leftCorner.Y, scaledWidth, scaledHeight)
    ctx.lineWidth = borderWidth
    ctx.strokeStyle = borderColor
    ctx.stroke()
    ctx.fillStyle = color
    ctx.fill()
  }
}

export default Rectangle