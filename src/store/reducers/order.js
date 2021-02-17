import actiontypes from '../actiontypes'

let initState = {
  orders: [],
  allOrders: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actiontypes().order.loadOrders:
      return state = {
        orders: action.payload,
        allOrders: state.allOrders
      }
    case actiontypes().order.loadAllOrders:
      return state = {
        orders: state.orders,
        allOrders: action.payload
      }
    case actiontypes().order.addOrder:
      return state
    case actiontypes().order.updateOrderStatus:
      return state
    default:
      return state
  }
}