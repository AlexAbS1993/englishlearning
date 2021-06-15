export function isNewGuest():boolean{
    return localStorage.getItem("guestlearning") ? false : true
}