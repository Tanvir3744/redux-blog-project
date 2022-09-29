import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search_blog } from '../../Redux/Action/Action';
import Search from '../Assets/search.svg'

const SearchBar = () => {
    const blogs = useSelector(state => state);
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const changeSearchTerm = (e) => {
        setInput(e.target.value);
      };
  
    
    //handle search 
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(search_blog(input))
    }


    return (
        <div>
            <form
              onSubmit={handleSearch}
                className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
            >
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={input}
                    onChange = {changeSearchTerm}
                />
                <img
                    className="inline h-6 cursor-pointer"
                    src={Search}
                    alt="Search"
                />
            </form>
        </div>
    );
};

export default SearchBar;