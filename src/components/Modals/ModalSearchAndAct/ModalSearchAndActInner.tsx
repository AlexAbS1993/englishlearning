import { FC } from "react"
import { Input } from "../../Inputs/Input"
import { ModalSeatchInputsTypeInnerType } from "./Types/modalSearchAndAct.types"


export const ModalSearchAndActInner:FC<ModalSeatchInputsTypeInnerType> = ({inputs, forceValue, forceToggle}) => {
    return (
        <>
            {
                inputs.map(e => {
                    return <Input 
                    type={e.type}
                    id={e.id}
                    name={e.name}
                    placeholder={e.placeholder}
                    onChange={e.onChange}
                    key={e.id}
                    toggleForce={forceToggle}
                    forceValue={forceValue[e.name]}
                    />
                })
            }
        </>
    )
}