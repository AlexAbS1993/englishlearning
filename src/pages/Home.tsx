import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MainWrapper } from "../components/MainBlocks/MainWrapper/MainWrapper"
import { NewWordBlock } from "../components/MainBlocks/NewWord/NewWord"
import { PageWrapper } from "../components/PageWrapper/PageWrapper"
import { createGuest } from "../functions/Auth/Guest/createGuest"
import { isNewGuest } from "../functions/Auth/Guest/isNewGuest"
import { RootState } from "../store/Types/store.types"

 const Home:FC = () => {
    const [initialize, setInitialize] = useState(false)
    const isAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
    useEffect(() => {
        if (!isAuth){
            if (isNewGuest()){
                createGuest(Number((Math.random() * 1000000).toFixed(0)))
            }
        }
        setInitialize(true)
    }, [setInitialize])
    return (
        <>
        {
            initialize
            && 
            <PageWrapper>
                <MainWrapper>
                    <NewWordBlock />
                </MainWrapper>
            </PageWrapper>
        }
        </>
    )
}

export default Home