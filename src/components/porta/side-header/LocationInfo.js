import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  locationInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  infoContainer: {
    padding: '0.35em 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '1em',
    color: '#757892'
  },
  text: {
    fontFamily: 'Lato',
    fontSize: '0.875em',
    color: '#757892'
  },
  '@media screen and (min-width: 768px)': {
    title: {
      fontSize: '1.5em'
    },
    text: {
      fontSize: '1.3125em'
    }
  },
  '@media screen and (min-width: 1200px)': {
    title: {
      fontSize: '1.05em'
    },
    text: {
      fontSize: '0.95em'
    }
  },

  '@media screen and (min-width: 1600px)': {
    title: {
      fontSize: '1.25em'
    },
    text: {
      fontSize: '1.15em'
    },
    infoContainer: {
      padding: '0.75em 0 0..5em 0'
    }
  }
}

const LocationInfo = ({ classes, currentLocation, timeZone }) => {
  return (
    <div className={classes.locationInfoContainer}>
      <div className={classes.infoContainer}>
        <div className={classes.title}>Current Location</div>
        <div className={classes.text}>{currentLocation}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.title}>Timezone</div>
        <div className={classes.text}>{timeZone}</div>
      </div>
    </div>
  )
}

LocationInfo.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired
}

export default withStyles(styles)(LocationInfo)
