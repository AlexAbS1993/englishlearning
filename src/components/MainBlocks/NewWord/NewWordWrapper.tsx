import classes from "./newWord.module.css"
import { FC } from "react"

export const NewWordBlockWrapper:FC = ({children}) => {
    return (
        <div className={classes.newWordBlockWrapper} data-testid="wrapper">
            <div className={classes.newWordBlockInnerWrapper}>
                {children}
            </div>
        </div>
    )
}