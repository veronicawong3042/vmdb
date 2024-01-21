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

function MovieCard ({movieData=defaultMovieData}){
    return (
        <div className="movie-card">
            <h3>{movieData.title}</h3>
        </div>
    )
};

export default MovieCard;