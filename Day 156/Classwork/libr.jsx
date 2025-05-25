const MyLibrary = ({ books }) => {
    return (
      <div style={{ marginTop: "40px" }}>
        <h2>📘 My Library</h2>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.volumeInfo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
export default MyLibrary;
  