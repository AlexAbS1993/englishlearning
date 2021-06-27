import { copyStatisticFromGuest } from "../Guest/copyStatisticFromGuest"
import userAPI from '../../../api/auth'
const {toRegistrate} =  userAPI

export type dataType = {
    login: string,
    password: string,
    isStatisticCopy: boolean
}

export const testFunc = async (data:dataType) => {
    let response
        if (data.isStatisticCopy){
            response = await toRegistrate(copyStatisticFromGuest(data))
        }
       else {
        response = await toRegistrate({
            login: data.login,
            password: data.password
        })
       }
       return response
}