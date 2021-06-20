import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateLoginRegistrationInputs } from "../../../store/reducers/Types/modal.reducer.types";
import { AppDispatch, RootState } from "../../../store/Types/store.types";
import {modalActionCreators} from '../../../store/reducers/modal.reducer'
import { ModalRegistrationInner } from "./ModalRegistrationInner";
import { inputInjectChange } from "../../../functions/Modal/registrationInputInjectChange";
import Button from "../../Buttons/Button"
import { Extentions, VariantsEnum } from "../../Buttons/Types/Button.component.types"
import classes from './modalRegistration.module.css'

const {clearModal} = modalActionCreators


export const ModuleRegistration:FC = () => {
    const [initialize, setInitialize] = useState(false)
    const [tempValues, setChange] = useState({})
    const [isTempValuesDone, setTempValuesDone] = useState(false)
    const inputs = useSelector<RootState, InitialStateLoginRegistrationInputs[]>(state => state.modal.login_registraton.inputs)
    useEffect(() => {
        let fields:any = {}
        for (let i = 0; i < inputs.length; i++){{
            fields[inputs[i].name] = ""
        }}
        setChange({...fields})
        setTempValuesDone(true)
    }, [])
    useEffect(() => {
        if (isTempValuesDone){
            setInitialize(true)
        }
    }, [isTempValuesDone])
    const cb = useSelector<RootState, (args:any) => void>(state => state.modal.login_registraton.cb)
    const dispatch:AppDispatch = useDispatch()
    const closeHandler = () => {
        dispatch(clearModal())
    }
    return ( <>
        {initialize ?  
            (
                <div className={classes.registrationWrapper}>
            <ModalRegistrationInner 
            inputs={inputInjectChange(inputs, setChange, tempValues)}
            />
            <Button 
            text="Регистрация"
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
        ) : (
            <>
            </>
        )    
        }
        </> )
}