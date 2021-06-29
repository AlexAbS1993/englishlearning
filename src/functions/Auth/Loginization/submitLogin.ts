import { responseType } from "../../../api/Types";
import userAPI from '../../../api/auth'
const {toLogin} = userAPI

export const submitLogin = async(data:any):Promise<any&responseType> => {
        let response = await toLogin(data)
        return response
}