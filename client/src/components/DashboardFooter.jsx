export default function SystemFooter() {
    return (
        <>
            <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                    <div className="mb-2 mb-md-0">
                        ©2023, made with ❤️ by
                        <a href="" target="_blank" className="footer-link fw-medium"> Backend Team</a>
                    </div>
                    <div className="d-none d-lg-inline-block">
                        <a
                            href=""
                            target="_blank"
                            className="footer-link me-4"
                        >Documentation</a
                        >
                    </div>
                </div>
            </footer>
        </>
    )
}
