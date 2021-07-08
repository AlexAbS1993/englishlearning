import {render} from '@testing-library/react'
import { Provider } from 'react-redux';
import {NewWordBlock} from '../NewWord'
import configureMockStore from "redux-mock-store"
import thunk from 'redux-thunk'

let mockStore = configureMockStore([thunk])

describe("newWord render test", () => {
    test("it is in document", () => {
        const store = mockStore({
            user: { isAuth: false }
          });
        let block = render(
        <Provider store={store}>
            <NewWordBlock />
        </Provider>)
        let wrapper = block.getByTestId("wrapper")
        expect(wrapper).toBeInTheDocument()
        expect(wrapper).toHaveClass("newWordBlockWrapper")
    })
    
})