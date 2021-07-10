import { returnDecriptorTypes } from "../../store/reducers/wordReducer/Types/wordReducer.types";
import { resultsObj } from "./Types/wordsPlaying.types";

export const resultDecriptor = (summary:resultsObj[]):returnDecriptorTypes => {
    let details: boolean[] = []
    let points:number = 0
    summary.forEach(e => {
        if (e.answer.match(new RegExp(`^${e.current}$`, "gi"))){
            details.push(true)
            points += pointsCount(e.hints)
        }
        else {
            details.push(false)
        }
    })
    return {
        details: details,
        points: points
    }
    function pointsCount(hints: number){
        switch(hints){
            case 0:{
                return 5
            }
            case 1: {
                return 3
            }
            case 2: {
                return 2
            }
            case 3: {
                return 1
            }
            default: return 0
        }
    }
}