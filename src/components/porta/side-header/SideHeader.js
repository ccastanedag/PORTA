import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleLoadingSidebar from '../../../store/actions/porta/side-header/SideHeaderActions'
import MobileHeader from './MobileHeader'
import Avatar from './Avatar'
import Profession from './Profession'
import LocationInfo from './LocationInfo'
import ButtonFactory from '../../shared/ButtonFactory'
import { getElementFromListByAttribute } from '../../../utils/utils'
import withStyles from 'react-jss'
import { compose } from 'redux'
import Particles from 'react-particles-js'
import { particlesSettings } from '../../../utils/utils'

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
    gridTemplateColumns : '1fr',
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
   '@media screen and (min-width: 768px)':{
     avatar: {
      padding: '2.5em 0'
     },
     profession:{
       padding: '1.25em 0'
     },
     locationInfo:{
      padding: '0 0 2.5em 0'
     }
   }
}

export class SideHeader extends Component {
  state = {
    isFetching: false,
    error: '',
    sideHeaderData: undefined
  }

  componentDidMount() {
    // Load data from Firebase
    this.props.dispatch(handleLoadingSidebar())
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        sideHeaderData: this.props.sideHeaderData
      })
    }
  }

  /*
  buttonsText: are the text of buttons user added to header or sidebar
  buttons: are all buttons create for the entire app (buttons collection - Firebase)
   */
  mapButtonsText = (buttonsText, buttons) => {
    const result = buttonsText.map((item) => {
      const buttonDetail = getElementFromListByAttribute(buttons, 'buttonText', item)
      if (buttonDetail) {
        return (
          <ButtonFactory key={item}
            buttonText={buttonDetail.buttonText}
            fontAwesomeIcon={buttonDetail.fontAwesomeIcon}
            gradient={{ start: '#86A8E7', end: '#8989CB' }} />)
      }
      return null
    })
    return result
  }

  render() {
    const { isFetching, sideHeaderData, error } = this.state
    const { classes } = this.props
    if (isFetching === true) {
      return (
        <div>
          LOADING...
        </div>
      )
    }

    if (error) {
      return (
        <Message 
        fontAwesomeIcon='fas fa-exclamation-circle' 
        title='OOPS!' 
        subTitle="COULDN'T CONNECT TO THE DATABASE"
        message="The reason could be the database is temporarily unavailable, please try again later."/>
      )
    }

    // Data loaded succesfully
    if (sideHeaderData !== undefined) {
      const { SideHeader, Buttons } = sideHeaderData
      const { header, sidebar } = SideHeader
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
              {this.mapButtonsText(sidebar.buttons, Buttons)}
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
    return null
  }
}

const mapStateToProps = (state) => {
  const { sideHeader } = state
  const { isFetching, error, data } = sideHeader
  return {
    isFetching,
    error,
    sideHeaderData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(SideHeader)
