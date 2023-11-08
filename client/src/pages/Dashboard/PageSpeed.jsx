import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardBreadcrumb from "../../components/DashboardBreadcrumb";
import { useState } from "react";
import { pageSpeedChecking } from "../../services/rankingService";
export default function DashboardPageSpeed() {
    const [url, setUrl] = useState("");
    const [submit, setSubmit] = useState(false);
    const [allData, setAllData] = useState(null);
    const handleChecking = async (e) => {
        e.preventDefault();
        setSubmit(true);
        const formData = new FormData();
        formData.append('url', url);
        const { success, data } = await pageSpeedChecking(formData);
        setSubmit(false);
        if (success) {
            setAllData(data);
        }
    }
    return (
        <>
            <DashboardLayout>
                <div className="container-xxl flex-grow-1 container-p-y">
                    <DashboardBreadcrumb first="Dashboard" last="Page Seed" />
                    <div className="row">
                        <div className="col-lg-12 mb-4 order-0">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <input
                                            className="form-control"
                                            placeholder="Nhập đường dẫn của bạn"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button
                                            className="btn btn-primary"
                                            disabled={submit}
                                            onClick={(e) => handleChecking(e)}
                                        >
                                            {submit ? "Đang kiểm tra..." : "Kiểm tra trang web"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {allData &&
                            <div>
                                {Object.keys(allData).map((key) => {
                                    const detail = allData[key] ?? {};
                                    return (
                                        <div className="card mb-3">
                                            <div className="card-header">
                                                <h4 className="m-0">{detail.title}</h4>
                                            </div>
                                            <div className="card-body">
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
