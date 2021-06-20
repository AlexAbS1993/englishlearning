import { FC } from "react"
import { SimpleButtonType } from "./Types/Button.component.types"
import classes from './Button.module.css'

const Button:FC<SimpleButtonType> = ({extention, variant, cb, text}) => {
    return (
        <button onClick={cb} className={`${classes[extention]} ${classes[variant]}`}>
            {
                text ? text 
                :
                ""
            }
        </button>
    )
}

export default Button