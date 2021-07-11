import { FC, LegacyRef, useEffect, useRef, useState } from "react"
import { InputSimpleType } from "./Types/inputTypes"
import classes from './input.module.css'
import { currentInputClassName } from "../../functions/Inputs/currentInputClassName"
import { validator } from "../../functions/Validator/validator"

export const Input:FC<InputSimpleType> = (
{
    name, 
    id, 
    onChange, 
    type, 
    label, 
    labelImg, 
    schema, 
    placeholder, 
    forceValue, 
    toggleForce,
    submitDisabler
}
    ) => {
    const inputRef:LegacyRef<HTMLInputElement> = useRef(null)
    // Состояние "грязного" инпута
    const [isFieldTouched, setFieldTouched] = useState(false)
    const [isFieldDirt, setDirtField] = useState(false)
    // Управление чекбоксом
    const [isChecked, setCheck] = useState(false) 
    // Переключатель для наведения на подсказку
    const [isHovered, setIsHovered] = useState(false)
    // Установка состояния чекбокса и отправка его состояния в общий стейт
    const checkHandleChange = () => {
        setCheck(!isChecked)
        onChange(!isChecked)}
    // Установка принудительного значения
    useEffect(() => {
        if (toggleForce && forceValue){
            inputRef.current!.value = forceValue
        }
    }, [toggleForce])
    // Стейт текста ошибки
    const [fieldErrorText, setTextError] = useState<string>("")
    useEffect(() => {
            if ((fieldErrorText.length > 0 && submitDisabler)){
                submitDisabler(name, true)
            }
            if (fieldErrorText.length === 0 && submitDisabler && isFieldTouched && inputRef.current!.value.length > 0){
                submitDisabler(name, false)
            }
    },[fieldErrorText, inputRef.current?.value])
    // РЕНДЕР
    return (
        <div className={`${currentInputClassName(type, classes)}`}>
            <div>{
                label &&
                <label htmlFor={id} className={classes.inputLabel}>{label}</label>}
                </div>
                {
                    type === "checkbox"  && 
                    <div>
                        <input 
                        type={type} 
                        name={name} 
                        checked={isChecked}
                        onChange={checkHandleChange}
                        id={id}
                        placeholder={placeholder ? placeholder : ""}
                        /> 
                    </div>
                }
                {
                    (type === "text" || type === "password") && 
                    <div className={classes.inputInputWrapper}>
                        <input 
                        ref={inputRef}
                        autoComplete="off"
                        type={type} 
                        name={name} 
                        id={id} 
                        onChange={(event) => {
                            onChange(event)
                            if (!isFieldTouched){
                                setFieldTouched(true)
                            }
                            if (schema){
                                validator(setTextError, schema, event.target.value)
                            }
                        }
                        } 
                        onBlur={() => {
                            if (isFieldTouched){
                                setDirtField(true)
                            } 
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