import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import ButtonFactory from '../shared/ButtonFactory'
import Particles from 'react-particles-js'
import { particlesSettings } from '../../utils/utils'
import MediaQuery from 'react-responsive'

const styles = {
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh'
  },
  messageContent: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: '6em',
    color: '#86A8E7',
    margin: '0.2em 0'
  },
  title: {
    fontFamily: "Montserrat script=all rev=1",
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#86A8E7',
    fontSize: '2em'
  },
  subTitle: {
    fontFamily: "Montserrat script=all rev=1",
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#86A8E7',
    fontSize: '1em',
    textAlign: 'center',
    margin: '0.25em 0'
  },
  message: {
    width: '90%',
    fontFamily: "Lato script=all rev=2",
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#757892',
    lineHeight: '1.6',
    fontSize: '0.8em',
    textAlign: 'center',
    margin: '0.5em 0'
  },
  '@media screen and (min-width:768px)': {
    icon: { fontSize: '7em' },
    title: { fontSize: '3em' },
    subTitle: { fontSize: '1.5em' },
    message: { fontSize: '1em' }
  }
}

const Message = ({ classes, fontAwesomeIcon, title, subTitle, message }) => {
  return (
    <div className={classes.messageContainer}>
      <MediaQuery maxWidth={1200} className={classes.particles}>
        <Particles
          height='100%'
          params={particlesSettings}
          style={{ position: 'absolute', top: '0', left: '0', background: '#F4F7FD', 'zIndex': '-2' }}
        />
      </MediaQuery>
      <div className={classes.messageContent}>
        <div className={`${fontAwesomeIcon} ${classes.icon}`}></div>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
        <div className={classes.message}>{message}</div>
        <MediaQuery maxWidth={1200}>
          <ButtonFactory
            buttonText='BACK TO HOME'
            fontAwesomeIcon='fas fa-home'
            redirectTo=''
            linkTo='/home'
            gradient={{ start: '#8989CB', end: '#86A8E7' }} />
        </MediaQuery>
      </div>
    </div>
  )
}

Message.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(Message)
