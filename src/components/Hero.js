import { useState, useEffect } from 'react';
import useFetch from './../utilities/toolbelt';
import { API_ENDPOINT } from './../utilities/api';
import { Link } from 'react-router-dom';
import { getPopularMovies } from './../utilities/api';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGE_URL_BASE } from "../utilities/api";



const Hero = () => {


    // const { get } = useFetch('https://api.themoviedb.org/3/');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.results);
            console.log(data.results);
        });
    }, []);


    const posterPaths = movies.map((movie) => movie.backdrop_path)
    

    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    const navigate = useNavigate();

    return (
        <section className='hero'>
            <span className="visually-hidden">Hero banner</span>
            <Slider {...sliderSettings}>
                {posterPaths.slice(0, 3).map((path, index) => {
                    const movie = movies[index]
                    const truncatedText = movie.overview.slice(0, 150) + '...'
                    return (
                        <div key={`backdrop-${index}`} className='hero-image-container'>
                            <div className='hero-info'>
                                <h2 className='hero-info-movie-title'>{movie.title}</h2>
                                <p className='hero-info-movie-caption'>{truncatedText}</p>
                                <div className='hero-info-button-container'>
                                    <button className='more-info'
                                    onClick={() => {
                                          navigate(`/movie/${movie.id}`);
                                    }}
                                        >More Info
                                        {/* <Link
                                            to={`{
                                                pathname: /movie/${movie.id}
                                            }`}
                                        >
                                            More Info
                                        </Link> */}
                                    </button>
                                </div>
                            </div>
                            <img
                                src={`${IMAGE_URL_BASE}/w1280${movie.backdrop_path}`}
                                alt={movie.title}
                                className='hero-image'
                            />
                        </div>
                    )
                })}
            </Slider>

        </section>
    )

}
export default Hero;