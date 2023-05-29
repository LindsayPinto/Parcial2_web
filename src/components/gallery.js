// import React, { useState } from 'react';
// import './gallery.css'


// function Gallery(props) {
//     const [selectedCard, setSelectedCard] = useState(null);
//     const [selectedTitle, setSelectedTitle] = useState(null);

//     const handleCardClick = (cardIndex, cardTitle) => {
//         setSelectedCard(cardIndex);
//         setSelectedTitle(cardTitle);
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-8">
//                     <div className="row row-cols-1 row-cols-md-3 g-4">
//                         <div className="col">

//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                     <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>

//                         </div>
//                         <div className="col">
//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                 <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                 <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                 <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                 <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className={`card h-100 ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardClick(0, 'Manchester: A city in pictures')}>
//                                 <a href="#">
//                                     <img src="https://www.psicoactiva.com/wp-content/uploads/puzzleclopedia/libro-abierto-300x207.png" className="card-img-top" alt="libro1" />
//                                 </a>
//                                 <div className="card-body">
//                                 <h5 className="card-title">Manchester: A city in pictures</h5>
//                                     <p className="card-text">ISBN:0-7645-2641-3</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//                 <div className="col-4 background">
//                     {selectedCard !== null && (
//                         <div>
//                             <h2>Información del libro</h2>
//                             {selectedCard !== null && (
//                                 <p>Título: {selectedTitle}</p>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gallery;

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const { useEffect, useState } = require("react");

// function Gallery () {

//    const [mascotas, setMascotas] = useState([]);
//    useEffect(()=>{
//        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
//        fetch(URL).then(data => data.json()).then(data => {
//            setMascotas(data);
//        })
//    }, []);

//    return(
//        <div className="container">
//            <h1>Listado de mascotas</h1>
//            <hr></hr>
//            <Row>
//                {mascotas.map(mascota => <Col>khkhkh</Col>)}               
//            </Row>
          
//        </div>
//    )
// }

// export default Gallery;

import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

function Gallery(props) {
  const [books, setBooks] = useState([]);
//   const [selectedDescription, setSelectedDescription] = useState('');
//   const [selectedNombre, setNombre] = useState('');
//   const [selectedEspecie, setEspecie] = useState('');
//   const [selectedRaza, setRaza] = useState('');
const [selectedBook, setSelectedBook]=useState({});

  useEffect(() => {
    const URL =
      'https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json';
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
                  <img src={book.foto} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{book.nombre}</h5>
                    <p className="card-text">{book.descripcion}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        </div>

        <div className="col-4 background">
          {selectedBook !== '' && (
            <div>
              <h2>Nombre: {selectedBook.nombre}</h2>
              <p>Especie: {selectedBook.especie}</p>
              <p>Raza {selectedBook.raza}</p>
              <p>Descripcion: {selectedBook.descripcion}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

