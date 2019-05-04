import React, { Component } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import MobileMenu from './MobileMenu'
import posed from 'react-pose'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

const AnimatedMenuContainer = posed.div({
  visible: {
    left: -10,
    transition: {
      duration: 300,
      ease: 'backOut'
    }
  },
  hidden: {
    left: '-100%',
    transition: {
      duration: 300,
      ease: 'backIn'
    }
  }
})

const Shade = posed.div();

const styles = {
  header: {
    background: 'linear-gradient(to right, #86A8E7 0%, #8989CB 100%)',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fallbacks: {
      background: '#9599e2'
    },
    position: 'relative',
    zIndex: '6'
  },
  hamburguer: {
    color: 'white',
    fontSize: '1.5em',
    padding: '0.35em',
    paddingLeft: '0.5em',
    width: '1em'
  },
  ownerNameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1'
  },
  ownerNameText: {
    fontFamily: 'Montserrat',
    fontSize: '1.25em',
    textTransform: 'uppercase',
    color: 'white',
    marginLeft: '-2em'
  },
  mobileMenuContainer: {
    position: 'absolute',
    top: '2.8em',
    left: '0',
    zIndex: '4',
    width: '60%'
  },
  shade: {
    position: 'absolute',
    background: 'rgba(117,120,146,0.6)',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '3'
  },
  startHere: {
    position: 'absolute',
    top: '3.25em',
    left: '0.5em',
    height: '52px'
  },
  startHereHidden: {
    display: 'none'
  },
  '@media screen and (min-width: 768px)': {
    ownerNameText: {
      fontSize: '1.75em',
      paddingTop: '0.4em',
      paddingBottom: '0.4em'
    },
    hamburguer: {
      fontSize: '1.75em'
    },
    mobileMenuContainer: {
      top: '3.25em',
      width: '35%'
    },
    startHere: {
      height: '75px'
    }
  }
}

export class MobileHeader extends Component {
  state = {
    isMenuVisible: false,
    startHereVisible: true
  }

  static propTypes = {
    ownerName: PropTypes.string.isRequired
  }

  toggleMenu = (value) => {
    if (!value) {
      this.setState((prevState) => ({
        isMenuVisible: !prevState.isMenuVisible
      }))
    } else {
      this.setState({
        isMenuVisible: value
      })
    }
    // Start Here validation
    if (this.state.startHereVisible) {
      this.setState({
        startHereVisible: false
      })
    }
  }

  componentDidMount(){
    document.body.style.overflow = 'unset'
    console.log('kjaskdjhask')
  }

  componentDidUpdate(){
    if (this.state.isMenuVisible){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  render() {
    const { classes, ownerName, location } = this.props
    let iconClass = this.state.isMenuVisible ? 'fas fa-times' : 'fas fa-bars'
    return (
      <div className={classes.mobileHeaderContainer}>
        <div className={classes.header}>
          <div className={classes.hamburguer} key={iconClass} onClick={() => this.toggleMenu()}>
            <i className={iconClass}></i>
          </div>
          <div className={classes.ownerNameContainer}>
            <div className={classes.ownerNameText}>
              {ownerName}
            </div>
          </div>
          {location.pathname === '/home' && <img
            src='https://i.imgur.com/c22dvpl.png'
            alt='start here'
            className={this.state.startHereVisible ?
              classes.startHere :
              classes.startHereHidden} />}
        </div>
        <AnimatedMenuContainer
          className={classes.mobileMenuContainer}
          pose={this.state.isMenuVisible ? 'visible' : 'hidden'}>
          <MobileMenu handleToggleMenu={this.toggleMenu} />
        </AnimatedMenuContainer>
        {this.state.isMenuVisible ? <Shade onClick={() => this.toggleMenu(false)} className={classes.shade} /> : null}
      </div>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(MobileHeader)
