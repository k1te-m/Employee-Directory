import React from "react";

function TableData(props) {
  const { thumbnail } = props.value.picture;
  const { first, last } = props.value.name;
  const { email, phone } = props.value;
  const { country } = props.value.location;
  const { date } = props.value.dob;
  return (
    <React.Fragment>
      <tr>
        <td>
          <img src={thumbnail} alt={`${first} ${last}`}></img>
        </td>
        <td>{first} {last}</td>
        <td>{country}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{date}</td>
      </tr>
    </React.Fragment>
  );
}

export default TableData;
