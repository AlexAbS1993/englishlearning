import { FC } from "react";

import classes from './linkblock.module.css'
import { linkBlockTypes } from "./Types/linkblock.types";
import { LinkBlockAuth } from "./LinkBlockAuth";
import { LinkBlockWithoutAuth } from "./LinkBlockWithoutAuth";

export const LinkBlock:FC<linkBlockTypes> = ({isAuth}) => {
    return (
        <div className={classes.linkBlockWrapper}>
            {
                isAuth ? (
                    <LinkBlockAuth />
                ) : (
                    <LinkBlockWithoutAuth />
                )
            }
        </div>
    )
}