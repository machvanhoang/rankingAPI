import React, { useEffect, useMemo } from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function AuthCallBack() {
    const location = useLocation();
    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search);
    }, [location.search]);
    useEffect(() => {
        const code = queryParams.get("code");
        if (code) {
            axios.post(`http://localhost:8000/api/social/google/login`, { code })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [queryParams]);
    return (
        <h1>Hello auth callback</h1>
    )
}
