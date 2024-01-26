import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSingleMovie from "../pages/PageSingleMovie";
import WorkShop from "../pages/WorkShop";
import {GlobalProvider} from "../context/GlobalContext";
import PopularMovies from "../pages/PopularMovies";
import NowPlayingMovies from "../pages/NowPlayingMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
import TopRatedMovies from "../pages/TopRatedMovies";

function AppRouter () {
    return (
    <BrowserRouter>
        <GlobalProvider>
    {/* Header Component */}
        <Routes>
            <Route path="popular" element={<PopularMovies/>}/>
            <Route path="now-playing" element={<NowPlayingMovies/>}/>
            <Route path="upcoming" element={<UpcomingMovies/>}/>
            <Route path="top-rated" element={<TopRatedMovies/>}/>
            <Route path="movie/:id" element={<PageSingleMovie/>}/>
            <Route path="workshop" element={<WorkShop/>}/>
        </Routes>;
    {/* Footer Component */}
        </GlobalProvider>
    </BrowserRouter>
    );
}

export default AppRouter;