import React, { Component } from 'react'
import CategoriesBar from './CategoriesBar'
import MobileHeader from '../side-header/MobileHeader'
import MediaQuery from 'react-responsive'
import PageTitle from '../../shared/PageTitle'
import PortafolioList from './PortafolioList'
import { searchSlugIntoCategories } from '../../../utils/categoriesUtils'

export class Portafolio extends Component {
  render() {
    const { match } = this.props
    if (searchSlugIntoCategories(match.params.categoryId)) {
      return (
        <div>
          <MediaQuery maxWidth={1199}>
            <MobileHeader ownerName='Carlos Castañeda' />
          </MediaQuery>
          <PageTitle fontAwesomeIcon='fas fa-folder-open' pageTitle='Portafolio' />
          <CategoriesBar match={match} />
          <div style={{display:'flex', justifyContent:'center'}}>
            <PortafolioList match={match} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <MediaQuery maxWidth={1199}>
            <MobileHeader ownerName='Carlos Castañeda' />
          </MediaQuery>
          <div>PAGE NOT FOUND !!!</div>
        </div>
      )
    }
  }
}

export default Portafolio
