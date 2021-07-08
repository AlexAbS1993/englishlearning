import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/Types/store.types'
import { AddDeleteListBlockWrapper } from './AddDeleteListBlock/AddDeleteListBlockWrapper'
import { NewWordBlockWrapper } from './NewWordWrapper'
import { WordsCount } from './WordsCount'


export const NewWordBlock:FC = () => {
    const wordCount = 10
    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
    return (
        <NewWordBlockWrapper>
            <WordsCount count={wordCount} data-testid="wordCount"/>
            <AddDeleteListBlockWrapper 
            data-testid="addDeleteWrapper"
            isAuth={isAuth}
            />
        </NewWordBlockWrapper>
    )
}