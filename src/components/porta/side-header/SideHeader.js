import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

export class SideHeader extends Component {
  render() {
    const { header , sidebar} = this.props
    return (
      <div>
        <Header header={header}/>
        <Sidebar sidebar={sidebar}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    header: state.sideHeader.header,
    sidebar: state.sideHeader.sidebar
  }
}

export default connect(mapStateToProps)(SideHeader)
