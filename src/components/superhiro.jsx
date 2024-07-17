import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Import gambar superhero
import Antman from '../assets/images/superhero/antman.jpg';
import Avenger from '../assets/images/superhero/avenger.jpg';
import Batman from '../assets/images/superhero/batman.jpg';
import Robinhood from '../assets/images/superhero/robinhood.jpg';
import Spidermen from '../assets/images/superhero/spiderman-cover.jpg';
import Superman from '../assets/images/superhero/superman.jpg';

function Superhiro() {
  // State untuk mengontrol modal dan informasi superhero yang dipilih
  const [showModal, setShowModal] = useState(false);
  const [selectedSuperhero, setSelectedSuperhero] = useState({
    title: '',
    description: '',
    image: ''
  });

  // Fungsi untuk membuka modal dengan superhero yang dipilih
  const handleModalOpen = (title, description, image) => {
    setSelectedSuperhero({ title, description, image });
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid superhiro" id="superhiro">
      <div className="container p-3 text-light">
        <h3 className="text-center">Superhiro</h3>
        <div className="row">
          {/* Kartu-kartu superhero */}
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Antman} className="card-img-top" alt="Antman" />
              <div className="card-body">
                <h5 className="card-title">Antman</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Antman', 'Description for Antman.', Antman)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Avenger} className="card-img-top" alt="Avenger" />
              <div className="card-body">
                <h5 className="card-title">Avenger</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Avenger', 'Description for Avenger.', Avenger)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Batman} className="card-img-top" alt="Batman" />
              <div className="card-body">
                <h5 className="card-title">Batman</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Batman', 'Description for Batman.', Batman)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Robinhood} className="card-img-top" alt="Robinhood" />
              <div className="card-body">
                <h5 className="card-title">Robinhood</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Robinhood', 'Description for Robinhood.', Robinhood)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Spidermen} className="card-img-top" alt="Spidermen" />
              <div className="card-body">
                <h5 className="card-title">Spidermen</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Spidermen', 'Description for Spidermen.', Spidermen)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card bg-primary">
              <img src={Superman} className="card-img-top" alt="Superman" />
              <div className="card-body">
                <h5 className="card-title">Superman</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <Button variant="warning" onClick={() => handleModalOpen('Superman', 'Description for Superman.', Superman)}>
                  Launch modal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSuperhero.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedSuperhero.image} className="img-fluid" alt={selectedSuperhero.title} />
          <p>{selectedSuperhero.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warningry" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Superhiro;
