import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App';
import AuthLogin from './pages/Auth/AuthLogin';
import AuthCallBack from './pages/Auth/AuthCallBack';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardPageSpeed from './pages/Dashboard/PageSpeed';
import DashboardProfile from './pages/Dashboard/Profile';
import NotFound from './pages/NotFound';
import DashboardSeo from './pages/Dashboard/Seo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/">
        <Routes path="/">
            <Route index element={<App />} />
            <Route path="/auth/login" element={<AuthLogin />} />
            <Route path="/auth/callback" element={<AuthCallBack />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/page-speed" element={<DashboardPageSpeed />} />
            <Route path="/dashboard/seo" element={<DashboardSeo />} />
            <Route path="/dashboard/profile" element={<DashboardProfile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
