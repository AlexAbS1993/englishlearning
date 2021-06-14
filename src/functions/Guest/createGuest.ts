export function createGuest(prevGuest: number):void{
    localStorage.setItem("guestlearning", String(prevGuest + 1))
}