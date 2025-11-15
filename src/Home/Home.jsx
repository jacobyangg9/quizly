import '../Home/Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const navigateToDashboard = () => navigate("/dashboard");

    return (
        <>
            <div className="homeBody">
                <h1 id="introSignInText">Sign in to Quizly</h1>
                <p id="introSignInSmallText">Continue with Google</p>
                <button id="temporarySignInButton" onClick={navigateToDashboard}>Continue with Google</button>
            </div>
        </>
    )
}

export default Home