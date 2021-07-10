import { modalReducer } from './reducers/modalReducer/modal.reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { notifyReducer } from './reducers/NotifyErrorReducer/notify.reducer';
import { authReducer } from './reducers/authReducer/auth.reducer';
import { wordReducer } from './reducers/wordReducer/wordReducer';

const reducers = combineReducers({
    modal: modalReducer,
    notify: notifyReducer,
    user: authReducer,
    word: wordReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));
(window as any).store = store