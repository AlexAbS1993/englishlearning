import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exitThunk } from '../../store/reducers/authReducer/auth.reducer'
import { RootState } from '../../store/Types/store.types'
import Button from '../Buttons/Button'
import { Extentions, VariantsEnum } from '../Buttons/Types/Button.component.types'
import { Link } from '../Links/Link'
import classes from './linkblock.module.css'

export const LinkBlockAuth = () => {
    // Селектор для логина
    const login = useSelector<RootState, string>(state => state.user.login!)
    // Диспатч
    const dispatch = useDispatch()
    // Функция для кнопки выхода из аккаунта
    const exitHandler = useCallback(() => {
        dispatch(exitThunk())
    }, [])
    // РЕНДЕР
    return (
        <div className={classes.linkBlockAuth}>
            <p>{login}</p> 
            <Button 
                variant={VariantsEnum.simple_small}
                text="Выход"
                extention={Extentions.simple}
                cb={exitHandler}
            />
            <Link 
            type="string"
            link="admin"
            text="A"
            />
        </div>
    )
}