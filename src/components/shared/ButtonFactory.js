import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const styles = {
  icon: {
    marginRight: '0.35em',
    fontSize: '1.25em'
  },
  button: {
    background: (props) => `linear-gradient(to left, ${props.gradient.start} 0%, ${props.gradient.end} 100%)`,
    color: 'white',
    font: {
      family: 'Montserrat',
      size: '1em',
      weight: '500'
    },
    padding: '0.35em 1.25em',
    textTransform: 'capitalize',
    borderRadius: '2em',
    marginTop: '0.6em',
    marginBottom: '0.6em',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      background: 'inherit',
      filter: 'blur(10px)',
      bottom: '-10px',
      left:  '0%',
      height: '110%',
      width: '100%',
      borderRadius: '2em',
      opacity: '0.55'
    },
  },
  '@media screen and (min-width: 768px)' : {
    button : {
      fontSize : '1.25em',
    },
    icon : {
      fontSize: '1.5625em'
    }
  }
}

const ButtonFactory = ({ classes, buttonText, fontAwesomeIcon }) => {
  return (
    <div>
      <Button className={classes.button}>
        <i className={`${fontAwesomeIcon} ${classes.icon}`}></i>
        {buttonText}
      </Button>
    </div>
  )
}

ButtonFactory.propTypes = {
  buttonText: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
  gradient: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  }).isRequired
}

export default withStyles(styles)(ButtonFactory)


