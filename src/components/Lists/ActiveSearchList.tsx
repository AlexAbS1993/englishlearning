import { FC } from "react";
import { ActiveSearchPropsType } from "./Types/list.types";

export const ActiveSearchList:FC<ActiveSearchPropsType> = ({list, cb}) => {
    return (
        <ul>
        {
            list.map(e => {
                return <li onClick={() => {cb(e.word.value, e.wordId)}} key={e.wordId}>{e.word.value}</li>
            })
        }
        </ul>
    )
}