import React from 'react'
import PropTypes from 'prop-types'
import ButtonFactory from '../../shared/ButtonFactory'
import { getElementFromListByAttribute } from '../../../utils/utils'



const Header = ({ headerData, buttonsData }) => {
  const { ownerName, profession, buttons } = headerData
  return (
    <div>
      <h1>{ownerName}</h1>
      <h2>{profession}</h2>

      {buttons.map(buttonName => {
        const styleData = getElementFromListByAttribute(buttonsData, 'buttonText', buttonName)
        if (styleData !== null) {
          return <ButtonFactory styleData={styleData} key={buttonName} />
        }
      })}
    </div>
  )
}

Header.propTypes = {
  headerData: PropTypes.object.isRequired,
  buttonsData: PropTypes.array.isRequired
}

export default Header
