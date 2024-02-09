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
            <div className={`slider-button ${activeButton === "popular" ? "active" : ""}`} 
            onClick={()=>{
                handleButtonClick("popular")
                setCategoryName('Popular')
            }}>
                <FaRegStar />
                <p>Popular</p>
                </div>
            
            <div className={`slider-button ${activeButton === "now-playing" ? "active" : ""}`} onClick={()=>{
                handleButtonClick("now-playing")
                setCategoryName('Now Playing')
            }}>
                <LuAlarmClock />
                <p>Now Playing</p>
                </div>

            <div className={`slider-button ${activeButton === "upcoming" ? "active" : ""}`} onClick={()=>{
                handleButtonClick("upcoming")
                setCategoryName('Upcoming')

            }}>
                <RxCalendar />
                <p>Upcoming</p>
                </div>

            <div className={`slider-button ${activeButton === "top-rated" ? "active" : ""}`}
             onClick={()=>{
                handleButtonClick("top-rated")
                setCategoryName('Top Rated')

            }}>
                <LiaTrophySolid />
                <p>Top Rated</p>
                </div>
        </div>
    )
}
export default CategoryButtons;