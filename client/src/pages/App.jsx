import { Link } from "react-router-dom";
function App() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to={`/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={`/auth/login`}>Login</Link>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default App;
