import { FC } from "react";
import React from 'react'
import classes from "./newWord.module.css";
import { wordsCountType } from "./Types/newWord.types";

export const WordsCount:FC<wordsCountType> = React.memo(({count}) => {
    return (
        <div className={classes.wordsCountWrapper}>
                <span>Количество слов</span>
                <h4>{count}</h4>
        </div>
    )
})