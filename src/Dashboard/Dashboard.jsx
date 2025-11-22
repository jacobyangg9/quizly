import styles from '../Dashboard/Dashboard.module.css'
import quizlyLogo from '../Assets/quizlyLogo.png'
import paperPlane from '../Assets/paperPlane.png'
import plus from '../Assets/plus.png'
import fileInport from '../assets/file-import.png'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const navigateToCreate = () => navigate("/create");

    return(
        <>
            <div className={styles.dashboardMenu}>
                <div id={styles.dashboardMenuLogoWrapper}>
                    <h1 id={styles.dashboardMenuLogo}>Quizly</h1>
                </div>
                <button className={styles.dashboardMenuButtons} id={styles.dashboardMenuHome}>Home</button>
                <button className={styles.dashboardMenuButtons}>News</button>
                <button className={styles.dashboardMenuButtons}>About</button>
                <button className={styles.dashboardMenuButtons}>Support</button>
            </div>
            <div className={styles.bodyWrapper}>
                <div id={styles.welcomeMessageWrapper}>
                    <h1 id={styles.welcomeMessage}>Welcome, Jacob!</h1>
                </div>
                <div id={styles.createNewQuizContainer}>
                    <div id={styles.createNewQuizWrapper}>
                        <h1 id={styles.createNewQuizDescription}>Choose how you want to get started:</h1>
                        <div className={styles.createNewQuizButtonsWrapper}>
                            <button className={styles.createNewQuizButtons} id={styles.createNewQuizManualButton} onClick={navigateToCreate}>
                                <img src={plus} id={styles.createNewQuizPlus}></img>
                                Manually Create
                                </button>
                            <button className={styles.createNewQuizButtons} id={styles.createNewQuizImportButton} onClick={()=>alert("Import feature coming soon!")}>
                                <img src={fileInport} id={styles.createNewQuizImport}></img>
                                Import from CSV File
                            </button>
                        </div>
                    </div>
                </div>
                <div id={styles.mySetsMessageWrapper}>
                    <img src={paperPlane} id={styles.setDecorImg}></img>
                    <h1 id={styles.mySetsMessage}>Create a Set</h1>
                    <p>Start by importing or creating your first set above.</p>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;