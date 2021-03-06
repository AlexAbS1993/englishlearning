import { useCallback } from "react";
import {IconButton} from "../Buttons/Button";
import { Extentions, ImageStateIconButton, VariantsEnum } from "../Buttons/Types/Button.component.types";
import { modalActionCreators } from "../../store/reducers/modalReducer/modal.reducer";
import { ThunkDispatch } from "../../store/Types/store.types";
import { useDispatch } from "react-redux";
import { inputsRegistration, inputsLogin } from "../../assets/datas/registration.datas";
import registration_simple from '../../assets/icons/Registration/registration_simple.png'
import registration_hovered from '../../assets/icons/Registration/registration_hovered.png'
import login_hover from '../../assets/icons/Login/login_hover.png'
import login_simple from '../../assets/icons/Login/login_simple.png'
import info_simple from '../../assets/icons/Information/info_simple.png'
import info_hovered from '../../assets/icons/Information/info_hovered.png'
import { registrationLoginInfo } from "../../assets/datas/registrationInfo.datas";
import classes from './linkblock.module.css'
import { loginisationThunk, testRegistrationThunk } from "../../store/reducers/authReducer/auth.reducer";
import { validateInjector } from "../../functions/Validator/validateInjector";
import { validateAPI } from "../../api/validate";
import { schemaParser } from "../../functions/Validator/schemaParser";
const {setOpen, setType, setMarkup, setPage} = modalActionCreators

// Картинки для кнопок в разных состояниях
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
    // Диспатч
    const dispatch:ThunkDispatch = useDispatch() 
    // Функция вызова модального окна для логинизации
    const enterModalFunc = useCallback(() => {
        dispatch(setType("login"))
        dispatch(setPage("login"))
        dispatch(setMarkup({modalType:"login", inputs: inputsLogin, cb: (data: any) => {dispatch(loginisationThunk(data))}}))
        dispatch(setOpen(true))
    }, [dispatch]) 
    // Функция вызова модального окна для регистрации
    const registrationModalFunc = useCallback(async() => {
        dispatch(setType("registration"))
        dispatch(setPage("registration"))
        let schema = await schemaParser(validateAPI.getRegistrationValidate)
        dispatch(setMarkup({
            modalType:"registration", 
            inputs: validateInjector(schema, inputsRegistration), 
            cb: (data) => {dispatch(testRegistrationThunk(data))}
        }))
        dispatch(setOpen(true))
    }, [dispatch])
    // Функция вызова модального окна для информации
    const infoModalFunc = useCallback(() => {
        dispatch(setType("affermative"))
        dispatch(setMarkup({modalType:"affermative", text: registrationLoginInfo, cb:async() => {
            await registrationModalFunc()}}))
        dispatch(setOpen(true))
    }, [dispatch])
    //РЕНДЕР
    return (
        <>
                    <div className={classes.linkBlockElement}>
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={enterModalFunc}
                        images={enterImage}
                        />
                    </div>
                    <div className={classes.linkBlockElement}>
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={registrationModalFunc}
                        images={registrationImage}
                        />
                    </div>
                    <div className={classes.linkBlockElement}>
                        <IconButton 
                        variant={VariantsEnum.nothing}
                        extention={Extentions.nav_bar_icon}
                        cb={infoModalFunc}
                        images={infoImage}
                        />
                    </div>
        </>
    )
}