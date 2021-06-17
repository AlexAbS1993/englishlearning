import { ModalComponentTypeType } from '../../components/Modals/Types/modal.component.types';
import { 
    ModalReducerInitialStateType, 
    ModalReducerActionType, 
    InitialStateAffrimitiveType, 
    InitialStateLoginRegistrationInputs, 
    InitialStateLoginRegistrationLabels, 
    ModalReducerSetMarkUpDataType,
    InitialStateLoginRegistration
} from './Types/modal.reducer.types';

export const modalInitialState = {
    type: "" as ModalComponentTypeType,
    isOpen: false as boolean,
    affermative: {
        text: "",
        cb: () => {}
    } as InitialStateAffrimitiveType,
    login_registraton: {
        labels: [] as InitialStateLoginRegistrationLabels[],
        inputs: [] as InitialStateLoginRegistrationInputs[],
        cb: () => {},
    } as InitialStateLoginRegistration
}

const prefix = "MODAL_REDUCER:"

export const actionCreators = {
    setType: (modalType: ModalComponentTypeType) => {
        return {type: `${prefix}SET_MODAL_TYPE`, modalType} as const
    },
    setOpen: (toggle: boolean) => {
        return {type: `${prefix}SET_MODAL_OPEN`, toggle} as const
    },
    setMarkup: (data: ModalReducerSetMarkUpDataType) => {
        return {type: `${prefix}SET_MARKUP_DATA`, data} as const
    },
    clearModal: () => {
        return {type: `${prefix}CLEAR_MODAL`} as const
    }
}

export const modalReducer = (state: ModalReducerInitialStateType = modalInitialState, action:ModalReducerActionType): ModalReducerInitialStateType => {
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
        case "MODAL_REDUCER:SET_MARKUP_DATA": {
            if (action.data.modalType === "affermative"){
                return {
                    ...state,
                    affermative: {
                        text: action.data.text,
                        cb: action.data.cb
                    }
                }
            }
            if (action.data.modalType === "login" || action.data.modalType === "registration"){
                const {labels, inputs, cb} = action.data
                return {
                    ...state,
                    login_registraton: {
                        labels,
                        inputs,
                        cb
                    }
                }
            }
            return state
        }
        case "MODAL_REDUCER:CLEAR_MODAL": {
            return {
                ...modalInitialState}
        }
        default: {
            return state
        }
    }
}