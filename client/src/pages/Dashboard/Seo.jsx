import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardBreadcrumb from "../../components/DashboardBreadcrumb";
export default function DashboardSeo() {
    return (
        <>
            <DashboardLayout>
                <div className="container-xxl flex-grow-1 container-p-y">
                    <DashboardBreadcrumb first="Dashboard" last="Seo" />
                    <div className="row">
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
