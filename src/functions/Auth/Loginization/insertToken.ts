export const insertToken = (isRemember: boolean, token: string) => {
    if (isRemember){
        localStorage.setItem("token", token)
        return
    }
    sessionStorage.setItem("token", token)
    return
}

export const extractToken = () => {
    return localStorage.getItem("token")
}