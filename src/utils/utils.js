export const particlesSettings = {
  particles: {
    line_linked: {
      color: '#86A8E7',
      opacity: '0.2',
      width: '2'
    },
    shape: {
      type: 'circle',
      size: '5'
    }
  }
}

export function getElementFromListByAttribute(list, attribute, id) {
  let result = null
  list.forEach((item) => {
    if (item[attribute] === id) {
      result = item
    }
  })

  return result
}
