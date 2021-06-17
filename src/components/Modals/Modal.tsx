import { RootState, ThunkDispatch } from '../../store/Types/store.types';
import {useSelector, useDispatch} from 'react-redux'
import { ModalComponentTypeType } from './Types/modal.component.types';
import { FC } from 'react';
import classes from './modal.module.css'
import { modalType } from '../../functions/Modal/modalType';

export const Modal:FC = () => {
    const type = useSelector<RootState, ModalComponentTypeType>(state => state.modal.type)
    const isOpen = useSelector<RootState, boolean>(state => state.modal.isOpen)
    const dispatch:ThunkDispatch  = useDispatch()
    return (
        <>
            {
                isOpen ? (
                <div className={classes.modalWrapper} onClick={(e) => {e.preventDefault()}}> 
                    {
                        modalType(type)
                    }
                </div>
                ) : (
                <> 
                </>
                )
            }
        </>
    )
}