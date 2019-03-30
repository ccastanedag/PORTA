export function getElementFromListByAttribute(list, attribute, id) {
  let result = null
  list.forEach((item) => {
    if (item[attribute] === id) {
      result = item
    }
  })

  return result
}
