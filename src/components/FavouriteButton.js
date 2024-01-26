import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

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
      &#9829;
    </button>
  );
}

export default FavouriteButton;
