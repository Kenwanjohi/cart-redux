import React from 'react'
import Product from './product'
import Styles from './products.module.css'
const Products = () => {
    return(
        <>
        <div className={Styles.title}>Products</div>
        <div className={Styles.listgrid}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        </>
    )
}

export default Products