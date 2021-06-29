import { FC, useState } from "react"
import { InputSimpleType } from "./Types/inputTypes"
import classes from './input.module.css'
import { currentInputClassName } from "../../functions/Inputs/currentInputClassName"
import { validator } from "../../functions/Validator/validator"

export const Input:FC<InputSimpleType> = ({name, id, onChange, type, label, labelImg, schema}) => {
    const [fieldErrorText, setTextError] = useState<string>("")
    const [isFieldDirt, setDirtField] = useState(false)
    const [isChecked, setCheck] = useState(false) 
    const [isHovered, setIsHovered] = useState(false)
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
                        onChange={(event) => {
                            onChange(event)
                            if (schema){
                                validator(setTextError, schema, event.target.value)
                            }
                        }
                        } 
                        onBlur={() => {
                            setDirtField(true)
                        }}
                        className={`${classes.inputInput} ${(fieldErrorText && isFieldDirt) && `${classes.inputInputError}`}`}
                        />
                    </div>
                }
                 {
                        (isFieldDirt && fieldErrorText) && <>
                            <div className={classes.errorInput}> <span 
                            onMouseEnter={() => {
                                setIsHovered(true)
                                setTimeout(() => {
                                    setIsHovered(false)
                                }, 2500)
                            }}
                            >{fieldErrorText}</span>
                            {
                                isHovered && <div className={classes.hoveredErrorTip}> 
                                {fieldErrorText}
                                </div>
                            }</div>
                        </>
                    }
                
        </div>
    )
}