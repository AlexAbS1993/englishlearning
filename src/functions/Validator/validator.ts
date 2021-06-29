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
            if (!value.match(new RegExp(schema.is.value[0], schema.is.value[1]))){
                errorSetter(message)
                return
            }
        }
    }
    errorSetter("")
    return
}