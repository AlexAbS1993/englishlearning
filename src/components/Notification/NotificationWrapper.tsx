import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/Types/store.types"
import { ErrorInner } from "./ErrorInner"
import { NofificationInner } from "./NotificationInner"

export const NotificationWrapper:FC = () => {
    const text = useSelector<RootState, string>(state => state.notify.notifyText)
    const isNotify = useSelector<RootState, boolean>(state => state.notify.isNotify)
    const isError = useSelector<RootState, boolean>(state => state.notify.isError)
    const errorText = useSelector<RootState, string>(state => state.notify.errorText)
    return (
        <>
            <NofificationInner 
            text={text}
            isNotify={isNotify}
            />
            <ErrorInner 
            isError={isError}
            errorText={errorText}
            />
        </>
    )
}