import { FC, useState } from "react"
import { InputSimpleType } from "./Types/inputTypes"
import classes from './input.module.css'
import { currentInputClassName } from "../../functions/Inputs/currentInputClassName"

export const Input:FC<InputSimpleType> = ({name, id, onChange, type, label, labelImg}) => {
    const [isChecked, setCheck] = useState(false) 
    const checkHandleChange = () => {
        setCheck(!isChecked)
        onChange(!isChecked)}
    return (
        <div className={`${currentInputClassName(type, classes)}`}>
            <div><label htmlFor={id} className={classes.inputLabel}>{label}</label></div>
                {
                    type === "checkbox"  && 
                    <div>
                        <input 
                        type={type} 
                        name={name} 
                        checked={isChecked}
                        onChange={checkHandleChange}
                        id={id}
                        /> 
                    </div>
                }
                {
                    (type === "text" || type === "password") && 
                    <div className={classes.inputInputWrapper}>
                {
                    labelImg && <div className={classes.labelImgWrapper}> 
                        <img alt="Иконка перед полем" src={labelImg}/>
                    </div>
                }
                        <input 
                        type={type} 
                        name={name} 
                        id={id} 
                        onChange={onChange} 
                        className={classes.inputInput}
                        />
                    </div>
                }
                
                
        </div>
    )
}