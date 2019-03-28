const initialState = {
  header: {
    ownerName: 'Enrique Gutiérrez',
    profession: 'Software Engineer - Game Developer'
  },
  sidebar: {
    locationInfo: {
      currentLocation: 'Callao, Peru',
      timeZone: 'UTC -4:00'
    }
  }
}

const SideHeaderReducer = (state = initialState, action) => {
  return state
}

export default SideHeaderReducer