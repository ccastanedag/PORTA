import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ContactMe from './components/porta/contact-me/ContactMe'
import Portafolio from './components/porta/portafolio/Portafolio'
import WorkExperience from './components/porta/work-experience/WorkExperience'
import Education from './components/porta/education/Education'
import PortafolioDetail from './components/porta/portafolio-details/PortafolioDetail'
import withStyles from 'react-jss'
import handleLoadingSidebar from './store/actions/porta/side-header/SideHeaderActions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Navbar from './components/porta/side-header/Navbar'
import Home from './components/porta/home/Home'
import Header from './components/porta/side-header/Header'
import MediaQuery from 'react-responsive'

const styles = {
  '@media screen and (min-width: 1200px)': {
    appContainer: {
      display: 'flex'
    },
    sidebar: {
      flexBasis: '22%'
    },
    noSidebar: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      height: '15%',
      minHeight: '15%'
    },
    content: {
      flex: '1',
      display:'flex',
      justifyContent: 'center',
      aligntItems:'center'
    }
  },
  '@media screen and (min-width: 1600px)': {
    header : {
      height: '13%',
      minHeight: '13%'
    }
  }
}

class App extends Component {
  // This state is in charge of @Navbar and @Header loading
  state = {
    isFetching: false,
    error: '',
    sideHeaderData: undefined
  }

  componentDidMount() {
    // Load data from Firebase
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
    const { classes } = this.props

    if (isFetching)
      return (<div>LOADING...</div>)

    if (error)
      return (
        <div>
          THERE WAS AN ERROR !!!
          <p>{error}</p>
          {console.log('ERROR: ', error)}
        </div>
      )

    if (sideHeaderData !== undefined) {
      const { SideHeader, Buttons } = sideHeaderData
      const { header } = SideHeader
      return (
        <BrowserRouter>
          <div className={classes.appContainer}>
            <div className={classes.sidebar}>
              <MediaQuery minWidth={1200}>
                <Navbar sideHeader={SideHeader} buttons={Buttons} className={classes.sidebar} />
              </MediaQuery>
            </div>
            <div className={classes.noSidebar}>
              <div className={classes.header}>
                <MediaQuery minWidth={1200}>
                  <Header className={classes.header} header={header} Buttons={Buttons}/>
                </MediaQuery>
              </div>
              <div className={classes.content}>
                <Switch>
                  <Route exact path='/' render={() => <Redirect to="/home" />} />
                  <Route path='/home' render={() => <Home sideHeader={SideHeader} buttons={Buttons} />} />
                  <Route path='/contact-me' component={ContactMe} />
                  <Route path='/portafolio/:categoryId/:projectId' component={PortafolioDetail} />
                  <Route exact path='/portafolio' component={Portafolio} />
                  <Route path='/work-experience' component={WorkExperience} />
                  <Route path='/education' component={Education} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(App)
