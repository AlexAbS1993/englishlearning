import { configType, wordsListType } from "./Types/wordsPlaying.types";


export const wordsPlayingStack = (wordsList:wordsListType, config?: configType):wordsListType => {
    if (config){
        return configMiddlewarePrepare(wordsList)
    }
    return formStack(wordsList)

    function formStack(wordsList: wordsListType){
        if (wordsList.length < 10){
            return wordsList
        }
        let result: wordsListType = []
        let used:number[] = []
        let wordsListLengthForIndexes = wordsList.length
        while (result.length < 10){
            let randomIndex = Math.floor(Math.random() * wordsListLengthForIndexes)
            if (used.some(e => e === randomIndex)){
                continue
            }
            used.push(randomIndex)
            result = [...result, {...wordsList[randomIndex]}]
        }
        return result
    }
    function configMiddlewarePrepare(wordsList:wordsListType){
        let middlewayResult: wordsListType = [...wordsList]
        if (config!.awareness){
            middlewayResult = middlewayResult.filter(e => {
                return e.awareness === config!.awareness
            })
        }
        if (config!.cathegories){
            middlewayResult = middlewayResult.filter(e => {
                return e.cathegories === config!.cathegories
            })
        }
        return formStack(middlewayResult)
    }
}

