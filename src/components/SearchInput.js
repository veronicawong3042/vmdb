import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();


    function handleSearch(e) {
        e.preventDefault();
        const searchValue = e.target.elements['search-input'].value.trim();

        setSearchInput(searchValue);
        navigate(`/SearchResults?query=${searchValue}`);
        e.target.reset();
    }

    return (
        <section className="search-form">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id='search-input'
                    name='search-input'
                    placeholder="Search movies"
                />
                <button type="submit"><IoSearch /></button>
            </form>
        </section>
    );
};

export default SearchInput;
