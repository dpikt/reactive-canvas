import Component from '../Component'

class Line extends Component {
  defaultProps () {
    return {
      color: 'black',
      width: 1,
      // endX: 100,
      // endY: 100
    }
  }
  draw (ctx) {
    const { centerX, centerY, endX, endY, color, width, scale } = this.props
    ctx.beginPath()
    // Since end(X,Y) is relative
    const absoluteEndX = centerX + endX * scale
    const absoluteEndY = centerY + endY * scale

    ctx.moveTo(centerX, centerY)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineTo(absoluteEndX, absoluteEndY)
    ctx.stroke()
  }
}

export default Line