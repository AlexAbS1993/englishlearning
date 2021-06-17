import { modalReducer } from './reducers/modal.reducer';
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk';

const reducers = combineReducers({
    modal: modalReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
(window as any).store = store

 
