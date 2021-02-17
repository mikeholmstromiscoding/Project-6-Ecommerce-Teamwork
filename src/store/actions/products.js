import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProduct = (id) => {
  return function (dispatch) {
    return axios.get('http://secret-sea-49739.herokuapp.com/api/products/' + id).then(res => {
      dispatch({
        type: actiontypes().products.getProductById,
        payload: res.data
      })
    })
  }
}

export const getProducts = () => {
  return function (dispatch) {
    return axios.get('http://secret-sea-49739.herokuapp.com/api/products').then(res => {
      dispatch({
        type: actiontypes().products.getProducts,
        payload: res.data
      })
    })
  }
}

export const filterProducts = (filter) => {
  return {
    type: actiontypes().products.filterProducts,
    payload: filter
  }
}


export const addToCart = (product) => {
  return {
    type: actiontypes().products.addToCart,
    payload: product
  }
}

export const removeFromCart = (id) => {
  return {
    type: actiontypes().products.removeFromCart,
    payload: id
  }
}

export const changeQnt = (id, qnt) => {
  return {
    type: actiontypes().products.changeQnt,
    payload: { id, qnt }
  }
}

export const cartTotal = () => {
  return {
    type: actiontypes().products.cartTotal
  }
}

export const loadCartTotalItems = () => {
  return {
    type: actiontypes().products.cartTotalItems
  }
}

export const removeAllItemsFromCart = () => {
  return {
    type: actiontypes().products.emptyCart
  }
}