import {isGuest} from './isGuest'
import {createGuest} from './createGuest'
import {isNewGuest} from './isNewGuest'
import {copyStatisticFromGuest} from './copyStatisticFromGuest'

describe("Guests functions testing", () => {
    describe("isGuest test-suit", () => {
        test("isGuest does not return null", () => {
            expect(isGuest(true)).not.toBeNull()
        })
        test("isGuest must return a boolean", () => {
            expect(typeof isGuest(true)).toBe("boolean")
        })
        test("isGuest returns false if it is received false", () => {
            let isAuth = false
            expect(isGuest(isAuth)).toBe(false)
        })
        test("isGuest returns an error if its argument is not a boolean", () => {
            // @ts-ignore
            expect(isGuest.bind(null, "i am a string")).toThrowError()
            // @ts-ignore
            expect(isGuest.bind(null, 42)).toThrowError()
            // @ts-ignore
            expect(isGuest.bind(null, [42, "i am a string"])).toThrowError()
            // @ts-ignore
            expect(isGuest.bind(null, {"string": 42})).toThrowError()
        })
    })
    describe("createGuest test-suite", () => {
        test("createGuest has no undefined return", () => {
            expect(createGuest(0)).not.toBeUndefined()
        })
        test("It returns a number", () => {
            expect(typeof createGuest(0)).toBe("number")
        })
        test("It  returns a value increased by one", () => {
            let prevNumber: number = 3
            expect(createGuest(prevNumber)).toBe(4)
        })
        test("It returns an error if required the argument less 0", () => {
            expect(createGuest.bind(null, -1)).toThrowError()
        })
    })
    describe("isNewGuest test-suite", () => {
        test("It must be defined", () => {
            expect(isNewGuest()).toBeDefined()
        })
        test("It returns a boolean value", () => {
            expect(typeof isNewGuest()).toBe("boolean")
        })
        test("it returns a value corresponding with localStorage value", () => {
            let localStorageToken = !Boolean(localStorage.getItem("guestlearning"))
            expect(isNewGuest()).toEqual(localStorageToken)
        })
    })
    describe("copyStatisticFromGuest test-suite", () => {
        beforeEach(() => {
            localStorage.setItem("guestlearning", "999666")
            localStorage.setItem("gueststatistic", JSON.stringify({
                points: 10
            }))

        })
        afterEach(() => {
            localStorage.removeItem("guestlearning")
            localStorage.removeItem("gueststatistic")

        })
        test("it returnes undefined", () => {
            
        })
        
    })
})

