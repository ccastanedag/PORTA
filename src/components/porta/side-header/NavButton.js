import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  '@media screen and (min-width: 1200px)': {
    navButtonContainer: props => ({
      display: 'flex',
      background: '#DDE7FC',
      padding: '0.65em 0 0.65em 12%',
      alignItems: 'center',
      borderTop: props.top ? 'solid 2px #EAEDF5' : 'none',
      borderBottom: props.bottom ? 'solid 2px #CCD8F1' : 'none'
    }),
    icon: {
      color: '#757892',
      fontSize: '1.5em',
      width: '1.1em',
      minWidth: '1.1em'
    },
    text: {
      fontFamily: 'Lato',
      textTransform: 'uppercase',
      color: '#757892',
      fontSize: '1em',
      marginLeft: '0.75em'
    }
  },
  '@media screen and (min-width: 1600px)': {
    navButtonContainer: props => ({
      padding: '1em 0 1em 20%'
    }),
    icon: {
      fontSize: '1.85em'
    },
    text: {
      fontSize: '1.25em',
      marginLeft: '0.75em'
    }
  }
}

const NavButton = props => {
  const { fontAwesomeIcon, text, classes } = props
  return (
    <div className={classes.navButtonContainer}>
      <div className={`${fontAwesomeIcon} ${classes.icon}`}></div>
      <div className={classes.text}>{text}</div>
    </div>
  )
}

NavButton.propTypes = {

}

export default withStyles(styles)(NavButton)

