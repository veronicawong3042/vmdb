const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";

function getPopularMovies() {
    return fetch(`${API_ENDPOINT}/movie/popular`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response not ok");
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
}

export { getPopularMovies };