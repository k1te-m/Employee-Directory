import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import TableData from "../TableData";


let tableDatas;

function Table() {
  const [tableState, setTableState] = useState({
    employees: [],
    filteredData: [],
  });
  const [sortedField, setSortedField] = useState(null);

  useEffect(() => {
    API.getEmployees().then((results) => {
      setTableState({
        employees: results.data.results,
        filteredData: results.data.results,
      });
    });
  }, []);


  const handleSearchChange = (event) => {
    const userFilter = event.target.value;
    const filteredEmps = tableState.employees.filter((emps) => {
      let values = emps.name.first.toLowerCase();
      return values.indexOf(userFilter.toLowerCase()) !== -1;
    });

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
              <button type="button">
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
