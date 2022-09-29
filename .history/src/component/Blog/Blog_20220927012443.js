import React from 'react';
import Card from '../Card/Card';
import Title from '../Card/Title';
import { useSelector } from 'react-redux';
import Search from '../Assets/search.svg'
import { useState } from 'react';
const Blog = () => {
  //getting blogs from redux state
  const blogs = useSelector(state => state)
  console.log(blogs)
  const [input, setInput] = useState('')

  //handle input value
 

  console.log(input);
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
         
        />
        <img
          className="inline h-6 cursor-pointer"
          src={Search}
          alt="Search"
          onChange={e=> setInput(e.target.value)}
        />
      </div>
      <div className="relative  pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className=' max-w-7xl mx-auto'>
          <Title />
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {
              blogs.map(blog => <Card key={blog.id} blog={blog} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;