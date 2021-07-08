import { wordsAPI } from "../../../api/word"
import { ThunkDispatch } from "../../Types/store.types"
import { NotifyThunk } from "../NotifyErrorReducer/notify.reducer"
import { notyfiTypes } from "../NotifyErrorReducer/Types/notify.reducer.types"
import { AddNewWordBodyType, wordReducerActionCreatorsType, wordReducerInitialStateTypes, wordType } from "./Types/wordReducer.types"

export const wordReducerInitialState = {
    myWords: [] as wordType[],
    currentWord: null as wordType|null,
    countOfWords: null as number|null
}

const prefix = "WORD_REDUCER:"

export const wordReducerActionCreators = {
    setWords: (data:wordType[]) => {
        return {type: `${prefix}SET_WORDS`, data} as const
    }
}

export const wordReducer = (state:wordReducerInitialStateTypes =wordReducerInitialState, action: wordReducerActionCreatorsType):wordReducerInitialStateTypes => {
    switch(action.type){
        case "WORD_REDUCER:SET_WORDS": {
            return {
                ...state,
                myWords: [...action.data]
            }
        }
        default: return state
    }
}


export const createNewWordThunk = (data: wordType) => async(dispatch:ThunkDispatch) => {
    try {
        const request = await wordsAPI.createWord(data)
        let body:AddNewWordBodyType = request.data
        dispatch(NotifyThunk(body.message, notyfiTypes.new_word_added))
    }
    catch(e){

    }
}