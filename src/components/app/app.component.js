import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import "./app.styles.scss"

import Home from "../../pages/home/home.component";

function App() {
    return(
        <Router>
            <Switch>
                <Route>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;