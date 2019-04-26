export const FETCHING_PROJECTDETAIL = 'FETCHING_PROJECTDETAIL'
export const FETCHING_PROJECTDETAIL_ERROR = 'FETCHING_PROJECTDETAIL_ERROR'
export const FETCHING_PROJECTDETAIL_SUCCESS = 'FETCHING_PROJECTDETAIL_SUCCESS'

const initialState = {
  isFetching: false,
  error: '',
  data: undefined
}

export default function ProjectDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PROJECTDETAIL:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_PROJECTDETAIL_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_PROJECTDETAIL_SUCCESS:
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