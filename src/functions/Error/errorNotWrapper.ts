import { notifyActionCreators } from "../../store/reducers/NotifyErrorReducer/notify.reducer";
import { notyfiTypes } from "../../store/reducers/NotifyErrorReducer/Types/notify.reducer.types";
import { AppDispatch } from "../../store/Types/store.types";

const {setNotify, setNotifyText, setNotifyType, setClearReducer} = notifyActionCreators

export const errorNotificationWrapper = (dispatch:AppDispatch, cb: (args:any)=>void, notifyType: notyfiTypes) => {
    return async(...data:any) => {
        try{
            await cb(data)
        }
        catch(e){
            setTimeout(() => {
                dispatch(setClearReducer())
            }, 3000)
            dispatch(setNotify(true))
            dispatch(setNotifyText(e.message))
            dispatch(setNotifyType(notifyType))
        }
    }
}