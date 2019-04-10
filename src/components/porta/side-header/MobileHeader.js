import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  '@import': {
    url: 'https://fonts.googleapis.com/css?family=Montserrat'
  },
  header: {
    background: 'linear-gradient(to right, #86A8E7 0%, #8989CB 100%)',
    padding: '0.7em',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fallbacks: {
      background: '#9599e2'
    }
  },
  hamburguer: {
    color: 'white',
    fontSize: '1.25em'
  },
  ownerNameContainer: {
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    flex: '1'
  },
  ownerNameText: {
    fontFamily: 'Montserrat',
    fontSize: '1.25em',
    textTransform: 'uppercase',
    color: 'white'
  }
}

const MobileHeader = ({ classes, ownerName }) => {
  return (
    <div className={classes.mobileHeaderContainer}>
      <div className={classes.header}>
        <div className={classes.hamburguer}>
          <i className='fas fa-bars'></i>
        </div>
        <div className={classes.ownerNameContainer}>
          <div className={classes.ownerNameText}>
            {ownerName}
          </div>
        </div>
      </div>
    </div>
  )
}

MobileHeader.propTypes = {
  ownerName : PropTypes.string.isRequired
}

export default withStyles(styles)(MobileHeader)
