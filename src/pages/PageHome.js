import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import { getNowPlayingMovies } from "../utilities/api";
import { getUpcomingMovies } from "../utilities/api";
import { getTopRatedMovies } from "../utilities/api";
import MovieContainer from "../components/MovieContainer";
import Hero from "../components/Hero";
import CategoryButtons from "../components/CategoryButtons";



function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [categoryName, setCategoryName] = useState('Popular');

 

  useEffect(() => {
    //Fetch Popular Movies
    getPopularMovies()
      .then((data) => {
        if (data.results) {
          setPopularMovies(data.results);
        }
      })
      .catch((error) => {
        alert(error);
      });
      //Fetch Now Playing Movies
    getNowPlayingMovies()
      .then((data)=>{
        if (data.results){
          setNowPlayingMovies(data.results);
        }
      })
      .catch((error)=>{
        alert(error);
      });
      //Fetch Upcoming Movies
    getUpcomingMovies()
      .then((data)=>{
        if (data.results){
          setUpcomingMovies(data.results);
        }
      })
      .catch((error)=>{
        alert(error);
      });
      //Fetch Top Rated Movies
    getTopRatedMovies()
      .then((data)=>{
        if (data.results){
          setTopRatedMovies(data.results);
        }
      })
      .catch((error)=>{
        alert(error);
      });


      
    
  }, []); // Dependency array is empty to run the effect only once when the component mounts

  

  return (
    <main id="home">
      <Hero />
      <CategoryButtons categoryName={categoryName} setCategoryName={setCategoryName} />
      {categoryName === 'Popular' && (
        <MovieContainer title="Popular Movies" moviesData={popularMovies} /> 
      )}
      {categoryName === 'Now Playing' && (
        <MovieContainer title="Now Playing" moviesData={NowPlayingMovies} />
      )}
      {categoryName === 'Upcoming' && (
        <MovieContainer title="Upcoming" moviesData={upcomingMovies} />
      )}
      {categoryName === 'Top Rated' && (
        <MovieContainer title="Top Rated" moviesData={topRatedMovies} />
      )}
      
    </main>
  );
}

export default PageHome;
