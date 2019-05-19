import React, { Component } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { categories } from '../../../utils/categoriesUtils'
import { convertToSlug } from '../../../utils/utils'
import { CurriculumContext } from '../../../config/curriculumContext'

const styles = {
  mobileMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white'
  },
  mobileMenuItemContainer: {
    flex: '1',
    borderBottom: '1px solid #D2D1D1',
    '&:last-child': {
      borderBottom: 'none'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:active': {
      background: '#F4F7FD'
    }
  },
  mobileMenuItem: {
    padding: '0.5em 0'
  },
  icon: {
    fontSize: '1.5em',
    color: '#757892',
    marginRight: '0.5em'

  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    fontWeight: '400',
    color: '#757892'

  },
  mobileMenuItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1.5em'
  }
}

function MobileMenuItem({ classes, fontAwesomeIcon, text }) {
  return (
    <div className={classes.mobileMenuItem}>
      <div className={classes.mobileMenuItemWrapper}>
        <i className={`${fontAwesomeIcon} ${classes.icon}`}></i>
        <div className={classes.text}>
          {text}
        </div>
      </div>
    </div>
  )
}

MobileMenuItem.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export class MobileMenu extends Component {
  static propTypes = {
    handleToggleMenu: PropTypes.func.isRequired
  }
  render() {
    const { classes, handleToggleMenu } = this.props
    const curriculumUrl = this.context // from curriculumContext.js
    return (
      <div className={classes.mobileMenuContainer}>
        <Link to='/home' className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-home' text='Home' />
        </Link>
        <Link to={`/portafolio/${convertToSlug(categories[0])}`} className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-folder-open' text='Portafolio' />
        </Link>
        <Link to='/work-experience' className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-briefcase' text='Work Experience' />
        </Link>
        <Link to='/education' className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-graduation-cap' text='Education' />
        </Link>
        <Link to='/contact-me' className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-envelope' text='Contact Me' />
        </Link>
        <a href={curriculumUrl} target="_blank" rel="noopener noreferrer" className={classes.mobileMenuItemContainer} onClick={() => handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-file-pdf' text='Download CV' />
        </a>
      </div>
    )
  }
}

MobileMenu.contextType = CurriculumContext

MobileMenu.propTypes = {
  handleToggleMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(MobileMenu)
