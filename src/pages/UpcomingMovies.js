import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utilities/api";
import MovieContainer from "../components/MovieContainer";

function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Fetch now playing movies and update the state
    getNowPlayingMovies()
      .then((data) => {
        if (data.results) {
          setUpcomingMovies(data.results);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); // Dependency array is empty to run the effect only once when the component mounts

  return (
    <main className="home-movie-cards" id="home">
      <MovieContainer title="Upcoming Movies" moviesData={upcomingMovies} />
    </main>
  );
}

export default UpcomingMovies;