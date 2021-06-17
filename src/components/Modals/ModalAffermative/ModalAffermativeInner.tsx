import Button from "../../Buttons/Button"
import { ModalAffermativeInnerType } from "../Types/modal.component.types"
import classes from './modalAffermative.module.css'
import { FC } from "react"

export const ModalAffermativeInner:FC<ModalAffermativeInnerType> = ({text, cb, closeHandler}) => {
    return (
        <div className={classes.modalAffermative}>
            <p>{text}</p>
            <Button variant="modal_affremative_decline" cb={closeHandler} text="Отклонить"/>
            <Button variant="modal_affremative_accept" cb={cb} text="Принять"/>
        </div>
    )
}