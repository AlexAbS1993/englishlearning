import { actionCreators } from './../modal.reducer';
import { initialState } from "../modal.reducer"

export type ModalReducerInitialStateType = typeof initialState

type inferActionType<T> = T extends {[key: string]: infer Z} ? Z : never 
export type ModalReducerActionType = ReturnType<inferActionType<typeof actionCreators>>