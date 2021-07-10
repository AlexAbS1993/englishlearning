export const validator = (errorSetter: any, schema: any, value: string) => {
    if (schema.len){
        if (schema.len.value.length){
            let len = schema.len.value
            let message = schema.len.message
            if (value.length < len[0]){
                errorSetter(message)
                return
            }
            if (value.length > len[1]){
                errorSetter(message)
                return
            }
        }
    }
    if (schema.is){
        if (schema.is.type === "regexp"){
            let message = schema.is.message
            if (Array.isArray(schema.is.value)){
                if (!value.match(new RegExp(schema.is.value[0], schema.is.value[1]))){
                    errorSetter(message)
                    return
                }
            }
        }
    }
    if (schema.isUrl){
        if (schema.isUrl.type === "regexp"){
            let message = schema.isUrl.message
            if (Array.isArray(schema.isUrl.value)){
                if (!value.match(new RegExp(schema.isUrl.value[0], schema.isUrl.value[1]))){
                    errorSetter(message)
                    return
                }
            }
        }
    }
    errorSetter("")
    return
}