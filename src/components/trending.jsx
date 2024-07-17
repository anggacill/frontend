import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dune from '../assets/images/trending/dune.jpg';
import Everything from '../assets/images/trending/everything.jpg';
import Infinite from '../assets/images/trending/infinite.jpg';
import Joker from '../assets/images/trending/joker.jpg';
import Lightyear from '../assets/images/trending/lightyear.jpg';
import Morbius from '../assets/images/trending/morbius.jpg';

function Trending() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({
    title: '',
    description: '',
    image: ''
  });

  const handleModalOpen = (title, description, image) => {
    setSelectedMovie({ title, description, image });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="container-fluid trending" id='trending'>
        <div className="container p-3 text-light">
          <h3 className='text-center'>Trending</h3>
          <div className="row">
            {/* Kartu-kartu film */}
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Dune} className="card-img-top" alt="Dune" />
                <div className="card-body">
                  <h5 className="card-title">Dune</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Dune', 'Description for Dune.', Dune)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Everything} className="card-img-top" alt="Everything" />
                <div className="card-body">
                  <h5 className="card-title">Everything</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Everything', 'Description for Everything.', Everything)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Infinite} className="card-img-top" alt="Infinite" />
                <div className="card-body">
                  <h5 className="card-title">Infinite</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Infinite', 'Description for Infinite.', Infinite)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Joker} className="card-img-top" alt="Joker" />
                <div className="card-body">
                  <h5 className="card-title">Joker</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Joker', 'Description for Joker.', Joker)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Lightyear} className="card-img-top" alt="Lightyear" />
                <div className="card-body">
                  <h5 className="card-title">Lightyear</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Lightyear', 'Description for Lightyear.', Lightyear)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card bg-secondary text-light">
                <img src={Morbius} className="card-img-top" alt="Morbius" />
                <div className="card-body">
                  <h5 className="card-title">Morbius</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Button variant="primary" onClick={() => handleModalOpen('Morbius', 'Description for Morbius.', Morbius)}>
                    Launch modal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedMovie.image} className="img-fluid" alt={selectedMovie.title} />
          <p>{selectedMovie.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Trending;
