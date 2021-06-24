import { notifyActionCreatorsType, notifyInitialStateType, notyfiTypes } from './Types/notify.reducer.types';


export const notifyInitialState = {
    isNotify: false,
    isError: false,
    notifyType: "" as notyfiTypes,
    notifyText: "",
    errorText: ""
}

const prefix = "NOTIFY:"

export const notifyActionCreators = {
    setNotify: (value: boolean) => {
        return {type: `${prefix}SET_NOT`, value} as const
    },
    setNotifyText: (text: string) => {
        return {type: `${prefix}SET_NOT_TEXT`, text} as const
    },
    setNotifyType: (notType: notyfiTypes) => {
        return {type: `${prefix}SET_NOT_TYPE`, notType} as const
    },
    setError: (value: boolean) => {
        return {type:`${prefix}SET_ERROR`, value} as const
    },
    setErrorTest: (text: string) => {
        return {type: `${prefix}SET_ERROR_TEXT`, text} as const
    },
    setClearReducer: () => {
        return {type: `${prefix}CLEAR_NOT_REDUCER`} as const
    }
}

export const notifyReducer = (state: notifyInitialStateType = notifyInitialState, action: notifyActionCreatorsType):notifyInitialStateType => {
    switch(action.type){
        case "NOTIFY:SET_NOT": {
            return {
                ...state,
                isNotify: action.value
            }
        }
        case "NOTIFY:SET_NOT_TEXT": {
            return {
                ...state,
                notifyText: action.text
            }
        }
        case "NOTIFY:SET_NOT_TYPE":{
            return {
                ...state,
                notifyType: action.notType
            }
        }
        case "NOTIFY:CLEAR_NOT_REDUCER":{
            return {
                ...notifyInitialState
            }
        }
        case "NOTIFY:SET_ERROR": {
            return {
                ...state, 
                isError: action.value
            }
        }
        case "NOTIFY:SET_ERROR_TEXT": {
            return {
                ...state, 
                errorText: action.text
            }
        }
        default: {
            return state
        }
    }
}