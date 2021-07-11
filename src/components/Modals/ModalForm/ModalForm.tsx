import { FC, LegacyRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { notyfiTypes } from "../../../store/reducers/NotifyErrorReducer/Types/notify.reducer.types";

const {clearModal, clearModalForm} = modalActionCreators


const ModalForm:FC<ModalRegistrationLoginType> = ({page}) => {
    const formRef:LegacyRef<HTMLFormElement> = useRef(null)
    // Данные об инпутах
    const inputs = useSelector<RootState, InitialStateLoginRegistrationInputs[]>(state => state.modal.login_registraton.inputs)
    // Тип нотификации
    const notType = useSelector<RootState, notyfiTypes>(state => state.notify.notifyType)
    // Переключатель отчистки полей 
    const isFormNeedToClear = useSelector<RootState, boolean>(state => state.modal.isFormNeedToClear)
    // Данные из полей формы для отправки
    const [tempValues, setChange] = useState({})
    const [initialValues, setInitialValues] = useState({})
    // Состояние кнопки
    const [disabledButton, setDisabled] = useState(true)
    const [errorsState, setErrorsState] = useState<{[key:string]:boolean}>({})
    const setErrorsStateFunction = useCallback((name: string, value: boolean) => {
        setErrorsState(prev => {
            return {...prev, [name]: value} })
    }, [])
    useEffect(() => {
        let hasError = false
        for (let keys in errorsState){
            if (errorsState[keys] === true){
                hasError = true
            }
        }
        setDisabled(hasError)
    },[errorsState])
    // Отметка об окончании формирования полей и эффект формирования полей
    const [isTempValuesDone, setTempValuesDone] = useState(false)
    useEffect(() => {
        if (inputs.length > 0){
            let fields:any = {}
            let validatorState: any = {}
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].type === "checkbox"){
                    fields[inputs[i].name] = false
                }
                else {
                    fields[inputs[i].name] = ""
                    validatorState[inputs[i].name] = true
                } 
            }
            setChange({...fields})
            setInitialValues({...fields})
            setErrorsState({...validatorState})
            setTempValuesDone(true)
        }      
    }, [inputs])

    // Очистка полей по переключателю
    useEffect(() => {
        if (isFormNeedToClear){
            formRef.current?.reset()
            setChange(initialValues)
        }
    }, [isFormNeedToClear])

    //Переключатель отправки формы
    const [submit, setSubmit] = useState(false)
    const submitHandler = useCallback(() => {
        setSubmit(prev => !prev)
    }, [])
    
    // Колбек отправки формы и реакция на переключатель
    const cb = useSelector<RootState, (...args:any) => void>(state => state.modal.login_registraton.cb)
    useEffect(() => {
        if (submit){
            cb(tempValues)
            setSubmit(prev => !prev)
        }
    }, [submit, tempValues, cb])
    
    // Инициализация
    const [initialize, setInitialize] = useState(false)
    useEffect(() => {
        if (isTempValuesDone){
            setInitialize(true)
        }
    }, [isTempValuesDone])

    // Внедрение в инпуты функции изменения данных
    const definitiveInputs = useMemo(() => {
        return inputInjectChange<InitialStateLoginRegistrationInputs>(inputs, setChange, tempValues)
    }, [initialize])
    
    // =========================//
    const dispatch:AppDispatch = useDispatch()
    const closeHandler = useCallback(() => {
        dispatch(clearModal())
    }, [])
    const clearHandler = useCallback(() => {
        dispatch(clearModalForm(true))
        setTimeout(() => {
            dispatch(clearModalForm(false))
        }, 100)
    }, [])



    // Закрытие модального окна при получении соответствующей нотификации
    useEffect(() => {
        if (page === "registration" && notType === notyfiTypes.registration_done){
            closeHandler()
        }
        if (page === "login" && notType === notyfiTypes.login_done){
            closeHandler()
        }
        if (page === "newWord" && notType === notyfiTypes.new_word_added){
            clearHandler()
        }
    }, [notType, page])

    // Текст на кнопке в зависимости от переданной страницы
    const text = useMemo(() => {
        if (page === "registration"){
            return "Регистрация"
        }
        if (page === "login"){
            return "Войти"
        }
        if (page === "newWord"){
            return "Добавить слово"
        }
    }, [])

    // РЕНДЕР
    return ( <>
        {initialize ?  
            (
            <div className={classes.registrationWrapper}>
                <form ref={formRef}>
                    <ModalFormInner 
                    inputs={definitiveInputs}
                    submitDisabler={setErrorsStateFunction}
                    />
                </form>
            <div className={classes.modalRegistrationLoginButtonsWrapper}>
                <Button 
                text={text}
                variant={VariantsEnum.modal_registration_accept}
                extention={Extentions.modal_registration}
                cb={submitHandler}
                disabled={disabledButton}
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

export default ModalForm