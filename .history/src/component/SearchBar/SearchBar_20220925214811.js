import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Assets/search.svg'

const SearchBar = () => {
    const blogs = useSelector(state => state)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    //getting values from input field
    const handleInput = (event) => {
        setInput(event.target.value)
    }
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
                value={handleInput}
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