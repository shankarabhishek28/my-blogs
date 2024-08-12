// src/app/page.js

'use client'; // This directive ensures the component is rendered on the client side

import { useState, useEffect } from 'react';
import BlogListing from '../../components/BlogListing';
import Pagination from '../../components/Pagination';
import axios from 'axios';

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=30');
      setBlogs(res.data.blogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);
  if(loading) return <div style={{display:'flex', alignItems:'center',justifyContent:'center', height:'100vh'}}>Loading...</div>

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
