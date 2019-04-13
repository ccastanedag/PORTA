import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <p>This is the header - only visible on Desktop</p>
      </div>
    )
  }
}

export default Header
