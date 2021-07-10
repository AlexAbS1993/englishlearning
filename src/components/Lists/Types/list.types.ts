import { stateListType } from "../../Modals/ModalSearchAndAct/Types/modalSearchAndAct.types"

export type ListType = {
    type: "searchList"|"simpleList",
    list: stateListType[],
    cb: (value: string, id: number) => void
}

export type ActiveSearchPropsType = Pick<ListType, "list"|"cb">