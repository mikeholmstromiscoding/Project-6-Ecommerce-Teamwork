import actiontypes from '../actiontypes'
import axios from 'axios'

export const loadAllUsers = (role) => {
  return function (dispatch) {
    return axios.get('http://secret-sea-49739.herokuapp.com/api/users', { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().admin.getUsers,
        payload: res.data
      })
    })
  }
}
export const deleteUser = (id) => {
  return function (dispatch) {
    return axios.delete('http://secret-sea-49739.herokuapp.com/api/users/' + id, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().admin.deleteUser,
        payload: res.data
      })
      dispatch(loadAllUsers())
    })
  }
}