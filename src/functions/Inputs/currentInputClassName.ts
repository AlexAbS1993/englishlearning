export function currentInputClassName(type: string, classes:any):string{
    if (type === "password"||type === "text"){
        return classes["inputWrapper"]
    }
    else {
        return classes["checkboxWrapper"]
    }
}