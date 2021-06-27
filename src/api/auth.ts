import { RegistrationDataType, LoginInType } from './Types';
import axios from 'axios'
import {instanceUserURL} from '../config/api'

const instance = axios.create({
    baseURL: instanceUserURL
})

class userAPI{
    getLogin(){

    }
    toRegistrate(data: RegistrationDataType){
        return instance.post("/createUser", data)
    }
    toLogin(data: LoginInType){
        return instance.post("/loginIn", data)
    }
}

export default new userAPI()