import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { filterVideos, formatReleaseDate, formatTime } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavouriteButton";
import { IMAGE_URL_BASE } from "../utilities/api";


function PageSingleMovie() {
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState([]);
    const [movieVideos, setMovieVideos] = useState([]);


    useEffect(() => {
        getMovieById(id)

            .then((data) => {
                const youtubeTrailerVideos = filterVideos(data.videos.results);
                console.log("youtube", youtubeTrailerVideos)
                setMovieData(data);
                console.log("videos", youtubeTrailerVideos)
                setMovieVideos(youtubeTrailerVideos);
                console.log(movieVideos)
            })
            .catch((error) => {
                alert(error);
            });
    }, [id]);

    console.log(movieData);
    const posterPath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
    const backdropPath = `${IMAGE_URL_BASE}/w1280${movieData.backdrop_path}`;
    const noPoster = movieData.poster_path === null;
    const noBackdrop = movieData.backdrop_path === null;

    return (
        <div className="movie-page">
            {movieData && (
                <>
                    <div className={`single-movie-banner ${noPoster ? 'no-poster' : ''} ${noBackdrop ? 'no-backdrop' : ''}`}>
                        <img src={backdropPath} alt={movieData.title} className='backdrop-image' />
                        <img src={posterPath} alt={movieData.title} className='movie-card-image' />
                    </div>
                    <div className="movie-title">
                        <h1>{movieData.title}</h1>
                        <FavouriteButton movieData={movieData} />
                    </div>

                    <div className="movie-details">
                        <div className="release-date">
                            <p>Released on: {formatReleaseDate(movieData.release_date)}</p>
                        </div>
                        <div className="rating">
                            <p>Rating: {movieData.vote_average ? movieData.vote_average.toFixed(1) : 'N/A'}</p>
                        </div>
                        <div className="length">
                            <p>Length: {formatTime(movieData.runtime)}</p>
                        </div>

                        <div className="genre-details">
                            <h3>Genres</h3>
                            <div className="genres">
                                {movieData.genres
                                    ? movieData.genres.map((genre, index) => (
                                        <span key={index} className="genre">
                                            {genre.name}
                                        </span>
                                    ))
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="overview-details">
                            <h3 className="overview">Overview</h3>
                            <p>{movieData.overview}</p>
                        </div>
                    </div>
                    <a
                        href={ movieVideos.length > 0 ? `https://www.youtube.com/watch?v=${movieVideos[0].key}` : '#'}
                        target="_blank"
                        className="watch-trailer"
                        onClick={(e) => {
                            if (!movieVideos || movieVideos.length === 0) {
                                e.preventDefault(); // Prevents the link from navigating if there's no video available
                                console.error('No video available');
                            }
                        }}
                    >
                        Watch Trailer
                    </a>
                    {/* <button
                            onClick={() => {
                            if (movieVideos && movieVideos.length > 0) {
                                window.open(`https://www.youtube.com/watch?v=${movieVideos[0].key}`, '_blank');
                            } else {
                                console.error('No video available');
                            }
                            }}
                            className="watch-trailer"
                        >
                            Watch Trailer
                        </button> */}
                  
                  
                    {/* <div className="test">


                        {movieVideos.map((movie) => {
                            return <iframe src={`https://www.youtube.com/watch?v=${movie[0].key}`}>

                            </iframe>
                        })}
                    </div>

                    <div className="movie-videos">
                        {movieVideos.length > 0 && (
                            <iframe
                                width="640"
                                height="480"
                                title={movieVideos[0].name}
                                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                            ></iframe>
                        )}
                    </div> */}

                </>
            )}
            {/* Could add a loading spinner here, to display while movieData is falsey  embed/${movieVideos[0].key*/}
        </div>
    );
}

export default PageSingleMovie;
