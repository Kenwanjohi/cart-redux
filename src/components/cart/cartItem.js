import React, {useState} from 'react'
import Styles from './cartItem.module.css'
import { ITEM_REMOVE} from '../../constants/actionTypes'
import {connect} from 'react-redux'
import Button from '../button'
const CartItem = ({item, onDelete}) => {
    const {id, product, newprice, price, quantity} = item
    const [value, setValue] = useState(quantity)
    
    const onchange = (e) => {
        setValue(e.target.value)
    }
    return(
        <div className={Styles.row} >
        <div className={`${Styles.cell} ${Styles.cell1}`}>
            <p>{product}</p>
            <div>
            <Button onclick={() => onDelete(id)} >remove</Button>
            </div>
        </div>
        <div className={Styles.cell}>
            <p>${price}</p>
        </div>
        <div className={Styles.cell}>
        <input className={Styles.input} onChange={onchange}  value={value} type='number'/>
        </div>
        <div className={Styles.cell}>
            <p>${newprice}</p>
        </div>
    </div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
    onDelete: (id) => dispatch({
        type: ITEM_REMOVE,
        id
        }),
    };
    }
export default connect(undefined, mapDispatchToProps)(CartItem)