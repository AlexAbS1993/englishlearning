import { FC } from "react";
import classes from './mainWrapper.module.css'

export const MainWrapper:FC = ({children}) => {
    return (
        <div className={classes.MainWrapper}>
            <div className={classes.MainInnerWrapper}>
                {children}
            </div>
        </div>
    )
}