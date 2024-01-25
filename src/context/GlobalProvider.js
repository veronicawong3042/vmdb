import { createContext, useEffect, useContext, useState } from "react";
import { getPopularMovies } from "../utilities/api";

//create the context
export const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext)
}
//create the provider component
export function GlobalProvider({children}) {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    function loadFromLocalStorage(){
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    }
    //initial state
    const [favorites, setFavorites] = useState(loadFromLocalStorage());

    //helper function to add a favorite
    function addToFavorites(favorite){
        const newFavorites = [...favorites, favorite];
        setFavorites(newFavorites);
    }

    //helper function to remove a favorite
    function removeFromFavorites(favorite){
        const newFavorites = favorites.filter((fav)=> {
            return fav.id !== favorite.id;
        });
        setFavorites(newFavorites);

    }

    function extractPopularMovies() {
        getPopularMovies()
            .then((data) => {
                // console.log(data);
                setFavoriteMovies(data.results);
            })
            .catch((error) => {
                alert(error);
            });
    }
    //useEffect that will run everytime something changes in the favorites state
    useEffect(() => {
        
        extractPopularMovies()
        //this code will rerun everytime the state of favorites change
        localStorage.setItem("favorites", JSON.stringify(favorites));

        
    }, [favorites]);

    return (
        <GlobalContext.Provider 
        // value={[favorites, addToFavorites, removeFromFavorites]
        value={{
            favorites: favorites,
            addToFavorites: addToFavorites,
            removeFromFavorites: removeFromFavorites,
        }}
        >
            {children}
        </GlobalContext.Provider>

    );
    
}
export default GlobalProvider;