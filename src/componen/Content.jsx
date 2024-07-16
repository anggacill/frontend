import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
  const initialCards = [
    {
      id: 1,
      title: 'Card title 1',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      createdTime: new Date(),
      isEditing: false,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Card title 2',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      createdTime: new Date(),
      isEditing: false,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Card title 3',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      createdTime: new Date(),
      isEditing: false,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          const now = new Date();
          const diff = Math.floor((now - card.createdTime) / 60000); // difference in minutes
          return { ...card, elapsedTime: `${diff} mins` };
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [cards]);

  const handleEditClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isEditing: true } : card
      )
    );
  };

  const handleSaveClick = (id, newTitle, newText) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? { ...card, title: newTitle, text: newText, isEditing: false }
          : card
      )
    );
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center display-5 fw-bold">Album example</h1>
      <p className="text-center">
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don't
        simply skip over it entirely.
      </p>
      <div className="text-center">
        <a href="#" className="btn btn-primary me-3">main color</a>
        <a href="#" className="btn btn-secondary">secondary color</a>
      </div>
      <Link to="/tambah" className="navbar-brand btn btn-outline-secondary bg-primary m-2">tambah album lain</Link>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-4 mt-5">
        {cards.map((card) => (
          <div className="col" key={card.id}>
            <div className="card shadow-sm">
              <img
                src={card.imageUrl}
                className="bd-placeholder-img card-img-top"
                alt="Album cover"
              />
              <div className="card-body">
                {card.isEditing ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={card.title}
                      onChange={(e) =>
                        setCards((prevCards) =>
                          prevCards.map((c) =>
                            c.id === card.id
                              ? { ...c, title: e.target.value }
                              : c
                          )
                        )
                      }
                      key={`title-${card.id}`}
                    />
                    <textarea
                      className="form-control mb-2"
                      value={card.text}
                      onChange={(e) =>
                        setCards((prevCards) =>
                          prevCards.map((c) =>
                            c.id === card.id
                              ? { ...c, text: e.target.value }
                              : c
                          )
                        )
                      }
                      key={`text-${card.id}`}
                    />
                  </>
                ) : (
                  <>
                    <p className="card-title fw-bold">{card.title}</p>
                    <p className="card-text">{card.text}</p>
                  </>
                )}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary me-2"
                    >
                      View
                    </button>
                    {card.isEditing ? (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() =>
                          handleSaveClick(card.id, card.title, card.text)
                        }
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleEditClick(card.id)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <small className="text-muted">{card.elapsedTime}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;