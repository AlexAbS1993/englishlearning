export const notErrExtractor = (type: "not"|"err", res:any):string => {
    switch(type){
        case "err": {
            if (res.response){
                return res.response.data.message
            }
            return "Сервер не отвечает"
        }
        case "not": {
            return res.message
        }
        default: return ""
    }
}