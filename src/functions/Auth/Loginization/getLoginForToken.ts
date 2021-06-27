import userAPI from '../../../api/auth'
const {getLogin} =  userAPI
export const getLoginForToken = async() => {
    let response 
    response = await getLogin()
    return response
}