import { FC } from "react"
import { useSelector } from "react-redux"
import { isGuest } from "../../functions/Auth/Guest/isGuest"
import { RootState } from "../../store/Types/store.types"
import { NavBar } from "./NavBar/NavBar"

export const PageWrapper:FC = ({children}) => {
    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
    return (
        <>
        <NavBar type={isGuest(isAuth)? "inLog":"outLogin"}/>
        {children}
        </>
    )
}