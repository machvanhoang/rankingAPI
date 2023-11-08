// import { setCookie } from "cookies-next";
import { useState } from "react";
// import { adminLogin } from "@/services/adminService";
// import { useRouter } from "next/navigation";
import { clientAxios } from "../lib/axios";
export default function FormLogin() {
    const [email, setEmail] = useState("user1@gmail.com");
    const [password, setPassword] = useState("user1#123");
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);
    const handleGoogleUrl = async (e) => {
        e.preventDefault();
        await clientAxios.get(`/social/google/url`)
            .then((res) => {
                const result = res.data;
                if (result.success) {
                    window.location.href = result.data.url;
                }
            }).catch((error) => console.error(error));
    }
    // const route = useRouter();
    const login = async (e) => {
        // e.preventDefault();
        // setSubmit(true);
        // setErrors({});
        // const formData = new FormData();
        // formData.append('email', email);
        // formData.append('password', password);
        // const { success, data } = await adminLogin(formData);
        // setSubmit(false);
        // if (!success) {
        //     setErrors(data.errors);
        //     return false;
        // }
        // const { user, token } = data;
        // setCookie("tokenAdmin", token);
        // setCookie("user", JSON.stringify(user));
        // route.push('/admin');
    }
    return (
        <>
            <form className="card card-md" method="POST" onSubmit={login}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Đăng nhập tài khoản</h2>
                    {errors && errors.error &&
                        <div className="alert alert-danger">
                            <p className="m-0">{errors.error}</p>
                        </div>
                    }
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input id="email" type="email"
                            placeholder="example@gmail.com"
                            className={`form-control ${(errors && errors.email) ? 'is-invalid' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            disabled={submit}
                            autoComplete="off"
                            value={email}
                        />
                        {errors && errors.email && errors.email.map((message, key) => {
                            return <span key={key} className="invalid-feedback">
                                <strong>{message}</strong>
                            </span>
                        })}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input id="password"
                            type="password" placeholder="******"
                            className={`form-control ${(errors && errors.password) ? 'is-invalid' : ''}`}
                            name="password"
                            value={password}
                            disabled={submit}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                        {errors && errors.password && errors.password.map((message, key) => {
                            return <span key={key} className="invalid-feedback">
                                <strong>{message}</strong>
                            </span>
                        })}
                    </div>
                    <div className="form-footer">
                        <button type="submit" disabled={submit} className="btn btn-primary w-100">Đăng nhập</button>
                    </div>
                    <div className="login-social">
                        <button onClick={(e) => handleGoogleUrl(e)} type="button" className="btn-social btn-facebook">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAzNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3LjI1IDEzLjNDMjcuMjUgOC40Njc1MSAyMy4zMzI1IDQuNTUgMTguNSA0LjU1QzEzLjY2NzUgNC41NSA5Ljc1IDguNDY3NTEgOS43NSAxMy4zQzkuNzUgMTcuNjY3MyAxMi45NDk3IDIxLjI4NzMgMTcuMTMyOCAyMS45NDM3VjE1LjgyOTNIMTQuOTExMVYxMy4zSDE3LjEzMjhWMTEuMzcyM0MxNy4xMzI4IDkuMTc5MyAxOC40MzkyIDcuOTY3OTcgMjAuNDM3OCA3Ljk2Nzk3QzIxLjM5NTIgNy45Njc5NyAyMi4zOTY1IDguMTM4ODcgMjIuMzk2NSA4LjEzODg3VjEwLjI5MjJIMjEuMjkzMkMyMC4yMDYzIDEwLjI5MjIgMTkuODY3MiAxMC45NjY3IDE5Ljg2NzIgMTEuNjU4N1YxMy4zSDIyLjI5MzlMMjEuOTA2IDE1LjgyOTNIMTkuODY3MlYyMS45NDM3QzI0LjA1MDMgMjEuMjg3MyAyNy4yNSAxNy42Njc1IDI3LjI1IDEzLjNaIiBmaWxsPSIjMTg3N0YyIi8+CjxwYXRoIGQ9Ik0yMS45MDYgMTUuODI5M0wyMi4yOTM5IDEzLjNIMTkuODY3MlYxMS42NTg3QzE5Ljg2NzIgMTAuOTY2NyAyMC4yMDYzIDEwLjI5MjIgMjEuMjkzMiAxMC4yOTIySDIyLjM5NjVWOC4xMzg4N0MyMi4zOTY1IDguMTM4ODcgMjEuMzk1MiA3Ljk2Nzk3IDIwLjQzNzggNy45Njc5N0MxOC40MzkyIDcuOTY3OTcgMTcuMTMyOCA5LjE3OTMgMTcuMTMyOCAxMS4zNzIzVjEzLjNIMTQuOTExMVYxNS44MjkzSDE3LjEzMjhWMjEuOTQzN0MxNy41NzgzIDIyLjAxMzYgMTguMDM0OCAyMi4wNSAxOC41IDIyLjA1QzE4Ljk2NTIgMjIuMDUgMTkuNDIxNyAyMi4wMTM2IDE5Ljg2NzIgMjEuOTQzN1YxNS44MjkzSDIxLjkwNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt="" />
                            <span>Login Facebook</span>
                        </button>
                        <button type="button" className="btn-social btn-google">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAzNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4xOCAxMy40ODE2QzI2LjE4IDEyLjkxNDQgMjYuMTI5MSAxMi4zNjg5IDI2LjAzNDUgMTEuODQ1M0gxOC41VjE0LjkzOThIMjIuODA1NUMyMi42MiAxNS45Mzk4IDIyLjA1NjQgMTYuNzg3MSAyMS4yMDkxIDE3LjM1NDRWMTkuMzYxNkgyMy43OTQ1QzI1LjMwNzMgMTcuOTY4OSAyNi4xOCAxNS45MTggMjYuMTggMTMuNDgxNloiIGZpbGw9IiM0Mjg1RjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC41IDIxLjNDMjAuNjYgMjEuMyAyMi40NzEgMjAuNTgzNiAyMy43OTQ2IDE5LjM2MThMMjEuMjA5MSAxNy4zNTQ1QzIwLjQ5MjggMTcuODM0NSAxOS41NzY0IDE4LjExODIgMTguNSAxOC4xMTgyQzE2LjQxNjQgMTguMTE4MiAxNC42NTI4IDE2LjcxMDkgMTQuMDIzNyAxNC44MkgxMS4zNTFWMTYuODkyN0MxMi42NjczIDE5LjUwNzMgMTUuMzcyOCAyMS4zIDE4LjUgMjEuM1oiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4wMjM2IDE0LjgyMDFDMTMuODYzNiAxNC4zNDAxIDEzLjc3MjcgMTMuODI3NCAxMy43NzI3IDEzLjMwMDFDMTMuNzcyNyAxMi43NzI5IDEzLjg2MzYgMTIuMjYwMSAxNC4wMjM2IDExLjc4MDFWOS43MDc0MUgxMS4zNTA5QzEwLjgwOTEgMTAuNzg3NCAxMC41IDEyLjAwOTIgMTAuNSAxMy4zMDAxQzEwLjUgMTQuNTkxIDEwLjgwOTEgMTUuODEyOSAxMS4zNTA5IDE2Ljg5MjlMMTQuMDIzNiAxNC44MjAxWiIgZmlsbD0iI0ZCQkMwNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjUgOC40ODE4MkMxOS42NzQ2IDguNDgxODIgMjAuNzI5MSA4Ljg4NTQ2IDIxLjU1ODIgOS42NzgxOEwyMy44NTI4IDcuMzgzNjRDMjIuNDY3MyA2LjA5MjczIDIwLjY1NjQgNS4zIDE4LjUgNS4zQzE1LjM3MjggNS4zIDEyLjY2NzMgNy4wOTI3MyAxMS4zNTEgOS43MDcyOEwxNC4wMjM3IDExLjc4QzE0LjY1MjggOS44ODkwOSAxNi40MTY0IDguNDgxODIgMTguNSA4LjQ4MTgyWiIgZmlsbD0iI0VBNDMzNSIvPgo8L3N2Zz4K" alt="" />
                            <span>Login Google</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
