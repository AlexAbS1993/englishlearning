import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateLoginRegistrationInputs } from "../../../store/reducers/modalReducer/Types/modal.reducer.types";
import { AppDispatch, RootState } from "../../../store/Types/store.types";
import {modalActionCreators} from '../../../store/reducers/modalReducer/modal.reducer'
import { ModalFormInner } from "./ModalFormInner";
import { inputInjectChange } from "../../../functions/Modal/registrationInputInjectChange";
import Button from "../../Buttons/Button"
import { Extentions, VariantsEnum } from "../../Buttons/Types/Button.component.types"
import classes from './modalForm.module.css'
import { ModalRegistrationLoginType } from "../Types/modal.component.types";

const {clearModal} = modalActionCreators


export const ModalForm:FC<ModalRegistrationLoginType> = ({page}) => {
    const [initialize, setInitialize] = useState(false)
    const [tempValues, setChange] = useState({})
    const [isTempValuesDone, setTempValuesDone] = useState(false)
    const inputs = useSelector<RootState, InitialStateLoginRegistrationInputs[]>(state => state.modal.login_registraton.inputs)
    useEffect(() => {
        let fields:any = {}
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].type === "checkbox"){
                fields[inputs[i].name] = false
            }
            else {
                fields[inputs[i].name] = ""
            } 
        }
        setChange({...fields})
        setTempValuesDone(true)
    }, [])
    useEffect(() => {
        if (isTempValuesDone){
            setInitialize(true)
        }
    }, [isTempValuesDone])
    const cb = useSelector<RootState, (...args:any) => void>(state => state.modal.login_registraton.cb)
    const dispatch:AppDispatch = useDispatch()
    const closeHandler = () => {
        dispatch(clearModal())
    }
    const definitiveInputs = useMemo(() => {
        return inputInjectChange(inputs, setChange, tempValues)
    }, [initialize])
    return ( <>
        {initialize ?  
            (
            <div className={classes.registrationWrapper}>
                <ModalFormInner 
                inputs={definitiveInputs}
                />
            <div className={classes.modalRegistrationLoginButtonsWrapper}>
                <Button 
                text={page === "registration" ? "Регистрация" : "Вход"}
                variant={VariantsEnum.modal_registration_accept}
                extention={Extentions.modal_registration}
                cb={cb.bind(null, tempValues)}
                />
                <Button 
                text="Закрыть"
                variant={VariantsEnum.modal_registration_decline}
                extention={Extentions.modal_registration}
                cb={closeHandler}
                />
            </div>
            </div>
        ) : (
            <>
            </>
        )    
        }
        </> )
}