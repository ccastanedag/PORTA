export const FETCHING_EDUCATION = 'FETCHING_EDUCATION'
export const FETCHING_EDUCATION_ERROR = 'FETCHING_EDUCATION_ERROR'
export const FETCHING_EDUCATION_SUCCESS = 'FETCHING_EDUCATION_SUCCESS'


const initialState = {
  isFetching: false,
  error: '',
  data: undefined
}

export default function EducationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_EDUCATION:
      return {
        ...state,
        isFetching:true
      }
    case FETCHING_EDUCATION_ERROR:
      return {
        ...state,
        isFetching : false,
        error: action.error
      }
    case FETCHING_EDUCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data : action.data
      }
    default:
      return state
  }
}