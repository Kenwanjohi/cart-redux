import React from 'react'
import Styles from './button.module.css'
const Button = ({children, unique, onclick, ...props}) => {
    return (
        <button onClick={onclick} className={Styles.button} >{children}</button>
    )
}
export default Button