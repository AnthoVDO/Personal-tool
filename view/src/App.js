import './App.css';

import HolidayRequest from './component/HolidayRequest';
import OrangeMBTSReport from './component/OrangeMBTSReport';
import Home from "./component/Home";
import Login from './component/user/Login';
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    {/* <nav className="nav_bar"> */}

                    <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="/home">
                        <NavLink to="/home">Home</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                        <NavLink to="/holidayRequest" >Holiday request</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">
                        <NavLink to="/orangeMobileReport" >MBTS report</NavLink>
                        </Nav.Link>
                    </Nav.Item>

                    </Nav>

                    {/* <ul>
                        <li>
                        <NavLink to="/" activeClassName="selected">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/holidayRequest" activeClassName="selected">Holiday request</NavLink>
                        </li>
                        <li>
                        <NavLink to="/orangeMobileReport" activeClassName="selected">MBTS report</NavLink>
                        </li>
                        {/* <li>
                        <NavLink to="/login" activeClassName="selected">Encode hours</NavLink>
                        </li> */}
                    {/* </ul> */} 
                    {/* </nav> */}

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    
                    <Switch>
                        <Route path="/holidayRequest">
                            <HolidayRequest />
                        </Route>
                        <Route path="/orangeMobileReport">
                            <OrangeMBTSReport />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        
                    </Switch>
                    
                    
                    <footer>
                    <h6>
                       Made by Anthony Van Den Ostende 
                    </h6>
                    </footer>
                </div>
            </Router>

      
    </div>
  );
}

export default App;
