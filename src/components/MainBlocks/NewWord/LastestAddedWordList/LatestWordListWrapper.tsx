import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLastThreeWordsThunk } from "../../../../store/reducers/wordReducer/wordReducer"
import { RootState } from "../../../../store/Types/store.types"
import { LatestWordListMapped } from "./LatestWordListMapped"
import { LatestWordListWrapperTypes, LatestWordsListType } from "./Types/WordListWrapper.types"

const WordListWithAuth = () => {
    const [initialize, setInitialize] = useState(false)
    const words = useSelector<RootState, LatestWordsListType[]>(state => state.word.lastWords)
    const newWordAddedToggle = useSelector<RootState, boolean>(state => state.notify.toggles.isWordAdded)
    const wordDeletedToggle = useSelector<RootState, boolean>(state => state.notify.toggles.isWordDeleted)
    const dispatch = useDispatch()
    useEffect(() => {
        if (newWordAddedToggle||wordDeletedToggle){
            dispatch(getLastThreeWordsThunk())
        }
        if (!initialize){
            dispatch(getLastThreeWordsThunk())
        }
    }, [dispatch, newWordAddedToggle, initialize, wordDeletedToggle])
    useEffect(() => {
        if (words.length > 1){
            setInitialize(true)
        }
    }, [words])
    return (
        <>
        {
            initialize ? (
                <ul>
                    {
                        words.map(e => {
                            return (
                                <li key={`${e.word.value}${e.wordId}`}>
                                    <LatestWordListMapped 
                                    value={e.word.value}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            ) : (
                <>...</>
            )
        }
        </>      
    )
}

const WordListWithOutAuth = () => {
    const [initialize, setInitialize] = useState(false)
    return (
        <ul>

        </ul>
)
}





export const WordList:FC<LatestWordListWrapperTypes> = ({isAuth}) => {
        return (
            <div>
               {
                   isAuth ? (
                    <WordListWithAuth />
                   ):(
                    <WordListWithOutAuth />
                   )
               }
            </div>
        ) }