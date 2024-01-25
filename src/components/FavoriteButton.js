import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

function FavoriteButton({ movieData }){
    const { favorites, addToFavorites, removeFromFavorites } =
    useContext(GlobalContext);

    //read only property...data that can be 
    //derived from already existing state
    const isFavorited = favorites.find((fav)=>{
        return fav.id === movieData.id;
    });
    function handleFavorite(event){
        event.stopPropagation();
        if (isFavorited){
            removeFromFavorites(movieData);
        }else{
            //not currently favorited
            addToFavorites(movieData);
        }
    }
    return(
        <button
            onClick={handleFavorite}
            className={`favorite ${isFavorited ? "favorited" : ""}`}
        >
        &#9829;
        </button>
    )
}
export default FavoriteButton;