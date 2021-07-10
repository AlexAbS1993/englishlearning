import { useCallback, useEffect, useMemo, useState } from "react"
import { ModalSeatchInputsType, stateListType } from "../../components/Modals/ModalSearchAndAct/Types/modalSearchAndAct.types"
import { InitialStateLoginRegistrationInputs } from "../../store/reducers/modalReducer/Types/modal.reducer.types"
import { inputInjectChange } from "../Modal/registrationInputInjectChange"

export function useInputCreate<T extends ModalSeatchInputsType|InitialStateLoginRegistrationInputs>(inputs: T[], initialize: boolean){
    const [inputsValues, setInputsValues] = useState({value: ""})
    const [isInputsInjeced, setInputsInjeced] = useState(false)
    const [isInputsBuild, setInputsBuild] = useState(false)
    const [inputsReady, setReady] = useState(false)
    useEffect(() => {
        if (isInputsBuild === true && isInputsBuild === true){
            setReady(true)
        }
    }, [isInputsInjeced, isInputsBuild])
    const definiteInputs:(T&{onChange: (e:any) => void})[] = useMemo(() => {
        setInputsInjeced(true)
        return inputInjectChange<T>(inputs, setInputsValues)
    }, []) as (T&{onChange: (e:any) => void})[]
    useEffect(() => {
        if (!initialize){
            if (inputs.length > 0){
                let fields:any = {}
                for (let i = 0; i < inputs.length; i++){
                    if (inputs[i].type === "checkbox"){
                        fields[inputs[i].name] = false
                    }
                    else {
                        fields[inputs[i].name] = ""
                    } 
                }
                setInputsValues({...fields})
                setInputsBuild(true)
            }   
        }
    }, [initialize])
    return {
        inputsValues, definiteInputs, inputsReady, setInputsValues
    }
}

export const useSubmition = (listOfSearched:stateListType[], inputsValues:{
    value: string;
}, cb: (args:any) => void) => {
    const [submit, setSubmit] = useState(false)
    const submitHandler = useCallback(() => {
        setSubmit(prev => !prev)
    }, [])
    useEffect(() => {
        if (submit){
                let newInputsValues
                let id
                for (let key in listOfSearched){
                    if (listOfSearched[key].word.value === inputsValues.value){
                        id = listOfSearched[key].wordId
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
    return {submitHandler}
}

export const useSearchList = (stateList:stateListType[]) => {
    const [listOfSearched, setList] = useState<stateListType[]>([])
    useEffect(() => {
        if (stateList.length > 0){
            setList([...stateList])
        }
    }, [stateList])
    return {listOfSearched}
}