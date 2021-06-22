import{ FC } from 'react'
import { NavLink } from 'react-router-dom'

export function typeOfLink(type:"icon"|"string", link:string, text?:string, img?:string):ReturnType<FC>{
    if (type === "icon"){
        return <>
        <NavLink to={`/${link}`}> <img src={img}/></NavLink>
        </>
    }
    if (type === "string"){
        return (
            <>
            <NavLink to={`/${link}`}>{text}</NavLink>
            </>
        )
    }
    return <></>
}

