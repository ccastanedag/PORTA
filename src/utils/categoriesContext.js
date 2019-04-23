import React from 'react'

const categories = ['Front End', 'Game Development', '3D Simulation', 'Other Projects']

const CategoriesContext = React.createContext({
  selectedCategory: categories[0],
  selectCategory: () => console.warn('There was an error loading the Categories Context')
})

export { categories, CategoriesContext }