import React, { Component } from 'react';
import DieuhuongURL from '../../router/DieuhuongURL';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {NavLink} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
                    <a className="navbar-brand">Touché</a>            
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navcontent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navcontent">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/gallery">GALLERY</NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;