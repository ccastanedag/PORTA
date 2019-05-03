import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const style = {
  titleContainer:{
    fontFamily: 'Montserrat script=all rev=1',
    fontSize: '1.3em',
    color: '#757892',
    margin: '0.35em 0',
    fontWeight: '500',
    fontStyle:'normal'
  },
  '@media screen and (min-width: 768px)' : {
    titleContainer : {
      fontSize: '1.7em'
    }
  },
  '@media screen and (min-width: 1200px)' : {
    titleContainer : {
      fontSize: '1.85em'
    }
  }
}

const Title = ({ classes, titleText }) => {
  return (
    <div className={classes.titleContainer}>
      {titleText}
    </div>
  )
}

Title.propTypes = {
  titleText: PropTypes.string.isRequired
}

export default withStyles(style)(Title)
