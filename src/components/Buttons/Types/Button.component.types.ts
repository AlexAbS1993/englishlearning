export enum VariantsEnum {
    "modal_affremative_decline" = "modal_affremative_decline",
    "modal_affremative_accept" = "modal_affremative_accept",
    "simple_small" = "simple_small",
    "modal_registration_accept" = "modal_registration_accept",
    "modal_registration_decline" = "modal_registration_decline"
}

export enum Extentions {
    "modal_affremative" = "modal_affremative",
    "simple" =  "simple",
    "modal_registration" = "modal_registration"
}


export type SimpleButtonType = {
    variant: VariantsEnum,
    cb: (data: any) => void,
    extention: Extentions,
    text?:string
}
