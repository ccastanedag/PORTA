import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';

const styles = {
  paragraphContainer : {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    lineHeight: '1.6',
    margin: '0.35em 0'
  },
  '@media screen and (min-width: 768px)' : {
    paragraphContainer : {
      fontSize: '0.9em',
    }
  },
  '@media screen and (min-width: 1200px)' : {
    paragraphContainer : {
      fontSize: '1em',
    }
  }
}

const Paragraph = ({classes, paragraphText}) => {
  return (
    <div className={classes.paragraphContainer}>
      {paragraphText}
    </div>
  )
}

Paragraph.propTypes = {
  paragraphText : PropTypes.string.isRequired
}

export default withStyles(styles)(Paragraph)
