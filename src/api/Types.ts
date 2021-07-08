import { wordType } from "../store/reducers/wordReducer/Types/wordReducer.types"

export type responseType = {
    data: any,
    message: string
}


type statisticGuestType = {
    points: number
}

export type RegistrationDataType = {
    login: string,
    password: string,
    statistic?: statisticGuestType
}

type RememberMyType = {
    isRememberMe: boolean
}

export type LoginInType = Omit<RegistrationDataType, "statistic">&RememberMyType

export type wordCreateType = wordType