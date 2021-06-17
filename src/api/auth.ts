import { RegistrationDataType, LoginInType } from './Types';
import axios from 'axios'
import {instanceUserURL} from '../config/api'

const instance = axios.create({
    baseURL: instanceUserURL
})

class userAPI{
    async getLogin(){

    }
    async toRegistrate(data: RegistrationDataType){
        await instance.post("/createUser", data)
    }
    async toLogin(data: LoginInType){
        await instance.post("/loginIn", data)
    }
}

export default new userAPI()