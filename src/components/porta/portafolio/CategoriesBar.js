import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import { convertToSlug } from '../../../utils/utils'
import {categories, CategoriesContext} from '../../../utils/categoriesContext'

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
    textAlign: 'center'
  },
  selected: {
    extend: 'category',
    background: '#EAEFFB'
  },
  link: {
    display:'block',
    padding: '0.85em',
    color: '#757892',
    '&:focus':{
      color: '#757892'
    },
    '&:hover':{
      color: '#757892'
    },
    '&:visited':{
      color: '#757892'
    },
    '&:link':{
      color: '#757892'
    },
    '&:active':{
      color: '#757892'
    }
  }
}

export class CategoriesBar extends Component {
  static contextType = CategoriesContext
  render() {
    const { classes } = this.props
    // @selectedCategory is string and @selectCategory is a methods. See categoriesContext.js for more details
    const {selectedCategory, selectCategory} = this.context
    console.log('CATEGORIES BAR', selectedCategory)
    return (
      <div className={classes.categoriesContainer}>
        {
          categories.map((category) => {
            return (
              <div key={category} className={`${classes.category} ${selectedCategory === category ? classes.selected : null}`}>
                <Link className={classes.link} onClick={selectCategory} id={category} to={`/portafolio/${convertToSlug(category)}`}>
                  {category}
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(style)(CategoriesBar)
