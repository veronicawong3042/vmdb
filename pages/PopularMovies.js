import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MovieContainer from "../components/MovieContainer";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies and update the state
    getPopularMovies()
      .then((data) => {
        if (data.results) {
          setPopularMovies(data.results);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); // Dependency array is empty to run the effect only once when the component mounts

  return (
    <main id="home">
      <MovieContainer title="Popular Movies" moviesData={popularMovies} />
    </main>
  );
}

export default PopularMovies;
