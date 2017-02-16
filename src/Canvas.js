const create = (componentType, props, ...children) => {
  if (children.length && Array.isArray(children[0])) children = children[0]
  return new componentType(props, children)
}
export default { create }