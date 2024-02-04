const { NavLink } = require("react-router-dom");

const MovieNav = () => (
    <nav>
        <ul>
            <li><NavLink to="/">All</NavLink></li>
            <li><NavLink to="/now-playing">Now Playing</NavLink></li>
            <li><NavLink to="/popular">Popular</NavLink></li>
            <li><NavLink to="/top-rated">Top Rated</NavLink></li>
            <li><NavLink to="/upcoming">Upcoming</NavLink></li>
        </ul>
    </nav>
)

export default MovieNav;