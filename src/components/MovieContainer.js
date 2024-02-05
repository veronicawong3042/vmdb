import MovieCard from "./MovieCard";



function MovieContainer ({title, moviesData}){

    return (
        <>
        <h2>{title}</h2>
        <section className="movies-container">
            <div className="movie-cards">
                {moviesData.length > 0 && 
                moviesData.map((movieData) => {
                    return <MovieCard key={movieData.id} movieData={movieData}/>;
                })}
                {/* optionally add a loading spinner that displays when length of moviesData array is 0  */}
            </div>
        </section>
        </>
    )
}

export default MovieContainer;