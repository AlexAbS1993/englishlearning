import { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { RootState } from "../store/Types/store.types";

const Admin:FC = () => {
    const role = useSelector<RootState, "user"|"admin"|null>(state => state.user.role)
    if (role !== "admin"){
        return <Redirect to="/home"/>
    }
    return (
        <PageWrapper>

        </PageWrapper>
    )
}

export default Admin