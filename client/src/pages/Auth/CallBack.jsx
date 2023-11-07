import React, { useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AuthCallBack() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search);
    }, [location.search]);
    useEffect(() => {
        const code = queryParams.get("code");
        if (code) {
            axios.post(`${process.env.REACT_APP_ENDPOINT}/social/google/login`, { code })
                .then(response => {
                    const responseData = response.data;
                    if (responseData.success) {
                        localStorage.setItem("token", "TRUE_TOKEN");
                        navigate("/dashboard");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            navigate('/404');
        }
    }, [queryParams, navigate]);
    return (
        <h1>Hello auth callback</h1>
    )
}
