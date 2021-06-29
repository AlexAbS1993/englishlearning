import { InitialStateLoginRegistrationInputs } from "../../store/reducers/modalReducer/Types/modal.reducer.types";

export const validateInjector = (schema: any, formObject: InitialStateLoginRegistrationInputs[]): (InitialStateLoginRegistrationInputs&{validator?: any})[] => {
    let formObjectWithValidation: (InitialStateLoginRegistrationInputs&{validator?: any})[] =  []
    formObject.forEach((element) => {
        if (schema[element.name]){
            formObjectWithValidation.push({...element, validator: {...schema[element.name]}})
        }
        else {
            formObjectWithValidation.push({...element})
        }
    })
    return formObjectWithValidation
}