import { modalReducer } from './reducers/modalReducer/modal.reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { notifyReducer } from './reducers/NotifyErrorReducer/notify.reducer';

const reducers = combineReducers({
    modal: modalReducer,
    notify: notifyReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
(window as any).store = store

 
