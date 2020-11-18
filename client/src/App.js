import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "./components/NavTabs"
import Home from "./components/pages/Home"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
