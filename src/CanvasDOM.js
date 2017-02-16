import { onNextFrame } from './utils'

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

const render = (component, canvas) => {
  const context = canvas.getContext('2d')
  const startTime = performance.now()
  const renderLoop = () => {
    const currentTime = performance.now()
    const secs = Math.round(currentTime - startTime) / 1000.00
    const nodeTree = buildNodeTree(component, secs)
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawNodeTree(nodeTree, context, canvas)
    onNextFrame(renderLoop)
  }
  renderLoop()
}

export default { render }