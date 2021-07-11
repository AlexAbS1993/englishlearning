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
    if (localStorage.getItem("token")){
        return localStorage.getItem("token")
    }
    if (sessionStorage.getItem("token")){
        return sessionStorage.getItem("token")
    }
    return null
}