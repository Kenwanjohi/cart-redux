import React from 'react'
import Cart from './cart/cart'
import Products from './products/products'
const App = ({products, onAddToCart, cartItems, onDelete}) => {
    return(
        <div>
            <Cart cartItems={cartItems} onDelete={onDelete}/>
            <Products 
            products={products}
            onAddToCart={onAddToCart}
            />
        </div>
    )
}
export default App