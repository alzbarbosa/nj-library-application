import styles from "./book.module.css";

const Book = ({
  id,
  title,
  author,
  year_publish,
  description,
  number_available,
}) => {
  return (
    <div className={styles.book}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bookDetails}>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Year of Publication:</strong> {year_publish}
        </p>
      </div>
      <div className={styles.description}>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <div>
        <p>
          <strong>Available:</strong> {number_available}{" "}
          {number_available > 1 ? "copies" : "copy"}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Place hold</button>
          <button className={styles.button}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
