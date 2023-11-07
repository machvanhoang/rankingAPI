
import DashboardLayout from "../../layouts/DashboardLayout";
export default function DashboardProfile() {
    return (
        <DashboardLayout>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="py-3 mb-4">
                    <span className="text-muted fw-light">Forms /</span> Validation
                </h4>
                <div className="row mb-4">
                    <div className="col-md mb-4 mb-md-0">
                        <div className="card">
                            <h5 className="card-header">Browser Default</h5>
                            <div className="card-body">
                                <form className="browser-default-validation">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-name">Name</label>
                                        <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" required="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-email">Email</label>
                                        <input type="email" id="basic-default-email" className="form-control" placeholder="john.doe" required="" />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="basic-default-password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input type="password" id="basic-default-password" className="form-control" placeholder="············" aria-describedby="basic-default-password3" required="" />
                                            <span className="input-group-text cursor-pointer" id="basic-default-password3"><i className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-country">Country</label>
                                        <select className="form-select" id="basic-default-country" required="">
                                            <option value="">Select Country</option>
                                            <option value="usa">USA</option>
                                            <option value="uk">UK</option>
                                            <option value="france">France</option>
                                            <option value="australia">Australia</option>
                                            <option value="spain">Spain</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-dob">DOB</label>
                                        <input type="text" className="form-control flatpickr-validation flatpickr-input" id="basic-default-dob" required="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-upload-file">Profile pic</label>
                                        <input type="file" className="form-control" id="basic-default-upload-file" required="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-block form-label">Gender</label>
                                        <div className="form-check mb-2">
                                            <input type="radio" id="basic-default-radio-male" name="basic-default-radio" className="form-check-input" required="" checked="" />
                                            <label className="form-check-label" htmlFor="basic-default-radio-male">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="basic-default-radio-female" name="basic-default-radio" className="form-check-input" required="" />
                                            <label className="form-check-label" htmlFor="basic-default-radio-female">Female</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-bio">Bio</label>
                                        <textarea className="form-control" id="basic-default-bio" name="basic-default-bio" rows="3" required=""></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="basic-default-checkbox" required="" />
                                            <label className="form-check-label" htmlFor="basic-default-checkbox">Agree to our terms and conditions</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="switch switch-primary">
                                            <input type="checkbox" className="switch-input" required="" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-on"></span>
                                                <span className="switch-off"></span>
                                            </span>
                                            <span className="switch-label">Send me related emails</span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
