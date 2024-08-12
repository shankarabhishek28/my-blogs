import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogs, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
        .then((response) => response.json())
        .then((data) => setBlog(data));
    }
  }, [id]);
  if (!blogs) return <div>Loading...</div>;
  const {blog} = blogs;

  console.log(blog)
  return (
    <div style={{ padding: '20px', maxWidth: '100%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Title */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        {blog.title}
      </h1>

      {/* Description */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#666' }}>
        {blog.description}
      </h2>

      {/* Image */}
      <div style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '100%', backgroundColor:'#3d90f7', height:'50vh' }}>
        <img 
          src={blog.photo_url} 
          alt={blog.title} 
          style={{ maxWidth: '100%', height: '100%', borderRadius: '8px', objectFit:'fill' }} 
        />
      </div>

      {/* Blog Content */}
      <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        {blog.content_text}
      </div>
    </div>
  );
};

export default BlogDetail;
