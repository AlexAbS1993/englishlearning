import { lastWordsType } from "../../../../store/reducers/wordReducer/Types/wordReducer.types"

export type ModalSeatchInputsType = {
    type: string,
    placeholder: string, 
    name: string,
    id: string
}

export type ModalSeatchInputsTypeInnerType = {
    inputs: (ModalSeatchInputsType&{onChange: (e:any) => void}&{validator?:any})[],
    forceValue: any,
    forceToggle: boolean
}

export type stateListType = lastWordsType