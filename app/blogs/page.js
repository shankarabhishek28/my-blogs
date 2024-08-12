// src/app/page.js
import BlogListing from '../../components/BlogListing';
import Pagination from '../../components/Pagination';
import axios from 'axios';

export default async function HomePage() {
  const res = await axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30');
  const blogs = res.data;

  // Define pagination logic
  const blogsPerPage = 9; // 3 per row, assuming 2 rows
  const currentPage = 1; // Update as needed
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    // Logic to handle page change
  };

  return (
    <div>
    
      <BlogListing blogs={blogs.blogs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
