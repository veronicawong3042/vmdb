import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import FavoriteButton from "../components/FavoriteButton";
import { formatReleaseDate } from "../utilities/toolbelt";


function PageSingleMovie(){
    const params = useParams();
    const id = params.id;
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        getMovieById(id)
            .then((data) => {

            })
            .catch((error) => {
                alert(error);
            });
    });
}
return(
    <div className ="movie-page">
        {movieData &&(
            <>
                <h1>{movieData.title}</h1>
                <div>
                    <h2>{formatReleaseDate(movieData.release_date)}</h2>
                    <FavoriteButton movieData={movieData} />
                </div>
                <p>{movieData.overview}</p>
            </>
        )}

    </div>
)
export default PageSingleMovie;