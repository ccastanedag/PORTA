import db from '../../../../config/fbConfig'
import {
  FETCHING_PORTAFOLIOLIST,
  FETCHING_PORTAFOLIOLIST_ERROR,
  FETCHING_PORTAFOLIOLIST_SUCCESS
} from '../../../reducers/porta/portafolio/PortafolioListReducer'

const loadingPortafolioList = () => {
  return {
    type: FETCHING_PORTAFOLIOLIST
  }
}

const loadingPortafolioListError = (error) => {
  return {
    type: FETCHING_PORTAFOLIOLIST_ERROR,
    error
  }
}

const loadingPortafolioListSuccess = (data) => {
  return {
    type: FETCHING_PORTAFOLIOLIST_SUCCESS,
    data
  }
}

export default function handleLoadingPortafolioList(categoryId) {
  const projectsRef = db.collection('projects')
  const technologiesRef = db.collection('technologies')

  return (dispatch, getState) => {
    dispatch(loadingPortafolioList())
    Promise.all([
      projectsRef.where('category', '==', categoryId).orderBy('order','asc').get(),
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

        dispatch(loadingPortafolioListSuccess(result))
      })
      .catch((error) => {
        dispatch(loadingPortafolioListError(error))
      })

  }
}
