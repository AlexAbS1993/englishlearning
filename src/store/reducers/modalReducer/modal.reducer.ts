import { ModalComponentTypeType } from '../../../components/Modals/Types/modal.component.types';
import { 
    ModalReducerInitialStateType, 
    ModalReducerActionType, 
    InitialStateAffrimitiveType, 
    InitialStateLoginRegistrationInputs, 
    ModalReducerSetMarkUpDataType,
    InitialStateLoginRegistration,
    ModalInitialStatePageTypeType
} from './Types/modal.reducer.types';

export const modalInitialState = {
    type: "" as ModalComponentTypeType,
    isOpen: false as boolean,
    page: "" as  ModalInitialStatePageTypeType,
    affermative: {
        text: "",
        cb: () => {}
    } as InitialStateAffrimitiveType,
    login_registraton: {
        inputs: [] as InitialStateLoginRegistrationInputs[],
        cb: () => {},
    } as InitialStateLoginRegistration
}

const prefix = "MODAL_REDUCER:"

export const modalActionCreators = {
    setType: (modalType: ModalComponentTypeType) => {
        return {type: `${prefix}SET_MODAL_TYPE`, modalType} as const
    },
    setPage: (page: ModalInitialStatePageTypeType) => {
        return {type: `${prefix}SET_MODAL_PAGE`, page} as const
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
        case "MODAL_REDUCER:SET_MODAL_PAGE": {
            return {
                ...state,
                page: action.page
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
                const {inputs, cb} = action.data
                return {
                    ...state,
                    login_registraton: {
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