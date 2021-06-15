export function copyStatisticFromGuest(body:any):any {
    let statistic = JSON.parse(localStorage.getItem("gueststatistic")!)
    let updatedBody = {
        ...body,
        statistic: {...statistic}
    }
    return updatedBody
}