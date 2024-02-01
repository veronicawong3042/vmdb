import SearchInput from "./SearchInput";

const { NavLink } = require("react-router-dom");

const Nav = () => (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favorite">Favourites</NavLink></li>
            <li><SearchInput/></li>
        </ul>
    </nav>
)

export default Nav;