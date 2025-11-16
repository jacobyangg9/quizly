import '../Home/Home.css'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Home() {

    const navigate = useNavigate();
    const navigateToDashboard = () => navigate("/dashboard");

    return (
        <>
            <div className="homeBody">
                <h1 id="introSignInText">Sign in to Quizly</h1>
                <p id="introSignInSmallText">Continue with Google</p>
                <div className="signInButtonWrapper">
                    <GoogleLogin  id="temporarySignInButton" onSuccess={navigateToDashboard} onError={() => alert("Login failed")}/>
                </div>
            </div>
        </>
    )
}

export default Home