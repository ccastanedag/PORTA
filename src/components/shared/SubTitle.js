import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  subTitleContainer : {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: props => props.uppercase ? '0.9em': '0.8em',
    color: '#757892',
    margin: props => props.uppercase ? '0.65em 0' : '0.35em 0',
    textTransform: props => props.uppercase ? 'uppercase' : 'capitalize'
  },
  '@media screen and (min-width:768px)' : {
    subTitleContainer : {
      fontSize: props => props.uppercase ? '1.1em':'1em'
    }
  }
}

const SubTitle = ({classes, subTitleText}) => {
  return (
    <div className={classes.subTitleContainer}>
      {subTitleText}
    </div>
  )
}

SubTitle.propTypes = {
  subTitleText: PropTypes.string.isRequired,
  uppercase: PropTypes.bool
}

SubTitle.defaultProps  = {
  uppercase : false
}

export default withStyles(styles)(SubTitle)
