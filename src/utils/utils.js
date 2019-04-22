import React from 'react'
import ButtonFactory from '../components/shared/ButtonFactory'

export const particlesSettings = {
  particles: {
    line_linked: {
      color: '#86A8E7',
      opacity: '0.2',
      width: '2'
    },
    shape: {
      type: 'circle',
      size: '5'
    }
  }
}

/** This function receive:
 *  - Array of buttons (buttonText, fontAwesomeIcon, redirectTo)
 *  and return:
 *  - Each button rendered
 */ 
export function renderButtons(buttonsArray) {
  const result = buttonsArray.map((button) => {
    const { buttonText, fontAwesomeIcon, redirectTo } = button
    return (
      <ButtonFactory 
        key={redirectTo} 
        buttonText={buttonText}
        fontAwesomeIcon={fontAwesomeIcon}
        redirectTo={redirectTo}
        gradient={{ start: '#86A8E7', end: '#8989CB' }}/>
    )
  })
 return result 
}

/** This function search @id on @list using @attribute as comparison criteria */
export function getElementFromListByAttribute(list, attribute, id) {
  let result = null
  list.forEach((item) => {
    if (item[attribute] === id) {
      result = item
    }
  })

  return result
}
