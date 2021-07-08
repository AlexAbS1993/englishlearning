import { FC, useState } from "react"
import { InputSimpleType } from "./Types/inputTypes"
import classes from './input.module.css'
import { currentInputClassName } from "../../functions/Inputs/currentInputClassName"
import { validator } from "../../functions/Validator/validator"

export const Input:FC<InputSimpleType> = ({name, id, onChange, type, label, labelImg, schema}) => {
    // Стейт текста ошибки
    const [fieldErrorText, setTextError] = useState<string>("")
    // Состояние "грязного" инпута
    const [isFieldDirt, setDirtField] = useState(false)
    // Управление чекбоксом
    const [isChecked, setCheck] = useState(false) 
    // Переключатель для наведения на подсказку
    const [isHovered, setIsHovered] = useState(false)
    // Установка состояния чекбокса и отправка его состояния в общий стейт
    const checkHandleChange = () => {
        setCheck(!isChecked)
        onChange(!isChecked)}
    // РЕНДЕР
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
                        <input 
                        autoComplete="off"
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
                        {
                    labelImg && <div className={classes.labelImgWrapper}> 
                        <img alt="Иконка перед полем" src={labelImg}/>
                    </div>
                }
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