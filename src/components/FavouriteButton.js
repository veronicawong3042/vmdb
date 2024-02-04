import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function FavouriteButton({ movieData }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  const isFavorited = favorites.find((fav) => fav.id === movieData.id);

  function handleFavorite(event) {
    event.stopPropagation();
    if (isFavorited) {
      removeFromFavorites(movieData);
    } else {
      addToFavorites(movieData);
    }
  }

  return (
    <button
      onClick={handleFavorite}
      className={`favorite ${isFavorited ? "favorited" : ""}`}
    >
      {isFavorited ? <FaHeart /> : <FaRegHeart />}
    
    </button>
  );
}

export default FavouriteButton;
