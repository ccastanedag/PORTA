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

/*
  buttonsText: are the text of buttons user added to header or sidebar
  buttons: are all buttons create for the entire app (buttons collection - Firebase)
   */
export function mapButtonsText(buttonsText, buttons) {
  const result = buttonsText.map((item) => {
    const buttonDetail = getElementFromListByAttribute(buttons, 'buttonText', item)
    if (buttonDetail) {
      return (
        <ButtonFactory key={item}
          buttonText={buttonDetail.buttonText}
          fontAwesomeIcon={buttonDetail.fontAwesomeIcon}
          gradient={{ start: '#86A8E7', end: '#8989CB' }} />)
    }
    return null
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
