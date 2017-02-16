class Component {
  constructor (props, children=[]) {
    this.children = children
    this.props = props || {}
  }
  defaultProps () {
    return {}
  }
  _defaultProps () {
    // Universal default props
    return Object.assign({}, {
      centerX: 0,
      centerY: 0,
      offsetX: 0,
      offsetY: 0,
      scale: 1
    }, this.defaultProps())
  }
  render () {
    return []
  }
  _getChildComponents (parent, seconds) {
    this._computeProps(parent)
    let childComponents = this.render(seconds)
    if (!Array.isArray(childComponents)) childComponents = [childComponents]
    return childComponents.concat(this.props.children)
  }
  _computeProps (parent) {
    // TODO: refactor this mess
    const parentProps = parent ? parent.props : {}
    const defaultProps = this._defaultProps()
    // Determine center
    const centerX = this.props.centerX || parentProps.centerX || defaultProps.centerX
    const centerY = this.props.centerY || parentProps.centerY || defaultProps.centerY
    let offsetX = this.props.offsetX || parentProps.offsetX || defaultProps.offsetX
    let offsetY = this.props.offsetY || parentProps.offsetY || defaultProps.offsetY
    let scale = this.props.scale || defaultProps.scale
    if (parentProps.scale) {
      scale *= parentProps.scale
      offsetX *= parentProps.scale
      offsetY *= parentProps.scale
    }
    this.props.centerX = centerX + offsetX
    this.props.centerY = centerY + offsetY
    this.props.scale = scale
    delete this.props.offsetY
    delete this.props.offsetX
    this.props.children = this.children
    this.props = Object.assign({}, defaultProps, this.props)
  }
}

export default Component