import React, { Component } from 'react'
import CategoriesBar from './CategoriesBar'
import MobileHeader from '../side-header/MobileHeader'
import MediaQuery from 'react-responsive'
import PageTitle from '../../shared/PageTitle'
import PortafolioList from './PortafolioList'
import { searchSlugIntoCategories } from '../../../utils/categoriesUtils'
import Footer from '../../shared/Footer'
import withStyles from 'react-jss'
import Message from '../../shared/Message'

const styles = {
  portafolioListContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1em 0'
  },
  '@media screen and (min-width: 1200px)': {
    portafolioContainer: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    desktopContent: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '2em'
    },
    portafolioDesktopContainer: {
      width: '80%',
      flex: '1'
    }
  }
}
export class Portafolio extends Component {
  render() {
    const { match, classes } = this.props
    if (searchSlugIntoCategories(match.params.categoryId)) {
      return (
        <div className={classes.portafolioContainer}>
          <MediaQuery maxWidth={1199} className={classes.mobileContent}>
            <MobileHeader ownerName='Carlos Castañeda' />
            <PageTitle fontAwesomeIcon='fas fa-folder-open' pageTitle='Portfolio' />
            <CategoriesBar match={match} />
            <div className={classes.portafolioListContainer}>
              <PortafolioList match={match} />
            </div>
            <Footer />
          </MediaQuery>
          <MediaQuery minWidth={1200} className={classes.desktopContent}>
            <div className={classes.portafolioDesktopContainer}>
              <PageTitle fontAwesomeIcon='fas fa-folder-open' pageTitle='Portfolio' />
              <CategoriesBar match={match} />
              <div className={classes.portafolioListContainer}>
                <PortafolioList match={match} />
              </div>
            </div>
            <Footer />
          </MediaQuery>
        </div>
      )
    } else {
      return (
        <Message
            fontAwesomeIcon='fas fa-search'
            title='Error 404'
            subTitle='PAGE NOT FOUND'
            message="The page you are looking for might have been removed, had its name changed or is temporarily unavailable"
          />
      )
    }
  }
}

export default withStyles(styles)(Portafolio)
