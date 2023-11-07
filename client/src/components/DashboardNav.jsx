import { useState } from "react"
import { Link } from "react-router-dom"
import { authLogOut } from "../services/authService";
import { useNavigate } from "react-router-dom";
export default function DashboardNav() {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const toggleDropdownUser = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }
    const handleLogout = async (e) => {
        e.preventDefault();
        const { success } = await authLogOut();
        if (success) {
            await localStorage.removeItem('token');
            return navigate('/login');
        }
    }
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return (
        <>
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <Link className="nav-item nav-link px-0 me-xl-4" href="">
                        <i className="bx bx-menu bx-sm"></i>
                    </Link>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                placeholder="Search..."
                                aria-label="Search..." />
                        </div>
                    </div>

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <Link className="nav-link dropdown-toggle hide-arrow" href="#" onClick={(e) => toggleDropdownUser(e)}>
                                <div className="avatar avatar-online">
                                    <img
                                        src="/assets/dashboard/images/avatar.png"
                                        width={40}
                                        height={40}
                                        alt="Avatar"
                                        className="w-px-40 h-auto rounded-circle"
                                    />
                                </div>
                            </Link>
                            {toggle &&
                                <ul className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar avatar-online">
                                                        <img
                                                            src="/assets/dashboard/images/avatar.png"
                                                            className="w-px-40 h-auto rounded-circle"
                                                            width={40}
                                                            height={40}
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="fw-medium d-block">{user.name}</span>
                                                    <small className="text-muted">Admin</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/dashboard/profile">
                                            <i className="bx bx-user me-2"></i>
                                            <span className="align-middle">My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            <i className="bx bx-cog me-2"></i>
                                            <span className="align-middle">Settings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            <span className="d-flex align-items-center align-middle">
                                                <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                                <span className="flex-grow-1 align-middle ms-1">Billing</span>
                                                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#" onClick={(e) => handleLogout(e)}>
                                            <i className="bx bx-power-off me-2"></i>
                                            <span className="align-middle">Log Out</span>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
