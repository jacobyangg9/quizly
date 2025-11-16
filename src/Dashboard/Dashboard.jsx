import './Dashboard.css'
import quizlyLogo from '../Assets/quizlyLogo.png'
import paperPlane from '../Assets/paperPlane.png'
import plus from '../Assets/plus.png'
import fileInport from '../assets/file-import.png'

function Dashboard() {
    return(
        <>
            <div className="dashboardMenu">
                <div id="dashboardMenuLogoWrapper">
                    <h1 id="dashboardMenuLogo">Quizly</h1>
                </div>
                <button className="dashboardMenuButtons" id="dashboardMenuHome">Home</button>
                <button className="dashboardMenuButtons">Support</button>
            </div>
            <div className="bodyWrapper">
                <div id="welcomeMessageWrapper">
                    <h1 id="welcomeMessage">Welcome, Jacob!</h1>
                </div>
                <div id="createNewQuizContainer">
                    <div id="createNewQuizWrapper">
                        <h1 id="createNewQuizDescription">Choose how you want to get started:</h1>
                        <div className="createNewQuizButtonsWrapper">
                            <button className="createNewQuizButtons" id="createNewQuizManualButton">
                                <img src={plus} id="createNewQuizPlus"></img>
                                Manually Create
                                </button>
                            <button className="createNewQuizButtons" id="createNewQuizImportButton">
                                <img src={fileInport} id="createNewQuizImport"></img>
                                Import from CSV File
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mySetsMessageWrapper">
                    <img src={paperPlane} id="setDecorImg"></img>
                    <h1 id="mySetsMessage">Create a Set</h1>
                    <p>Start by importing or creating your first set above.</p>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard;