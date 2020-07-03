import React from 'react'
import Styles from './cartItem.module.css'
const CartItem = ({item, onDelete}) => {
    const {id, product, newprice, price, quantity} = item
    return(
        <div className={Styles.row} >
        <div className={`${Styles.cell} ${Styles.cell1}`}>
            <p>{product}</p>
            <div>
            <button onClick={() => onDelete(id)} >remove</button>
            </div>
        </div>
        <div className={Styles.cell}>
            <p>${price}</p>
        </div>
        <div className={Styles.cell}>
        <input className={Styles.input} value={quantity} type='number'/>
        </div>
        <div className={Styles.cell}>
            <p>${newprice}</p>
        </div>
    </div>
    )
}

export default CartItem