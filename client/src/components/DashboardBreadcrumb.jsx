export default function DashboardBreadcrumb({ first, last, children }) {
    return (
        <div className="d-flex justify-content-between mb-3">
            <h4 className="fw-bold"><span className="text-muted fw-light">{first}/</span> {last}</h4>
            {children}
        </div>
    )
}
