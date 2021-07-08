import axios from 'axios'
import { instanceWordURL } from '../config/api'
import { extractToken } from '../functions/Auth/Loginization/insertToken'
import { wordCreateType } from './Types'

const instance = axios.create({
    baseURL: instanceWordURL
})

export const wordsAPI = {
    createWord: async(data: wordCreateType) => {
        return instance.post('/addAtDict', data, {
            headers: {
                Authorization: extractToken()
            }
        })
    }
}