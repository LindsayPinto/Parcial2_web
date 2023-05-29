
import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from "react-intl";

function Gallery(props) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [selectedBookDetails, setSelectedBookDetails] = useState({});


  useEffect(() => {
    const URL =
      'http://localhost:3000/books';
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const fetchBookDetails = (bookId) => {
    const URL = `http://localhost:3000/books/${bookId}`;
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setSelectedBookDetails(data);
      });
  };


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {books.map((book, index) => (
              <Col key={index}>
                <div
                  className="card h-100"
                  onClick={() => fetchBookDetails(book.id)}
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
          {Object.keys(selectedBookDetails).length > 0 && (
            <div>
              <h2> {selectedBookDetails.name}</h2><br/>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}>ISBN:</span> {selectedBookDetails.isbn}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}> <FormattedMessage id="gallery.author"/> </span> {selectedBookDetails.author}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}><FormattedMessage id="gallery.publisher"/></span> {selectedBookDetails.publisher}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}><FormattedMessage id="gallery.genre"/></span> {selectedBookDetails.gender}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}><FormattedMessage id="gallery.year"/></span> {selectedBookDetails.year}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}><FormattedMessage id="gallery.price"/></span> {selectedBookDetails.price}</p>
              <p><span style={{ fontWeight: 'bold', color: 'red' }}><FormattedMessage id="gallery.summary"/></span> {selectedBookDetails.summary}</p>

            </div>
          )}
        </div>
      </div>
    </div>
  );


}

      export default Gallery;

