import { useState } from "react";
import Nav from "./Nav";
const { NavLink } = require("react-router-dom");

function Header() {

    return (
        <header>
            <nav className='navbar'>
                <label className="logo"><NavLink to="/">VMDB</NavLink></label>
                <Nav />
            </nav>
        </header>
    );
}

export default Header;