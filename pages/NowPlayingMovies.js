import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utilities/api";
import MovieContainer from "../components/MovieContainer";

function NowPlayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    // Fetch now playing movies and update the state
    getNowPlayingMovies()
      .then((data) => {
        if (data.results) {
          setNowPlayingMovies(data.results);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []); // Dependency array is empty to run the effect only once when the component mounts

//   const options = {method: 'GET', headers: {accept: 'application/json'}};
// ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  return (
    <main id="home">
      <MovieContainer title="Now Playing Movies" moviesData={nowPlayingMovies} />
    </main>
  );
}

export default NowPlayingMovies;
