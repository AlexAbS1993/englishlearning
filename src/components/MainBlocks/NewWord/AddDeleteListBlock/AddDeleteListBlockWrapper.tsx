import { FC } from "react";
import { AddDeleteListBlockWrapperType } from "../Types/newWord.types";
import { Actions } from "./Actons";
import classes from './addDelete.module.css'
import { WordList } from "./List";

export const AddDeleteListBlockWrapper:FC<AddDeleteListBlockWrapperType> = ({isAuth}) => {
    if (isAuth){
        return (
            <div className={classes.addDeleteBlockWrapper}>
                <WordList />
                <Actions />
            </div>
        )
    }
    else {
        return (
            <div className={classes.addDeleteBlockWrapper}>
                <WordList />
                <Actions />
            </div>
        )
    }
}