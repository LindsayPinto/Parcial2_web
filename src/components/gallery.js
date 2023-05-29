
import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

function Gallery(props) {
  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    const URL =
      'http://localhost:3000/books';
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {books.map((book, index) => (
              <Col key={index}>
                <div
                  className="card h-100"
                  onClick={() => setSelectedBook(book)}
                >
                  <img src={book.image} className="card-img-top" alt="foto" />
                  <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <p className="card-text">{"ISBN: " + book.isbn}</p>
                  </div>

                </div>
              </Col>
            ))}
          </div>
        </div>

        <div className="col-4 background">
          {selectedBook !== '' && (
            <div>
              <h2>Nombre: {selectedBook.name}</h2>
              <p>ISBN: {selectedBook.isbn}</p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

