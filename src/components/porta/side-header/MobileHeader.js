import React, { Component } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import MobileMenu from './MobileMenu'
import posed from 'react-pose'

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
    width:'1em'
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
  '@media screen and (min-width: 768px)' : {
    ownerNameText : {
      fontSize: '1.75em',
      paddingTop: '0.4em',
      paddingBottom: '0.4em'
    },
    hamburguer: {
      fontSize: '1.75em'
    },
    mobileMenuContainer : {
      top: '3.25em',
      width: '35%'
    }
  }
}

export class MobileHeader extends Component {
  state = {
    isMenuVisible: false
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

  }

  render() {
    const { classes, ownerName } = this.props
    let iconClass =  this.state.isMenuVisible ? 'fas fa-times' : 'fas fa-bars'
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

export default withStyles(styles)(MobileHeader)
