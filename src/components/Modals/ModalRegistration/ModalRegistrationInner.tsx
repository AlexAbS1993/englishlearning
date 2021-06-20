import { FC } from "react"
import { ModalRegistrationInnerType } from "../Types/modal.component.types"
import { ModalRegistrationInnerMapped } from "./ModalRegistrationInnerMapped"

export const ModalRegistrationInner:FC<ModalRegistrationInnerType> = ({inputs}) => {

    return (
        <>
            {
                inputs.map((element) => {
                    return <ModalRegistrationInnerMapped 
                    key={element.id} 
                    id={element.id} 
                    label={element.label}
                    type={element.type}
                    name={element.name}
                    onChange={element.onChange}
                    />
                })
            }
        </>
    )
}