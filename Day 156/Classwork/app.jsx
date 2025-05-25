import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import MyLibrary from "./components/MyLibrary";

function App() {
  const [books, setBooks] = useState([]);
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q={searchTerm}")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const addToLibrary = (book) => {
    if (!myLibrary.find((b) => b.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  return (
    <div className="p-6">
      <h1>📚 Book Library App</h1>
      <BookList books={books} onAdd={addToLibrary} />
      <MyLibrary books={myLibrary} />
    </div>
  );
}

export default App;
