import { BrowserRouter, Route, Routes } from "react-router-dom";
import {GlobalProvider} from "../context/GlobalProvider";
import PageSingleMovie from "../pages/PageSingleMovie";
import WorkShop from "../pages/WorkShop";
import PageHome from "../pages/PageHome";
import PopularMovies from "../pages/PopularMovies";
import NowPlayingMovies from "../pages/NowPlayingMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
import TopRatedMovies from "../pages/TopRatedMovies";
import PageFavorite from "../pages/PageFavorite";
import PageAbout from "../pages/PageAbout";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import MovieNav from "../components/MovieNav";
import SearchResults from "../pages/SearchResults";

function AppRouter () {
    return (
    <BrowserRouter>
        <GlobalProvider>
    {/* Header Component */}
            <Nav />
            <MovieNav />
        <Routes>
            {/* no route set up for '/' */}
            <Route path="/" element={<PageHome/>}/>
            <Route path="/favorite" element={<PageFavorite/>}/>
            <Route path="/about" element={<PageAbout/>}/>
            <Route path="/popular" element={<PopularMovies/>}/>
            <Route path="/now-playing" element={<NowPlayingMovies/>}/>
            <Route path="/upcoming" element={<UpcomingMovies/>}/>
            <Route path="/top-rated" element={<TopRatedMovies/>}/>
            <Route path="/movie/:id" element={<PageSingleMovie/>}/>
            <Route path="/workshop" element={<WorkShop/>}/>
            <Route path="/SearchResults" element={<SearchResults />} />
        </Routes>
        <Footer />
        
    {/* Footer Component */}
        </GlobalProvider>
    </BrowserRouter>
    );
}

export default AppRouter;