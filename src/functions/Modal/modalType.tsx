import React, { FC, Suspense } from "react";
import { ModalSearchAndAct } from "../../components/Modals/ModalSearchAndAct/ModalSearchAndAct";
import { ModalComponentTypeType } from "../../components/Modals/Types/modal.component.types";
import { ModalInitialStatePageTypeType } from "../../store/reducers/modalReducer/Types/modal.reducer.types";
const ModalAffermative = React.lazy(() => import("../../components/Modals/ModalAffermative/ModalAffermative") )
const ModalForm = React.lazy(() => import("../../components/Modals/ModalForm/ModalForm"))

export function modalType(type:ModalComponentTypeType, page?: ModalInitialStatePageTypeType):ReturnType<FC>{
    switch(type){
        case "affermative": {
            return <Suspense fallback={<div>...грузим</div>}> <ModalAffermative /> </Suspense>
        }
        case "login": {
            if (page){
                return <Suspense fallback={<div>...грузим</div>}> <ModalForm page={page}/> </Suspense>
            }
            return <></>
        }
        case "registration": {
            if (page){
                return <Suspense fallback={<div>...грузим</div>}> <ModalForm page={page}/> </Suspense>
            }
            return <> </>
        }
        case "newWord":{
            if(page){
                return <Suspense fallback={<div>...грузим</div>}> <ModalForm page={page}/> </Suspense>
            }
            return <> </>
        }
        case "search": {
            return <ModalSearchAndAct />
        }
        default: return (
            <> 
            </>
        )
    }
}