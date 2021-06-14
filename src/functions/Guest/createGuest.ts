export function createGuest(prevGuest: number):number{
    if (prevGuest >= 0){
        localStorage.setItem("guestlearning", String(prevGuest + 1))
        return prevGuest + 1
    }
    throw new Error("An argument must be eather bigger or equal than 0")
}