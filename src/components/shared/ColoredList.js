import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  coloredListContainer: {
    margin: '0.35em 0'
  },
  list: {
    paddingLeft:'0',
    margin: '0',
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center'
  },
  item: {
    flexBasis:'auto',
    fontFamily: 'Lato script=all rev=1',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '0.7em',
    color: '#757892',
    padding:'0.3em 0.5em',
    margin: '0.2em',
    borderRadius:'3px',
    background:'#EAEDF5',
    textAlign: 'center'
  },
  '@media screen and (min-width:768px)': {
    item: {
      fontSize: '0.8em',
      padding: '0.45em 0.95em',
      borderRadius:'5px'
    }
  },
  '@media screen and (min-width:1200px)': {
    item: {
      fontSize: '0.8em',
      padding: '0.35em 0.65em',
      borderRadius:'3px'
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
