import React from 'react';
import Search from '../Assets/search.svg'
const SearchBar = () => {
    return (
        <div>
            <div
            class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                class="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
            <img
                class="inline h-6 cursor-pointer"
                src={Search}
                alt="Search"
            />
        </div>
        </div>
    );
};

export default SearchBar;