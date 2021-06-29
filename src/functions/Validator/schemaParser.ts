
export const schemaParser = async(api:any) => {
    try{
        let response = await api()
    return {
        ...response.data.schema
    }
}
    catch(e){
        console.log(e.message)
    }    
}