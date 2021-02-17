import actiontypes from '../actiontypes'

let initState = {
  users: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actiontypes().admin.getUsers:
      return state = {
        users: action.payload
      }
    case actiontypes().admin.deleteUser:
      return state
    default:
      return state
  }
}