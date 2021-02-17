import actiontypes from '../actiontypes'
import axios from 'axios'

export const loadOrders = (id) => {
  return function (dispatch) {
    return axios.get('http://secret-sea-49739.herokuapp.com/api/orders/' + id, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().order.loadOrders,
        payload: res.data.orders
      })
    })
  }
}
export const loadAllOrders = () => {
  return function (dispatch) {
    return axios.get('http://secret-sea-49739.herokuapp.com/api/orders', { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().order.loadAllOrders,
        payload: res.data.orders
      })
    })
  }
}
export const placeOrder = (userID, products, total) => {
  return function (dispatch) {
    return axios.post('http://secret-sea-49739.herokuapp.com/api/orders/add', {
      userId: userID,
      order: products,
      orderTotal: total
    }, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      console.log(res)
      dispatch({
        type: actiontypes().order.addOrder
      })
    })
  }
}
export const changeOrderStatus = (status, orderId) => {
  return function (dispatch) {
    return axios.put('http://secret-sea-49739.herokuapp.com/api/orders/' + orderId, {
      status: status
    }, { headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') } }).then(res => {
      dispatch({
        type: actiontypes().order.updateOrderStatus
      })
      dispatch(loadAllOrders())
    })
  }
}