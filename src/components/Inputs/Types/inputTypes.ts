export type InputSimpleType = {
    id: string,
    type: string,
    label?: string,
    name: string, 
    onChange: (e: any) => void,
    labelImg?: string,
    schema?: any,
    placeholder?:string,
    value?:string,
    toggleForce?:boolean,
    forceValue?: string
}