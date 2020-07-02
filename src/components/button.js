import React from 'react'
import Styles from './button.module.css'
const Button = ({children, unique, ...props}) => {
    return (
        <button className={Styles.button} >{children}</button>
    )
}
export default Button