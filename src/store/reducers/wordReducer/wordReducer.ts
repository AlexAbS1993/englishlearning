import { wordsAPI } from "../../../api/word"
import { notErrExtractor } from "../../../functions/Error/noterrExtractor"
import { AppDispatch, ThunkDispatch } from "../../Types/store.types"
import { ErrorThunk, NotifyThunk, TogglerThunk } from "../NotifyErrorReducer/notify.reducer"
import { notyfiTypes } from "../NotifyErrorReducer/Types/notify.reducer.types"
import { AddNewWordBodyType, lastWordsType, responseBodyGetCountOfWordsType, responseBodygetLastThreeWordsType, wordReducerActionCreatorsType, wordReducerInitialStateTypes, wordType } from "./Types/wordReducer.types"

export const wordReducerInitialState = {
    myWords: [] as wordType[],
    currentWord: null as wordType|null,
    countOfWords: null as number|null,
    lastWords: [] as lastWordsType[],
    searchedWords: [] as lastWordsType[]
}

const prefix = "WORD_REDUCER:"

export const wordReducerActionCreators = {
    setWords: (data:wordType[]) => {
        return {type: `${prefix}SET_WORDS`, data} as const
    },
    setCountOfWords: (count: number) => {
        return {type: `${prefix}SET_COUNT_ALL`, count} as const
    },
    setLastsCount: (words: lastWordsType[]) => {
        return {type: `${prefix}LAST_WORDS`, words} as const
    },
    setSearchedWords: (list:  lastWordsType[]) => {
        return {type: `${prefix}SEARCHED_WORDS`, list} as const
    },
    setInitialSearcheWords: () => {
        return {type: `${prefix}SEARCHED_CLEAR`} as const
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
        case "WORD_REDUCER:SET_COUNT_ALL": {
            return {
                ...state,
                countOfWords: action.count
            }
        }
        case "WORD_REDUCER:LAST_WORDS": {
            return {
                ...state,
                lastWords: [...action.words.reverse()]
            }
        }
        case "WORD_REDUCER:SEARCHED_WORDS": {
            return {
                ...state,
                searchedWords: [...action.list]
            }
        }
        case "WORD_REDUCER:SEARCHED_CLEAR": {
            return {
                ...state,
                searchedWords: wordReducerInitialState.searchedWords
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
        dispatch(TogglerThunk(true, "isWordAdded"))
    }
    catch(e){
        dispatch(ErrorThunk(notErrExtractor("err", e)))
    }
}

export const getCountOfWordsThunk = () => async(dispatch: ThunkDispatch) => {
    try{
        const request = await wordsAPI.getCountOfWords()
        let body:responseBodyGetCountOfWordsType = request.data
        dispatch(wordReducerActionCreators.setCountOfWords(body.count))
    }
    catch(e){

    }
}

export const getLastThreeWordsThunk = () => async(dispatch: ThunkDispatch) => {
    try{
        const request = await wordsAPI.getLastAddedWords(3)
        let body:responseBodygetLastThreeWordsType = request.data
        dispatch(wordReducerActionCreators.setLastsCount(body.words))
    }
    catch(e){

    }
}

export const getSearchWord = (value: string) => async(dispatch:AppDispatch) => {
    try{
        const list = await wordsAPI.getWordByLetters(value)
        let body = list.data
        dispatch(wordReducerActionCreators.setSearchedWords(body.words))
    }
    catch(e){

    }
}

export const deleteWord = (id: number) => async(dispatch:ThunkDispatch) => {
    try{
        let response = await wordsAPI.deleteWord(id)
        let body = response.data
        dispatch(NotifyThunk(body.message, notyfiTypes.word_deleted))
        dispatch(TogglerThunk(true, "isWordDeleted"))
    }
    catch(e){
        dispatch(ErrorThunk(notErrExtractor("err", e)))
    }
}