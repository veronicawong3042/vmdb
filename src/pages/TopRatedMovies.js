import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../utilities/api";
import MovieContainer from "../components/MovieContainer";

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies and update the state
    getTopRatedMovies()
      .then((data) => {
        if (data.results) {
          setTopRatedMovies(data.results);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); // Dependency array is empty to run the effect only once when the component mounts

  return (
    <main id="home">
      <MovieContainer title="Top-Rated Movies" moviesData={topRatedMovies} />
    </main>
  );
}

export default TopRatedMovies;
