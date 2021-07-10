import { FC } from "react";
import { AddDeleteListBlockWrapperType } from "../Types/newWord.types";
import { Actions } from "./Actons";
import classes from './addDelete.module.css'
import { WordList } from "../LastestAddedWordList/LatestWordListWrapper";

export const AddDeleteListBlockWrapper:FC<AddDeleteListBlockWrapperType> = ({isAuth}) => {
    return (
        <div className={classes.addDeleteBlockWrapper}>
                <WordList isAuth={isAuth}/>
                <Actions />
            </div>
    )          
}