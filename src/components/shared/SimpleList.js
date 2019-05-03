import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  simpleListContainer: {
    margin: '0.35em 0'
  },
  list: {
    paddingLeft:'1.8em',
    margin: '0'
  },
  item: {
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.8em',
    color: '#757892',
    lineHeight: '1.6',
    padding: '0.2em 0'
  },
  '@media screen and (min-width:768px)': {
    item: {
      fontSize: '0.9em'
    }
  },
  '@media screen and (min-width:1200px)': {
    item: {
      fontSize: '1em'
    }
  }
}

const SimpleList = ({ classes, items }) => {
  return (
    <div className={classes.simpleListContainer}>
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

SimpleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default withStyles(styles)(SimpleList)
