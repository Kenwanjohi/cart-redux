import { CART_ADD } from '../constants/actionTypes'
import {ITEM_REMOVE} from '../constants/actionTypes'

const initialState = []


const applyAddToCart = (state, action) => {
    return  [ ...state, action.product ]
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
