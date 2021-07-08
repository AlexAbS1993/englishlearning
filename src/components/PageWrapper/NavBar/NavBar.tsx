import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/Types/store.types'
import { LinkBlock } from '../../LinkBlock/LinkBlock'
import { Link } from '../../Links/Link'
import classes from './navbar.module.css'
import { NavBarTypes } from './Types/navbar.types'

export const NavBar:FC<NavBarTypes> = ({type}) => {
    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
    return (
        <div className={classes.navBarWrapper}>
            <div className={classes.navBarInnerWrapper}>
            <div>
                <Link 
                text="EnglishLearning"
                type="string" 
                link="home"
                />
            </div>
            {
                type === "outLogin" ? (
                    <>
                    <LinkBlock 
                    isAuth={isAuth}
                    />
                    </>
                ) : (
                    <>
                     <LinkBlock 
                    isAuth={isAuth}
                    />
                    </>
                )
            }
            </div>
        </div>
    )
}