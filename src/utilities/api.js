const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";
const IMAGE_URL_BASE = "https://image.tmdb.org/t/p";

function getPopularMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`
        }
      };
      return fetch(`${API_ENDPOINT}/movie/popular?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }

function getNowPlayingMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`
        }
      };

      return fetch(`${API_ENDPOINT}/movie/now_playing?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }

function getUpcomingMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    };
  
    return fetch(`${API_ENDPOINT}/movie/upcoming?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }

  function getTopRatedMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    };
  
    return fetch(`${API_ENDPOINT}/movie/top_rated?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }

function getMovieById(movieId){
    return fetch(`${API_ENDPOINT}/movie/${movieId}?append_to_response=videos`,{
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
        },
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error ("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    })
}

export {getPopularMovies, getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies, getMovieById, IMAGE_URL_BASE};