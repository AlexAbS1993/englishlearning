import { FC, useEffect, useState } from "react"
import { IconButtonType, SimpleButtonType } from "./Types/Button.component.types"
import classes from './Button.module.css'

const Button:FC<SimpleButtonType> = ({extention, variant, cb, text}) => {
    return (
        <button onClick={cb} className={`${classes[extention]} ${classes[variant]}`}>
            {
                text && text 
            }
        </button>
    )
}

export default Button

export const IconButton:FC<IconButtonType> = ({extention, variant, cb, images, activeToggle}) => {
    const [currentImage, setCurrentImage] = useState(images.simple)
    useEffect(() => {
        if (activeToggle && images.active){
            console.log('here')
                setCurrentImage(images.active)
        }
        if (!activeToggle && images.active){
            setCurrentImage(images.simple)
        }
    }, [activeToggle])
    return (
        <button 
        onMouseEnter={() => {
            if (images.hovered){
                setCurrentImage(images.hovered)
            }
        }}
        onMouseLeave={() => {
            setCurrentImage(images.simple)
            if (activeToggle && images.active){
                setCurrentImage(images.active)
            }
        }}
        onClick={cb}
        className={`${classes[extention]} ${classes[variant]}`}
        >
            <img alt="Button" src={currentImage}/>
        </button>
    )
}