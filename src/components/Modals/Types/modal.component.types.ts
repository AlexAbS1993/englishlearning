import { InitialStateAffrimitiveType } from "../../../store/reducers/Types/modal.reducer.types"

export type ModalComponentTypeType = "affermative"|"registration"|"login"
export type ModalAffermativeInnerType = InitialStateAffrimitiveType&{closeHandler:() => void}