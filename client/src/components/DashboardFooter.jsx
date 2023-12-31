import { Link } from "react-router-dom"
export default function DashboardFooter() {
    return (
        <>
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                    <div className="mb-2 mb-md-0">
                        ©2023, made with ❤️ by
                        <Link href="" target="_blank" className="footer-link fw-medium"> Backend Team</Link>
                    </div>
                    <div className="d-none d-lg-inline-block">
                        <Link
                            href=""
                            target="_blank"
                            className="footer-link me-4"
                        >Documentation</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
