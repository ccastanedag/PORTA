import SideHeaderReducer from './porta/side-header/SideHeaderReducer'
import WorkExperienceReducer from './porta/work-experience/WorkExperienceReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  sideHeader: SideHeaderReducer,
  workExperience: WorkExperienceReducer,
  firestore: firestoreReducer
});

export default rootReducer