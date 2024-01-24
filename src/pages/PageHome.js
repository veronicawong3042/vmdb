import { useEffect, useState } from "react";
import { getPopularMovies } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import Footer from "../components/Footer";

function PageHome() {

    const [popularMovies, setPopularMovies] = useState([]);
    
    useEffect(() => {
        getPopularMovies()
            .then((data) => {
                // console.log(data);
                setPopularMovies(data.results);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
    <main id="home">
        <MoviesContainer title="Popular Movies" moviesData={popularMovies}/>
        
    </main>

    );
}

export default PageHome;