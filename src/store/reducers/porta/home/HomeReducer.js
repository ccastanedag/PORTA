export const FETCHING_HOME = 'FETCHING_HOME'
export const FETCHING_HOME_ERROR = 'FETCHING_HOME_ERROR'
export const FETCHING_HOME_SUCCESS = 'FETCHING_HOME_SUCCESS'

const initialState = {
  data: undefined,
  isFetching: false,
  error: ''
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_HOME:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_HOME_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_HOME_SUCCESS:
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

export default HomeReducer