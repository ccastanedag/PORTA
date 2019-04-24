import { convertToSlug } from './utils'

const categories = ['Front End', 'Game Development', '3D Simulation', 'Other Projects']

function searchSlugIntoCategories(slug) {
  let result = false
  categories.forEach((category) => {
    if (convertToSlug(category) === slug) {
      result = true
    }
  })
  return result
}
export { categories, searchSlugIntoCategories }