import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import handleLoadingSidebar from '../../../store/actions/porta/side-header/SideHeaderActions'

export class SideHeader extends Component {
  componentDidMount() {
    this.props.dispatch(handleLoadingSidebar())
  }
  render() {
    const { isFetching, error, header, sidebar } = this.props
    if (error !== null && error !== '') {
      return (
        <div>
          <p>THERE WAS AN ERROR: {error}</p>
        </div>
      )
    }

    if (header !== undefined && sidebar !== undefined) {
      return (
        <div>
          <Header header={header} />
          <Sidebar sidebar={sidebar} />
        </div>
      )
    }

    return (
      <div>
        {isFetching && <p>LOADING...</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { sideHeader } = state
  const { isFetching, error, data } = sideHeader
  const { header, sidebar } = data
  return {
    isFetching,
    error,
    header,
    sidebar
  }
}

export default connect(mapStateToProps)(SideHeader)
