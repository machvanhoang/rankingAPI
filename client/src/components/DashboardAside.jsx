
import { Link } from "react-router-dom";
export default function DashboardAside() {
    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <Link to="/dashboard" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bold ms-2">Management</span>
                    </Link>
                    <Link to="/dashboard" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner py-1">
                    <li className={`menu-item`}>
                        <Link to="/dashboard" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Dashboards">Home</div>
                        </Link>
                    </li>
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">Application</span>
                    </li>
                    <li className={`menu-item`}>
                        <Link
                            to="/dashboard/page-speed"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-sort-a-z"></i>
                            <div data-i18n="Email">Page Speed</div>
                        </Link>
                    </li>
                    <li className={`menu-item`}>
                        <Link
                            to="/dashboard/seo"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-news"></i>
                            <div data-i18n="Email">Seo</div>
                        </Link>
                    </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">General</span></li>
                    <li className={`menu-item`}>
                        <Link
                            href=""
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-cog"></i>
                            <div data-i18n="Configs">Configs</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}
