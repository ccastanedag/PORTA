import React, { Component } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const styles = {
  mobileMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
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
  },
  '@media screen and (min-width: 768px)' : {
    mobileMenuContainer : {
      height: '250px'
    }
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
    return (
      <div className={classes.mobileMenuContainer}>
        <Link to='/home' className={classes.mobileMenuItemContainer} onClick={()=>handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-home' text='Home' />
        </Link>
        <Link to='/portafolio' className={classes.mobileMenuItemContainer} onClick={()=>handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-folder-open' text='Portafolio' />
        </Link>
        <Link to='/work-experience' className={classes.mobileMenuItemContainer} onClick={()=>handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-briefcase' text='Work Experience' />
        </Link>
        <Link to='/education' className={classes.mobileMenuItemContainer} onClick={()=>handleToggleMenu(false)}>
          <MobileMenuItem classes={classes} fontAwesomeIcon='fas fa-graduation-cap' text='Education' />
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(MobileMenu)
