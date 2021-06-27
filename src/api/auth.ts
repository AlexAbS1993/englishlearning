import { RegistrationDataType, LoginInType } from './Types';
import axios from 'axios'
import {instanceUserURL} from '../config/api'
import { extractToken } from '../functions/Auth/Loginization/insertToken';

const instance = axios.create({
    baseURL: instanceUserURL
})

class userAPI{
    getLogin(){
        return instance.get("/getLogin", {
            headers: {
                Authorization: extractToken()
            }
        })
    }
    toRegistrate(data: RegistrationDataType){
        return instance.post("/createUser", data)
    }
    toLogin(data: LoginInType){
        return instance.post("/loginIn", data)
    }
}

export default new userAPI()