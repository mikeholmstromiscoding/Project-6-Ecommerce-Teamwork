import actiontypes from '../actiontypes'

let initState = {
  products: [],
  filteredProducts: [],
  currentProduct: {},
  cart: [],
  cartTotal: 0,
  cartTotalProducts: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case actiontypes().products.getProducts:
      return state = {
        ...state,
        products: action.payload,
        filteredProducts: action.payload
      }

    case actiontypes().products.getProductById:
      return state = {
        ...state,
        currentProduct: action.payload
      }
    case actiontypes().products.filterProducts:
      console.log("Filtered")
      let filteredProducts = []
      let filter = action.payload

      state.products.map((p) => {
        if(((filter.priceRange[0] < (p.price - p.discount)) && (filter.priceRange[1] > (p.price - p.discount)) && filter.brand.includes(p.data.brand.toLowerCase()) && filter.color.includes(p.data.color.toLowerCase()) && (filter.category.includes(p.data.category.toLowerCase())))
      
          ){
          filteredProducts.push(p)
        } 
      })

      return {
        ...state, 
        filteredProducts: filteredProducts
      }
    case actiontypes().products.addToCart:
      let exists = false
      let a_cart = [...state.cart]

      a_cart.forEach(item => {
        if (item._id === action.payload.product._id) {
          exists = true
          item.quantity += action.payload.qnt
        }
      })

      if (!exists) {
        a_cart.push({
          _id: action.payload.product._id,
          product: {
            name: action.payload.product.name,
            price: action.payload.product.price,
            image: action.payload.product.image,
            discount: action.payload.product.discount,
          },
          quantity: action.payload.qnt
        })
      }

      return state = {
        ...state,
        cart: a_cart,
      }
    case actiontypes().products.removeFromCart:
      let r_cart = [...state.cart]

      r_cart.forEach((item, i = 0) => {
        if (item._id === action.payload) {
          r_cart.splice(i, 1)
        }
        i++
      })

      return state = {
        ...state,
        cart: r_cart,
      }
    case actiontypes().products.changeQnt:
      let q_cart = [...state.cart]

      q_cart.forEach((item, i = 0) => {
        if (item._id === action.payload.id) {

            item.quantity = action.payload.qnt

            if (item.quantity === 0) {
              q_cart.splice(i, 1)
            }
          
        }
        i++
      })
      return state = {
        ...state,
        cart: q_cart
      }
    case actiontypes().products.cartTotal:
      let total = 0

      state.cart.forEach(item => {
        total += ((item.product.price - item.product.discount) * item.quantity)
      })

      return state = {
        ...state,
        cartTotal: total
      }
    case actiontypes().products.cartTotalItems:
      let totalItems = 0

      state.cart.forEach(item => {
        totalItems += item.quantity
      })

      return state = {
        ...state,
        cartTotalProducts: totalItems
      }
    case actiontypes().products.emptyCart:
      return state = {
        ...state,
        cart: [],
        cartTotal: 0,
        cartTotalProducts: 0
      }
    default:
      return state
  }
}