import { useLocation } from 'react-router-dom';
import { search } from '../utilities/api';
import { useState, useEffect } from 'react';
import MovieContainer from '../components/MovieContainer';

const SearchResults = () => {
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get('query');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
        console.log('Current searchQuery:', searchQuery);
        console.log(movies);
        if (searchQuery) {
          search(searchQuery)
            .then(data => {
              console.log('Data from search:', data);
            //   debugger;
              setMovies(data.results);
              console.log(data.results)
            })
            .catch(error => {
              console.error('Error from search:', error);
            });
        }
      }, [searchQuery]);
      
      if (movies.length > 0) {
        return (
            <div className='search-results-page'>
                <h2 className="search-results">Search results for "{searchQuery}" :</h2>
                <section className='search-results-posters'>
                   <MovieContainer moviesData={movies}/>
                </section>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Sorry, we couldn't find any movies matching "{searchQuery.trim() !== '' ? `${searchQuery}` : ''}". <br></br>Please try again.</h2>
            </div>
        );
    }
};
export default SearchResults;
