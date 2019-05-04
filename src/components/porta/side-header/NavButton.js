import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Link } from 'react-router-dom'
import { convertToSlug } from '../../../utils/utils'

const styles = {
  '@media screen and (min-width: 1200px)': {
    navButtonContainer: props => ({
      display: 'flex',
      background: props.selected ? 'linear-gradient(to right, #86A8E7 0%, #8989CB 100%)' : '#DDE7FC',
      padding: '0.65em 0 0.65em 12%',
      alignItems: 'center',
      borderTop: props.selected ? 'none' : props.top ? 'solid 2px #EAEDF5' : 'none',
      borderBottom: props.selected ? 'none' : props.bottom ? 'solid 2px #CCD8F1' : 'none'
    }),
    icon: props => ({
      color: props.selected ? 'white' : '#757892',
      fontSize: '1.5em',
      width: '1.1em',
      minWidth: '1.1em'
    }),
    text: props => ({
      fontFamily: 'Lato',
      textTransform: 'uppercase',
      color: props.selected ? 'white' : '#757892',
      fontSize: '1em',
      marginLeft: '0.75em'
    })
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
  const { fontAwesomeIcon, text, classes, handleUpdate } = props
  const uppercaseText = text.toUpperCase()
  return (
    <Link to={{
      pathname: `/${convertToSlug(text)}`
    }}>
      <div onClick={(event) => handleUpdate(uppercaseText)} className={classes.navButtonContainer}>
        <div className={`${fontAwesomeIcon} ${classes.icon}`}></div>
        <div className={classes.text}>{text}</div>
      </div>
    </Link >
  )
}

NavButton.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  top: PropTypes.bool.isRequired,
  bottom: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired
}

export default withStyles(styles)(NavButton)

