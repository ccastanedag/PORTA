import db from '../../../../config/fbConfig'
import {
  FETCHING_WORK_EXPERIENCE,
  FETCHING_WORK_EXPERIENCE_ERROR,
  FETCHING_WORK_EXPERIENCE_SUCCESS
} from '../../../reducers/porta/work-experience/WorkExperienceReducer'

const loadingWorkExperience = () => {
  return {
    type: FETCHING_WORK_EXPERIENCE
  }
}

const loadingWorkExperienceError = (error) => {
  return {
    type: FETCHING_WORK_EXPERIENCE_ERROR,
    error
  }
}

const loadingWorkExperienceSuccess = (data) => {
  return {
    type: FETCHING_WORK_EXPERIENCE_SUCCESS,
    data
  }
}

export default function handleLoadingWorkExperience() {
  return (dispatch, getState) => {
    const jobsRef = db.collection('jobs')
    dispatch(loadingWorkExperience())
    jobsRef.get()
      .then((jobsSnapshot) => {
        let jobs = jobsSnapshot.docs.map((job) => {
          return job.data()
        })

        dispatch(loadingWorkExperienceSuccess(jobs))
      })
      .catch((error) => dispatch(loadingWorkExperienceError(error)))
  }
}