import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import TableData from "../TableData";

function Table() {
  const [tableState, setTableState] = useState({
    employees: [],
    filteredData: [],
  });

  // let employees = tableState.employees.results;

  useEffect(() => {
    API.getEmployees().then(results => {
         setTableState({
           employees: results.data.results,
           filteredData: results.data.results
         });
       });
  }, [tableState.employees.length === 0]);


  console.log(tableState.employees);

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    const userFilter = event.target.value;
    const filteredEmps = tableState.employees.filter(emps => {
      let values = emps.name.first.toLowerCase();
      console.log(values.indexOf(userFilter.toLowerCase()))
      return values.indexOf(userFilter.toLowerCase()) !== -1;
    })

    setTableState({
      ...tableState,
      filteredData: filteredEmps
    })
    // // const { value } = event.target;

    // setTableState({
    //   employees: [],
    //   filteredData: [],
    // });
  };

  const tableDatas = tableState.employees.map((employee) => {
    return <TableData key={employee.id.value} value={employee} />;
  });

  return (
    <div className="container">
      <form className="form-inline">
        <label>Search:</label>
        <input
          type="text"
          className="form-control"
          id="search"
          onChange={handleSearchChange}
        ></input>
      </form>
      <table>
        <thead>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">City, State</th>
          <th scope="col">Country</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </thead>
        <tbody>{tableDatas}</tbody>
      </table>
    </div>
  );
}

export default Table;
