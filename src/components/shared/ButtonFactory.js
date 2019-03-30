import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  button: {
    backgroundColor : (props) => props.styleData.buttonColor,
    color : (props) => props.styleData.textColor
  }
}

/*
  buttonColor,
  buttonText,
  fontAwesomeIcon,
  iconColor,
  redirectOutside,
  redirectTo,
  textColor
*/
const ButtonFactory = ({ classes, styleData }) => {
  return (
    <div>
      <button className={classes.button}>
        {styleData.buttonText}
      </button>
    </div>
  )
}

ButtonFactory.propTypes = {
  styleData : PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonFactory)


