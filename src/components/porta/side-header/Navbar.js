import React, { Component } from 'react'
import Avatar from './Avatar'
import LocationInfo from './LocationInfo'
import ButtonFactory from '../../shared/ButtonFactory'
import withStyles from 'react-jss'
import Particles from 'react-particles-js'
import { particlesSettings, mapButtonsText } from '../../../utils/utils'
import NavButton from '../side-header/NavButton'
import CurrentlyDoing from '../side-header/CurrentlyDoing'


const styles = {
  '@media screen and (min-width:1200px)': {
    sideHeaderContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: '2',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `
                        'sidebar'`,
      paddingBottom: '2em'
    },
    mobileHeader: {
      gridArea: 'mobileHeader'
    },
    content: {
      gridArea: 'sidebar',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(2, fit-content(1em)) 1fr 1fr',
      gridTemplateAreas: `
                        'avatar'
                        'locationInfo'
                        'mobileButtons'
                        'navButtons'`,
      alignContent: 'start'
    },
    avatar: {
      gridArea: 'avatar',
      padding: '1.5em 0'
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
      alignSelf: 'center'
    },
    navButtons: {
      gridArea: 'navButtons',
      paddingTop: '0.5em',
      alignSelf: 'end'
    },
    currentlyDoing: {
      display: 'none'
    }
  },
  '@media screen and (min-width: 1600px)': {
    content: {
      gridArea: 'sidebar',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(4, fit-content(1em)) 150px',
      gridTemplateAreas: `
                        'avatar'
                        'locationInfo'
                        'mobileButtons'
                        'navButtons'
                        'currentlyDoing'`,
      alignContent: 'center'
    },
    currentlyDoing: {
      gridArea: 'currentlyDoing',
      alignSelf: 'stretch',
      background: '#F4F7FD',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mobileButtons: {
      paddingBottom: '1.5em'
    }
  },
  '@media screen and (min-height: 641px)': {
    sideHeaderContainer: {
      height: '100vh',
      paddingBottom: '0'
    }
  }
}

export class Navbar extends Component {

  render() {

    const { classes, sideHeader, buttons } = this.props
    const { header, sidebar } = sideHeader
    console.log(sideHeader)
    return (
      <div className={classes.sideHeaderContainer} >
        <div className={classes.content}>
          <div className={classes.avatar}>
            <Avatar avatar={sidebar.avatar} />
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
          <div className={classes.navButtons}>
            <NavButton fontAwesomeIcon='fas fa-folder-open' text='portafolio' top={false} bottom={true} />
            <NavButton fontAwesomeIcon='fas fa-briefcase' text='work experience' top={true} bottom={true} />
            <NavButton fontAwesomeIcon='fas fa-graduation-cap' text='education' top={true} bottom={false} />
          </div>
          <div className={classes.currentlyDoing}>
            <CurrentlyDoing currentActivity={sidebar.currentActivity}></CurrentlyDoing>
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
