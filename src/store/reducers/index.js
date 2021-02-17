import { combineReducers } from 'redux'
import products from './products'
import user from './user'
import order from './order'
import admin from './admin'

export default combineReducers({
  products,
  user,
  order,
  admin
})