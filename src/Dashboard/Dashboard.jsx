import './Dashboard.css'
import quizlyLogo from '../Assets/quizlyLogo.png'
import paperPlane from '../Assets/paperPlane.png'

function Dashboard() {
    return(
        <>
            <div className="dashboardMenu">
                <img src={quizlyLogo} alt="Quizly Logo" id="dashboardMenuLogo"/>
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
                        <button className="createNewQuizButtons">Manually Create</button>
                        <button className="createNewQuizButtons">Import</button>
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