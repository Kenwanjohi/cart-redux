import {combineReducers} from 'redux'

import productReducer from './product'
import cartReducer from './cart'

const rootReducer = combineReducers({
    productsState: productReducer,
    cartState: cartReducer
})

export default rootReducer
