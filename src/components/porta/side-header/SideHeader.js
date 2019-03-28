import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export class SideHeader extends Component {
  render() {
    const { header, sidebar } = this.props
    return (
      <div>
        {header !== null ? <Header header={header} /> : <p>Loading...</p>}
        {sidebar !== null ? <Sidebar sidebar={sidebar} /> : <p>Loading...</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 
  if (state.firestore.ordered.sideheader !== undefined) {
    return {
      header: {
        ownerName: state.firestore.ordered.sideheader[0].ownerName,
        profession: state.firestore.ordered.sideheader[0].profession
      },
      sidebar: {
        currentLocation: state.firestore.ordered.sideheader[0].currentLocation,
        timeZone: state.firestore.ordered.sideheader[0].timeZone
      }
    }
  } else {
    return {
      header: null,
      sidebar: null,
    }
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'sideheader' }
  ])
)(SideHeader)
