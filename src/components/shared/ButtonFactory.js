import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import color from 'color'

const styles = {
  button: {
    backgroundColor: (props) => props.styleData.buttonColor,
    color: (props) => props.styleData.textColor,
    '&:hover': {
      backgroundColor: (props) => color(props.styleData.buttonColor).lighten(0.25).hex()
    }
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
      <Fab variant="extended" size="medium" className={classes.button}>
        <i className={`${styleData.fontAwesomeIcon}`}></i>
        {styleData.buttonText}
      </Fab>

    </div>
  )
}

ButtonFactory.propTypes = {
  styleData: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonFactory)


