import { convertToSlug } from './utils'

const categories = ['Front End', 'Game Development', 'Military Simulators']

function searchSlugIntoCategories(slug) {
  let result = false
  categories.forEach((category) => {
    if (convertToSlug(category) === slug) {
      result = true
    }
  })
  return result
}

function convertSlugToTitle(slug) {
  let words = slug.split('-');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' ');
}
export { categories, searchSlugIntoCategories, convertSlugToTitle }