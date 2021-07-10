import { ModalSeatchInputsType } from "../../components/Modals/ModalSearchAndAct/Types/modalSearchAndAct.types"
import { InitialStateLoginRegistrationInputs } from "../../store/reducers/modalReducer/Types/modal.reducer.types"


export function inputInjectChange<T extends ModalSeatchInputsType|InitialStateLoginRegistrationInputs>(input: T[], setChange: any, tempValues?:any){
    let newInputs:(T&{onChange: (e: any) => void})[] = [] as (T&{onChange: (e: any) => void})[]
    for (let i = 0; i < input.length; i++){
        if (input[i].type === "text" || input[i].type === "password"){
            newInputs.push({...input[i], onChange: (e: any) => {setChange((prev:any) => {
                return {...prev, [input[i].name]: e.target.value}
            })}})
        }
        else if(input[i].type === "checkbox"){
            newInputs.push({...input[i], onChange: (e:any) => {
                setChange((prev:any) => {return {...prev,  [input[i].name]: e}})}})
        }
    }
    return newInputs
}