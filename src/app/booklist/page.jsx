import { books } from "@/lib/data";
import styles from "./booklist.module.css";

const { default: Book } = require("@/components/book/Book");

// pages/index.js or your BookList component
/*
const books = [
  // ... your array of book data
];
*/

const BookList = () => {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div key={book.id} className={styles.book}>
          <Book {...book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

/*    <div className="container">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>*/
