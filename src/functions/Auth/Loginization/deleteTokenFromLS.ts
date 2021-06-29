export const deleteToken = () => {
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")
}