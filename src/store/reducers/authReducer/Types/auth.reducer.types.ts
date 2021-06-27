import { authInitialState, authActionCreators } from "../auth.reducer";

export type authInitialStateType = typeof authInitialState

export type authActionCreatorsType = ReturnType<typeof authActionCreators[keyof typeof authActionCreators]>

