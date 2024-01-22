import { useEffect, useState } from "react";
import { getMovieImages } from "../utilities/api";
import { dateConvert,truncate } from "../utilities/toolbelt";

const defaultMovieData = {
  "adult": false,
  "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
  "genre_ids": [
    28,
    35,
    80
  ],
  "id": 955916,
  "original_language": "en",
  "original_title": "Lift",
  "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
  "popularity": 1951.937,
  "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
  "release_date": "2024-01-10",
  "title": "Lift",
  "video": false,
  "vote_average": 6.252,
  "vote_count": 318
}



function MovieCard({ movieData = defaultMovieData}) {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getMovieImages(movieData.id)
      .then((data) => {
        // debugger;
        console.log(data);
        setImages(data);
      })
      .catch((error) => {
        alert(error);
      });

  }, []);

  

  return (
    <div className="movie-card">

      <div>
        {images && (
          <div>
            <img src={`https://image.tmdb.org/t/p/w185/${images.poster_path}`} alt={movieData.original_title} />
          </div>
        )} 

      <h3>{movieData.title}</h3>
      <h4>{dateConvert(movieData.release_date)}</h4>
      <h4>{(movieData.vote_average).toFixed(1)}</h4>
      <p>{truncate(movieData.overview)}</p>


      </div>

      <button>&#9829;</button>
    </div>
  )
};

export default MovieCard;