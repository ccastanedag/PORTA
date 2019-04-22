import React, { Component } from 'react'
import { renderButtons } from '../../../utils/utils'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em'
  },
  infoContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  ownerName: {
    fontFamily: 'Montserrat script=all rev=1',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '2.35em',
    color: '#757892'
  },
  profession: {
    extend: 'ownerName',
    fontWeight: '400',
    fontSize: '1.35em',
  },
  buttonsContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  '@media screen and (min-width: 1600px)': {
    ownerName: {
      fontSize: '3em'
    },
    profession: {
      fontSize: '2em'
    }
  }
}

export class Header extends Component {
  static propTypes = {
    header: PropTypes.shape({
      buttons: PropTypes.array.isRequired,
      ownerName: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired
    }).isRequired    
  }

  render() {
    const { header, classes } = this.props
    const { ownerName, profession, buttons } = header
    return (
      <div className={classes.headerContainer}>
        <div className={classes.infoContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.ownerName}>{ownerName}</div>
            <div className={classes.profession}>{profession}</div>
          </div>
          <div className={classes.buttonsContainer}>
            {renderButtons(buttons)}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
