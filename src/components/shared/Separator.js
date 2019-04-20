import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  separator: props => ({
    minHeight: '1px',
    width: props.width,
    background: '#86A8E7',
    margin: '1.5em 0 1em 0',
    opacity: '0.5'
  })
}
const Separator = ({ classes }) => { 
return (
  <div className={classes.separator}> </div>
)
}

Separator.propTypes = {
  width: PropTypes.string.isRequired
}

export default withStyles(styles)(Separator)
