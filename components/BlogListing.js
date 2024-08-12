import Link from 'next/link';
import styles from './BlogListing.module.css';

const BlogListing = ({ blogs }) => {
  return (
    <div className={styles.grid}>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <Link href={`/blogs/${blog.id}`}>
          <div className={styles['image-container']}>
              <img src={blog.photo_url} alt={blog.title} className={styles['blog-image']} />
            </div>
            <h2 style={{textDecoration:'none'}}>{blog.title}</h2>
            <p>{blog.content_text.split(' ').slice(0, 40).join(' ') + '...'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogListing;
