// Dependencies
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import TableData from "../TableData";

// establish tableDatas variable
let tableDatas;

// functional component Table
function Table() {
  const [tableState, setTableState] = useState({
    employees: [],
    filteredData: [],
    sortedData: []
  });
  
  // on load of the component, execute an API call to retrieve employee information, then set state to equal those results and do not run again
  useEffect(() => {
    API.getEmployees().then((results) => {
      setTableState({
        employees: results.data.results,
        filteredData: results.data.results,
      });
    });
  }, []);

  // method to handle search input
  const handleSearchChange = (event) => {
    // userFilter captures search input
    const userFilter = event.target.value;
    // filter over the employees array and return array containing any that return true 
    const filteredEmps = tableState.employees.filter((emps) => {
      let values = emps.name.first.toLowerCase();
      // returns true or false based on if employee first name contains the userFilter
      return values.indexOf(userFilter.toLowerCase()) !== -1;
    });
    //Set filteredData state to filteredEmps
    if (userFilter === "") {
      setTableState({
        ...tableState,
        filteredData: filteredEmps,
      });
    } else {
      setTableState({
        ...tableState,
        filteredData: filteredEmps
      })
    }
  };
  
  // Sort name function based on the employee first names. Sorts the tableState employees then compares first names and puts into ascending order
  const sortName = () => {
    const sort = [...tableState.employees].sort(function(a, b) {
      let nameA=a.name.first.toLowerCase(), nameB = b.name.first.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });
    // When executed set all tableStates to the sorted array
    setTableState({...tableState, employees: sort, filteredData: sort, sortedData: sort})
  }
  
  
  // Conditional statement for if userFilter, map filteredData, if no filter map tablestate.employees
  if (tableState.filteredData.length > 0) {
    tableDatas = tableState.filteredData.map((employee) => {
      return <TableData key={employee.id.value} value={employee}/>
    })
  } else if (tableState.filteredData.length === 0) {
    tableDatas = tableState.employees.map((employee) => {
      return <TableData key={employee.id.value} value={employee}/>
    })
  } 

  return (
    <div className="container">
      <form
        className="form-inline"
        onSubmit={(event) => event.preventDefault()}
      >
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
          <tr>
            <th scope="col">
              <button type="button">
                Photo
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={sortName}>
                Name
              </button>
            </th>
            <th scope="col">
              <button type="button">
                City, State
              </button>
            </th>
            <th scope="col">
              <button type="button">
                Country
              </button>
            </th>
            <th scope="col">
              <button type="button">
                Email
              </button>
            </th>
            <th scope="col">
              <button type="button">
                Phone
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{tableDatas}</tbody>
      </table>
    </div>
  );
}

export default Table;
