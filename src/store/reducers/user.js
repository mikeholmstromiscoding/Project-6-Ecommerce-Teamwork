import actiontypes from '../actiontypes'

let initState = {
  user: {},
  token: null,
  loggedIn: false,
  loginStatusCode: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.registerUser:
      return state
    case actiontypes().user.loginUser:
      localStorage.setItem('token', action.payload.token)
      state = {
        user: state.user,
        token: action.payload.token,
        loggedIn: true
      }
      return state
    case actiontypes().user.logoutUser:
      localStorage.removeItem('token')
      state = {
        user: {},
        token: null,
        loggedIn: false
      }
      return state
    case actiontypes().user.loadUser:
      let g_token = localStorage.getItem('token')
      state = {
        user: action.payload,
        token: g_token,
        loggedIn: g_token !== null
      }
      return state
    case actiontypes().user.updateUserShippingDetails:
      return state
    case actiontypes().user.loginStatusCode:
      state = {
        user: state.user,
        token: state.token,
        loggedIn: false,
        loginStatusCode: action.payload
      }
      return state
    case actiontypes().user.resetStatusCode:
      state = {
        user: state.user,
        token: state.token,
        loggedIn: state.loggedIn,
        loginStatusCode: null
      }
      return state
    default:
      return state
  }
}