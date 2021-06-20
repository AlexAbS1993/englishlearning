import { FC } from "react"
import { useDispatch } from "react-redux"
import Button from "../components/Buttons/Button"
import { Modal } from "../components/Modals/Modal"
import { AppDispatch } from "../store/Types/store.types"
import { modalActionCreators } from "../store/reducers/modal.reducer"
import { Extentions, VariantsEnum } from "../components/Buttons/Types/Button.component.types"
import { InitialStateLoginRegistrationInputs } from "../store/reducers/Types/modal.reducer.types"
const {setOpen, setType, setMarkup} = modalActionCreators

const inputs: InitialStateLoginRegistrationInputs[] = [
    {name: "login", id:"login", label: "Введите логин", type:"text"},
    {name: "password", id:"password", label: "Введите пароль", type:"password"},
]

export const Test:FC = () => {
    const dispatch:AppDispatch = useDispatch()
    const testFunc = (data:any) => {
        console.log(data)
    }
    const openModal = () => {
        dispatch(setType("registration"))
        dispatch(setMarkup({modalType:"registration", inputs: inputs, cb: testFunc}))
        dispatch(setOpen(true))
    }
    return (
        <>
            <Modal />
            <Button variant={VariantsEnum.simple_small} cb={openModal} text="Тест" extention={Extentions.simple}/>
        </>
    )
}