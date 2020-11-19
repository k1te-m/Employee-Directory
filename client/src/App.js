import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import Header from "./components/Header";
import "./App.css";



function App() {
  return (
    <React.Fragment>
      <Header/>
      <Table/>
    </React.Fragment>
  );
}

export default App;
