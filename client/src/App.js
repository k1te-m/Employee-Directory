import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Directory from "./components/pages/Directory";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/directory" component={Directory}/>
    </Router>
  );
}

export default App;
