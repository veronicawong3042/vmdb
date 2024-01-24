import { useContext } from "react"

function FavoriteButton({ movieData }) {

    // need to add globalcontent in use context
    const { favorites, addFavorites, removeFavorites } = useContext();

    const isFavorited = favorites.find((fav) => {
        return fav.id === movieData.id;
    });

    function handleFavorite(event) {
        event.stopPropagation();
        if (isFavorited) {
            removeFavorites(movieData);

        } else {
            addFavorites(movieData);
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


export { FavoriteButton }