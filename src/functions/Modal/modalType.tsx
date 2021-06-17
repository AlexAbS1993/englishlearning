import { FC } from "react";
import { ModalAffermative } from "../../components/Modals/ModalAffermative/ModalAffermative";
import { ModalLogin } from "../../components/Modals/ModalLogin";
import { ModalRegistration } from "../../components/Modals/ModalRegistration";
import { ModalComponentTypeType } from "../../components/Modals/Types/modal.component.types";

export function modalType(type:ModalComponentTypeType):ReturnType<FC>{
    switch(type){
        case "affermative": {
            return <ModalAffermative />
        }
        case "login": {
            return <ModalLogin />
        }
        case "registration": {
            return <ModalRegistration />
        }
        default: return (
            <> 
            </>
        )
    }
}