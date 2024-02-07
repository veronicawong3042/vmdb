import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { LiaTrophySolid } from "react-icons/lia";
import { RxCalendar } from "react-icons/rx";
import { LuAlarmClock } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const MovieNav = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="movie-categories">
      <NavLink
        to="/top-rated"
        className={`slider-button ${activeButton === "top-rated" ? "active" : ""}`}
        onClick={() => handleButtonClick("top-rated")}
      >
        <LiaTrophySolid />
        <span>Top Rated</span>
      </NavLink>
      <NavLink
        to="/popular"
        className={`slider-button ${activeButton === "popular" ? "active" : ""}`}
        onClick={() => handleButtonClick("popular")}
      >
        <FaRegStar />
        <span>Popular</span>
      </NavLink>
      <NavLink
        to="/now-playing"
        className={`slider-button ${activeButton === "now-playing" ? "active" : ""}`}
        onClick={() => handleButtonClick("now-playing")}
      >
        <LuAlarmClock />
        <span>Now Playing</span>
      </NavLink>
      <NavLink
        to="/upcoming"
        className={`slider-button ${activeButton === "upcoming" ? "active" : ""}`}
        onClick={() => handleButtonClick("upcoming")}
      >
        <RxCalendar />
        <span>Upcoming</span>
      </NavLink>
    </nav>
  );
};

export default MovieNav;
