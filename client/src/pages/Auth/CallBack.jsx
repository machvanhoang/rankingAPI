import React, { useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { clientAxios } from "../../lib/axios";
export default function AuthCallBack() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search);
    }, [location.search]);
    useEffect(() => {
        const code = queryParams.get("code");
        if (code) {
            clientAxios.post(`/social/google/login`, { code })
                .then(async (response) => {
                    const { success, data } = await response.data;
                    if (success) {
                        const { token, user } = await data;
                        await localStorage.setItem("token", token);
                        await localStorage.setItem("user", JSON.stringify(user));
                        await navigate("/dashboard");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            navigate('/404');
            return false;
        }
    }, [queryParams, navigate]);
    return (
        <h1>Waiting...</h1>
    )
}
