import React, { useEffect, useState } from 'react';
import './DarkBookCardList.css';

// This component lets users search for books and displays results in a dark-themed card list
type Book = {
  title: string;
  author: string;
  year: string | number;
};

// Define the type for the props
interface BookListSimpleProps {
  books?: string[];
}

// BookListSimple component displays a list of books passed as props
const BookListSimple: React.FC<BookListSimpleProps> = ({ books = [] }) => (
  <div>
    <h2>Book List</h2>
    <ul>
      {books.map((book, idx) => (
        <li key={idx}>{book}</li>
      ))}
    </ul>
  </div>
);

function BookList() {
  // State to store the list of books fetched from the API
  const [books, setBooks] = useState<Book[]>([]);
  // State to show a loading message while fetching data
  const [loading, setLoading] = useState(false);
  // State to show any error message if fetching fails
  const [error, setError] = useState<string | null>(null);
  // State for the current search query (what we send to the API)
  const [query, setQuery] = useState('harry potter'); // default search
  // State for the text in the search box (user input)
  const [searchTerm, setSearchTerm] = useState('harry potter');

  /*
    useEffect is a React Hook that lets you run code when something changes or when the component loads.
    Here, we use it to fetch book data from the Open Library API whenever the 'query' changes.
    - The function inside useEffect runs after the component renders.
    - The [query] array means: run this effect every time 'query' changes.
  */
  useEffect(() => {
    // If the search query is empty, don't fetch
    if (!query.trim()) return;

    setLoading(true);    // Show loading message
    setError(null);      // Clear any previous error

    // Build the API URL using the search query
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    // Fetch data from the API
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json(); // Parse the JSON response
      })
      .then((data) => {
        // Take the first 12 books and clean up the data
        const cleaned = data.docs.slice(0, 12).map((book) => ({
          title: book.title,
          author: book.author_name?.[0] || 'Unknown',
          year: book.first_publish_year || 'N/A',
        }));
        setBooks(cleaned);   // Save books to state
        setLoading(false);   // Hide loading message
      })
      .catch((err) => {
        setError(err.message); // Show error message
        setLoading(false);    // Hide loading message
      });
  }, [query]); // Only run this effect when 'query' changes

  // When the user submits the search form, update the query (which triggers useEffect)
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    setQuery(searchTerm); // Update query to trigger new search
  };

  return (
    <div className="swiftrinity-container">
      <h2 className="swiftrinity-heading">📚 Book Finder</h2>

      {/* Search form for user input */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search books..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Show loading or error messages */}
      {loading && <p>Loading books...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {/* Display the list of books as cards */}
      <div className="card-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3 className="book-title">{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>First Published:</strong> {book.year}</p>
          </div>
        ))}
      </div>

      {/* Include the BookListSimple component to display the list of books */}
      <BookListSimple books={books.map(book => book.title)} />
    </div>
  );
}

export default BookList;
