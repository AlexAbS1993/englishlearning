import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInputCreate, useSearchList, useSubmition } from "../../../functions/Hooks/useInputCreate";
import { modalActionCreators } from "../../../store/reducers/modalReducer/modal.reducer";
import { notyfiTypes } from "../../../store/reducers/NotifyErrorReducer/Types/notify.reducer.types";
import { getSearchWord, wordReducerActionCreators } from "../../../store/reducers/wordReducer/wordReducer";
import { RootState } from "../../../store/Types/store.types";
import Button from "../../Buttons/Button";
import { Extentions, VariantsEnum } from "../../Buttons/Types/Button.component.types";
import { List } from "../../Lists/List";
import { ModalSearchAndActInner } from "./ModalSearchAndActInner";
import { ModalSeatchInputsType, stateListType } from "./Types/modalSearchAndAct.types";


export const ModalSearchAndAct:FC = () => {
    const notType = useSelector<RootState, notyfiTypes>(state => state.notify.notifyType)
    const [initialize, setInitialize] = useState(false)
    const inputs = useSelector<RootState, ModalSeatchInputsType[]>(state => state.modal.search.inputs)
    const cb = useSelector<RootState, (args: any) => void>(state => state.modal.search.cb)
    const stateList = useSelector<RootState, stateListType[]>(state => state.word.searchedWords)
    const [forceToggle, setForceToggle] = useState(false)
    const {listOfSearched} = useSearchList(stateList)
    const {inputsValues, definiteInputs, inputsReady, setInputsValues} = useInputCreate(inputs, initialize)
    const {submitHandler} = useSubmition(listOfSearched, inputsValues, cb)
    const dispatch = useDispatch()
    useEffect(() => {
        if (inputsReady){
            setInitialize(true)
        }
    }, [inputsReady])
    
    useEffect(() => {
        if (inputsValues.value.length > 1){
            dispatch(getSearchWord(inputsValues.value))
        }
    }, [inputsValues.value])

    const selectHandler = (value: string, id: number) => {
        setInputsValues({...inputsValues, value: value})
        setForceToggle(true)
        setTimeout(() => {
            setForceToggle(false)
        }, 200)
    }
    // Закрытие модального окна при получении соответствующей нотификации
    const closeHandler = () => {
        dispatch(wordReducerActionCreators.setInitialSearcheWords())
        dispatch(modalActionCreators.clearModal())
    }
    useEffect(() => {
        if(notType === notyfiTypes.word_deleted){
            closeHandler()
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
                list={listOfSearched}
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