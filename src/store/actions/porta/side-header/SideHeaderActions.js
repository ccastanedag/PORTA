import db from '../../../../config/fbConfig'
import {
  FETCHING_SIDEBAR,
  FETCHING_SIDEBAR_ERROR,
  FETCHING_SIDEBAR_SUCCESS
} from '../../../reducers/porta/side-header/SideHeaderReducer'

function loadingSidebar(){
  return {
    type: FETCHING_SIDEBAR
  }
}

function loadingSidebarError(error){
  return {
    type: FETCHING_SIDEBAR_ERROR,
    error
  }
}

function loadingSidebarSuccess(data){
  return {
    type: FETCHING_SIDEBAR_SUCCESS,
    data
  }
}

export default function handleLoadingSidebar(){
  return (dispatch, getState) => {
    dispatch(loadingSidebar())
    return db.collection('sideheader').get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        dispatch(loadingSidebarSuccess(doc.data()))
      })
    })
    .catch((error)=>dispatch(loadingSidebarError(error)))
  }
}