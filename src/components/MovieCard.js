import { formatReleaseDate, truncateTitle,truncateOverview } from "../utilities/toolbelt";
import FavouriteButton from "./FavouriteButton";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL_BASE } from "../utilities/api";


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

function MovieCard({ movieData = defaultMovieData }) {
// function MovieCard() {

  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
  const navigate = useNavigate();

  return (

    <div
      onClick={() => {
        navigate(`/movie/${movieData.id}`);
      }}
      className="movie-card"
    >
      <img src={imagePath} alt={movieData.title} className="movie-card-image" />
      <div className="movie-card-container">
        <div className="rating-and-favbutton">
          <h4 className="rating">{(movieData.vote_average).toFixed(1)}</h4>
          <FavouriteButton movieData={movieData} />
        </div>
        <div className="title-and-release">

          <h3 className="title">{truncateTitle(movieData.title)}</h3>
          <h4 className="release-date">{formatReleaseDate(movieData.release_date)}</h4>
          <p className="overview">{truncateOverview(movieData.overview)}</p>
        </div>
    
      <button
        onClick={() => {
          navigate(`/movie/${movieData.id}`);
        }}
        className="more-info"
      >
        More Info
      </button>
      </div>
    </div>

  )
};

export default MovieCard;

// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
// ],
// "logo_sizes": [
//   "w45",
//   "w92",
//   "w154",
//   "w185",
//   "w300",
//   "w500",
//   "original"
// ],
// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ],
// "profile_sizes": [
//   "w45",
//   "w185",
//   "h632",
//   "original"
// ],
// "still_sizes": [
//   "w92",
//   "w185",
//   "w300",
//   "original"
// ]
