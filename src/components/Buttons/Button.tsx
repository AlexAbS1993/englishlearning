import { FC } from "react"
import { SimpleButtonType } from "./Types/Button.component.types"
import classes from './Button.module.css'

const Button:FC<SimpleButtonType> = ({variant, cb, text}) => {
    return (
        <button onClick={cb} className={`${classes.modal_affremative} ${classes[variant]}`}>
            {
                text ? text 
                :
                ""
            }
        </button>
    )
}

export default Button