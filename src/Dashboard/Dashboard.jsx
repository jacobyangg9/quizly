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
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'upgrade' ? styles.activeMenuButton : ""}`} onClick={()=>toggleSection("upgrade")}>Upgrade</button>

                <button 
                    className={`${styles.dashboardMenuButtons} ${activeSection === 'support' ? styles.activeMenuButton : ""}`} onClick={()=>toggleSection("support")}>Support</button>
            </div>

            {/* BODY */}
            <div className={styles.bodyWrapper} style={activeSection === 'home' ? {} : { display: 'none' }}>
                <div id={styles.welcomeMessageWrapper}>
                    <h1 className={styles.welcomeMessage}>Welcome, Jacob!</h1>
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
            {/* NEWS */}
            <div className={styles.newsWrapper} style={activeSection === 'news' ? {} : { display: 'none' }}>
                <h1 className={styles.welcomeMessage}>Latest News</h1>
                <div className={styles.newsContentWrapper}>
                    <p><b>11.24.25</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Launching Quizly, a new public site for creating and sharing quizzes.</p>
                </div>
            </div>

            {/* UPGRADE */}
            <div className={styles.upgradeWrapper} style={activeSection === 'upgrade' ? {} : { display: 'none' }}>
                    <h1 className={styles.welcomeMessage}>Take your learning to the next level</h1>
                    <div className={styles.upgradePlansWrapper}>
                        <div className={styles.upgradePlanBox}>
                            <h2 className={styles.upgradePlanBoxText}>Super</h2>
                            <p>Access to more premium assets</p>
                            <h1 className={styles.priceTag}>$1.99 <span style={{fontSize: '1rem'}}>/ month</span></h1>
                            <p className={styles.priceTagDescription}>Billed at $23.88 / year</p>
                            <button className={styles.purchaseButton}>Start your free trial</button>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;No ads</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;7 chances</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;3 practice tests per week</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Up to 40 questions per set</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Ability to print tests</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Complete access to more activities</p>
                        </div>
                        <div className={styles.upgradePlanBox}>
                            <h2 className={styles.upgradePlanBoxText}>Max</h2>
                            <p>Access to unlimited premium assets</p>
                            <h1 className={styles.priceTag}>$3.99 <span style={{fontSize: '1rem'}}>/ month</span></h1>
                            <p className={styles.priceTagDescription}>Billed at $47.88 / year</p>
                            <button className={styles.purchaseButton}>Start your free trial</button>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;No ads</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Unlimited chances</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Unlimited practice tests</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Unlimited questions per set</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Ability to print tests</p>
                            <p>✓&nbsp;&nbsp;&nbsp;&nbsp;Complete access to all activities</p>
                        </div>
                    </div>
            </div>

            {/* SUPPORT */}
            <div className={styles.supportWrapper} style={activeSection === 'support' ? {} : { display: 'none' }}>
                <h1 className={styles.welcomeMessage}>Support</h1>
                <p className={styles.supportDescription}>Need help or have questions? Our support team is here to assist you with any issues or inquiries you may have. By clicking the button, your email client will open, allowing you to send us a message directly. We aim to respond as quickly as possible to provide the guidance you need. Don’t hesitate to reach out—our team is ready to help you every step of the way.</p>
                <button onClick={()=> window.location.href="mailto:jacob.yangg9@gmail.com"} id={styles.supportButton}>Contact Support</button>
            </div>
            
        </>
    )
}

export default Dashboard;