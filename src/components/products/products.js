import React from 'react'
import Product from './product'
import Styles from './products.module.css'
const Products = ({products, onAddToCart}) => {
    return(
        <>
        <div className={Styles.title}>Products</div>
        <div className={Styles.listgrid}>
            {(products || []).map(product => {
                return (<Product
                    key = {product.id}
                    prod={product}
                    onAddToCart={onAddToCart}
                />)
            })
            }
        </div>
        </>
    )
}

export default Products