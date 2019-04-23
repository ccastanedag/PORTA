import React, { Component } from 'react'
import MobileHeader from '../side-header/MobileHeader'
import Avatar from '../side-header/Avatar'
import Profession from '../side-header/Profession'
import LocationInfo from '../side-header/LocationInfo'
import ButtonFactory from '../../shared/ButtonFactory'
import withStyles from 'react-jss'
import Particles from 'react-particles-js'
import { particlesSettings, renderButtons } from '../../../utils/utils'
import MediaQuery from 'react-responsive'
import handleLoadingHome from '../../../store/actions/porta/home/HomeActions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Separator from '../../shared/Separator'
import PropTypes from 'prop-types'
const styles = {
  homeContainer: {
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
    padding: '0.75em 0',
    textAlign: 'center'
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
  mobileDesktopHomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeMessage: {
    fontFamily: 'Lato script=all rev=1',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: '1.35em',
    color: '#757892',
    textAlign: 'center'
  },
  welcomeTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '1.65em',
    color: '#757892',
    textAlign: 'center',
  },
  mySkillsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  mySkills: {
    extend: 'welcomeMessage',
    fontSize: '1.15em',
    textAlign: 'left',
    marginBottom: '0.5em'
  },
  skill: {
    marginRight: '0.5em'
  },
  '@media screen and (min-height: 641px)': {
    homeContainer: {
      height: '100vh',
      paddingBottom: '0'
    }
  },
  '@media screen and (min-height: 641px) and (orientation: landscape)': {
    homeContainer: {
      height: '100vw',
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
  },
  '@media screen and (min-width: 1600px)': {
    welcomeTitle: {
      fontSize: '1.8em'
    },
    welcomeMessage: {
      fontSize: '1.65em'
    },
    mySkills: {
      fontSize: '1.25em'
    }
  }
}

export class Home extends Component {
  // This state is in charge of @Home loading
  state = {
    isFetching: false,
    error: '',
    homeData: undefined
  }

  componentDidMount() {
    this.props.dispatch(handleLoadingHome())
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        homeData: this.props.homeData
      })
    }
  }

  render() {
    // Home Mobile-Tablet Logic
    const { classes, sideHeader } = this.props
    const { header, sidebar } = sideHeader

    //Home Desktop Logic
    const { isFetching, homeData, error } = this.state

    if (isFetching)
      return (<div>LOADING...</div>)

    if (error)
      return (
        <div>
          THERE WAS AN ERROR !!!
        <p>{error}</p>
          {console.log('ERROR: ', error)}
        </div>
      )

    if (homeData !== undefined) {
      const { welcomeTitle, welcomeMessage, mySkills } = homeData
      return (
        <div className={classes.mobileDesktopHomeContainer}>
          <MediaQuery minWidth={1200}>
            <div className={classes.welcomeContainer}>
              <div className={classes.welcomeTitle}>{welcomeTitle}</div>
              <Separator width='90%' />
              <div className={classes.welcomeMessage}>{welcomeMessage}</div>
              <Separator width='47%' />
              <div className={classes.mySkillsContainer}>
                <div className={classes.mySkills}>My skills</div>
                <div className={classes.skillsContainer}>
                  {
                    mySkills.map((skill) => {
                      return (
                        <img key={skill} src={skill} height='48' className={classes.skill} alt='Skill'></img>
                      )
                    })
                  }
                  <span className={classes.mySkills}>more...</span>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={1199}>
            <div className={classes.homeContainer} >
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
                    redirectTo=''
                    linkTo='/contact-me'
                    gradient={{ start: '#F83D83', end: '#E35D58' }} />
                  {renderButtons(sidebar.buttons)}
                  {renderButtons(header.buttons)}
                </div>
                <Particles
                  height='100%'
                  params={particlesSettings}
                  style={{ position: 'absolute', top: '0', background: '#F4F7FD', 'zIndex': '-2' }}
                />
              </div>
            </div>
          </MediaQuery>
        </div>
      )
    }
    return null
  }
}

Home.propTypes = {
  sideHeader: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const { home } = state
  const { isFetching, error, data } = home
  return {
    isFetching,
    error,
    homeData: data
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Home)
