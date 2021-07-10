import { resultsObj, wordsListType } from "./Types/wordsPlaying.types"

export const gameStaging = (wordList: wordsListType) => {
    let results: resultsObj[] = []
    let step = 0
    return {
        takeAChoise: (answer:string, hints: number = 0) => {
            results.push({step: step, answer: answer, current: wordList[step].ruTranslate, hints: hints})
            step += 1
            return results
        },
        getAWord: () => {
            return wordList[step].value
        }
    }
}