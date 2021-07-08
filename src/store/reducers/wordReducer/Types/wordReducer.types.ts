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