import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import "./App.css";



function App() {
  return (
    <Router>
      <Route exact path="/" component={Table}/>
    </Router>
  );
}

export default App;
