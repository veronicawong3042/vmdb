import { useNavigate } from "react-router-dom";
import { IMAGE_URL_BASE } from "../utilities/api";
import {formatReleaseDate} from "../utilities/toolbelt";
import FavoriteButton from "./FavoriteButton";


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
  };
// const defaultMovieData = {
  
function MovieCard({movieData = defaultMovieData}){
    const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
    const navigate = useNavigate();
    return (
       <div
        onClick={()=>{
            navigate(`/movie/${movieData.id}`);
        }}
        className="movie-card"
       >
        <img src={imagePath} alt={movieData.title} className="movie-card-image" />
        <div className="title-and-release">
            <h3 className="title">{movieData.title}</h3>
            <h4 className="release-date">
                {formatReleaseDate(movieData.release_date)}
            </h4>
        </div>
        <h4 className="vote-average">{movieData.vote_average.toFixed(1)}</h4>
        <FavoriteButton movieData={movieData} />
       </div>
    )
}
    


export default MovieCard;