export const errorDescription = (errorMessage: string):string => {
    switch (errorMessage){
        case "Network Error": {
            return "Сервер не отвечает"
        }
        default: return "Неизвестная ошибка"
    }
}