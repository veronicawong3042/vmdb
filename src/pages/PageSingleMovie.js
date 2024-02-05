import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { filterVideos, formatReleaseDate ,formatTime} from "../utilities/toolbelt";
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
                setMovieData(data);
                setMovieVideos(youtubeTrailerVideos);
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
                    <div className={`sigle-movie-banner ${noPoster ? 'no-poster' : ''} ${noBackdrop ? 'no-backdrop' : ''}`}>
                        <img src={backdropPath} alt={movieData.title} className='backdrop-image' />
                        <img src={posterPath} alt={movieData.title} className='movie-card-image' />
                    </div>
                    <h1>{movieData.title}</h1>

                    <div>
                        <h2>{formatReleaseDate(movieData.release_date)}</h2>
                        <FavouriteButton movieData={movieData} />
                    </div>
                    <p>{formatTime(movieData.runtime)}</p>
                    <div className="genres">
                        { movieData.genres
                            ? movieData.genres.map((genre, index) => (
                                <span key={index} className="genre">
                                    {genre.name}
                                </span>
                            ))
                            : ""
                        }
                    </div>

                    <p>{movieData.overview}</p>
                    <div className="movie-videos">
                        {movieVideos.length > 0 && (
                            <iframe
                                width="640"
                                height="480"
                                title={movieVideos[0].name}
                                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                            ></iframe>
                        )}
                    </div>

                </>
            )}
            {/* Could add a loading spinner here, to display while movieData is falsey */}
        </div>
    );
}

export default PageSingleMovie;
