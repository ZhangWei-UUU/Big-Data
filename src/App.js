import React, { Component } from "react";
import "./App.css";
import "./animate.css";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Index from "./Pages/Index";
import Products from "./Pages/Products";
import Solution from "./Pages/Solution";
import About from "./Pages/About";
import Introduction from "./Pages/Introduction";
import Career from "./Pages/Career";
import Team from "./Pages/Team";
import Toolbox from "./Pages/Toolbox";

class App extends Component {
    render() {
        return (
            <Router >
                <div className="App" >
                    <Route
                        exact
                        path="/"
                        component={
                            Index
                        }
                    /> <Route
                        path="/about"
                        component={
                            About
                        }
                    /> <Route
                        path="/career"
                        component={
                            Career
                        }
                    /> <Route
                        path="/products"
                        component={
                            Products
                        }
                    />
                    <Route
                        path="/solution"
                        component={
                            Solution
                        }
                    />
                    <Route
                        path="/intro-company"
                        component={
                            Introduction
                        }
                    />
                    <Route
                        path="/core-team"
                        component={
                            Team
                        }
                    />
                    <Route
                        path="/join-us"
                        component={
                            Career
                        }
                    />
                    <Route
                        path="/toolbox"
                        component={
                            Toolbox
                        }
                    />
                </div >
            </Router>
        );
    }
}

export default App;
