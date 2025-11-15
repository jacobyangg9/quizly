import './Dashboard.css'

function Dashboard() {
    return(
        <>
            <div className="dashboardMenu">
                <button className="dashboardMenuButtons" id="dashboardMenuHome">Home</button>
                <button className="dashboardMenuButtons">Support</button>
            </div>
            <div id="welcomeMessageWrapper">
                <h1 id="welcomeMessage">Welcome, Jacob!</h1>
            </div>
            <div id="createNewQuizContainer">
                <div id="createNewQuizWrapper">
                    <button>
                        <span>+</span>
                        Create New Quiz
                    </button>
                </div>
            </div>
            <div id="mySetsMessageWrapper">
                <h1 id="mySetsMessage">My Sets</h1>
            </div>
        </>
    )
}

export default Dashboard;