import{ FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../components/Links/link.module.css'

export function typeOfLink(type:"icon"|"string", link:string, text?:string, img?:string):ReturnType<FC>{
    if (type === "icon"){
        return <>
        <NavLink to={`/${link}`}> <img src={img} alt="link pictures"/></NavLink>
        </>
    }
    if (type === "string"){
        return (
            <>
            <NavLink to={`/${link}`} className={classes.stringLink}>{text}</NavLink>
            </>
        )
    }
    return <></>
}

