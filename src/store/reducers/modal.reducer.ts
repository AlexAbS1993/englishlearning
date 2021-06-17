import { ModalComponentTypeType } from '../../components/Modals/Types/modal.component.types';
import { ModalReducerInitialStateType, ModalReducerActionType } from './Types/modal.reducer.types';

export const initialState = {
    type: "" as ModalComponentTypeType,
    isOpen: false as boolean
}

const prefix = "MODAL_REDUCER:"

export const actionCreators = {
    setType: (modalType: ModalComponentTypeType) => {
        return {type: `${prefix}SET_MODAL_TYPE`, modalType} as const
    },
    setOpen: (toggle: boolean) => {
        return {type: `${prefix}SET_MODAL_OPEN`, toggle} as const
    }
}

export const modalReducer = (state: ModalReducerInitialStateType, action:ModalReducerActionType): ModalReducerInitialStateType => {
    switch(action.type){
        case "MODAL_REDUCER:SET_MODAL_TYPE": {
            return {
                ...state,
                type: action.modalType
            }
        }
        case "MODAL_REDUCER:SET_MODAL_OPEN": {
            return {
                ...state, 
                isOpen: action.toggle
            }
        }
        default: {
            return state
        }
    }
}

