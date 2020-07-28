import React, { useState } from 'react'
import {CART_ADD} from '../../constants/actionTypes'
import { connect } from 'react-redux';
import Styles from './product.module.css'
import Button from '../button'
function mapDispatchToProps(dispatch) {
    return {
    onAddToCart: (id, product, newprice, price, quantity) => dispatch({
        type: CART_ADD,
        product: {id, product, newprice, price, quantity}
        }),
    };
    }

const Product = ({prod, onAddToCart}) => {
    const {product, price, id} = prod
    const [value, setValue] = useState('')


    const onchangeValue = (e) => {
        setValue(e.target.value)
    }

    
    const onSubmit =(e) => {
        const newPrice = Number((price * value).toFixed(2))
        if(value !== '' && value > 0) {
            onAddToCart(id, product, newPrice, price, parseInt(value)) 
            setValue('')
        }
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
export default connect(
    null,
    mapDispatchToProps
    )(Product);