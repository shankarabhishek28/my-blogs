import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={`${styles.pageButton} ${currentPage === number ? styles.active : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
