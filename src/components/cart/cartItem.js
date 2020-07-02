import React from 'react'
import Styles from './cartItem.module.css'
import Button from '../button'
const CartItem = () => {
    return(
        <div className={Styles.row} >
        <div className={`${Styles.cell} ${Styles.cell1}`}>
            <p>product description</p>
            <div className>
            <Button unique='true' >remove</Button>
            </div>
        </div>
        <div className={Styles.cell}>
            <p>$2.00</p>
        </div>
        <div className={Styles.cell}>
        <input className={Styles.input} id='quantity' type='number'/>
        </div>
        <div className={Styles.cell}>
            <p>$4.00</p>
        </div>
    </div>
    )
}

export default CartItem