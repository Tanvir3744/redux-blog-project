import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { search_blog } from '../../Redux/Action/Action';
import Search from '../Assets/search.svg'

const SearchBar = () => {
    const blogs = useSelector(state => state);
    const [input, setInput] = useState('');

    //getting vlaues from input field 
    /* const handleInput = (event) => {
        const values = event.target.value;
        setInput(values)
    } */

    console.log(input)
    // serach blogs according their titles
    const handleSearch = (event) => {
        if (event.target.value) {
            const searchText = event.target.value;
            setInput(searchText)
            blogs.filter(blog => blog.blogTitle.toLowerCase().includes(input.toLocaleLowerCase()))
        } else {
            setInput('')
            return 'no blogs founds'
        }
    }



    return (
        <div>
            <div
                className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
            >
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange={handleSearch}
                />
                <img
                    className="inline h-6 cursor-pointer"
                    src={Search}
                    alt="Search"
                />
            </div>
        </div>
    );
};

export default SearchBar;