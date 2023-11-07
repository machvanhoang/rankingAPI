import { clientAxios } from "../lib/axios";
import { Link } from "react-router-dom";
function App() {
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
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to={`/dashboard`}>Dashboard</Link>
                    </li>
                </ul>
            </div>
            <button
                onClick={
                    (e) => handleGoogleUrl(e)
                }
            >Google</button>
        </div >
    );
}

export default App;
