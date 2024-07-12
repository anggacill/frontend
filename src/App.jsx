import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./componen/Navbar";
import Home from "./componen/Home";
import Content from "./componen/Content";
import Footer from "./componen/Footer";
import Login from "./componen/Login";
import Register from './componen/Register';
import Tambah_content from './componen/Tambah_content';

function App() {
  return (
    <Router>
      <div> 
        <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>} />
        <Route path="/album" element={<Content/>} />
        <Route path="/tambah" element={<Tambah_content />} />
      </Routes> 
        <div className="container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;