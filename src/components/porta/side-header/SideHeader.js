import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import handleLoadingSidebar from '../../../store/actions/porta/side-header/SideHeaderActions'


export class SideHeader extends Component {
  state = {
    isFetching: false,
    error: '',
    sideHeaderData: undefined
  }

  componentDidMount() {
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

  render() {
    const { isFetching, sideHeaderData, error } = this.state

    if (isFetching === true) {
      return (
        <div>
          LOADING...
        </div>
      )
    }

    if (error) {
      return (
        <div>
          THERE WAS AN ERROR !!!
          {console.log('ERROR: ',error)}
        </div>
      )
    }

    // Data loaded succesfully
    if (sideHeaderData !== undefined) {
      return (
        <div>
          <Header headerData={sideHeaderData.SideHeader.header} buttonsData={sideHeaderData.Buttons}/>
          <Sidebar sidebar={sideHeaderData.SideHeader.sidebar} buttonsData={sideHeaderData.Buttons}/>
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

export default connect(mapStateToProps)(SideHeader)
