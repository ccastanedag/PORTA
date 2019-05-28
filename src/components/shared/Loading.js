import React, { Component } from 'react'
import withStyles from 'react-jss'
import posed from 'react-pose'
import PropTypes from 'prop-types'

const Box1 = posed.div({
  one: { x: ({distance}) => -distance, y: ({distance}) => -distance },
  two: { x: ({distance}) => distance, y: ({distance}) => -distance },
  three: { x: ({distance}) => distance, y: ({distance}) => distance },
  four: { x: ({distance}) => -distance, y: ({distance}) => distance }
})

const Box2 = posed.div({
  four: { x: ({distance}) => -distance, y: ({distance}) => -distance },
  one: { x: ({distance}) => distance, y: ({distance}) => -distance },
  two: { x: ({distance}) => distance, y: ({distance}) => distance },
  three: { x: ({distance}) => -distance, y: ({distance}) => distance }
})

const Box3 = posed.div({
  three: { x: ({distance}) => -distance, y: ({distance}) => -distance },
  four: { x: ({distance}) => distance, y: ({distance}) => -distance },
  one: { x: ({distance}) => distance, y: ({distance}) => distance },
  two: { x: ({distance}) => -distance, y: ({distance}) => distance }
})

const styles = {
  loadingContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: props => props.isColumn ? 'column' : 'row',
    height: props => props.fullHeight ? '100vh' : '0'
  },
  box1: {
    background: '#8989CB',
    width: props => props.dimension,
    height: props => props.dimension,
    borderRadius: '2px'
  },
  box2: {
    extend: 'box1',
    width: props => props.dimension,
    height: props => props.dimension,
    background: '#86A8E7'
  },
  box3: {
    extend: 'box1',
    width: props => props.dimension,
    height: props => props.dimension,
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
    const { classes, loadingText, distance } = this.props
    return (
      <div className={classes.loadingContainer}>
        <div>
          <Box1 className={classes.box1} pose={this.state.step} distance={distance}/>
          <Box2 className={classes.box2} pose={this.state.step} distance={distance}/>
          <Box3 className={classes.box3} pose={this.state.step} distance={distance}/>
        </div>
        <div className={classes.loadingText}>{loadingText}</div>
      </div>
    )
  }
}

Loading.propTypes = {
  loadingText: PropTypes.string,
  isColumn: PropTypes.bool, // isColumn = True --- loadingText below the squares
  fullHeight: PropTypes.bool, // fullHeight = true --- the height is 100vh
  distance: PropTypes.number,
  dimension: PropTypes.string
}

Loading.defaultProps = {
  loadingText: "Loading...",
  isColumn: true,
  fullHeight: true,
  distance: 15,
  dimension: '20px'
}

export default withStyles(styles)(Loading)
