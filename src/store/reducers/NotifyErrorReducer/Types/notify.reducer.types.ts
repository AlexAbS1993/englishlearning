import { notifyActionCreators, notifyInitialState } from './../notify.reducer';


export type notifyInitialStateType = typeof notifyInitialState
export type notifyActionCreatorsType = ReturnType<typeof notifyActionCreators[keyof typeof notifyActionCreators]>

export enum notyfiTypes{
    "registration_done" = "registration_done",
    "login_done" = "login_done",
    "test" = "test",
    "new_word_added" = "new_word_added"
}