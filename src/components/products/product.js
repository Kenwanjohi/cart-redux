import React from 'react'
import Styles from './product.module.css'
import Button from '../button'
const Product = () => {
    return(
        <div className={Styles.product}>
            <div className={Styles.name}>carrots</div>
            <div className={Styles.price}>$2.00</div>
            <div>
                    <label className={Styles.label} for='quantity'>Quantity</label>
                    <input className={Styles.input} id='quantity' type='number'/>
                    <Button>add to cart</Button>
            </div>
        </div>
    )
}

export default Product