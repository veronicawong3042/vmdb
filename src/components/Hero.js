import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPopularMovies } from './../utilities/api';
import { IMAGE_URL_BASE } from "../utilities/api";

const Hero = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.results);
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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
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
                                <div className='hero-info-button-container'>
                                    <button className='more-info'
                                        onClick={() => {
                                            navigate(`/movie/${movie.id}`);
                                        }}
                                    >More Info
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

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>        
        </div>
    );
}

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>        
        </div>
    );
}


export default Hero;
