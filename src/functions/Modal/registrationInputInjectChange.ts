import { InitialStateLoginRegistrationInputs } from './../../store/reducers/Types/modal.reducer.types';

export const inputInjectChange = (input: InitialStateLoginRegistrationInputs[], setChange: any, tempValues:any) => {
    let newInputs = []
    for (let i = 0; i < input.length; i++){
        newInputs.push({...input[i], onChange: (e: any) => {setChange({...tempValues, [input[i].name]: e.target.value})}})
    }
    return newInputs
}