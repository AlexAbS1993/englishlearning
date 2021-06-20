import Button from "../../Buttons/Button"
import { ModalAffermativeInnerType } from "../Types/modal.component.types"
import classes from './modalAffermative.module.css'
import { FC } from "react"
import { Extentions, VariantsEnum } from "../../Buttons/Types/Button.component.types"

export const ModalAffermativeInner:FC<ModalAffermativeInnerType> = ({text, cb, closeHandler}) => {
    return (
        <div className={classes.modalAffermative}>
            <p>{text}</p>
            <div className={classes.buttonsContainer}>
                <Button 
                variant={VariantsEnum.modal_affremative_decline} 
                cb={closeHandler} 
                text="Отклонить" 
                extention={Extentions.modal_affremative}
                />
                <Button 
                variant={VariantsEnum.modal_affremative_accept}
                cb={cb} 
                text="Принять"
                extention={Extentions.modal_affremative}
                />
            </div>
        </div>
    )
}