import React from 'react'
import Styles from './cart.module.css'
import CartItem from './cartItem'
import Button from '../button'
const Cart = () => {
    return(
        <div className={Styles.cart}>

            <div className={Styles.title}>Cart</div>
            <div className={Styles.row} >
                <div className={`${Styles.cell} ${Styles.cell1}`}>
                    <p>Product</p>
                </div>
                <div className={Styles.cell}>
                    <p>Price</p>
                </div>
                <div className={Styles.cell}>
                    <p>Quantity</p>
                </div>
                <div className={Styles.cell}>
                    <p>Total</p>
                </div>
            </div>
            <CartItem/>
            <CartItem/>
            <div className={Styles.summation}>
                <div className={Styles.totprice}>
                    <div>Total:<span className={Styles.price}>$8.00</span></div>
                </div>
                <div>
                    <Button>checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart