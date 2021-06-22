import { FC } from "react"
import { typeOfLink } from "../../functions/Links/typeOfLink"
import { LinkTypes } from "./Types/link.types"

export const Link:FC<LinkTypes> = ({type, text, img, link}) => {
    return (
        <>
        {
            typeOfLink(type, link, text, img)
        }
        </>
    )
}