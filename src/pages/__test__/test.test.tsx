import React from 'react'
import {render} from '@testing-library/react'
import Test from '../Test'

describe("Test page testing suit", () => {
    test("does h1 have current title", () => {
        let title = render(<Test />)
        let {getByTestId} = title
        expect(getByTestId("title").textContent).toBe("Hello")
    })
})