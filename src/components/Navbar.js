import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Action from './Action';
import AnotherAction from './AnotherAction';
import Smt from './Smt';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/Home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to='/Options' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Options
                  </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link to="/Action" className="dropdown-item" >Action</Link>
                                        <Link to="/Another-Action" className="dropdown-item" >Another action</Link>
                                        <Link to="/Smt" className="dropdown-item" >Something else here</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content">
                        <Route exact path="/Home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Action" component={Action} />
                        <Route path="/Another-Action" component={AnotherAction} />
                        <Route path="/Smt" component={Smt} />

                    </div>
                </div>
            </Router>

        );
    }
}

export default Navbar;