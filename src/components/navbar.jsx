import React,{Component} from "react";

const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand p-2" href="#">Navbar {totalCounters}</a>
        </nav>
    )
}
export default Navbar;