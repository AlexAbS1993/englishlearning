import { Extentions, VariantsEnum } from "../Types/Button.component.types";
import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import Button from "../Button";

let variantOneSimpleButton = {
    extention: Extentions.simple,
    variant: VariantsEnum.simple_small,
    text: "I am a button",
    cb: () => {
        return "Click"
    }
}


describe("Every button types work correctly", () => {
    describe("Simple button type ts", () => {
        let button:any
        beforeEach(() => {
            button = render(<Button 
                extention={variantOneSimpleButton.extention}
                variant={variantOneSimpleButton.variant}
                text={variantOneSimpleButton.text}
                cb={variantOneSimpleButton.cb}
                />)
        })
        test("button exists on a page", () => {
            let {getByTestId} = button
            let realButton = getByTestId('simplebutton')
            expect(realButton).toBeInTheDocument()
        })
        test("button has classes both simple and simple_small",() => {
            let {getByTestId} = button
            expect(getByTestId("simplebutton").className).toBe("simple simple_small")
        })
        test("button has the current text-title", () => {
             let {getByTestId} = button
             expect(getByTestId("simplebutton").textContent).toBe("I am a button")
        })
        test("button has started gained callback", () => {
            

        })
    })
})