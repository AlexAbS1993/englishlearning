import { gameStaging } from '../gameStaging'
import { wordsListType } from '../Types/wordsPlaying.types'
import {wordsPlayingStack} from '../wordsPlayingStack'

const cathegories = ["food", "movie", "games"]
const wordCreator = (i:number) => {
    return {
        value: `TEST_NUMBER_${i}`,
        engDiscription: "test",
        ruTranslate: `${i}`,
        imgSrc: "www.vk.com/a.jpeg",
        cathegories: cathegories[Math.floor(Math.random() * cathegories.length)] as string,
        awareness: Math.floor(Math.random() * 4) as 0|1|2|3
    }
}

const sample = (itterations: number):wordsListType => {
    let result = []
    for (let i = 0; i < itterations; i++){
        result.push(wordCreator(i))
    }
    return result
}

describe("Words Playing Stack currently works", ()=> {
    test("func without config works currently", () => {
        let datas = wordsPlayingStack(sample(11))
        expect(datas.length).toBe(10)
    })
    test("func must return array with less than 10 objects", () => {
        let datas = wordsPlayingStack(sample(5))
        expect(datas.length).toBeLessThan(10)
    })
    test("func must return array with config currently", () => {
        let datas = wordsPlayingStack(sample(25), {awareness: 1})
        expect(datas[0].awareness).toBe(1)
    })
    test("func must return array with both config currently", () => {
        let datas = wordsPlayingStack(sample(1000), {awareness: 1, cathegories: "movie"})
            expect(datas[0].awareness).toBe(1)
            expect(datas[0].cathegories).toBe("movie")     
    })
})

describe("gameStaging function works currently", () => {
    let wordList
    let game: {takeAChoise: (answer:string, hints?: number) => any[], getAWord: () => string}
    beforeEach(() => {
        wordList = wordsPlayingStack(sample(500), {awareness: 1, cathegories: "movie"})
        game = gameStaging(wordList)
    })
    test("a choice returns less 11 length array", () => {
        let result: any[]
        for (let i = 0; i < wordList.length; i++){
            result = game.takeAChoise(`${Math.random()}`)
        }
        expect(result!.length).toBeLessThan(11)
    })
    test("a choise returns array with an objects structure", () => {
        let result: any[]
        for (let i = 0; i < wordList.length; i++){
            result = game.takeAChoise(`${Math.random()}`)
        }
        console.log(result!)
        expect(typeof result!).toBe("object")
        expect(typeof result![0]).toBe("object")
        expect("answer" in result![0]).toBeTruthy()
        expect("value" in result![0]).toBeFalsy()
    })
})
