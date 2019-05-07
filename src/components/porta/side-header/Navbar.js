import React, { Component } from 'react'
import Avatar from './Avatar'
import LocationInfo from './LocationInfo'
import ButtonFactory from '../../shared/ButtonFactory'
import withStyles from 'react-jss'
import Particles from 'react-particles-js'
import { particlesSettings, renderButtons } from '../../../utils/utils'
import NavButton from '../side-header/NavButton'
import CurrentlyDoing from '../side-header/CurrentlyDoing'
import PropTypes from 'prop-types'


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
      gridTemplateRows: 'repeat(2, fit-content(1em)) fit-content(1em) 1fr',
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
      gridTemplateRows: 'repeat(4, fit-content(1em)) 1fr',
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
  state = {
    /**
     * Possible values:
     * - HOME
     * - PORTAFOLIO
     * - WORK EXPERIENCE
     * - EDUCATION
     */
    selectedNavButton: 'HOME'
  }

  componentDidMount(){
    const pathName = this.props.location.pathname
    if(pathName.includes('home')){
      this.setState({
        selectedNavButton:'HOME'
      })
    } else if(pathName.includes('portafolio')){
      this.setState({
        selectedNavButton:'PORTAFOLIO'
      })
    } else  if(pathName.includes('work-experience')){
      this.setState({
        selectedNavButton:'WORK EXPERIENCE'
      })
    } else if(pathName.includes('education')){
      this.setState({
        selectedNavButton:'EDUCATION'
      })
    } else {
      this.setState({
        selectedNavButton:'HOME'
      })
    }
  }

  updateSelectedNavButton = (newValue) => {
     this.setState({
       selectedNavButton: newValue
     })
  }

  render() {
    const { classes, sideHeader } = this.props
    const { sidebar } = sideHeader

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
              redirectTo=''
              linkTo='/contact-me'
              gradient={{ start: '#F83D83', end: '#E35D58' }} />
            {renderButtons(sidebar.buttons)}
          </div>
          <div className={classes.navButtons}>
            <NavButton handleUpdate={this.updateSelectedNavButton} fontAwesomeIcon='fas fa-home' text='home' top={false} bottom={true} selected={this.state.selectedNavButton === 'HOME' ? true : false} />
            <NavButton handleUpdate={this.updateSelectedNavButton} fontAwesomeIcon='fas fa-folder-open' text='portafolio' top={true} bottom={true} selected={this.state.selectedNavButton === 'PORTAFOLIO' ? true : false} />
            <NavButton handleUpdate={this.updateSelectedNavButton} fontAwesomeIcon='fas fa-briefcase' text='work experience' top={true} bottom={true} selected={this.state.selectedNavButton === 'WORK EXPERIENCE' ? true : false} />
            <NavButton handleUpdate={this.updateSelectedNavButton} fontAwesomeIcon='fas fa-graduation-cap' text='education' top={true} bottom={false} selected={this.state.selectedNavButton === 'EDUCATION' ? true : false} />
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

Navbar.propTypes = {
  sideHeader: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
