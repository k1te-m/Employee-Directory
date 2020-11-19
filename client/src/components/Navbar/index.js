import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item" key="home">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            </li>
            <li className="nav-item" key="directory">
                <Link to="/directory" className={location.pathname === "/directory" ? "nav-link active" : "nav-link"}>Employee Directory</Link>
            </li>
        </ul>
    )
}

export default Navbar;