import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalProvider";

function PageHome() {

    const [popularMovies, setPopularMovies] = useState([]);
    
    const favoriteMovies = useGlobalContext();
//only run this use effect when component first loads or "mounts"
    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                // console.log(data);
                setPopularMovies(data.results);
            })
            .catch((error) => {
                alert(error);
            });
        setPopularMovies(favoriteMovies || [])
    }, [favoriteMovies, setPopularMovies]);
    return (
         <main id="home">
            <MoviesContainer title="Popular Movies" moviesData={popularMovies}/>
        </main>
    )
}

export default PageHome;