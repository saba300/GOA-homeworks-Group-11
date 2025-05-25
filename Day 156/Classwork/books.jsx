const BookList = ({ books, onAdd }) => {
    return (
      <div>
        <h2>Available Books</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                <h4>{info.title}</h4>
                {info.imageLinks?.thumbnail && (
                  <img src={info.imageLinks.thumbnail} alt={info.title} style={{ width: "100%" }} />
                )}
                <button onClick={() => onAdd(book)}>Add to My Library</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default BookList;
  