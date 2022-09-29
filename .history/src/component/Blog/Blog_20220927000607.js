import React from 'react';
import Card from '../Card/Card';
import Title from '../Card/Title';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
const Blog = () => {
  //getting blogs from redux state
  const blogs = useSelector(state => state)
  console.log(blogs)
  const [input, setInput] = useState('')

  //getting searchbar value by method
  const handleOnchangeValue = (event) => {
    setInput(event.target.value)
  }
  return (
    <div>
    <SearchBar handleOnchangeValue = {input} ></SearchBar>
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