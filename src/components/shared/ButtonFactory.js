import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

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
    margin: '0.6em 0.25em',
    position: 'relative',
    zIndex: '0',
    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      background: 'inherit',
      filter: 'blur(10px)',
      bottom: '-10px',
      left: '0%',
      height: '110%',
      width: '100%',
      borderRadius: '2em',
      opacity: '0.55'
    },
  },
  '@media screen and (min-width: 768px)': {
    button: {
      fontSize: '1.25em',
      padding: '0.3em 1em',
      marginTop: '0.8em',
      marginBottom: '0.8em'
    },
    icon: {
      fontSize: '1.35em'
    }
  },
  '@media screen and (min-width: 1200px)': {
    button: {
      fontSize: '1em',
      padding: '0.35em 1.25em',
      marginTop: '0.65em',
      marginBottom: '0.65em',
      marginRight: '0.75em',
      marginLeft: '0.75em'
    },
    icon: {
      fontSize: '1.15em'
    }
  },
  '@media screen and (min-width: 1600px)': {
    button: {
      fontSize: '1.2em',
      padding: '0.35em 1.25em',
      marginTop: '0.8em',
      marginBottom: '0.8em'
    },
    icon: {
      fontSize: '1.35em'
    }
  }
}
/**
 *  @redirectTo are links outside of the application. Ex: https://youtube.com
 *  @linkTo are links inside of the application. Ex: /portfolio/game-development
 */
const ButtonFactory = ({ classes, buttonText, fontAwesomeIcon, redirectTo, linkTo }) => {
  if (linkTo) {
    return (
      <div>
        <Link to={linkTo}>
          <Button className={classes.button}>
            <i className={`${fontAwesomeIcon} ${classes.icon}`}></i>
            {buttonText}
          </Button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Button className={classes.button} target='_blank' href={redirectTo}>
          <i className={`${fontAwesomeIcon} ${classes.icon}`}></i>
          {buttonText}
        </Button>
      </div>
    )
  }
}

ButtonFactory.propTypes = {
  buttonText: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  gradient: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  }).isRequired
}

export default withStyles(styles)(ButtonFactory)


