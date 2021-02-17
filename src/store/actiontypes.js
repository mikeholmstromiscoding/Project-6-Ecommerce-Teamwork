export default () => {
  return {
    products: {
      getProducts: 'GET_ALL_PRODUCTS',
      getProductById: 'GET_PRODUCT',
      addToCart: 'ADD_PRODUCT_TO_CART',
      removeFromCart: 'REMOVE_PRODUCT_FROM_CART',
      changeQnt: 'CHANGE_QNT_IN_CART',
      cartTotal: 'GET_CART_TOTAL',
      cartTotalItems: 'GET_CART_TOTAL_ITEMS',
      emptyCart: 'EMPTY_CART',
      filterProducts: 'FILTER_PRODUCTS'
    },
    user: {
      registerUser: 'REGISTER_USER',
      loginUser: 'LOGIN_USER',
      logoutUser: 'LOGOUT_USER',
      loginStatusCode: 'USER_STATUSCODE',
      resetStatusCode: 'RESET_STATUS_CODE',
      updateUserShippingDetails: 'UPDATE_USER_SHIPPING_DETAILS',
      loadUser: 'LOAD_USER',
      placeOrder: 'PLACE_ORDER'
    },
    order: {
      loadOrders: 'LOAD_ORDERS',
      loadAllOrders: 'LOAD_ALL_ORDERS',
      addOrder: 'ADD_ORDER',
      updateOrderStatus: 'UPDATE_ORDER_STATUS'
    },
    admin: {
      getUsers: 'GET_USERS',
      deleteUser: 'DELETE_USER'
    }
  }
}