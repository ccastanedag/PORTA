import db from '../../../../config/fbConfig'
import {
  FETCHING_SIDEBAR,
  FETCHING_SIDEBAR_ERROR,
  FETCHING_SIDEBAR_SUCCESS
} from '../../../reducers/porta/side-header/SideHeaderReducer'

function loadingSidebar() {
  return {
    type: FETCHING_SIDEBAR
  }
}

function loadingSidebarError(error) {
  return {
    type: FETCHING_SIDEBAR_ERROR,
    error
  }
}

function loadingSidebarSuccess(data) {
  return {
    type: FETCHING_SIDEBAR_SUCCESS,
    data
  }
}

export default function handleLoadingSidebar() {
  return (dispatch, getState) => {
    dispatch(loadingSidebar())
    Promise.all([
      db.collection('components').doc('SideHeader').get(),
      db.collection('buttons').get()
    ])
      .then(([sideHeaderDoc, snapShotButtons]) => {
        const SideHeader = sideHeaderDoc.data()
        let Buttons = []
        snapShotButtons.forEach((button)=>{
          Buttons.push(button.data())
        })
        
        const result = {
          SideHeader,
          Buttons
        }
        dispatch(loadingSidebarSuccess(result))
      })
      .catch((error) => {
        dispatch(loadingSidebarError(error))
      })
  }
}