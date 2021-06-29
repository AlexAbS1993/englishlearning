export const insertToken = (isRemember: boolean, token: string) => {
    console.log(isRemember, token)
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