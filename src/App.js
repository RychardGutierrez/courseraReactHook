import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Car from "./components/Car";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Navbar, Nav } from "react-bootstrap";

import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
function App() {
  // return "React Hook useSate";
  return (
    <div>
      {/* <h1>React Hook UseSate</h1> */}
      {/* <Car /> */}
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React Hook UseSate</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Link to="/quien-soy">
                  <Button variant="outline-primary">Quien soy</Button>
                </Link>

                <Nav.Link href="/Contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
