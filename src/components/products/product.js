import React, { useState } from 'react'
import Styles from './product.module.css'
import Button from '../button'


const Product = ({prod, onAddToCart}) => {
    const {product, price, id} = prod
    const [value, setValue] = useState('')


    const onchangeValue = (e) => {
        setValue(e.target.value)
    }

    
    const onSubmit =(e) => {
        const newPrice = Number((price * value).toFixed(2))
        onAddToCart(id, product, newPrice, price, parseInt(value)) 
        setValue('')
        e.preventDefault()
    }
    
    
    return(
        <div className={Styles.product}>
            <div className={Styles.name}>{product}</div>
            <div className={Styles.price}>${price}</div>
            <div>
                <form onSubmit={onSubmit}>
                    <label className={Styles.label} htmlFor={id}>Quantity</label>
                    <input className={Styles.input} id={id} type='number' value={value} onChange={onchangeValue}/>
                    <Button type='submit'>add to cart</Button>
                </form>
            </div>
        </div>
    )
}

export default Product