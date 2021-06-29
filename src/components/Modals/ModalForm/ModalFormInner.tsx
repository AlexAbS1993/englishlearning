import { FC } from "react"
import { ModalRegistrationInnerType } from "../Types/modal.component.types"
import { ModalFormMapped } from "./ModalFormMapped"

export const ModalFormInner:FC<ModalRegistrationInnerType> = ({inputs}) => {
    return (
        <>
            {
                inputs.map((element) => {
                    return <ModalFormMapped 
                    labelImg={element.labelImg}
                    key={element.id} 
                    id={element.id} 
                    label={element.label}
                    type={element.type}
                    name={element.name}
                    onChange={element.onChange}
                    schema={element.validator}
                    />
                })
            }
        </>
    )
}