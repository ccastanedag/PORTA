import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  coloredListContainer: {
    margin: '0.35em 0'
  },
  list: {
    paddingLeft:'0',
    margin: '0',
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    flexBasis:'auto',
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    lineHeight: '1.6',
    padding: '0.2em 0 0.2em 2em',
    '&:nth-child(2n+1)': {
      background: '#F4F7FD'
    }
  },
  '@media screen and (min-width:768px)': {
    item: {
      fontSize: '0.9em',
      padding: '0.2em 0 0.2em 1.85em'
    }
  },
  '@media screen and (min-width:1200px)': {
    item: {
      fontSize: '1em' 
    }
  }
}

const ColoredList = ({ classes, items }) => {
  return (
    <div className={classes.coloredListContainer}>
      <ul className={classes.list}>
        {
          items.map((item) => {
            return (
              <li key={item} className={classes.item}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

ColoredList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default withStyles(styles)(ColoredList)
