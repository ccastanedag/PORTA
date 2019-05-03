import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss';
const styles = {
  tagContainer: {
    borderRadius: '3px',
    background: '#EAEDF5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25em 0.45em',
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
  },
  '@media screen and (min-width: 768px) and (max-width: 1199px)':{
    tagContainer:{
      padding: '0.4em 0.9em',
      margin: '0.25em',
      borderRadius: '5px'
    },
    tagLogo: {
      width: '14px'
    },
    tagText : {
      fontSize: '0.8em'
    }
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
