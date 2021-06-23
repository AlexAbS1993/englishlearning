import { notifyActionCreatorsType, notifyInitialStateType, notyfiTypesType } from './Types/notify.reducer.types';


export const notifyInitialState = {
    isNotify: false,
    isError: false,
    notifyType: "" as notyfiTypesType,
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
    setNotifyType: (notType: notyfiTypesType) => {
        return {type: `${prefix}SET_NOT_TYPE`, notType} as const
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
        default: {
            return state
        }
    }
}