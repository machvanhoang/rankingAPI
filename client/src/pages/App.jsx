import axios from "axios";
import { Link } from "react-router-dom";
function App() {
    const handleGoogleUrl = async (e) => {
        e.preventDefault();
        await axios.get(`${process.env.REACT_APP_ENDPOINT}/social/google/url`)
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
