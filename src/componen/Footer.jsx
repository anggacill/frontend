import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/register');
  };

  return (
    <div className="container py-5 bg-light mt-5">
      <h1 className="text-center display-5 fw-bold">Sign up For Our Album</h1>
      <div className="d-flex justify-content-center mt-4">
        <input type="email" className="form-control w-50" placeholder="Enter your email" />
        <button type="button" className="btn btn-primary ms-2" onClick={handleLoginClick}>Login</button>
      </div>
      <div className="d-flex justify-content-center align-items">
        <div className="btn-group m-4">
          <button type="button" className="btn btn-sm btn-outline-secondary text-dark m-2">google</button>
          <button type="button" className="btn btn-sm btn-outline-secondary text-dark m-2">tiktok</button>
          <button type="button" className="btn btn-sm btn-outline-secondary text-dark m-2">youtub</button>
          <button type="button" className="btn btn-sm btn-outline-secondary text-dark m-2">facebook</button>
          <button type="button" className="btn btn-sm btn-outline-secondary text-dark m-2">github</button>
        </div>
      </div>
    </div>
  )
}

export default Footer