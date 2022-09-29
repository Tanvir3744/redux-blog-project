import React from 'react';
import Card from '../Card/Card';
import Title from '../Card/Title';
import { useSelector } from 'react-redux';
const Blog = () => {
  //getting blogs from redux state
  const blogs = useSelector(state => state)
  return (
    <div className="relative  pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className=' max-w-7xl mx-auto'>
        <Title />
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {
            blogs.filter(blog => {
              switch (blog.author) {
                case 'Biplob Hossen':
                  return blog.author
              
                case 'Sumit Saha':
                  return blog.author
                
                default:
                  return blog;
              }
            }).map(blog => <Card key={blog.id} blog={blog} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;