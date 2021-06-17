
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