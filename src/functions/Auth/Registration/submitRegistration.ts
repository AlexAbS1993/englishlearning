import { copyStatisticFromGuest } from "../Guest/copyStatisticFromGuest"

export const testFunc = (data:any) => {
    if (data.isStatisticCopy){
        console.log(copyStatisticFromGuest(data))
    }
   else {
    console.log({
        login: data.login,
        password: data.password
    })
   }
}