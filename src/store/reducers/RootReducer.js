import SideHeaderReducer from './porta/side-header/SideHeaderReducer'
import WorkExperienceReducer from './porta/work-experience/WorkExperienceReducer'
import HomeReducer from './porta/home/HomeReducer'
import PortafolioListReducer from './porta/portafolio/PortafolioListReducer'
import ProjectDetailReducer from './porta/portafolio-details/ProjectDetailReducer'
import EducationReducer from './porta/education/EducationReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  sideHeader: SideHeaderReducer,
  home: HomeReducer,
  portafolioList: PortafolioListReducer,
  projectDetail: ProjectDetailReducer,
  workExperience: WorkExperienceReducer,
  education: EducationReducer
});

export default rootReducer