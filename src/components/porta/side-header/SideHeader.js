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
    if(this.props !== prevProps){
      this.setState({
        isFetching: this.props.isFetching,
        error: this.props.error,
        sideHeaderData: this.props.sideHeaderData
      })
    }
  }

  render() {
    const { isFetching, sideHeaderData } = this.state
    return (
      <div>
        {isFetching && <p>LOADING...</p>}
        {sideHeaderData && <Header header={sideHeaderData.SideHeader.header} />}
        {sideHeaderData && <Sidebar sidebar={sideHeaderData.SideHeader.sidebar} />}
      </div>
    )
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
