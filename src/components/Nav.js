import { useState } from "react";
import SearchInput from "./SearchInput";

const { NavLink } = require("react-router-dom");

function Nav() {

    const [openNav, setOpenNav] = useState(false);

    function handleHamburger(e) {
        e.preventDefault();
        console.log('You opened');
        setOpenNav(!openNav);
    }

    function handleCloseMenu(e) {
        e.preventDefault();
        console.log('You closed');
        setOpenNav(false);
    }

    return (
        <>
            <div className={`hamburger ${openNav ? 'active' : ''}`} onClick={handleHamburger}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-menu ${openNav ? 'active' : ''}`} >
                {/* <li><NavLink to="/">Home</NavLink></li> */}
                <li onClick={handleCloseMenu}><NavLink to="/about" >About</NavLink></li>
                <li onClick={handleCloseMenu}><NavLink to="/favorite" >Favourites</NavLink></li>
                <li><SearchInput /></li>
            </ul>
        </>

    );

}



export default Nav;