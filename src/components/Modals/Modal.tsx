import { RootState } from '../../store/Types/store.types';
import {useSelector} from 'react-redux'
import { ModalComponentTypeType } from './Types/modal.component.types';
import { FC } from 'react';
import classes from './modal.module.css'
import { modalType } from '../../functions/Modal/modalType';
import {useTransition, animated} from 'react-spring'
import { ModalInitialStatePageTypeType } from '../../store/reducers/modalReducer/Types/modal.reducer.types';

export const Modal:FC = () => {
    const type = useSelector<RootState, ModalComponentTypeType>(state => state.modal.type)
    const page = useSelector<RootState, ModalInitialStatePageTypeType>(state => state.modal.page)
    const isOpen = useSelector<RootState, boolean>(state => state.modal.isOpen)
    const transition = useTransition(isOpen, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })
    return (
        <>
            {
                transition((style, item) => item ? <animated.div style={style} className={classes.modalWrapper} onClick={(e) => {e.stopPropagation()}}> 
                {
                    modalType(type, page)
                }
            </animated.div>
            :
            <></>)
            }
        </>
    )
}
