export const notErrExtractor = (type: "not"|"err", res:any):string => {
    switch(type){
        case "err": {
            return res.response.data.message
        }
        case "not": {
            return res.message
        }
        default: return ""
    }
}