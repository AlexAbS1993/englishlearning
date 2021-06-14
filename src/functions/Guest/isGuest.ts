export function isGuest(isAuth: boolean):boolean|never{
    if (typeof isAuth === "boolean"){
        return isAuth ? true : false
    }
    throw new Error("It is only boolean requred")
}