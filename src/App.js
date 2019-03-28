import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideHeader from './components/porta/side-header/SideHeader'
import ContactMe from './components/porta/contact-me/ContactMe'
import Portafolio from './components/porta/portafolio/Portafolio'
import WorkExperience from './components/porta/work-experience/WorkExperience'
import Education from './components/porta/education/Education'
import PortafolioDetail from './components/porta/portafolio-details/PortafolioDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SideHeader/>
        <Switch>
          <Route path='/contact-me' component={ContactMe}/>
          <Route path='/portafolio/:categoryId/:projectId' component={PortafolioDetail}/>
          <Route exact path='/portafolio' component={Portafolio}/>
          <Route path='/work-experience' component={WorkExperience}/>
          <Route path='/education' component={Education}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
