import { wordCreateType } from "../../../api/Types";

export type wordsListType = wordCreateType[]
export type configType = {
    "awareness"?: 0|1|2|3,
    ["cathegories"]?: string
}