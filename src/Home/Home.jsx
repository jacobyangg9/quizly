import styles from '../Home/Home.module.css'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Home() {

    const navigate = useNavigate();
    const navigateToDashboard = () => navigate("/dashboard");

    return (
        <>
            <div className={styles.homeBody}>
                <h1 id={styles.introSignInText}>Sign in to Quizly</h1>
                <p id={styles.introSignInSmallText}>Continue with Google</p>
                <div className={styles.signInButtonWrapper}>
                    <GoogleLogin  id={styles.temporarySignInButton} onSuccess={navigateToDashboard} onError={() => alert("Login failed")}/>
                </div>
            </div>
        </>
    )
}

export default Home