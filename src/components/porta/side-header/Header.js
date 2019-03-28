import React from 'react'
import propTypes from 'prop-types'

const Header = ({ header }) => {
  const { ownerName, profession } = header
  return (
    <div>
      <h1>{ownerName}</h1>
      <h2>{profession}</h2>
    </div>
  )
}

Header.propTypes = {
  header : propTypes.object.isRequired
}

export default Header
