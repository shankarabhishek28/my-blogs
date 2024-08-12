// src/app/page.js

'use client'; // This directive ensures the component is rendered on the client side

import { useState, useEffect } from 'react';
import BlogListing from '../../components/BlogListing';
import Pagination from '../../components/Pagination';
import {ClimbingBoxLoader} from 'react-spinners'
export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=30');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);
  if(blogs.length < 1) return <div style={{display:'flex', alignItems:'center',justifyContent:'center', height:'100vh'}}><ClimbingBoxLoader color='#3d90f7' size={24}/></div>

  return (
    <div style={{paddingBottom:'40px'}}>
      <BlogListing blogs={displayedBlogs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
