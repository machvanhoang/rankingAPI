import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthCallBack from './pages/Auth/CallBack';
import NotFound from './pages/NotFound';
import DashboardProfile from './pages/Dashboard/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/">
        <Routes path="/">
            <Route index element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/callback" element={<AuthCallBack />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<DashboardProfile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
