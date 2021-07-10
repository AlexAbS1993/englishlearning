import { modalActionCreators } from './../modal.reducer';
import { modalInitialState } from "../modal.reducer"
import { ModalComponentTypeType } from '../../../../components/Modals/Types/modal.component.types';
import { ModalSeatchInputsType } from '../../../../components/Modals/ModalSearchAndAct/Types/modalSearchAndAct.types';

export type ModalReducerInitialStateType = typeof modalInitialState

export type ModalInitialStatePageTypeType = "registration"| "login"|"newWord"

type inferActionType<T> = T extends {[key: string]: infer Z} ? Z : never 
export type ModalReducerActionType = ReturnType<inferActionType<typeof modalActionCreators>>


export type InitialStateAffrimitiveType = {
    text: string,
    cb: (args: any[]) => void
}

export type InitialStateLoginRegistrationLabels = string
type LoginRegistrationInput = {
    type: string,
    id: string,
    name: string,
    label?: string,
    labelImg?: string
}
export type InitialStateLoginRegistrationInputs = LoginRegistrationInput

export type InitialStateLoginRegistration = {
    inputs: InitialStateLoginRegistrationInputs[],
    cb: (args: any) => void,
    validator?: any
}
export type InitialStateSearch = {
    inputs: searchInputsType[],
    cb: (args: any) => void
}

export type ModalReducerSetMarkUpDataType = InitialStateAffrimitiveType&{modalType: Extract<ModalComponentTypeType, "affermative">} 
| 
InitialStateLoginRegistration&{modalType: Exclude<ModalComponentTypeType, "affermative"|"search">}
| 
InitialStateSearch&{modalType: "search"}

export type newWordFormType = {
    name: string, id:string, label: string, type: string
}

export type searchInputsType = ModalSeatchInputsType
