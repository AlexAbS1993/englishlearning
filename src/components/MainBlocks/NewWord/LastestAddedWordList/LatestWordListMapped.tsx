import React, { FC } from "react";
import { LatestWordsMappedType } from "./Types/WordListWrapper.types";

export const LatestWordListMapped:FC<LatestWordsMappedType> = React.memo(({value}) => {
    return (
        <>
            {value}
        </>
    )
})