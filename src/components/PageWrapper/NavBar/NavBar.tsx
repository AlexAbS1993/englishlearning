import { FC } from 'react'
import { LinkBlock } from '../../LinkBlock/LinkBlock'
import classes from './navbar.module.css'
import { NavBarTypes } from './Types/navbar.types'

export const NavBar:FC<NavBarTypes> = ({type}) => {
    return (
        <div className={classes.navBarWrapper}>
            <div className={classes.navBarInnerWrapper}>
            <h1>EnglishLearning</h1>
            {
                type === "outLogin" ? (
                    <>
                    <LinkBlock 
                    isAuth={false}
                    />
                    </>
                ) : (
                    <>
                    </>
                )
            }
            </div>
        </div>
    )
}