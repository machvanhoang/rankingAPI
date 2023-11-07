//CSS
import '../styles/dashboard/fonts/box_icons.css'
import '../styles/dashboard/core.css'
import '../styles/dashboard/theme.css'
import '../styles/dashboard/app.css'
import '../styles/dashboard/perfect-scrollbar.css'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardAside from '../components/DashboardAside';
import DashboardFooter from '../components/DashboardFooter';
import DashboardNav from '../components/DashboardNav';
const DashboardLayout = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <DashboardAside />
                    <div className="layout-page">
                        <DashboardNav />
                        <div className="content-wrapper">
                            {children}
                            <DashboardFooter />
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    );
};

export default DashboardLayout;
