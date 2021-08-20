import React from 'react';
import Nav from "react-bootstrap/Nav";
import HolidayRequest from './HolidayRequest';
import OrangeMBTSReport from './OrangeMBTSReport';
import Login from "./user/Login";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // NavLink
  } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <
        >

            
                    <Router>
                    <Navbar 
                    fixed="top"
                    bg="light"
                    
                    expand="md"
                    >
                            <Container className="justify-content-end">
                                    <Nav 
                            variant="tabs" 
                            defaultActiveKey="/home" 
                            
                            
                            >
                                <Nav.Item>
                                    <Nav.Link href="/home">
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/HolidayRequest"} eventKey="holiday">
                                        Holiday request
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/MbtsReport"} eventKey="MbtsReport">
                                        Mbts report
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={"/Login"} eventKey="Login">
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Container>
                    </Navbar>
                    

                    <Switch>
                        <Route path="/HolidayRequest">
                            <HolidayRequest/>
                        </Route>
                        <Route path="/MbtsReport">
                            <OrangeMBTSReport/>   
                        </Route>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                    </Switch>

                    </Router>
            
        </>
    );
};

export default Menu;