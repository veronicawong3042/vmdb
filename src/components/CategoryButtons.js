import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { LiaTrophySolid } from "react-icons/lia";
import { RxCalendar } from "react-icons/rx";
import { LuAlarmClock } from "react-icons/lu";

function CategoryButtons ({categoryName = 'Popular', setCategoryName}){

    const [activeButton, setActiveButton] = useState("popular");
    
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };

    return(
        <div className="movie-categories">
            <button className={`slider-button ${activeButton === "popular" ? "active" : ""}`} 
            onClick={()=>{
                handleButtonClick("popular")
                
            }}>
                <FaRegStar />
                <p>Popular</p>
                </button>
            
            <button className={`slider-button ${activeButton === "now-playing" ? "active" : ""}`} onClick={()=>{
                handleButtonClick("now-playing")
                
            }}>
                <LuAlarmClock />
                <p>Now Playing</p>
                </button>

            <button className={`slider-button ${activeButton === "upcoming" ? "active" : ""}`} onClick={()=>{
                handleButtonClick("upcoming")
                
            }}>
                <RxCalendar />
                <p>Upcoming</p>
                </button>

            <button className={`slider-button ${activeButton === "top-rated" ? "active" : ""}`}
             onClick={()=>{
                handleButtonClick("top-rated")
                
            }}>
                <LiaTrophySolid />
                <p>Top Rated</p>
                </button>
        </div>
    )
}
export default CategoryButtons;