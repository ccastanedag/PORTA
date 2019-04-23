import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const style = {
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  category: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    color: '#757892',
    flex: 'auto',
    background: '#F4F7FD',
    border: '1px solid #EAEFFB',
    padding: '0.85em',
    textAlign: 'center'
  },
  selected: {
    extend: 'category',
    background: '#EAEFFB'
  }
}

export class CategoriesBar extends Component {
  state = {
    selectedCategory: this.props.categories[0]
  }

  render() {
    const { categories, classes } = this.props
    return (
      <div className={classes.categoriesContainer}>
        {
          categories.map((category) => {
            return (
              <div key={category} className={`${classes.category} ${this.state.selectedCategory === category? classes.selected:null}`}>
                {category}
              </div>
            )
          })
        }
      </div>
    )
  }
}

CategoriesBar.propTypes = {
  categories: PropTypes.array.isRequired
}

export default withStyles(style)(CategoriesBar)
