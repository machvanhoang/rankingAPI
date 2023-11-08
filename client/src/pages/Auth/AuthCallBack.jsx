import React, { useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { clientAxios } from "../../lib/axios";
import Cookies from "js-cookie";
import "../../styles/auth/callback.css";
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
                        await Cookies.set('tokenAdmin', token);
                        await Cookies.set('userAdmin', JSON.stringify(user));
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
        <div className="loading">
            <div className="spinner"></div>
        </div>
    )
}
