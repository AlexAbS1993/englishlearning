import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button, {IconButton} from "../components/Buttons/Button"
import { Modal } from "../components/Modals/Modal"
import { AppDispatch, RootState } from "../store/Types/store.types"
import { modalActionCreators } from "../store/reducers/modalReducer/modal.reducer"
import { Extentions, ImageStateIconButton, VariantsEnum } from "../components/Buttons/Types/Button.component.types"
import login_simple from '../assets/icons/Login/login_simple.png'
import login_hover from '../assets/icons/Login/login_hover.png'
import login_active from '../assets/icons/Login/login_active.png'
import {notifyActionCreators} from '../store/reducers/NotifyErrorReducer/notify.reducer'
import { notyfiTypes } from "../store/reducers/NotifyErrorReducer/Types/notify.reducer.types"
const {testErrorNot} = modalActionCreators
const {setNotify, setNotifyText, setNotifyType, setClearReducer} = notifyActionCreators

const images:ImageStateIconButton = {
    simple: login_simple,
    hovered: login_hover,
    active: login_active
}

export const Test:FC = () => {
    const dispatch:AppDispatch = useDispatch()
    const isOpen = useSelector<RootState, boolean>(state => state.modal.isOpen)
    const isNotify = useSelector<RootState, boolean>(state => state.notify.isNotify)
    const openModal = () => {
        setTimeout(() => {
            dispatch(setClearReducer())
        }, 3000)
        if (!isNotify){
            try{
                dispatch(testErrorNot())
            }
            catch(e){
                dispatch(setNotify(true))
                dispatch(setNotifyText(e.message))
                dispatch(setNotifyType(notyfiTypes.test))
            }
        }
    }
    return (
        <div style={{backgroundColor:"blue"}}>
            <Modal />
            <Button variant={VariantsEnum.simple_small} cb={openModal} text="Тест" extention={Extentions.simple}/>
            <IconButton 
            images={images}
            extention={Extentions.nav_bar_icon}
            variant={VariantsEnum.nothing}
            cb={openModal}
            activeToggle={isOpen}
            />
        </div>
    )
}