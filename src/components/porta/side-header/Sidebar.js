import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export class Sidebar extends Component {
  render() {
    const { sidebar } = this.props
    const {locationInfo} = sidebar
    return (
      <div>
        <div>
          <h3>Current Location</h3>
          <h4>{locationInfo.currentLocation}</h4>
        </div>
        <div>
          <h3>Timezone</h3>
          <h4>{locationInfo.timeZone}</h4>
        </div>
        <div>
          <p>Other buttons goes here</p>
          <Link to='/contact-me'>
            <button>Contact Me</button>
          </Link>
        </div>
        <div>
          <Link to='/portafolio'>
            <button>Portafolio</button>
          </Link>
          <Link to='/work-experience'>
            <button>Work Experience</button>
          </Link>
          <Link to='/education'>
            <button>Education</button>
          </Link>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  sidebar : PropTypes.object.isRequired
}

export default Sidebar
