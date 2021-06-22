import { FC } from 'react'
import classes from './navbar.module.css'
import { NavBarTypes } from './Types/navbar.types'

export const NavBar:FC<NavBarTypes> = ({type}) => {
    return (
        <div className={classes.navBarWrapper}>
            <h1>EnglishLearning</h1>
            {
                type === "outLogin" ? (
                    <>
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    )
}