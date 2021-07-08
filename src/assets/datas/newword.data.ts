import { newWordFormType } from "../../store/reducers/modalReducer/Types/modal.reducer.types";

export const newWordForm:newWordFormType[] = [
    {name: "value", id:"value", label: "Введите слово на английском", type:"text"},
    {name: "engDiscription", id:"engDiscription", label: "Введите описание на английском", type:"text"},
    {name: "ruTranslation", id:"ruTranslation", label: "Введите перевод", type:"text"},
    {name: "imgSrc", id:"imgSrc", label: "Вставьте ссылку на картинку-ассоциацию", type:"text"}
]