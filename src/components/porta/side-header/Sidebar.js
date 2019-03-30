import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getElementFromListByAttribute } from '../../../utils/utils'
import ButtonFactory from '../../shared/ButtonFactory'

export class Sidebar extends Component {
  render() {
    const { sidebar, buttonsData } = this.props
    const { buttons } = sidebar
    return (
      <div>
        <div>
          <h3>Current Location</h3>
          <h4>{sidebar.currentLocation}</h4>
        </div>
        <div>
          <h3>Timezone</h3>
          <h4>{sidebar.timeZone}</h4>
        </div>
        <div>
          {buttons.map(buttonName => {
            const styleData = getElementFromListByAttribute(buttonsData, 'buttonText', buttonName)
            if (styleData !== null) {
              return <ButtonFactory styleData={styleData} key={buttonName} />
            }
          })}
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
  sidebar: PropTypes.object.isRequired,
  buttonsData: PropTypes.array.isRequired
}

export default Sidebar
