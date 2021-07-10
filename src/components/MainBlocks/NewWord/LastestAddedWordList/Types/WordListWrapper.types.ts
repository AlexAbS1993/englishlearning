import {wordType} from '../../../../../store/reducers/wordReducer/Types/wordReducer.types'

export type LatestWordListWrapperTypes = {
    isAuth: boolean
}

export type LatestWordsListType = {
    word: wordType,
    userId: number,
    wordId: number
}
export type LatestWordsMappedType = Pick<wordType, "value">