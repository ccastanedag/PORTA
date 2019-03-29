import SideHeaderReducer from './porta/side-header/SideHeaderReducer'
import WorkExperienceReducer from './porta/work-experience/WorkExperienceReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  sideHeader: SideHeaderReducer,
  workExperience: WorkExperienceReducer
});

export default rootReducer