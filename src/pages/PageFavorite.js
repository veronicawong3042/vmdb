import { GlobalProvider } from "../context/GlobalProvider";
import { useGlobalContext } from "../context/GlobalProvider";
import { useContext } from "react";

function PageFavorite(){
    // const{favorites}= useContext(GlobalProvider);


    return(
        <div>
            <h1>Favorites</h1>
            {/* <MovieContainer title="Popular Movies" moviesData={favorites}/> */}

        </div>
    )
}

export default PageFavorite;