import React from "react";
import MovieCard from "../components/MovieCard";
import { useGlobalContext } from "../context/GlobalProvider";

function PageFavorite() {
  const { favorites } = useGlobalContext();

  return (
    <div>
      <h1 className="fav-heading">Favorites</h1>
      {favorites.length > 0 ? (
        <div>
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
