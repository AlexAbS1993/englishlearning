import { InitialStateLoginRegistrationInputs } from './../../store/reducers/Types/modal.reducer.types';

export const inputInjectChange = (input: InitialStateLoginRegistrationInputs[], setChange: any, tempValues:any) => {
    let newInputs = []
    for (let i = 0; i < input.length; i++){
        if (input[i].type === "text" || input[i].type === "password"){
            newInputs.push({...input[i], onChange: (e: any) => {setChange({...tempValues, [input[i].name]: e.target.value})}})
        }
        else if(input[i].type === "checkbox"){
            newInputs.push({...input[i], onChange: (e:any) => {
                setChange({...tempValues,  [input[i].name]: e})}})
        }
    }
    return newInputs
}