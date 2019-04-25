export const FETCHING_PORTAFOLIOLIST = 'FETCHING_PORTAFOLIOLIST'
export const FETCHING_PORTAFOLIOLIST_ERROR = 'FETCHING_PORTAFOLIOLIST_ERROR'
export const FETCHING_PORTAFOLIOLIST_SUCCESS = 'FETCHING_PORTAFOLIOLIST_SUCCESS'

const initialState = {
  data: undefined,
  isFetching: false,
  error: ''
}

const PortafolioListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PORTAFOLIOLIST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_PORTAFOLIOLIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCHING_PORTAFOLIOLIST_SUCCESS:
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

export default PortafolioListReducer