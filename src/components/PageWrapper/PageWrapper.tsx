import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/Types/store.types"
import { NavBar } from "./NavBar/NavBar"

export const PageWrapper:FC = ({children}) => {

    return (
        <>
        <NavBar type="outLogin"/>
        {children}
        </>
    )
}