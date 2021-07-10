import { wordReducerActionCreators, wordReducerInitialState } from "../wordReducer";

export type wordReducerInitialStateTypes = typeof wordReducerInitialState

export type wordReducerActionCreatorsType = ReturnType<typeof wordReducerActionCreators[keyof typeof wordReducerActionCreators]>

export type wordType = {
    value: string,
    engDiscription: string,
    ruTranslate: string,
    imgSrc: string,
    cathegories: string,
    awareness: 0|1|2|3
}
export type AddNewWordBodyType = {
    message: string
}

export type returnDecriptorTypes = {
    details: boolean[],
    points: number
}

export type responseBodyGetCountOfWordsType = {
    message: string,
    count: number
}
export type responseBodygetLastThreeWordsType = {
    message: string,
    words: lastWordsType[]
}

export type lastWordsType = {
    word: wordType,
    userId: number,
    wordId: number
}