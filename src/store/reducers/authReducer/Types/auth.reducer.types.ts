import { authInitialState, authActionCreators } from "../auth.reducer";

export type authInitialStateType = typeof authInitialState

export type authActionCreatorsType = ReturnType<typeof authActionCreators[keyof typeof authActionCreators]>

export type LoginResponseBodyType = {
        message: string,
        login: string,
        isRemember: boolean,
        id: number,
        statistic: any,
        token: string
}

export type loginInResponseBodyType = {
        login: string,
        id: number,
        message: string,
        statistic: any
}