import axios from "axios"
import { instanceValidateURL } from "../config/api"

const instance = axios.create({
    baseURL: instanceValidateURL
})


export const validateAPI = {
    getRegistrationValidate: async() => {
        return instance.get("/registration")
    },
    getNewWordValidate: async() => {
        return instance.get('/newWord')
    }
}