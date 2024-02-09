import React from "react";
import MovieCard from "../components/MovieCard";
import { useGlobalContext } from "../context/GlobalProvider";

function PageFavorite() {
  const { favorites } = useGlobalContext();

  return (
    <div className="favorite-page">
      <h1 className="fav-heading">Favourites</h1>
      {favorites.length > 0 ? (
        <div className="fav-movies-container">
          {favorites.map((favorite) => (
            <div key={favorite.id}>
              <MovieCard movieData={favorite} />
              
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites yet. Start adding some!</p>
      )}
    </div>
  );
}

export default PageFavorite;
