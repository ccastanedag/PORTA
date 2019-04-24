import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import { convertToSlug } from '../../../utils/utils'
import { categories, searchSlugIntoCategories } from '../../../utils/categoriesUtils'

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
    display: 'block',
    padding: '0.85em',
    color: '#757892',
    '&:focus': {
      color: '#757892'
    },
    '&:hover': {
      color: '#757892'
    },
    '&:visited': {
      color: '#757892'
    },
    '&:link': {
      color: '#757892'
    },
    '&:active': {
      color: '#757892'
    }
  }
}

export class CategoriesBar extends Component {
  render() {
    const { classes, match } = this.props
    const categoryId = match.params.categoryId

    return (
      <div className={classes.categoriesContainer}>
        {
          categories.map((category) => {
            return (
              <div key={category} className={`${classes.category} ${categoryId === convertToSlug(category) ? classes.selected : null}`}>
                <Link className={classes.link} id={category} to={`/portafolio/${convertToSlug(category)}`}>
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

CategoriesBar.propTypes = {
  match: PropTypes.object.isRequired
}

export default withStyles(style)(CategoriesBar)
