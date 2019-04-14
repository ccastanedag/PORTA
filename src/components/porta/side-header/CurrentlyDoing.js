import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  '@media screen and (min-width:1600px)': {
    currentlyDoingContainer: {
      width: '55%',
      borderTop: 'solid 1px rgba(134,168,231,0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '0.5em'
    },
    title: {
      fontFamily: 'Lato',
      color: '#757892',
      fontSize: '1.25em',
      paddingBottom: '0.5em'
    },
    activity: {
      display: 'flex',
      alignItems: 'center'
    },
    iconActivity: {
      marginRight: '0.5em'
    },
    nameActivity: {
      fontFamily: 'Lato script=all',
      fontSize: '1.25em',
      fontWeight: '100',
      fontStyle: 'normal',
      color: '#757892'
    }
  }
}

const CurrentlyDoing = props => {
  const { classes } = props
  return (
    <div className={classes.currentlyDoingContainer}>
      <div className={classes.title}>Currently Learning</div>
      <div className={classes.activity}>
        <div className={classes.iconActivity}>
          <img width={24} src='https://i.imgur.com/CjsWu16.png' alt='activity logo' />
        </div>
        <div className={classes.nameActivity}>
          Adobe XD
        </div>
      </div>
    </div>
  )
}

CurrentlyDoing.propTypes = {

}

export default withStyles(styles)(CurrentlyDoing)
