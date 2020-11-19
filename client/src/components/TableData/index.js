import React from "react";

function TableData(props) {
  console.log(props.value);
  return (
    <React.Fragment>
      <tr>
        <td>
          <img src={props.value.picture.thumbnail}></img>
        </td>
        <td>{props.value.name.first} {props.value.name.last}</td>
        <td>{props.value.location.country}</td>
        <td>{props.value.email}</td>
        <td>{props.value.phone}</td>
        <td>{props.value.dob.date}</td>
      </tr>
    </React.Fragment>
  );
}

export default TableData;
