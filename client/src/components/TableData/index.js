import React from "react";

function TableData(props) {
  let employees = props.data.results;
  return employees.map((employee) => {
    return (
      <React.Fragment>
        <tr>
          <td>
            <img src={employee.picture.thumbnail} alt={employee.name.first}></img>
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.location.country}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.dob.date}</td>
        </tr>
      </React.Fragment>
    );
  });
}

export default TableData;
