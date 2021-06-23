import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/Types/store.types"
import {modalActionCreators} from '../../../store/reducers/modalReducer/modal.reducer'
import { ModalAffermativeInner } from "./ModalAffermativeInner"
const {clearModal} = modalActionCreators



export const ModalAffermative:FC = () => {
    const text = useSelector<RootState, string>(state => state.modal.affermative.text)
    const cb = useSelector<RootState, (args: any) => void>(state => state.modal.affermative.cb)
    const dispatch: AppDispatch = useDispatch()
    const closeHandler = () => {
        dispatch(clearModal())
    } 
    return (
        <>
            <ModalAffermativeInner cb={cb} text={text} closeHandler={closeHandler}/>
        </>
    )
}