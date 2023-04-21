import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import './template/css/App.css';
import Nav from './template/Nav';
import Home from './template/Home';
import Footer from './template/Footer';
import Gallery from './template/Gallery';

import DieuhuongURL from '../router/DieuhuongURL';
import Banner from './template/Banner';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav/>
        <Banner/>
        <DieuhuongURL/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;

