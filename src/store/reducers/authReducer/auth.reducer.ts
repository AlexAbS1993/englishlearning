import { authActionCreatorsType, authInitialStateType } from "./Types/auth.reducer.types"
import { dataType, testFunc } from "../../../functions/Auth/Registration/submitRegistration";
import { ThunkDispatch } from "../../Types/store.types";
import { ErrorThunk, NotifyThunk } from "../NotifyErrorReducer/notify.reducer";
import { notyfiTypes } from "../NotifyErrorReducer/Types/notify.reducer.types";
import { responseType } from "../../../api/Types";
import { submitLogin } from "../../../functions/Auth/Loginization/submitLogin";
import { getLoginForToken } from "../../../functions/Auth/Loginization/getLoginForToken";
import { notErrExtractor } from "../../../functions/Error/noterrExtractor";

export const authInitialState = {
    isAuth: false as boolean,
    login: null as string|null,
    initialize: false as boolean,
    loading: false as boolean
}

const prefix = "AUTH:"

export const authActionCreators = {
    setIsAuth: (value: boolean) => {
        return {type: `${prefix}SET_IS_AUTH`, value} as const
    },
    setLogin: (login: string) => {
        return {type: `${prefix}SET_LOGIN`, login} as const
    },
    setInitialize: (value: boolean) => {
        return {type: `${prefix}SET_AUTH_INIT`, value} as const
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
                login: action.login
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
        let datas: responseType = response.data
        dispatch(NotifyThunk(datas.message, notyfiTypes.login_done))
        
    }
    catch(e){
        dispatch(ErrorThunk(e.message))
    }
}

export const getLoginThunk = () => async (dispatch: ThunkDispatch) => {
    try {
        dispatch(authActionCreators.setInitialize(false))
        let response = await getLoginForToken()
        let datas: responseType = response.data
    }
    catch(e){
        
    }
    finally{
        dispatch(authActionCreators.setInitialize(true))
    }
}