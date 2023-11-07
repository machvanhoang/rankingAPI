import DashboardLayout from "../../layouts/DashboardLayout"
export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-lg-12 mb-4 order-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                                <p className="mb-0">
                                    You have done <span className="fw-medium">72%</span> more sales today. Check your new badge in
                                    your profile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
