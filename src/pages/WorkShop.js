import { useState } from "react";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

function WorkShop() {
    
// Clear the entire localStorage
// localStorage.clear();

    return (
        <div>
            <h2>WorkShop</h2>
            <MovieCard />
            
        </div>
    );
}

export default WorkShop;

