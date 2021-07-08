import { wordsListType } from '../Types/wordsPlaying.types'
import {wordsPlayingStack} from '../wordsPlayingStack'

const cathegories = ["food", "movie", "games"]
const wordCreator = (i:number) => {
    return {
        value: `TEST_NUMBER_${i}`,
        engDiscription: "test",
        ruTranslate: "тест",
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
        console.log(datas)
            expect(datas[0].awareness).toBe(1)
            expect(datas[0].cathegories).toBe("movie")     
    })
})