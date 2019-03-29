export const FETCHING_SIDEBAR = 'FETCHING_SIDEBAR'
export const FETCHING_SIDEBAR_ERROR = 'FETCHING_SIDEBAR_ERROR'
export const FETCHING_SIDEBAR_SUCCESS = 'FETCHING_SIDEBAR_SUCCESS'

const initialState = {
  data: {},
  isFetching: false,
  error: ''
}

const SideHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SIDEBAR:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_SIDEBAR_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_SIDEBAR_SUCCESS:
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

export default SideHeaderReducer