import React, { Component } from 'react'
import withStyles from 'react-jss'
import posed from 'react-pose'
let distance = 15
const dimension = '20px'
const Box1 = posed.div({
  one: { x: -distance, y: -distance },
  two: { x: distance, y: -distance },
  three: { x: distance, y: distance },
  four: { x: -distance, y: distance }
})

const Box2 = posed.div({
  four: { x: -distance, y: -distance },
  one: { x: distance, y: -distance },
  two: { x: distance, y: distance },
  three: { x: -distance, y: distance }
})

const Box3 = posed.div({
  three: { x: -distance, y: -distance },
  four: { x: distance, y: -distance },
  one: { x: distance, y: distance },
  two: { x: -distance, y: distance }
})

const styles = {
  loadingContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  box1: {
    background: '#8989CB',
    width: dimension,
    height: dimension,
    borderRadius: '2px'
  },
  box2: {
    extend: 'box1',
    background: '#86A8E7'
  },
  box3: {
    extend: 'box1',
    background: '#F83D83'
  },
  loadingText: {
    fontFamily: "Montserrat script=all rev=1",
    fontWeight: '200',
    fontStyle: 'normal',
    color: '#757892',
    fontSize: '1em',
    marginTop: '1.5em'
  }
}

var interval

export class Loading extends Component {
  state = {
    step: 'one'
  }

  componentDidMount() {
    interval = window.setInterval(function () {
      switch (this.state.step) {
        case 'one':
          return this.setState({
            step: 'two'
          })
        case 'two':
          return this.setState({
            step: 'three'
          })
        case 'three':
          return this.setState({
            step: 'four'
          })
        case 'four':
          return this.setState({
            step: 'one'
          })
        default:
          return this.setState({
            step: 'one'
          })
      }
    }.bind(this), 250)
  }

  componentWillUnmount() {
    window.clearInterval(interval)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.loadingContainer}>
        <Box1 className={classes.box1} pose={this.state.step} />
        <Box2 className={classes.box2} pose={this.state.step} />
        <Box3 className={classes.box3} pose={this.state.step} />

        <div className={classes.loadingText}>Loading...</div>
      </div>
    )
  }
}

export default withStyles(styles)(Loading)
