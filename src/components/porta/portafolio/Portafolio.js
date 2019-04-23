import React, { Component } from 'react'
import CategoriesBar from './CategoriesBar'
import MobileHeader from '../side-header/MobileHeader'
import MediaQuery from 'react-responsive'
import PageTitle from '../../shared/PageTitle'

const categories = ['Front End', 'Game Development', '3D Simulation', 'Other Projects']

export class Portafolio extends Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={1199}>
          <MobileHeader ownerName='Carlos Castañeda' />
        </MediaQuery>
        <PageTitle fontAwesomeIcon='fas fa-folder-open' pageTitle='Portafolio'/>
        <CategoriesBar categories={categories} />
      </div>
    )
  }
}

export default Portafolio
