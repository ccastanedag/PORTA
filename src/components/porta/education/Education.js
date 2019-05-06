import React, { Component } from 'react'
import MobileHeader from '../side-header/MobileHeader'
import MediaQuery from 'react-responsive'
import PageTitle from '../../shared/PageTitle'
import  withStyles  from 'react-jss'

const styles = {

}

export class Education extends Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={1199}>
          <MobileHeader ownerName='Carlos Castañeda' />
        </MediaQuery>
        <PageTitle fontAwesomeIcon='fas fa-graduation-cap' pageTitle='Education' />
      </div>
    )
  }
}

export default withStyles(styles)(Education)

