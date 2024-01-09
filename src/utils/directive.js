export const shake = (el, binding) => {
  let { value, arg } = binding
  console.log(value, arg)
  let timer = null
  el.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      value()
    }, arg || 500)
  })
}
export const throttle = (el, binding) => {
  let { value, arg } = binding
  console.log(value, arg)
  let lastExecTime = 0
  el.addEventListener('click', () => {
    if (Date.now() - lastExecTime > arg || !arg) {
      value()
      lastExecTime = Date.now()
    }
  })
}