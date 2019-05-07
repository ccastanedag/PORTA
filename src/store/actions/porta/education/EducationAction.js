import db from '../../../../config/fbConfig'
import {
  FETCHING_EDUCATION,
  FETCHING_EDUCATION_ERROR,
  FETCHING_EDUCATION_SUCCESS
} from '../../../reducers/porta/education/EducationReducer'

const loadingEducation = () => {
  return {
    type: FETCHING_EDUCATION
  }
}

const loadingEducationError = (error) => {
  return {
    type: FETCHING_EDUCATION_ERROR,
    error
  }
}

const loadingEducationSuccess = (data) => {
  return {
    type:FETCHING_EDUCATION_SUCCESS,
    data
  }
}

export default function handleLoadingEducation() {
  return (dispatch, getState) => {
    const educationRef = db.collection('education')
    const techRef = db.collection('technologies')
    dispatch(loadingEducation())
    Promise.all([
      educationRef.orderBy('order','asc').get(),
      techRef.orderBy('order','asc').get()
    ])
    .then(([educationSnapshot, techSnapshot]) => {
      const educationArray = educationSnapshot.docs.map((edu)=>{
        return edu.data()
      })

      const techArray = techSnapshot.docs.map((tech)=>{
        return tech.data()
      })

      const result = {
        educationArray,
        techArray
      }

      dispatch(loadingEducationSuccess(result))
    })
    .catch(error => dispatch(loadingEducationError(error)))
  }
}

