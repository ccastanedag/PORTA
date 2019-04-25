import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
const styles = {
  tagContainer: {
    borderRadius: '2px',
    background: '#EAEDF5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25em 0.3em',
    margin: '0.2em',
    flexBasis: 'auto'
  },
  tagLogo: {
    width: '12px'
  },
  tagText: {
    fontFamily: "Lato script=all rev=1",
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize:'0.7em',
    color: '#757892',
    paddingLeft: '0.25em'
  }
}
const Tag = ({ classes, tagLogo, tagText }) => {
  return (
    <div className={classes.tagContainer}>
      <img  className={classes.tagLogo} src={tagLogo} alt='' />
      <div className={classes.tagText}>{tagText}</div>
    </div>
  )
}

Tag.propTypes = {
  tagLogo: PropTypes.string.isRequired,
  tagText: PropTypes.string.isRequired
}

export default withStyles(styles)(Tag)
