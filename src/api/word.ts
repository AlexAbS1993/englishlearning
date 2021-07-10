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
    },
    getCountOfWords: async() => {
        return instance.get('/count', {
            headers: {
                Authorization: extractToken()
            }
        })
    },
    getLastAddedWords: async(count: number) => {
        return instance.get(`/count/${count}`, {
            headers: {
                Authorization: extractToken()
            }
        })
    },
    getWordByLetters: async(value: string) => {
        return instance.get(`getForFragment?fragment=${value}`, {
            headers: {
                Authorization: extractToken()
            }
        })
    },
    deleteWord: async(id: number) => {
        return instance.delete(`del/${id}`, {
            headers: {
                Authorization: extractToken()
            }
        })
    }
}