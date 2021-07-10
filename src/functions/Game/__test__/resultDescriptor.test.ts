import { resultDecriptor } from '../resultsDecriptor'

const answers = [
    {
        step: 0, hints: 0, answer: "Дом", current: 'Дом'
    },
    {
        step: 1, hints: 0, answer: "Дом", current: 'ом'
    },
    {
        step: 2, hints: 1, answer: "Дом", current: 'Дом'
    },
    {
        step: 3, hints: 0, answer: "Дом", current: 'Хом'
    },
]


describe("resultDescriptor currently works", () => {
    let result = resultDecriptor(answers)
    test("it returns an object with two keys", () => {
        expect("details" in result).toBeTruthy()
        expect("points" in result).toBeTruthy()
        expect("result" in result).toBeFalsy()
    })
    test("the details must be an array and points must be a number not less than 0", () => {
        expect(Array.isArray(result.details)).toBe(true)
        expect(typeof result.points).toBe("number")
        expect(result.points).not.toBeLessThan(0)
    })
    test("current count of points", () => {
        expect(result.points).toBe(8)
    })
})