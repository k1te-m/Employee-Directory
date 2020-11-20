import React from "react";

function TableData(props) {
  const { thumbnail } = props.value.picture;
  const { first, last } = props.value.name;
  const { email, phone } = props.value;
  const { country, city, state } = props.value.location;
  return (
    <React.Fragment>
      <tr>
        <td>
          <img src={thumbnail} alt={`${first} ${last}`}></img>
        </td>
        <td className="align-middle">{first} {last}</td>
        <td className="align-middle">{city}, {state}</td>
        <td className="align-middle">{country}</td>
        <td className="align-middle">{email}</td>
        <td className="align-middle">{phone}</td>
      </tr>
    </React.Fragment>
  );
}

export default TableData;
