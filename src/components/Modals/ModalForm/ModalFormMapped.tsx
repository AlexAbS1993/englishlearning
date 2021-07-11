import React, { FC } from "react"
import { Input } from "../../Inputs/Input"
import { ModalRegistrationInnerMappedType } from "../Types/modal.component.types"

export const ModalFormMapped:FC<ModalRegistrationInnerMappedType> = React.memo((
    {id, onChange, name, label, type, labelImg, schema, submitDisabler, values}) => {
    return (
        <Input
        labelImg={labelImg}
        id={id}
        onChange={onChange}
        name={name}
        label={label}
        type={type}
        schema={schema}
        submitDisabler={submitDisabler}
        value={values}
        />
    )
})