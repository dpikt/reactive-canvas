import { onNextFrame, MouseHandler } from './utils'

// Note: right now the id isn't being used at all.
const buildNodeTree = function (component, secs, parent=null, id=0) {
  const { draw } = component
  const children = component._getChildComponents(parent, secs)
  return {
    id,
    draw: draw ? draw.bind(component) : null,
    children: children.length ? children.map((child, index) => buildNodeTree(child, secs, component, index)) : []
  }
}

const drawNodeTree = function (node, context, canvas) {
  if (node.draw) node.draw(context, canvas)
  node.children.forEach((child) => drawNodeTree(child, context, canvas))
}

class CanvasDOM {
  constructor (canvas) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')
    this.startTime = performance.now()
    this.currentTime = 0
    this.component = null
    this.events = []
    // Bind mouse events
    const handler = new MouseHandler(this.canvas)
    handler.onContinuousClick(this.onClick.bind(this))
    this._start()
  }
  mount (component) {
    // Try rendering once
    this.render(component)
    // If it worked, mount continuously
    this.component = component
  }
  onClick (x, y) {
    const newEvent = { x, y, time: this.currentTime }
    this.events.push(newEvent)
    if (this.component) this.component.onCanvasClick(newEvent)
  }
  resetTimer () {
    this.startTime = performance.now()
  }
  resetEvents () {
    this.events = []
  }
  render (component) {
    const currentTime = performance.now()
    this.currentTime = Math.round(currentTime - this.startTime) / 1000.00
    component._setEvents(this.events)
    const nodeTree = buildNodeTree(component, this.currentTime)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    drawNodeTree(nodeTree, this.context, this.canvas)
  }
  _start () {
    const renderLoop = () => {
      if (this.component) this.render(this.component)
      onNextFrame(renderLoop)
    }
    renderLoop()
  }
}

export default CanvasDOM