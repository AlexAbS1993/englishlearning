export type SimpleButtonType = {
    variant: "simple"|"modal_affremative_accept"|"modal_affremative_decline",
    cb: (data: any) => void,
    text?:string
}