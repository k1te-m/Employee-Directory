import React, { useState } from "react";
import employees from "../../employees.json"
import TableData from "../TableData";

function Table() {
    const [tableState, setTableState] = useState({
        employees: employees
    })
    return (
    <table>
        <thead>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date of Birth</th>
        </thead>
        <tbody>
            <tr>
               
            </tr>
        </tbody>
    </table>
    )
}

export default Table;