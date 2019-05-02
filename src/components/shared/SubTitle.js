import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  subTitleContainer : {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '0.9em',
    color: '#757892',
    margin: '0.35em 0'
  },
  '@media screen and (min-width:768px)' : {
    subTitleContainer : {
      fontSize: '1.25em'
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
  subTitleText: PropTypes.string.isRequired
}

export default withStyles(styles)(SubTitle)
