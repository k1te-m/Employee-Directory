import React, { useState } from "react";
import employeeList from "../../employees.json";
import TableData from "../TableData";

function Table() {
  const [tableState, setTableState] = useState({
    employees: employeeList,
  });

  const employees = tableState.employees.results;

  const tableDatas = employees.map((employee) => {
    return <TableData key={employee.id.value} value={employee} />;
  });
  return (
    <div className="container">
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
