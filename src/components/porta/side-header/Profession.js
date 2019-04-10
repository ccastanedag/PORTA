import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {

  // '@font-face': {
  //   fontFamily: 'Montserrat',
  //   src: 'url(https://fonts.googleapis.com/css?family=Montserrat)'
  // },
  professionContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.75em 0'
  },
  profession: {
    fontFamily : 'Montserrat',
    fontSize: '1em',
    color: '#757892',
    fontWeight: '600',
  }
}

const Profession = ({classes , profession}) => {
  return (
    <div className={classes.professionContainer}>
      <div className={classes.profession}>{profession}</div>
    </div>
  )
}

Profession.propTypes = {
  profession: PropTypes.string.isRequired
}

export default withStyles(styles)(Profession)
