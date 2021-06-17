import { actionCreators } from './../modal.reducer';
import { modalInitialState } from "../modal.reducer"
import { ModalComponentTypeType } from '../../../components/Modals/Types/modal.component.types';

export type ModalReducerInitialStateType = typeof modalInitialState

type inferActionType<T> = T extends {[key: string]: infer Z} ? Z : never 
export type ModalReducerActionType = ReturnType<inferActionType<typeof actionCreators>>


export type InitialStateAffrimitiveType = {
    text: string,
    cb: (args: any) => void
}

export type InitialStateLoginRegistrationLabels = string
type LoginRegistrationInput = {
    type: string,
    onChange: () => void,
    id: string,
    name: string
}
export type InitialStateLoginRegistrationInputs = LoginRegistrationInput

export type InitialStateLoginRegistration = {
    labels: InitialStateLoginRegistrationLabels[],
    inputs: InitialStateLoginRegistrationInputs[],
    cb: (args: any) => void
}

export type ModalReducerSetMarkUpDataType = InitialStateAffrimitiveType&{modalType: Extract<ModalComponentTypeType, "affermative">} 
| 
InitialStateLoginRegistration&{modalType: Exclude<ModalComponentTypeType, "affermative">}