import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  shadow: {
    width: '7em',
    height: '7em',
    background: 'linear-gradient(to bottom right, #86A8E7 0%, #8989CB 100%)',
    borderRadius: '100%',
    opacity: '0.9',
    filter: 'blur(35px)',
    position: 'relative'
  },
  avatar: {
    width: '6em',
    border: {
      radius: '100%',
      style: 'solid',
      width: '2px',
      color: '#86A8E7'
    },
    position: 'absolute',
    zIndex: '2'
  },
  '@media screen and (min-width: 768px)': {
    avatar: {
      width: '10em'
    },
    shadow: {
      width: '11em',
      height: '11em',
    }
  }
}

const Avatar = ({ classes, avatar }) => {
  return (
    <div className={classes.avatarContainer}>
      <div className={classes.shadow}>

      </div>
      <img className={classes.avatar} src={avatar} alt='user avatar' />
    </div>
  )
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default withStyles(styles)(Avatar)
