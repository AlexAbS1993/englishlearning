import { InitialStateLoginRegistrationInputs } from '../../../store/reducers/modalReducer/Types/modal.reducer.types';
import { InitialStateAffrimitiveType } from "../../../store/reducers/modalReducer/Types/modal.reducer.types"

export type ModalComponentTypeType = "affermative"|"registration"|"login"|"newWord"
export type ModalAffermativeInnerType = InitialStateAffrimitiveType&{closeHandler:() => void}
export type ModalRegistrationLoginType = {
        page: "registration"|"login"|"newWord"
}
export type ModalRegistrationInnerType = {
    inputs: (InitialStateLoginRegistrationInputs&{onChange: (e:any) => void}&{validator?:any})[]
}
export type ModalRegistrationInnerMappedType = InitialStateLoginRegistrationInputs&{onChange: (e: any) => void}&{schema:any}