import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Gallery from '../components/template/Gallery';
import Home from '../components/template/Home';
import Foods from '../components/template/Foods';


class DieuhuongURL extends Component {
    
    render() {
      
        
        return (
            
                <div>

                    {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                    */}
                    <Switch>
                    <Route exact  path="/" component={Home}>
                        <Home />
                    </Route>
                    <Route exact  path="/gallery" component={Gallery}>
                        <Gallery />
                    </Route>
                    <Route path="/foods/:id?" component={Foods}>
                        <Foods/>
                    </Route>

                    
                    </Switch>
                </div>
           
        );
    }
}

export default DieuhuongURL;