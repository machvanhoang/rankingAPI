//CSS
import '../styles/dashboard/fonts/box_icons.css'
import '../styles/dashboard/core.css'
import '../styles/dashboard/theme.css'
import '../styles/dashboard/app.css'
import '../styles/dashboard/perfect-scrollbar.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardAside from '../components/DashboardAside';
import DashboardFooter from '../components/DashboardFooter';
import DashboardNav from '../components/DashboardNav';
import Cookies from 'js-cookie'
const DashboardLayout = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const tokenAdmin = Cookies.get('tokenAdmin');
    if (!tokenAdmin) {
        navigate('/auth/login');
    }
    useEffect(() => {
        const userAdmin = Cookies.get('userAdmin') ? JSON.parse(Cookies.get('userAdmin')) : {};
        setUser(userAdmin);
    }, []);
    return (
        <>
            {tokenAdmin &&
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <DashboardAside />
                        <div className="layout-page">
                            <DashboardNav user={user} />
                            <div className="content-wrapper">
                                {children}
                                <DashboardFooter />
                                <div className="content-backdrop fade"></div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-overlay layout-menu-toggle"></div>
                </div>
            }
        </>
    );
};

export default DashboardLayout;
