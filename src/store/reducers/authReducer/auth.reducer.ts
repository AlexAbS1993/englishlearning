import { authActionCreatorsType, authInitialStateType, loginInResponseBodyType, LoginResponseBodyType } from "./Types/auth.reducer.types"
import { dataType, testFunc } from "../../../functions/Auth/Registration/submitRegistration";
import { ThunkDispatch } from "../../Types/store.types";
import { ErrorThunk, NotifyThunk } from "../NotifyErrorReducer/notify.reducer";
import { notyfiTypes } from "../NotifyErrorReducer/Types/notify.reducer.types";
import { responseType } from "../../../api/Types";
import { submitLogin } from "../../../functions/Auth/Loginization/submitLogin";
import { getLoginForToken } from "../../../functions/Auth/Loginization/getLoginForToken";
import { notErrExtractor } from "../../../functions/Error/noterrExtractor";
import { insertToken } from "../../../functions/Auth/Loginization/insertToken";
import { deleteToken } from "../../../functions/Auth/Loginization/deleteTokenFromLS";

export const authInitialState = {
    isAuth: false as boolean,
    login: null as string|null,
    initialize: false as boolean,
    loading: false as boolean,
    id: null as number|null,
    role: null as "admin"|"user"|null
}

const prefix = "AUTH:"

export const authActionCreators = {
    setIsAuth: (value: boolean) => {
        return {type: `${prefix}SET_IS_AUTH`, value} as const
    },
    setLogin: (login: string, id: number, role: "admin"|"user") => {
        return {type: `${prefix}SET_LOGIN`, login, id, role} as const
    },
    setInitialize: (value: boolean) => {
        return {type: `${prefix}SET_AUTH_INIT`, value} as const
    },
    forcedExit: () => {
        return {type: `${prefix}FORCED_EXIT`} as const
    }
}

export const authReducer = (state: authInitialStateType = authInitialState, action: authActionCreatorsType): authInitialStateType => {
    switch(action.type){
        case "AUTH:SET_IS_AUTH": {
            return {
                ...state,
                isAuth: action.value
            }
        }
        case "AUTH:SET_LOGIN": {
            return {
                ...state,
                login: action.login,
                id: action.id,
                role: action.role
            }
        }
        case "AUTH:SET_AUTH_INIT":{
            return{
                ...state,
                initialize: action.value
            }
        }
        case "AUTH:FORCED_EXIT": {
            return {
                ...authInitialState,
                initialize: true
            }
        }
        default: return state
    }
}


export const testRegistrationThunk = (data: dataType) => async (dispatch: ThunkDispatch) => {
    try{
        let response = await testFunc(data)
        let datas: responseType = response.data
        dispatch(NotifyThunk(notErrExtractor("not", datas), notyfiTypes.registration_done))
    }
    catch(e){
        dispatch(ErrorThunk(notErrExtractor("err", e)))
    }
}

export const loginisationThunk = (data: any) => async(dispatch: ThunkDispatch) => {
    try{
        let response = await submitLogin(data)
        let responseBody: LoginResponseBodyType = response.data
        dispatch(NotifyThunk(notErrExtractor("not", responseBody), notyfiTypes.login_done))
        dispatch(authActionCreators.setLogin(responseBody.login, responseBody.id, responseBody.role))
        dispatch(authActionCreators.setIsAuth(true))
        const {isRemember, token} = responseBody
        insertToken(isRemember, token)
    }
    catch(e){
        dispatch(ErrorThunk(notErrExtractor("err", e)))
    }
}

export const getLoginThunk = () => async (dispatch: ThunkDispatch) => {
    try {
        dispatch(authActionCreators.setInitialize(false))
        let response = await getLoginForToken()
        let responseBody: loginInResponseBodyType = response.data 
        dispatch(authActionCreators.setLogin(responseBody.login, responseBody.id, responseBody.role))
        dispatch(authActionCreators.setIsAuth(true))
    }
    catch(e){
        
    }
    finally{
        dispatch(authActionCreators.setInitialize(true))
    }
}

export const exitThunk = () => async (dispatch: ThunkDispatch) => {
    try {
        deleteToken()
        dispatch(authActionCreators.forcedExit())
    }
    catch(e){

    }
}