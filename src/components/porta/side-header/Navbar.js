import React, { Component } from 'react'
import MobileHeader from './MobileHeader'
import Avatar from './Avatar'
import Profession from './Profession'
import LocationInfo from './LocationInfo'
import ButtonFactory from '../../shared/ButtonFactory'
import withStyles from 'react-jss'
import Particles from 'react-particles-js'
import { particlesSettings, mapButtonsText } from '../../../utils/utils'


const styles = {
  sideHeaderContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: '2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '3.5em auto',
    gridTemplateAreas: `
                      'mobileHeader'
                      'content'`,
    paddingBottom: '2em'
  },
  mobileHeader: {
    gridArea: 'mobileHeader'
  },
  content: {
    gridArea: 'content',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(4, fit-content(1em))',
    gridTemplateAreas: `
                      'avatar'
                      'profession'
                      'locationInfo'
                      'mobileButtons'`,
    alignContent: 'center'
  },
  avatar: {
    gridArea: 'avatar',
    padding: '1.5em 0'
  },
  profession: {
    gridArea: 'profession',
    padding: '0.75em 0'
  },
  locationInfo: {
    gridArea: 'locationInfo',
    padding: '0 0 1.5em 0'
  },
  mobileButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    gridArea: 'mobileButtons',
    paddingBottom: '1.5em'
  },
  '@media screen and (min-height: 641px)': {
    sideHeaderContainer: {
      height: '100vh',
      paddingBottom: '0'
    }
  },
  '@media screen and (min-width: 768px)': {
    avatar: {
      padding: '2.5em 0'
    },
    profession: {
      padding: '1.25em 0'
    },
    locationInfo: {
      padding: '0 0 2.5em 0'
    }
  }
}

export class Navbar extends Component {

  render() {

    const { classes, sideHeader, buttons } = this.props
    const { header, sidebar } = sideHeader
    return (
      <div className={classes.sideHeaderContainer} >
        <div className={classes.mobileHeader}>
          <MobileHeader ownerName={header.ownerName} />
        </div>
        <div className={classes.content}>
          <div className={classes.avatar}>
            <Avatar avatar={sidebar.avatar} />
          </div>
          <div className={classes.profession}>
            <Profession profession={header.profession} />
          </div>
          <div className={classes.locationInfo}>
            <LocationInfo
              currentLocation={sidebar.currentLocation}
              timeZone={sidebar.timeZone}
            />
          </div>
          <div className={classes.mobileButtons}>
            <ButtonFactory
              buttonText='Contact Me'
              fontAwesomeIcon='fas fa-envelope'
              gradient={{ start: '#F83D83', end: '#E35D58' }} />
            {mapButtonsText(sidebar.buttons, buttons)}
          </div>
          <Particles
            height='100%'
            params={particlesSettings}
            style={{ position: 'absolute', top: '0', background: '#F4F7FD', 'zIndex': '-2' }}
          />
        </div>
      </div>
    )

  }
}


export default withStyles(styles)(Navbar)
