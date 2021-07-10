import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInputCreate } from "../../../functions/Hooks/useInputCreate";
import { inputInjectChange } from "../../../functions/Modal/registrationInputInjectChange";
import { modalActionCreators } from "../../../store/reducers/modalReducer/modal.reducer";
import { notyfiTypes } from "../../../store/reducers/NotifyErrorReducer/Types/notify.reducer.types";
import { getSearchWord } from "../../../store/reducers/wordReducer/wordReducer";
import { RootState } from "../../../store/Types/store.types";
import Button from "../../Buttons/Button";
import { Extentions, VariantsEnum } from "../../Buttons/Types/Button.component.types";
import { List } from "../../Lists/List";
import { ModalSearchAndActInner } from "./ModalSearchAndActInner";
import { ModalSeatchInputsType, stateListType } from "./Types/modalSearchAndAct.types";


export const ModalSearchAndAct:FC = () => {
    const notType = useSelector<RootState, notyfiTypes>(state => state.notify.notifyType)
    const [initialize, setInitialize] = useState(false)
    const [isInputsInjeced, setInputsInjeced] = useState(false)
    const [isInputsBuild, setInputsBuild] = useState(false)
    const inputs = useSelector<RootState, ModalSeatchInputsType[]>(state => state.modal.search.inputs)
    const cb = useSelector<RootState, (args: any) => void>(state => state.modal.search.cb)
    const [list, setList] = useState<stateListType[]>([])
    const stateList = useSelector<RootState, stateListType[]>(state => state.word.searchedWords)
    const [forceToggle, setForceToggle] = useState(false)
    useEffect(() => {
        if (stateList.length > 0){
            setList([...stateList])
        }
    }, [stateList])
    const [inputsValues, setInputsValues] = useState({
            value: ""
    })
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (inputsValues.value.length > 1){
            dispatch(getSearchWord(inputsValues.value))
        }
    }, [inputsValues.value])
    const submitHandler = useCallback(() => {
        setSubmit(prev => !prev)
    }, [])
    useEffect(() => {
        if (submit){
                let newInputsValues
                let id
                for (let key in list){
                    if (list[key].word.value === inputsValues.value){
                        id = list[key].wordId
                    }
                }
                newInputsValues = {
                    value: {
                        value: inputsValues.value,
                        id: id
                    }
                }
                cb(newInputsValues.value.id)
                setSubmit(prev => !prev)
            }
    }, [submit, inputsValues, cb])
    useEffect(() => {
        if (!initialize){
            if (inputs.length > 0){
                let fields:any = {}
                for (let i = 0; i < inputs.length; i++){
                    if (inputs[i].type === "checkbox"){
                        fields[inputs[i].name].value = false
                    }
                    else {
                        fields[inputs[i].name] = {value: "", id: null}
                    } 
                }
                setInputsValues({...fields})
                setInputsBuild(true)
            }   
        }
    }, [initialize])
    const definiteInputs = useMemo(() => {
        setInputsInjeced(true)
        return inputInjectChange<ModalSeatchInputsType>(inputs, setInputsValues)
    }, [])

    useEffect(() => {
        if (isInputsBuild === true && isInputsInjeced === true){
            setInitialize(true)
        }
    }, [isInputsBuild, isInputsInjeced])
    const selectHandler = (value: string, id: number) => {
        setInputsValues({...inputsValues, value: value})
        setForceToggle(true)
        setTimeout(() => {
            setForceToggle(false)
        }, 200)
    }
    // Закрытие модального окна при получении соответствующей нотификации
    const closeHandler = () => {
        dispatch(modalActionCreators.clearModal())
    }
    useEffect(() => {
        if(notType === notyfiTypes.word_deleted){
            dispatch(modalActionCreators.clearModal())
        }
    }, [notType])
    return (
        <>
        {
            initialize ? (
                <div>
                    <form>
                <ModalSearchAndActInner 
                    inputs={definiteInputs}
                    forceValue={inputsValues}
                    forceToggle={forceToggle}
                />
                    </form>
                <List 
                list={list}
                cb={selectHandler}
                type="searchList"
                />
                <Button 
                extention={Extentions.modal_affremative}
                variant={VariantsEnum.modal_affremative_accept}
                text="Удалить слово"
                cb={submitHandler}
                />
                <Button 
                extention={Extentions.modal_affremative}
                variant={VariantsEnum.modal_affremative_decline}
                text="Закрыть"
                cb={closeHandler}
                />
                </div>
            ) : (
                <>
                </>
            )
        }
        </>
    )
}