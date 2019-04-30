export const FETCHING_WORK_EXPERIENCE = 'FETCHING_WORK_EXPERIENCE'
export const FETCHING_WORK_EXPERIENCE_SUCCESS = 'FETCHING_WORK_EXPERIENCE_SUCCESS'
export const FETCHING_WORK_EXPERIENCE_ERROR = 'FETCHING_WORK_EXPERIENCE_ERROR'

const initialState = {
  isFetching: false,
  error: '',
  data: undefined
}

export default function WorkExperienceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_WORK_EXPERIENCE:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_WORK_EXPERIENCE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_WORK_EXPERIENCE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data
      }
    default:
      return state
  }
}