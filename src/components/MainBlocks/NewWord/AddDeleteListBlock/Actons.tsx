import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../Buttons/Button";
import { Extentions, VariantsEnum } from "../../../Buttons/Types/Button.component.types";
import classes from './addDelete.module.css'
import { modalActionCreators } from "../../../../store/reducers/modalReducer/modal.reducer";
import { validateInjector } from "../../../../functions/Validator/validateInjector";
import { validateAPI } from "../../../../api/validate";
import { schemaParser } from "../../../../functions/Validator/schemaParser";
import { newWordForm } from "../../../../assets/datas/newword.data";
import { ThunkDispatch } from "../../../../store/Types/store.types";
import { createNewWordThunk, deleteWord } from "../../../../store/reducers/wordReducer/wordReducer";
import { searchDelete } from "../../../../assets/datas/searchDelete.datas";
const {setOpen, setType, setMarkup, setPage} = modalActionCreators

export const Actions:FC = () => {
    const dispatch:ThunkDispatch = useDispatch()
    const newWordModalFunc = useCallback(async() => {
        dispatch(setType("newWord"))
        dispatch(setPage("newWord"))
        let schema = await schemaParser(validateAPI.getNewWordValidate)
        dispatch(setMarkup({
            modalType:"newWord", 
            inputs: validateInjector(schema, newWordForm), 
            cb: (data) => {dispatch(createNewWordThunk(data))}
        }))
        dispatch(setOpen(true))
    }, [dispatch])
    const deleteWordModalFunc = useCallback(async() => {
        dispatch(setType("search"))
        dispatch(setMarkup({
            modalType:"search", 
            inputs: searchDelete, 
            cb: (id:number) => {dispatch(deleteWord(id))}
        }))
        dispatch(setOpen(true))
    }, [dispatch])
    return (
        <div className={classes.actionButtonsContainer}>
            <div>
                <Button 
                text="Добавить слово"
                variant={VariantsEnum.modal_affremative_accept}
                extention={Extentions.modal_registration}
                cb={() => {newWordModalFunc()}}
                />
            </div>
            <div>
                <Button 
            text="Удалить слово"
            variant={VariantsEnum.modal_affremative_decline}
            extention={Extentions.modal_registration}
            cb={() => {deleteWordModalFunc()}}
                />
            </div>
        </div>
    )
}