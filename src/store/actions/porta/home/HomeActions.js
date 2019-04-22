import db from '../../../../config/fbConfig'
import {
  FETCHING_HOME,
  FETCHING_HOME_ERROR,
  FETCHING_HOME_SUCCESS
} from '../../../reducers/porta/home/HomeReducer'

function loadingHome() {
  return {
    type: FETCHING_HOME
  }
}

function loadingHomeError(error) {
  return {
    type: FETCHING_HOME_ERROR,
    error
  }
}

function loadingHomeSuccess(data) {
  return {
    type: FETCHING_HOME_SUCCESS,
    data
  }
}

export default function handleLoadingHome() {
  return (dispatch, getState) => {
    dispatch(loadingHome())
    db.collection('components').doc('Home').get()
      .then((snapshot)=>{
        dispatch(loadingHomeSuccess(snapshot.data()))
      })
      .catch((error) => dispatch(loadingHomeError(error)))
  }
}