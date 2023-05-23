import { Navigate } from "react-router-dom";
import React from "react";
import { ACCESS_TOKEN } from "../constants/constants";

export const HomePageProtected = ({ children }: React.PropsWithChildren) => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        return <Navigate to={"/clinics"} replace />;
    }

    return <>{children}</>;
};