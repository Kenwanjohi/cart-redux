import {CART_ADD ,ITEM_REMOVE} from '../constants/actionTypes'
const initialState = []

const applyAddToCart = (state, action) => {
  const index = state.findIndex(item => item.id === action.product.id)
  if(index === -1) {
    return [...state, action.product]
  } else {
    return state.map((item, i) => 
      index === i ? {...item, newprice: Number(((item.quantity + action.product.quantity) * item.price).toFixed(2)), quantity: item.quantity + action.product.quantity} : item
    )
  }
}


const applyRemoveFromCart = (state, action) => {
  return [...state.filter(item => item.id !== action.id)]
}

function cartReducer(state=initialState, action) {
    switch(action.type) {
        case CART_ADD: { 
          return  applyAddToCart(state, action)
        }
        case ITEM_REMOVE: {
          return applyRemoveFromCart(state, action)
        }

        default :return state
    }
}

export default cartReducer
