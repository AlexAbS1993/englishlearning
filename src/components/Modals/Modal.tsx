import { RootState } from '../../store/Types/store.types';
import {useSelector} from 'react-redux'
import { ModalComponentTypeType } from './Types/modal.component.types';
import { FC } from 'react';
import classes from './modal.module.css'
import { modalType } from '../../functions/Modal/modalType';
import {useTransition, animated} from 'react-spring'

export const Modal:FC = () => {
    const type = useSelector<RootState, ModalComponentTypeType>(state => state.modal.type)
    const isOpen = useSelector<RootState, boolean>(state => state.modal.isOpen)
    const transition = useTransition(isOpen, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })
    return (
        <>
            {
                transition((style, item) => item ? <animated.div style={style} className={classes.modalWrapper} onClick={(e) => {e.preventDefault()}}> 
                {
                    modalType(type)
                }
            </animated.div>
            :
            <></>)
            }
        </>
    )
}
