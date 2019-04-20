import SideHeaderReducer from './porta/side-header/SideHeaderReducer'
import WorkExperienceReducer from './porta/work-experience/WorkExperienceReducer'
import HomeReducer from './porta/home/HomeReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  sideHeader: SideHeaderReducer,
  home: HomeReducer,
  workExperience: WorkExperienceReducer
});

export default rootReducer