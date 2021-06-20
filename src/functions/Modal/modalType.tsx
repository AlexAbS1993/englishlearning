import { FC } from "react";
import { ModalAffermative } from "../../components/Modals/ModalAffermative/ModalAffermative";

import { ModuleRegistration } from "../../components/Modals/ModalRegistration/ModalRegistration";
import { ModalComponentTypeType } from "../../components/Modals/Types/modal.component.types";

export function modalType(type:ModalComponentTypeType):ReturnType<FC>{
    switch(type){
        case "affermative": {
            return <ModalAffermative />
        }
        case "login": {
            return <div></div>
        }
        case "registration": {
            return <ModuleRegistration />
        }
        default: return (
            <> 
            </>
        )
    }
}