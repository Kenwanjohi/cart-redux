import React from 'react'
import Product from './product'
import Styles from './products.module.css'
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
    products: state.productsState,
    };
    }
    const Products = ({products}) => {
        console.log(products)
    return(
        <>
        <div className={Styles.title}>Products</div>
        <div className={Styles.listgrid}>
            {(products || []).map(product => {
                return (<Product
                    key = {product.id}
                    prod={product}
                />)
            })
            }
        </div>
        </>
    )
}

export default connect(
    mapStateToProps,
    )(Products);
    