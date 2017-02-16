import Component from '../Component'

class Text extends Component {
  defaultProps () {
    return {
      font: 'Arial',
      fontSize: 30,
      textAlign: 'center',
      color: 'black',
      text: ''
    }
  }
  draw (ctx) {
    const { font, fontSize, textAlign, text, color, centerX, centerY, scale } = this.props
    ctx.font = `${fontSize*scale}px ${font}`
    ctx.fillStyle = color
    ctx.textAlign = textAlign
    ctx.fillText(text, centerX, centerY)
  }
}

export default Text