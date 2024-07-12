import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Tambah_content({ onAddCard }) {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardText, setNewCardText] = useState('');
  const [newCardImage, setNewCardImage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCardImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCard = () => {
    if (newCardTitle.trim() === '' || newCardText.trim() === '') {
      alert('Title and text are required.');
      return;
    }

    const newCard = {
      id: Date.now(),
      title: newCardTitle,
      text: newCardText,
      imageUrl: newCardImage || 'https://via.placeholder.com/150',
      createdTime: new Date(),
      isEditing: false,
    };
    onAddCard(newCard);
    setNewCardTitle('');
    setNewCardText('');
    setNewCardImage('');
    navigate('/content'); 
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="New card title"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="New card text"
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={handleImageChange}
        />
        <button className="btn btn-primary" onClick={handleAddCard}>
          Add Card
        </button>
      </div>
    </div>
  );
}

export default Tambah_content;