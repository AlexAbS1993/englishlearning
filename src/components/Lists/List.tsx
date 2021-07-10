import { FC } from "react"
import { ActiveSearchList } from "./ActiveSearchList"
import { ListType } from "./Types/list.types"

export const List:FC<ListType> = ({type, list, cb}) => {
    if (type === "searchList"){
        return <ActiveSearchList list={list} cb={cb}/>
    }
    return <>

    </>
}