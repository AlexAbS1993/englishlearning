import { modalReducer } from './reducers/modal.reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    modal: modalReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
(window as any).store = store

 
