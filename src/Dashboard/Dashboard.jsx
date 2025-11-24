import styles from '../Dashboard/Dashboard.module.css'
import quizlyLogo from '../Assets/quizlyLogo.png'
import paperPlane from '../Assets/paperPlane.png'
import plus from '../Assets/plus.png'
import fileInport from '../assets/file-import.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {
    const navigate = useNavigate();
    const navigateToCreate = () => navigate("/create");

    const [activeSection, setActiveSection] = useState('home');

    const toggleSection = (section) => {
        setActiveSection(section);
    }

    return(
        <>
            <div className={styles.dashboardMenu}>
                <div id={styles.dashboardMenuLogoWrapper}>
                    <h1 id={styles.dashboardMenuLogo}>Quizly</h1>
                </div>
                <button 
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'home' ? styles.activeMenuButton : ""}`} id={styles.dashboardMenuHome} 
                    onClick={()=>toggleSection("home")}>Home</button>

                <button 
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'news' ? styles.activeMenuButton : ""}`} onClick={()=>toggleSection("news")}>News</button>

                <button 
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'about' ? styles.activeMenuButton : ""}`} onClick={()=>toggleSection("about")}>About</button>

                <button 
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'support' ? styles.activeMenuButton : ""}`} onClick={()=>toggleSection("support")}>Support</button>
            </div>
            
            <div className={styles.bodyWrapper} style={activeSection === 'home' ? {} : { display: 'none' }}>
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
            <div className={styles.newsWrapper} style={activeSection === 'news' ? {} : { display: 'none' }}>
                <h1>Latest News</h1>
            </div>
            <div className={styles.aboutWrapper} style={activeSection === 'about' ? {} : { display: 'none' }}>
                <h1>About Quizly</h1>
            </div>
            <div className={styles.supportWrapper} style={activeSection === 'support' ? {} : { display: 'none' }}>
                <h1>Support</h1>
            </div>
            
        </>
    )
}

export default Dashboard;