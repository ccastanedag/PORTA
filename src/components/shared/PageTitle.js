import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const style = {
  pageTittleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.85em 0'
  },
  icon: {
    color:'#757892',
    fontSize:'1.35em'
  },
  pageTitle: {
    fontFamily:'Montserrat',
    fontSize:'1em',
    color:'#757892',
    marginLeft:'0.35em'
  },
  '@media screen and (min-width: 1200px)': {
    icon: {
      fontSize:'1.5em'
    },
    pageTitle: {
      fontSize:'1.5em'
    }
  }
}

const PageTitle = ({ fontAwesomeIcon, pageTitle, classes }) => {
  return (
    <div className={classes.pageTittleContainer}>
      <i className={`${fontAwesomeIcon} ${classes.icon}`}></i>
      <div className={classes.pageTitle}>{pageTitle}</div>
    </div>
  )
}

PageTitle.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired
}

export default withStyles(style)(PageTitle)
