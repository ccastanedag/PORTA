import db from '../.././../../config/fbConfig'
import {
  FETCHING_PROJECTDETAIL,
  FETCHING_PROJECTDETAIL_ERROR,
  FETCHING_PROJECTDETAIL_SUCCESS
} from '../../../reducers/porta/portafolio-details/ProjectDetailReducer'

const loadingProjectDetail = () => {
  return {
    type: FETCHING_PROJECTDETAIL
  }
}
const loadingProjectDetailError = (error) => {
  return {
    type: FETCHING_PROJECTDETAIL_ERROR,
    error
  }
}
const loadingProjectDetailSuccess = (data) => {
  return {
    type: FETCHING_PROJECTDETAIL_SUCCESS,
    data
  }
}

export default function handleLoadingProjectDetail(projectId) {
  const projectsRef = db.collection('projects')
  const technologiesRef = db.collection('technologies')
  return (dispatch, getState) => {
    dispatch(loadingProjectDetail)
    Promise.all([
      projectsRef.where('projectName', '==', projectId).get(),
      technologiesRef.get()
    ])
      .then(([projectsSnapshot, technologiesSnapshot]) => {

        let projects = projectsSnapshot.docs.map((project) => {
          return project.data()
        })
        let technologies = technologiesSnapshot.docs.map((technology) => {
          return technology.data()
        })

        const result = {
          projects,
          technologies
        }

        dispatch(loadingProjectDetailSuccess(result))

      })
      .catch((error) => loadingProjectDetailError(error))
  }
}
