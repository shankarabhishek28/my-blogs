import Link from 'next/link';
import styles from './HomePage.module.css'; // Adjust the path as needed

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Blog Platform</h1>
      <p className={styles.subtitle}>Click Below To See Blogs</p>
      <Link href="/blogs">
        <button className={styles.button}>
          Go to Blogs
        </button>
      </Link>
      <h6 className={styles.submittedBy}>Submitted By - Abhishek Shankar</h6>
    </div>
  );
};

export default HomePage;
