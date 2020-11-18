import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
      </div>
    </Router>
  );
}

export default App;
