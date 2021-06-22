import { FC } from "react";
import { ModalAffermative } from "../../components/Modals/ModalAffermative/ModalAffermative";
import { ModalForm } from "../../components/Modals/ModalForm/ModalForm";
import { ModalComponentTypeType } from "../../components/Modals/Types/modal.component.types";
import { ModalInitialStatePageTypeType } from "../../store/reducers/Types/modal.reducer.types";

export function modalType(type:ModalComponentTypeType, page?: ModalInitialStatePageTypeType):ReturnType<FC>{
    switch(type){
        case "affermative": {
            return <ModalAffermative />
        }
        case "login": {
            if (page){
                return <ModalForm page={page}/>
            }
            return <></>
        }
        case "registration": {
            if (page){
                return <ModalForm page={page}/>
            }
            return <> </>
        }
        default: return (
            <> 
            </>
        )
    }
}