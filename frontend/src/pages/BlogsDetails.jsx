import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const savedBlog = localStorage.getItem('blog');
    if (savedBlog) {
      setBlog(JSON.parse(savedBlog));
    }
  }, []);

  if (!blog) return <div className='loader mt-20 absolute top-[13rem] left-[45rem]'></div>;

  return (
    <div className='mt-20 w-11/12 max-w-maxContent mx-auto'>
      Entire Blog is given here console to see , style it !! 
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetails;