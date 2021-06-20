import { InitialStateLoginRegistrationInputs } from './../../../store/reducers/Types/modal.reducer.types';
import { InitialStateAffrimitiveType } from "../../../store/reducers/Types/modal.reducer.types"

export type ModalComponentTypeType = "affermative"|"registration"|"login"
export type ModalAffermativeInnerType = InitialStateAffrimitiveType&{closeHandler:() => void}
export type ModalRegistrationInnerType = {
    inputs: (InitialStateLoginRegistrationInputs&{onChange: (e:any) => void})[]
}
export type ModalRegistrationInnerMappedType = InitialStateLoginRegistrationInputs&{onChange: (e: any) => void}