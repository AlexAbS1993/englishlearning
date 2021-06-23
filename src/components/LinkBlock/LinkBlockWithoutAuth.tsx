import { useCallback } from "react";
import {IconButton} from "../Buttons/Button";
import { Extentions, ImageStateIconButton, VariantsEnum } from "../Buttons/Types/Button.component.types";
import { modalActionCreators } from "../../store/reducers/modalReducer/modal.reducer";
import { AppDispatch } from "../../store/Types/store.types";
import { useDispatch } from "react-redux";
import { inputsRegistration, inputsLogin } from "../../assets/datas/registration.datas";
import { testFunc } from "../../functions/Auth/Registration/submitRegistration";
import registration_simple from '../../assets/icons/Registration/registration_simple.png'
import registration_hovered from '../../assets/icons/Registration/registration_hovered.png'
import login_hover from '../../assets/icons/Login/login_hover.png'
import login_simple from '../../assets/icons/Login/login_simple.png'
import info_simple from '../../assets/icons/Information/info_simple.png'
import info_hovered from '../../assets/icons/Information/info_hovered.png'
import { registrationLoginInfo } from "../../assets/datas/registrationInfo.datas";
import { submitLogin } from "../../functions/Auth/Loginization/submitLogin";
const {setOpen, setType, setMarkup, setPage} = modalActionCreators

const enterImage = {
    simple: registration_simple,
    hovered: registration_hovered
}
const registrationImage:ImageStateIconButton = {
    simple: login_simple,
    hovered: login_hover,
}
const infoImage = {
    simple: info_simple,
    hovered: info_hovered
}

export const LinkBlockWithoutAuth = () => {
    const dispatch:AppDispatch = useDispatch() 
    const enterModalFunc = useCallback(() => {
        dispatch(setType("login"))
        dispatch(setPage("login"))
        dispatch(setMarkup({modalType:"login", inputs: inputsLogin, cb: submitLogin}))
        dispatch(setOpen(true))
    }, []) 
    const registrationModalFunc = useCallback(() => {
        dispatch(setType("registration"))
        dispatch(setPage("registration"))
        dispatch(setMarkup({modalType:"registration", inputs: inputsRegistration, cb: testFunc}))
        dispatch(setOpen(true))
    }, [])
    const infoModalFunc = useCallback(() => {
        dispatch(setType("affermative"))
        dispatch(setMarkup({modalType:"affermative", text: registrationLoginInfo, cb:() => {registrationModalFunc()}}))
        dispatch(setOpen(true))
    }, [])
    return (
        <>
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={enterModalFunc}
                        images={enterImage}
                        />
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={registrationModalFunc}
                        images={registrationImage}
                        />
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={infoModalFunc}
                        images={infoImage}
                        />
        </>
    )
}