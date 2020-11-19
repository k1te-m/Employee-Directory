import React, { useState } from "react";
import employeeList from "../../employees.json";
import TableData from "../TableData";

function Table() {
  const [tableState, setTableState] = useState({
    employees: employeeList,
    filteredData: []
  });

  let employees = tableState.employees.results;

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    const { value } = event.target;
    setTableState({
      employees: employeeList,
      filteredData: value
    })
  }

  

  const tableDatas = employees.map((employee) => {
    return <TableData key={employee.id.value} value={employee} />;
  });
  return (
    <div className="container">
      <form className="form-inline">
        <label>Search:</label>
        <input type="text" className="form-control" id="search" onChange ={handleSearchChange}></input>
      </form>
      <table>
        <thead>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Country</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Date of Birth</th>
        </thead>
        <tbody>{tableDatas}</tbody>
      </table>
    </div>
  );
}

export default Table;
