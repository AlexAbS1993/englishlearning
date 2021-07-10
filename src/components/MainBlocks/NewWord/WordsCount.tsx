import { FC, useEffect, useState } from "react";
import classes from "./newWord.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Types/store.types";
import { getCountOfWordsThunk } from "../../../store/reducers/wordReducer/wordReducer";

export const WordsCount:FC = () => {
    const wordCount = useSelector<RootState, number|null>(state => state.word.countOfWords)
    const [isInitialize, setInitialized] = useState(false)
    const newWordAddedToggle = useSelector<RootState, boolean>(state => state.notify.toggles.isWordAdded)
    const wordDeletedToggle = useSelector<RootState, boolean>(state => state.notify.toggles.isWordDeleted)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!isInitialize){
            dispatch(getCountOfWordsThunk())
        }
        if (newWordAddedToggle||wordDeletedToggle){
            dispatch(getCountOfWordsThunk())
        }
    }, [newWordAddedToggle, isInitialize, dispatch, wordDeletedToggle])
    useEffect(() => {
        if (wordCount){
            setInitialized(true)
        }
    }, [wordCount])
    return (
        <>
             {
            isInitialize ? (
                <div className={classes.wordsCountWrapper}>
                <span>Количество слов</span>
                <h4>{wordCount}</h4>
                </div>
    ) : (
                <div>
                Загрузка...
                </div>
            )
        }
        </>)
}