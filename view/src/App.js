import './App.css';

import HolidayRequest from './component/HolidayRequest';
import OrangeMBTSReport from './component/OrangeMBTSReport';
import Home from "./component/Home";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">

            <Router>
                <div >
                    <nav className="nav_bar">
                    <ul>
                        <li>
                        <NavLink to="/" activeClassName="selected">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/holidayRequest" activeClassName="selected">Holiday request</NavLink>
                        </li>
                        <li>
                        <NavLink to="/orangeMobileReport" activeClassName="selected">MBTS report</NavLink>
                        </li>
                    </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route path="/holidayRequest">
                        <HolidayRequest />
                    </Route>
                    <Route path="/orangeMobileReport">
                        <OrangeMBTSReport />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </div>
            </Router>

      
    </div>
  );
}

export default App;
