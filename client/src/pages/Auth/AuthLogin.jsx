import "../../styles/auth/login.css";
import FormLogin from "../../components/FormLogin"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
export default function AuthLogin() {
    const navigate = useNavigate();
    const adminToken = Cookies.get('tokenAdmin');
    useEffect(() => {
        if (adminToken) {
            navigate('/dashboard', { replace: true });
        }
    }, []);
    return (
        <>
            {!adminToken &&
                <div className="page page-center">
                    <div className="container-tight py-4">
                        <FormLogin />
                    </div>
                </div>
            }
        </>
    )
}
