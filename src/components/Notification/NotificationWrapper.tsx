import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/Types/store.types"
import { NofificationInner } from "./NotificationInner"

export const NotificationWrapper:FC = () => {
    const text = useSelector<RootState, string>(state => state.notify.notifyText)
    const isNotify = useSelector<RootState, boolean>(state => state.notify.isNotify)
    return (
        <>
            <NofificationInner 
            text={text}
            isNotify={isNotify}
            />
        </>
    )
}