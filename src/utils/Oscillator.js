
const Oscillator = ({ start=1, range=1, speed=1 }) => {
  const oscillate = (currentSecond) => {
    const progress = speed * currentSecond
    const offset = Math.sin(progress * 2 * Math.PI) * range
    return start + offset
  }
  return oscillate
}

export default Oscillator