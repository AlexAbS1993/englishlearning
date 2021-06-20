import { FC } from "react"
import { ModalRegistrationInnerMappedType } from "../Types/modal.component.types"

export const ModalRegistrationInnerMapped:FC<ModalRegistrationInnerMappedType> = ({id, onChange, name, label, type}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label><input type={type} name={name} onChange={onChange} id={id}/>
        </>
    )
}