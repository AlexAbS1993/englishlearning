import { InitialStateLoginRegistrationInputs } from "../../store/reducers/modalReducer/Types/modal.reducer.types";
import login from '../icons/login.png'
import password from '../icons/password.png'

export const  inputsRegistration: InitialStateLoginRegistrationInputs[] = [
    {name: "login", id:"login", label: "Введите логин", type:"text", labelImg: login},
    {name: "password", id:"password", label: "Введите пароль", type:"password", labelImg: password},
    {name: "isStatisticCopy", id:"statisticCopy", label:"Копировать статистику?", type: "checkbox"}
]

export const inputsLogin: InitialStateLoginRegistrationInputs[] =[
    {name: "login", id:"login", label: "Введите логин", type:"text", labelImg: login},
    {name: "password", id:"password", label: "Введите пароль", type:"password", labelImg: password},
    {name: "rememberMe", id:"rememberMe", label: "Запомнить меня", type:"checkbox"},
]
    